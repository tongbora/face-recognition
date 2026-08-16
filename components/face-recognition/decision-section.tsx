import { SlideLabel } from "./slide-label";

export function DecisionSection() {
  return (
    <section id="decision" className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[1fr_1fr]">
      <div>
        <SlideLabel>Decision Rule</SlideLabel>
        <h2 className="mt-4 text-4xl font-black">Cosine similarity drives the final label.</h2>
        <p className="mt-5 text-lg leading-8 text-stone-700">
          Because both ArcFace vectors are normalized, their dot product is treated as cosine similarity. A fixed threshold keeps the demo easy to explain and repeat.
        </p>
      </div>
      <div className="rounded-lg border border-stone-300 bg-white p-6 shadow-sm">
        <div className="rounded-md bg-stone-950 p-5 font-mono text-sm leading-7 text-stone-100">
          <p>similarity = dot(embedding_a, embedding_b)</p>
          <p className="mt-4 text-primary">if similarity &gt;= 0.70:</p>
          <p className="pl-6">result = reference_name</p>
          <p className="mt-2 text-coral">else:</p>
          <p className="pl-6">result = &quot;NOT MATCH&quot;</p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 text-center">
          <div className="rounded-lg border border-primary-border bg-primary-soft p-4">
            <p className="text-2xl font-black text-primary-dark">Match</p>
            <p className="mt-1 text-sm text-primary-dark">Display the entered name</p>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4">
            <p className="text-2xl font-black text-red-800">No Match</p>
            <p className="mt-1 text-sm text-red-700">Display NOT MATCH</p>
          </div>
        </div>
      </div>
    </section>
  );
}
