import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Serif_SC, Noto_Sans_SC, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  subsets: ["latin"],
  weight: ["700", "900"],
  preload: false,
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  preload: false,
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Story Engine · 故事引擎 — Vision Mockup",
  description:
    "Distill patterns from any corpus. Reverse-generate any story. A vision mockup for the Story Engine concept — bilingual EN/ZH, editorial dark.",
  keywords: [
    "Story Engine",
    "故事引擎",
    "narrative theory",
    "pattern library",
    "distillation",
    "aggregation",
    "reverse generation",
  ],
  authors: [{ name: "Story Engine Vision Mockup" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Story Engine · 故事引擎",
    description:
      "Distill patterns from any corpus · 从任何作品提炼模式. Reverse-generate any story · 反向生成任何故事.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Story Engine · 故事引擎",
    description:
      "Distill patterns from any corpus · 从任何作品提炼模式. Reverse-generate any story · 反向生成任何故事.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} ${notoSerifSC.variable} ${notoSansSC.variable} ${jetbrainsMono.variable} antialiased font-sans-zh`}
      >
        {children}
        <Toaster />
        <SonnerToaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
