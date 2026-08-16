import Image from "next/image";
import { navItems } from "./data";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-20 border-b border-stone-300 bg-[#f5f7f5]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <a href="#title" className="inline-flex items-center gap-3" aria-label="Face Recognition">
          <Image src="/favicon.ico" alt="" width={40} height={40} className="rounded-full object-cover" priority />
          <span className="text-xs font-black uppercase tracking-[0.22em] sm:text-sm">Face Recognition</span>
        </a>
        <div className="hidden items-center gap-2 text-xs font-semibold text-stone-600 md:flex">
          {navItems.map((item) => (
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
  );
}
