import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Hair Clinic by Fábia Oliveira — Tricologia & Ritual",
  description:
    "Clínica capilar especializada em tricologia, diagnóstico e ritual sensorial. O cuidado começa na raiz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-white text-stone-800"
      >
        {children}
      </body>
    </html>
  );
}
