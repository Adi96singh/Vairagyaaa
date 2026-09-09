import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aditya Singh | Full-Stack Developer • Backend Engineer • AI/ML Enthusiast",
  description:
    "Portfolio of Aditya Singh, a Computer Science developer focused on full-stack development, backend engineering, applied machine learning, and AI-powered systems.",
  keywords: [
    "Aditya Singh",
    "Full-Stack Developer",
    "Backend Engineer",
    "AI/ML",
    "Node.js",
    "React",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Aditya Singh" }],
  openGraph: {
    type: "website",
    title: "Aditya Singh | Full-Stack Developer • Backend Engineer • AI/ML Enthusiast",
    description:
      "Portfolio of Aditya Singh — full-stack development, backend engineering, applied ML, and AI-powered systems.",
    url: "https://vairagyaaa.com",
    siteName: "Aditya Singh Portfolio",
    images: [
      {
        url: "/images/profile.png",
        width: 400,
        height: 400,
        alt: "Aditya Singh",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Aditya Singh | Full-Stack Developer",
    description:
      "Portfolio of Aditya Singh — backend engineering, scalable web systems, and applied AI/ML.",
    images: ["/images/profile.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
