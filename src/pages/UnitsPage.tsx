import { FolderOpen } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { UnitCards } from '../components/UnitCards';
import { useCatalog } from '../context/CatalogContext';
import { availableUnits } from '../lib/catalog';
import { useVaultStore } from '../store/useVaultStore';

export function UnitsPage() {
  const { units, mode } = useCatalog();
  const setLocalDialogOpen = useVaultStore((state) => state.setLocalDialogOpen);
  const available = availableUnits(units);
  return (
    <div className="mx-auto w-full max-w-[1320px] px-5 pb-24 pt-9 sm:px-9 sm:pt-12 lg:px-12 xl:px-16">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'All units' }]} />
      <div className="max-w-[780px]">
        <p className="section-label mb-5">The course library / IB AA HL</p>
        <h1 className="text-[clamp(3.1rem,6vw,5.2rem)] font-semibold leading-[1.06] tracking-[-0.07em]">A home for every<br />big idea<span className="text-faint">.</span></h1>
        <p className="mt-6 max-w-[580px] text-[16px] leading-[1.75] text-muted">{mode === 'local' ? 'The notes you chose are ready to explore. Add more Markdown whenever you want.' : 'Explore all five AA strands at your own pace, from Number & Algebra to Calculus. Each of the 83 supplied outline codes has an expanded lesson and linked original practice.'}</p>
        <button type="button" onClick={() => setLocalDialogOpen(true)} className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold text-ink hover:underline hover:underline-offset-4"><FolderOpen size={15} aria-hidden="true" /> Add your own Markdown</button>
      </div>
      <div className="mb-7 mt-16 flex items-center justify-between border-t border-line pt-6 sm:mt-20">
        <span className="section-label">Your units</span>
        <span className="font-mono text-[11px] text-faint">{String(available.length).padStart(2, '0')} AVAILABLE / {String(units.length).padStart(2, '0')} PLANNED</span>
      </div>
      <UnitCards units={units} mode={mode} />
    </div>
  );
}
