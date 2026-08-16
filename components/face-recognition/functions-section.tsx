import { keyFunctions } from "./data";
import { SlideLabel } from "./slide-label";

export function FunctionsSection() {
  return (
    <section id="functions" className="border-t border-stone-300 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <SlideLabel>Key Functions</SlideLabel>
        <h2 className="mt-4 text-4xl font-black">Main application responsibilities.</h2>
        <div className="mt-8 divide-y divide-stone-300 rounded-lg border border-stone-300">
          {keyFunctions.map(([name, detail]) => (
            <div key={name} className="grid gap-3 p-5 md:grid-cols-[0.42fr_1fr]">
              <code className="font-mono text-sm font-bold text-primary-dark">{name}</code>
              <p className="leading-7 text-stone-700">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
