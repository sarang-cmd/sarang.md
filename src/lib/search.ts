/** Plain-text form of a question for searching: mathematical markup is stripped so that a
 * search for "divisible by 17" finds a prompt written as "divisible by \(17\)". */
export function searchable(...parts: (string | null | undefined)[]): string {
  return parts.filter(Boolean).join(' ').toLowerCase()
    .replace(/\\(left|right|,|;|quad|qquad|text|mathrm|operatorname)/g, ' ')
    .replace(/\\/g, '')
    .replace(/[$^{}()[\]]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
