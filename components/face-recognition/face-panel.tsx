export function FacePanel({ label, score }: { label: string; score: string }) {
  return (
    <div className="relative min-h-56 overflow-hidden rounded-lg border border-stone-300 bg-stone-100 p-5 shadow-sm">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-amber-300 to-coral" />
      <div className="mx-auto mt-5 flex h-32 w-32 items-center justify-center rounded-full border border-stone-300 bg-white">
        <div className="relative h-24 w-20">
          <div className="absolute left-1/2 top-1 h-16 w-16 -translate-x-1/2 rounded-full border-2 border-stone-800 bg-stone-200" />
          <div className="absolute left-1/2 top-16 h-16 w-20 -translate-x-1/2 rounded-t-full border-2 border-stone-800 bg-stone-200" />
          <div className="absolute left-6 top-8 h-2 w-2 rounded-full bg-stone-900" />
          <div className="absolute right-6 top-8 h-2 w-2 rounded-full bg-stone-900" />
          <div className="absolute left-1/2 top-12 h-1 w-7 -translate-x-1/2 rounded-full bg-stone-900" />
          <div className="absolute -inset-2 rounded-lg border-2 border-primary" />
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between gap-3 text-sm">
        <span className="font-semibold text-stone-950">{label}</span>
        <span className="rounded-full bg-primary-soft px-3 py-1 font-mono text-xs font-bold text-primary-dark">
          {score}
        </span>
      </div>
    </div>
  );
}
