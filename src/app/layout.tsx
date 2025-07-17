import type { Metadata } from "next"
import { Noto_Sans } from 'next/font/google'
import "../style/globals.css"
import { cn } from "@/lib/utils"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import BackToTop from "@/components/ui/BackToTop"
import PromotionSection from "@/components/layout/PromotionSection"

const fontSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: "VinFast",
  description: "VinFast Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen scroll-smooth antialiased font-sans bg-background text-foreground',
          fontSans.variable
        )}
        suppressHydrationWarning
      >
        <Header />
        <main className="pt-20">{children}</main>
        <PromotionSection />
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
