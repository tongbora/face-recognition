import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/registry/magicui/terminal";
import { icons as logoCollection } from "@iconify-json/logos";
import Image from "next/image";

const stackItems = [
  { name: "Python", purpose: "Application logic", logo: "python" },
  { name: "Streamlit", purpose: "Interactive web interface", logo: "streamlit" },
  { name: "OpenCV", purpose: "Image decoding and Haar Cascade detection", logo: "opencv" },
  { name: "OpenVINO", purpose: "ArcFace model loading and CPU inference", logo: "openvino" },
  { name: "ArcFace ResNet100", purpose: "512-dimensional identity embeddings", logo: "arcface" },
  { name: "NumPy", purpose: "Cosine similarity and vector normalization", logo: "numpy" },
] as const;

type StackLogoName = (typeof stackItems)[number]["logo"];

const brandLogoNames: Partial<Record<StackLogoName, string>> = {
  python: "python",
  streamlit: "streamlit",
  opencv: "opencv",
  numpy: "numpy",
};

const workflow = [
  {
    step: "01",
    title: "Input",
    body: "The user enters a reference name, then provides Image A and Image B from upload or camera capture.",
  },
  {
    step: "02",
    title: "Detect",
    body: "OpenCV locates faces with Haar Cascade and selects the largest face as the primary identity region.",
  },
  {
    step: "03",
    title: "Embed",
    body: "Each cropped face is resized to 112 x 112 and converted into a normalized ArcFace vector.",
  },
  {
    step: "04",
    title: "Compare",
    body: "The two normalized embeddings are compared with a dot product that acts as cosine similarity.",
  },
  {
    step: "05",
    title: "Decide",
    body: "A score at or above 0.70 displays the reference name. A lower score returns NOT MATCH.",
  },
];

const functions = [
  ["load_models()", "Downloads missing assets, loads Haar Cascade, and compiles ArcFace with OpenVINO."],
  ["detect_main_face(image)", "Finds faces and returns the largest crop with its bounding box."],
  ["preprocess_arcface(face_bgr)", "Converts a detected face into the tensor shape ArcFace expects."],
  ["get_face_embedding(face)", "Runs inference and normalizes the 512-value identity vector."],
  ["process_face_image(image_rgb)", "Runs the shared detection and embedding pipeline for any input source."],
];

function SlideLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-dark sm:text-xs sm:tracking-[0.28em]">
      {children}
    </p>
  );
}

function StackLogo({ logo, name }: { logo: StackLogoName; name: string }) {
  const baseClass = "h-11 w-11 shrink-0";
  const brandLogoName = brandLogoNames[logo];
  const brandLogo = brandLogoName ? logoCollection.icons[brandLogoName] : undefined;

  if (brandLogo) {
    const width = brandLogo.width ?? logoCollection.width ?? 256;
    const height = brandLogo.height ?? logoCollection.height ?? 256;

    return (
      <svg
        aria-label={`${name} logo`}
        viewBox={`0 0 ${width} ${height}`}
        className={baseClass}
        dangerouslySetInnerHTML={{ __html: brandLogo.body }}
      />
    );
  }

  if (logo === "openvino") {
    return (
      <span className={`${baseClass} flex items-center justify-center rounded-full bg-slate-950`} aria-label={`${name} logo`} role="img">
        <svg viewBox="0 0 44 44" className="h-8 w-8">
          <path d="M10 12h8l5 17h-7z" fill="#00C7FD" />
          <path d="M22 12h10L22 32h-7z" fill="#95D600" />
        </svg>
      </span>
    );
  }

  if (logo === "arcface") {
    return (
      <svg aria-label={`${name} logo`} viewBox="0 0 44 44" className={baseClass}>
        <rect x="7" y="7" width="30" height="30" rx="7" fill="#FFF3E0" stroke="#FF9100" strokeWidth="2" />
        <rect x="12" y="12" width="20" height="20" rx="6" fill="#111827" />
        <circle cx="22" cy="19" r="5" fill="#FF9100" />
        <path d="M15 31c1.5-5 4.5-7.5 7-7.5s5.5 2.5 7 7.5" fill="#FF9100" />
        <path d="M12 16v-3h4M28 13h4v3M12 28v3h4M32 28v3h-4" stroke="#FF9100" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
}

function FacePanel({ label, score }: { label: string; score: string }) {
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

function TerminalDemo2() {
  return (
    <Terminal>
      <TypingAnimation delay={0}>$ git clone https://github.com/danadorn/face-recognition.git</TypingAnimation>

      <AnimatedSpan delay={900} className="text-primary">
        Cloning into &apos;face-recognition&apos;...
      </AnimatedSpan>

      <TypingAnimation delay={1600}>$ cd face-recognition</TypingAnimation>

      <TypingAnimation delay={2400}>$ python -m venv .venv</TypingAnimation>

      <TypingAnimation delay={3200}>$ source .venv/bin/activate</TypingAnimation>

      <TypingAnimation delay={4000}>$ pip install -r requirements.txt</TypingAnimation>

      <AnimatedSpan delay={5000} className="text-stone-400">
        Installing Streamlit, OpenCV, OpenVINO, ArcFace, and NumPy...
      </AnimatedSpan>

      <TypingAnimation delay={5800}>$ streamlit run app.py</TypingAnimation>

      <AnimatedSpan delay={6800} className="text-primary">
        Local URL: http://localhost:8501
      </AnimatedSpan>
    </Terminal>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f7f5] text-stone-950">
      <nav className="sticky top-0 z-20 border-b border-stone-300 bg-[#f5f7f5]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <a href="#title" className="inline-flex items-center gap-3" aria-label="Face Recognition">
            <Image src="/favicon.ico" alt="" width={40} height={40} className="rounded-full object-cover" priority />
            <span className="text-xs font-black uppercase tracking-[0.22em] sm:text-sm">Face Recognition</span>
          </a>
          <div className="hidden items-center gap-2 text-xs font-semibold text-stone-600 md:flex">
            {["Overview", "Stack", "Setup", "Workflow", "Decision", "Functions"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-full px-3 py-1.5 transition hover:bg-white hover:text-stone-950"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

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

      <section id="setup" className="border-y border-stone-300 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.72fr_1.28fr]">
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
          <TerminalDemo2 />
        </div>
      </section>

      <section id="workflow" className="bg-stone-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary sm:text-xs sm:tracking-[0.28em]">System Workflow</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black">From two images to one verification result.</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {workflow.map((item) => (
              <article key={item.step} className="rounded-lg border border-white/15 bg-white/5 p-5">
                <p className="font-mono text-sm font-black text-amber-300">{item.step}</p>
                <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-stone-300">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

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

      <section id="functions" className="border-t border-stone-300 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <SlideLabel>Key Functions</SlideLabel>
          <h2 className="mt-4 text-4xl font-black">Main application responsibilities.</h2>
          <div className="mt-8 divide-y divide-stone-300 rounded-lg border border-stone-300">
            {functions.map(([name, detail]) => (
              <div key={name} className="grid gap-3 p-5 md:grid-cols-[0.42fr_1fr]">
                <code className="font-mono text-sm font-bold text-primary-dark">{name}</code>
                <p className="leading-7 text-stone-700">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
