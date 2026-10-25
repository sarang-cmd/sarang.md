import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { notify, type ToastPosition, type ToastVariant } from '@/components/ui/toast';
import { ClaudeModelSelector, EFFORT_LEVELS, type EffortValue } from '@/components/ui/claude-model-selector';

const positions: ToastPosition[] = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];
const variants: ToastVariant[] = ['default', 'success', 'error', 'warning'];

/** An optional, no-network preview of the shared notification component. */
export default function ToasterDemo() {
  const [position, setPosition] = useState<ToastPosition>('bottom-right');
  return <div className="space-y-3">
    <label className="flex flex-wrap items-center gap-3 text-[11px] font-semibold">Position
      <select aria-label="Preview toast position" value={position} onChange={(event) => setPosition(event.target.value as ToastPosition)} className="h-9 rounded-lg border border-line bg-canvas px-3 text-ink">
        {positions.map((choice) => <option key={choice} value={choice}>{choice.replace('-', ' ')}</option>)}
      </select>
    </label>
    <div className="flex flex-wrap gap-2">{variants.map((variant) => <Button key={variant} variant="outline" size="sm" onClick={() => notify({ title: `${variant[0].toUpperCase()}${variant.slice(1)} preview`, message: 'This is a sample notification. No study data was changed.', variant, position, duration: 3200 })}>{variant} preview</Button>)}</div>
  </div>;
}

/** Small standalone preview of the supplied selector, adapted for study effort.
 * The production integration lives in TutorPanel. */
export function StudyEffortDemo() {
  const [effort, setEffort] = useState<EffortValue>(2);
  return <div className="max-w-[380px] space-y-3 rounded-xl border border-line bg-canvas p-4 text-ink">
    <ClaudeModelSelector value={effort} onValueChange={setEffort} />
    <p className="text-[11px] text-muted">{EFFORT_LEVELS[effort].label}: {EFFORT_LEVELS[effort].detail}</p>
  </div>;
}
