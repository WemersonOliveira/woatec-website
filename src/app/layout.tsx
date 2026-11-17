import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { Logo } from "@/components/ui";
import { Navigation } from "@/components/navigation";
import { site } from "@/config/site";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { MetaConsent } from "@/components/meta-consent";
import "./globals.css";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "WOA TEC — Soluções Digitais", template: "%s | WOA TEC" },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    description: site.description,
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${space.variable}`}>
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <header className="site-header">
          <div className="container header-inner">
            <Logo priority />
            <Navigation />
            <Link className="header-cta" href="/contato">
              Vamos conversar <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </header>
        <main id="conteudo" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <MetaConsent />
      </body>
    </html>
  );
}
