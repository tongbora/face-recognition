import { modelItems } from "./data";
import { SlideLabel } from "./slide-label";

export function ModelsSection() {
  return (
    <section id="models" className="border-y border-stone-300 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <SlideLabel>Core Models</SlideLabel>
        <h2 className="mt-4 max-w-3xl text-4xl font-black">Two models, two jobs: find the face, then name it.</h2>
        <p className="mt-4 max-w-3xl text-lg leading-7 text-stone-700">
          Haar Cascade finds the face. ArcFace tells us whose it is.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {modelItems.map((model) => (
            <article key={model.name} className="flex flex-col rounded-lg border border-stone-300 bg-[#f5f7f5] p-6 shadow-sm">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-dark">{model.stage}</p>
              <h3 className="mt-3 text-2xl font-black">{model.name}</h3>
              <p className="mt-1 text-base font-semibold text-stone-600">{model.tagline}</p>
              <p className="mt-4 text-lg leading-7 text-stone-700">{model.description}</p>
              <ul className="mt-6 space-y-3">
                {model.points.map((point) => (
                  <li key={point} className="flex gap-3 text-base leading-6 text-stone-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-md border border-primary-border bg-primary-soft px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-dark">Output</p>
                <p className="mt-1 font-mono text-sm text-primary-dark">{model.output}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 flex flex-col items-start gap-3 rounded-lg border border-stone-300 bg-stone-950 p-5 text-white sm:flex-row sm:items-center sm:justify-center sm:gap-6">
          <span className="rounded-full bg-white/10 px-4 py-2 font-mono text-sm">Face image</span>
          <span className="font-black text-primary" aria-hidden="true">
            →
          </span>
          <span className="rounded-full bg-white/10 px-4 py-2 font-mono text-sm">Haar Cascade detects</span>
          <span className="font-black text-primary" aria-hidden="true">
            →
          </span>
          <span className="rounded-full bg-white/10 px-4 py-2 font-mono text-sm">ArcFace recognizes</span>
          <span className="font-black text-primary" aria-hidden="true">
            →
          </span>
          <span className="rounded-full bg-primary/20 px-4 py-2 font-mono text-sm text-primary">Identity embedding</span>
        </div>
      </div>
    </section>
  );
}
