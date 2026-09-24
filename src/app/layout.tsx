import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";

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

export const metadata: Metadata = {
  title: "Gédéon Cibanvunya - Portfolio Cybersécurité",
  description: "Portfolio de Gédéon Cibanvunya, étudiant en cybersécurité à l'Université Lumière de Bujumbura. Passionné par l'analyse SOC, le pentest et le développement logiciel de sécurité.",
  keywords: ["cybersécurité", "SOC", "pentest", "malware analysis", "OSINT", "YARA", "Sigma", "Burundi", "Bujumbura"],
  authors: [{ name: "Gédéon Cibanvunya" }],
  openGraph: {
    title: "Gédéon Cibanvunya - Portfolio Cybersécurité",
    description: "Portfolio de Gédéon Cibanvunya, étudiant en cybersécurité à l'Université Lumière de Bujumbura.",
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
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}