import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = "https://sievminh.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Siev Minh | Information Technology Engineering Student",
    template: "%s | Siev Minh",
  },
  description:
    "Portfolio of Siev Minh, an Information Technology Engineering student at the Royal University of Phnom Penh, building software, web applications, and data-driven projects.",
  keywords: [
    "Siev Minh",
    "IT Engineering Student",
    "Royal University of Phnom Penh",
    "Software Developer Cambodia",
    "Portfolio",
    "React Developer",
    "Next.js Developer",
  ],
  authors: [{ name: "Siev Minh" }],
  creator: "Siev Minh",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Siev Minh | Information Technology Engineering Student",
    description:
      "Portfolio of Siev Minh, an Information Technology Engineering student building software, web applications, and data-driven projects.",
    siteName: "Siev Minh Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Siev Minh Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siev Minh | Information Technology Engineering Student",
    description:
      "Portfolio of Siev Minh, an Information Technology Engineering student building software, web applications, and data-driven projects.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    try {
      const storedTheme = localStorage.getItem('theme');
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      const resolvedTheme = storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : systemTheme;
      document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
      document.documentElement.style.colorScheme = resolvedTheme;
    } catch (e) {}
  `;

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 antialiased transition-colors duration-300 selection:bg-cyan-400/30 dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem enableColorScheme disableTransitionOnChange>
          <ScrollProgress />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
