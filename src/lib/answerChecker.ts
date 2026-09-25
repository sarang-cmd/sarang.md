import type { CheckTarget } from '../types';

/** Safe numeric expression parser. Never evaluates JavaScript supplied by a learner. */
function readBraced(source: string, start: number): [string, number] {
  if (source[start] !== '{') throw new Error('Expected braces.');
  let depth = 0;
  for (let index = start; index < source.length; index++) {
    if (source[index] === '{') depth++;
    if (source[index] === '}' && --depth === 0) return [source.slice(start + 1, index), index + 1];
  }
  throw new Error('Missing closing brace.');
}

function fromTex(source: string): string {
  let result = '';
  for (let index = 0; index < source.length;) {
    if (source.startsWith('\\frac', index) || source.startsWith('\\dfrac', index)) {
      index += source.startsWith('\\dfrac', index) ? 6 : 5;
      while (source[index] === ' ') index++;
      const [top, afterTop] = readBraced(source, index);
      index = afterTop;
      while (source[index] === ' ') index++;
      const [bottom, afterBottom] = readBraced(source, index);
      result += `((${fromTex(top)})/(${fromTex(bottom)}))`;
      index = afterBottom;
    } else if (source.startsWith('\\sqrt', index)) {
      index += 5;
      const [inside, after] = readBraced(source, index);
      result += `sqrt(${fromTex(inside)})`;
      index = after;
    } else if (source.startsWith('\\boxed', index)) {
      index += 6;
      const [inside, after] = readBraced(source, index);
      result += fromTex(inside);
      index = after;
    } else result += source[index++];
  }
  return result;
}

export function parseMathAnswer(raw: string): number | null {
  if (raw.length > 120 || !raw.trim()) return null;
  try {
    let text = fromTex(raw.trim().replace(/\\left|\\right/g, ''))
      .replace(/\\\(|\\\)|\$/g, '')
      .replace(/\\times|\\cdot|×|·/g, '*')
      .replace(/[−–]/g, '-')
      .replace(/\\pi|π/g, 'pi')
      .replace(/\s/g, '')
      .replace(/(?<=\d),(?=\d{3}(?:\D|$))/g, '');
    text = text.replace(/(\d)(sqrt|pi|\()/gi, '$1*$2').replace(/\)(\d|sqrt|pi|\()/gi, ')*$1');
    const tokens = text.match(/(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?|sqrt|pi|[()+\-*/^]/gi) ?? [];
    if (tokens.length > 100 || tokens.join('') !== text) return null;
    let pos = 0;
    const take = (word: string) => tokens[pos] === word ? (pos++, true) : false;
    const atom = (): number => {
      if (take('(')) {
        const value = expression();
        if (!take(')')) throw new Error('Unclosed parenthesis.');
        return value;
      }
      if (take('sqrt')) {
        if (!take('(')) throw new Error('Expected sqrt(...).');
        const value = expression();
        if (!take(')')) throw new Error('Unclosed square root.');
        return Math.sqrt(value);
      }
      if (take('pi')) return Math.PI;
      const token = tokens[pos++];
      if (!token || !/^(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i.test(token)) throw new Error('Expected a number.');
      return Number(token);
    };
    const power = (): number => {
      const base = atom();
      return take('^') ? base ** signed() : base;
    };
    const signed = (): number => take('+') ? signed() : take('-') ? -signed() : power();
    const product = (): number => {
      let value = signed();
      while (tokens[pos] === '*' || tokens[pos] === '/') value = take('*') ? value * signed() : (pos++, value / signed());
      return value;
    };
    const expression = (): number => {
      let value = product();
      while (tokens[pos] === '+' || tokens[pos] === '-') value = take('+') ? value + product() : (pos++, value - product());
      return value;
    };
    const result = expression();
    return pos === tokens.length && Number.isFinite(result) ? result : null;
  } catch { return null; }
}

export function matchesTarget(raw: string, target: CheckTarget): boolean | null {
  const value = parseMathAnswer(raw);
  if (value === null) return null;
  const tolerance = target.tolerance ?? (Number.isInteger(target.value) ? 0 : Math.max(0.00001, Math.abs(target.value) * 0.0001));
  return Math.abs(value - target.value) <= tolerance + Number.EPSILON * Math.abs(target.value) * 2;
}
