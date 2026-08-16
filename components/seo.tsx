import type { Metadata } from "next";

export const seoConfig = {
  title: "Face Recognition",
  description:
    "A Streamlit application that verifies whether two face images belong to the same identity, using Haar Cascade detection, ArcFace ResNet100 embeddings, and cosine similarity, accelerated with OpenVINO.",
  siteName: "Identity Match Studio",
  siteUrl: "https://face-recognition-ppiu.vercel.app",
  locale: "en_US",
  type: "website" as const,
  keywords: [
    "face verification",
    "face recognition",
    "ArcFace",
    "OpenVINO",
    "Haar Cascade",
    "Streamlit",
    "cosine similarity",
    "computer vision",
    "Python AI project",
  ],
  creator: "danadorn, tongbora",
  publisher: "danadorn, tongbora",
  ogImage: "/opengraph-image",
  twitterHandle: "@todo",
};

export function createSeoMetadata(): Metadata {
  return {
    metadataBase: new URL(seoConfig.siteUrl),
    title: {
      default: seoConfig.title,
      template: `%s | ${seoConfig.siteName}`,
    },
    description: seoConfig.description,
    keywords: seoConfig.keywords,
    creator: seoConfig.creator,
    publisher: seoConfig.publisher,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: seoConfig.title,
      description: seoConfig.description,
      url: "/",
      siteName: seoConfig.siteName,
      locale: seoConfig.locale,
      type: seoConfig.type,
      images: [
        {
          url: seoConfig.ogImage,
          width: 1200,
          height: 630,
          alt: seoConfig.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoConfig.title,
      description: seoConfig.description,
      creator: seoConfig.twitterHandle,
      images: [seoConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export function SeoJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
