import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";
import MotionProvider from "@/components/MotionProvider";
import { LanguageProvider } from "@/lib/language-context";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "Gédéon Cibanvunya - Portfolio Cybersécurité",
  description: "Portfolio de Gédéon Cibanvunya : informatique de gestion, cybersécurité, analyse SOC, pentest et développement logiciel.",
  keywords: ["cybersécurité", "SOC", "pentest", "malware analysis", "OSINT", "YARA", "Sigma", "Burundi", "Bujumbura"],
  authors: [{ name: "Gédéon Cibanvunya" }],
  openGraph: {
    title: "Gédéon Cibanvunya - Portfolio Cybersécurité",
    description: "Portfolio de Gédéon Cibanvunya : cybersécurité, projets et laboratoires.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MotionProvider><ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider></MotionProvider>
      </body>
    </html>
  );
}