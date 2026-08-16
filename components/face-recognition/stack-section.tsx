import { stackItems } from "./data";
import { SlideLabel } from "./slide-label";
import { StackLogo } from "./stack-logo";

export function StackSection() {
  return (
    <section id="stack" className="mx-auto max-w-7xl px-5 py-16">
      <SlideLabel>Technology Stack</SlideLabel>
      <h2 className="mt-4 max-w-3xl text-4xl font-black">A compact Python pipeline with a focused web interface.</h2>
      <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {stackItems.map(({ name, purpose, logo }) => (
          <div key={name} className="rounded-lg border border-stone-300 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <StackLogo logo={logo} name={name} />
              <div className="min-w-0">
                <p className="text-lg font-black">{name}</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">{purpose}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
