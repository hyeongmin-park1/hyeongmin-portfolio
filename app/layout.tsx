import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

// 빌보드 디스플레이(대문자) + UI/본문. 한국어는 Pretendard로 자동 폴백.
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-latin",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HYEONGMIN PARK - Forward Deployed Engineer",
  description:
    "Forward Deployed Engineer who takes AI products from problem to production. 3년 프론트엔드 기반, LLM 제품을 엔드투엔드로.",
  openGraph: {
    title: "HyeongMin Park — Forward Deployed Engineer",
    description: "AI products from problem to production.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const themeInit = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${anton.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
