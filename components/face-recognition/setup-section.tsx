import { LocalSetupTerminal } from "./local-setup-terminal";
import { SlideLabel } from "./slide-label";

export function SetupSection() {
  return (
    <section id="setup" className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.72fr_1.28fr]">
      <div>
        <SlideLabel>Run Locally</SlideLabel>
        <h2 className="mt-4 text-4xl font-black">Use the source code to launch your own copy.</h2>
        <p className="mt-5 text-lg leading-8 text-stone-700">
          Clone the GitHub repository, install the Python dependencies, then start the Streamlit app from your terminal.
        </p>
        <a
          href="https://github.com/danadorn/face-recognition/"
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-black uppercase text-stone-950 shadow-sm transition hover:bg-primary-dark hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Open Source Code
        </a>
      </div>
      <LocalSetupTerminal />
    </section>
  );
}
