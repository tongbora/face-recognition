import { icons as logoCollection } from "@iconify-json/logos";
import type { StackLogoName } from "./data";

const brandLogoNames: Partial<Record<StackLogoName, string>> = {
  python: "python",
  streamlit: "streamlit",
  opencv: "opencv",
  numpy: "numpy",
};

export function StackLogo({ logo, name }: { logo: StackLogoName; name: string }) {
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
