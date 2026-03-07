import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { cn } from "@/utils/cn";
import { pageInfo } from "@/utils/constants";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(pageInfo.url),
  title: {
    default: pageInfo.title,
    template: `%s | ${pageInfo.title}`,
  },
  description: pageInfo.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: pageInfo.url,
    siteName: "Caleb White",
    title: pageInfo.title,
    description: pageInfo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: pageInfo.title,
    description: pageInfo.description,
    creator: pageInfo.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: pageInfo.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${pageInfo.url}/#website`,
      url: pageInfo.url,
      name: "Caleb White",
      description: pageInfo.description,
    },
    {
      "@type": "Person",
      "@id": `${pageInfo.url}/#person`,
      name: "Caleb White",
      url: pageInfo.url,
      jobTitle: "Senior Software Engineer",
      sameAs: [
        `https://github.com/${pageInfo.github}`,
        `https://linkedin.com/in/${pageInfo.linkedin}`,
        `https://x.com/${pageInfo.twitter.replace("@", "")}`,
      ],
    },
  ],
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          inter.className,
          montserrat.className,
          "w-full box-border font-sans min-h-dvh items-center flex flex-col bg-primary-dark overflow-x-hidden",
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
