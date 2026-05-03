import { Bebas_Neue, DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const bebasNeue = Bebas_Neue({
  weight: '400',
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: 'swap',
});

const dmMono = DM_Mono({
  weight: ['400', '500'],
  variable: "--font-dm-mono",
  subsets: ["latin"],
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['400', '600', '700'],
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "ASCE India Section | Blueprint Reborn",
  description: "Engineering India's Future - ASCE India Section Website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmMono.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <Navigation />
        <main className="flex-1 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
