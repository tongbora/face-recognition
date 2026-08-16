import { workflowItems } from "./data";

export function WorkflowSection() {
  return (
    <section id="workflow" className="bg-stone-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary sm:text-xs sm:tracking-[0.28em]">System Workflow</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-black">From two images to one verification result.</h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          {workflowItems.map((item) => (
            <article key={item.step} className="rounded-lg border border-white/15 bg-white/5 p-5">
              <p className="font-mono text-sm font-black text-amber-300">{item.step}</p>
              <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-stone-300">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
