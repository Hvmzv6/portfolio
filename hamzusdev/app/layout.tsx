import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({
  variable: "--font-inter-google",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-hamza.me"),
  title: {
    default: "Hamza Safsafi | Full-Stack Developer",
    template: "%s | Hamza Safsafi",
  },
  description: "Software engineering portfolio of Hamza Safsafi, showcasing premium web architectures & mobile interfaces.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-hamza.me",
    siteName: "Hamza Safsafi Portfolio",
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
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <main className="grow pt-16">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-XDN6QEV6DH" />
    </html>
  );
}
