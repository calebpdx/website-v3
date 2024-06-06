import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { cn } from "@/utils/cn";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caleb White: Senior Full-Stack Engineer",
  description:
    "Caleb White is a Senior Full-Stack Engineer based in the Portland, OR area. He specializes in building web applications with React, TypeScript, and Node.js.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          montserrat.className,
          "min-w-dvw box-border font-sans text-teal-500 min-h-dvh items-center flex flex-col bg-[#232125]",
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
