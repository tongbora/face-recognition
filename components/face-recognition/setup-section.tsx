import { LocalSetupTerminal } from "./local-setup-terminal";
import { SlideLabel } from "./slide-label";

export function SetupSection() {
  return (
    <section
      id="setup"
      className="mx-auto grid w-full min-w-0 max-w-7xl scroll-mt-28 gap-8 px-4 py-12 sm:px-5 sm:py-16 lg:grid-cols-[0.72fr_1.28fr]"
    >
      <div className="min-w-0">
        <SlideLabel>Run Locally</SlideLabel>
        <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
          Use the source code to launch your own copy.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg">
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
      <div className="min-w-0">
        <LocalSetupTerminal />
      </div>
    </section>
  );
}
