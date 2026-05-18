import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nathan Serfaty · Engineer · Cofounder, NSJ Agency",
  description:
    "Fullstack engineer shipping SaaS. Cofounder of NSJ Agency, a Paris studio building premium digital products with design at the core.",
  openGraph: {
    title: "Nathan Serfaty · Engineer · Cofounder, NSJ Agency",
    description:
      "Fullstack engineer shipping SaaS. Cofounder of NSJ Agency, a Paris studio building premium digital products with design at the core.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
