import { SlideLabel } from "./slide-label";

export function OverviewSection() {
  return (
    <section id="overview" className="border-y border-stone-300 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <SlideLabel>Overview</SlideLabel>
          <h2 className="mt-4 text-4xl font-black">Project Objective</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-stone-300 bg-[#f5f7f5] p-6">
            <h3 className="text-xl font-black">What the system does</h3>
            <p className="mt-4 leading-7 text-stone-700">
              It accepts a reference name and two face images, detects the main face in each image, extracts identity embeddings, and returns a verification decision.
            </p>
          </div>
          <div className="rounded-lg border border-stone-300 bg-[#f5f7f5] p-6">
            <h3 className="text-xl font-black">Why it matters</h3>
            <p className="mt-4 leading-7 text-stone-700">
              The project demonstrates a complete AI workflow: image input, preprocessing, model inference, vector comparison, and user-facing explanation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
