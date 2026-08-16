import { FacePanel } from "./face-panel";
import { SlideLabel } from "./slide-label";

export function HeroSection() {
  return (
    <section id="title" className="mx-auto grid min-h-[calc(100vh-120px)] w-full max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="min-w-0 max-w-[22rem] sm:max-w-none">
        <SlideLabel>Artificial Intelligence Project</SlideLabel>
        <h1 className="mt-5 max-w-4xl text-[2rem] font-black leading-[1.05] text-stone-950 sm:text-7xl sm:leading-[1.02]">
          <span className="block">Face Recognition</span>
          <span className="block">System</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
          A Streamlit application that compares a reference face against a second image using face detection, ArcFace embeddings, and cosine similarity.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href="https://face-recognition-ai.streamlit.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-black uppercase text-stone-950 shadow-sm transition hover:bg-primary-dark hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/danadorn/face-recognition/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-stone-950 px-6 py-3 text-sm font-black uppercase text-stone-950 transition hover:bg-stone-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Source Code
          </a>
        </div>
        <div className="mt-8 grid max-w-2xl overflow-hidden rounded-lg border border-stone-300 bg-white shadow-sm sm:grid-cols-3">
          <div className="p-4">
            <p className="text-3xl font-black text-primary-dark">512</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-stone-500">Embedding Size</p>
          </div>
          <div className="border-y border-stone-300 p-4 sm:border-x sm:border-y-0">
            <p className="text-3xl font-black text-coral">0.70</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-stone-500">Threshold</p>
          </div>
          <div className="p-4">
            <p className="text-3xl font-black text-amber-600">CPU</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-stone-500">OpenVINO</p>
          </div>
        </div>
      </div>

      <div className="min-w-0 max-w-[22rem] rounded-lg border border-stone-300 bg-white p-4 shadow-xl sm:max-w-none">
        <div className="grid gap-4 sm:grid-cols-2">
          <FacePanel label="Image A: Reference" score="Known" />
          <FacePanel label="Image B: Check" score="Scan" />
        </div>
        <div className="mt-4 rounded-lg border border-stone-300 bg-stone-950 p-5 text-white">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-stone-300">Result Modal</p>
            <p className="rounded-full bg-primary px-3 py-1 text-xs font-black text-stone-950">MATCH</p>
          </div>
          <p className="mt-4 text-3xl font-black sm:text-4xl">Display reference name</p>
          <p className="mt-3 text-sm leading-6 text-stone-300">
            When similarity reaches the threshold, the app confirms the identity. Otherwise, the final label becomes NOT MATCH.
          </p>
        </div>
      </div>
    </section>
  );
}
