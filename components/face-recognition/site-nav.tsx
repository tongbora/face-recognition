import Image from "next/image";
import { navItems } from "./data";

export function SiteNav() {
  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 w-full px-3 py-3 sm:px-6 sm:py-4">
        <div className="relative mx-auto grid w-full min-w-0 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-[2rem] border border-stone-300 bg-white px-3 py-3 shadow-sm sm:gap-3 sm:px-5 md:flex md:flex-wrap md:justify-between">
          <a href="#title" className="inline-flex min-w-0 items-center gap-2 sm:gap-3" aria-label="Face Recognition">
            <Image src="/favicon.ico" alt="" width={36} height={36} className="rounded-full object-cover sm:h-10 sm:w-10" priority />
            <span className="truncate text-[10px] font-black uppercase tracking-[0.14em] min-[380px]:text-[11px] sm:text-sm sm:tracking-[0.22em]">Face Recognition</span>
          </a>
          <details className="justify-self-end md:hidden">
            <summary
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-stone-300 bg-white text-stone-600 transition hover:text-stone-950 [&::-webkit-details-marker]:hidden"
              aria-label="Open navigation sections"
            >
              <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
              <span className="sr-only">Sections</span>
            </summary>
            <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] flex flex-wrap items-center justify-center gap-2 rounded-3xl border border-stone-300 bg-white p-3 text-[10px] font-bold uppercase text-stone-600 shadow-sm">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="rounded-full border border-stone-300 bg-white px-2.5 py-1.5 font-mono transition hover:text-stone-950"
                >
                  {item}
                </a>
              ))}
            </div>
          </details>
          <div className="hidden items-center justify-center gap-2 text-[11px] font-bold uppercase text-stone-600 md:order-none md:flex md:w-auto">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-full px-3 py-1.5 font-semibold transition hover:bg-[#f5f7f5] hover:text-stone-950"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <div className="h-24 md:h-24" aria-hidden="true" />
    </>
  );
}
