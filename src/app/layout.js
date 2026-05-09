import { Plus_Jakarta_Sans, Inter, DM_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";

const plusJakarta = Plus_Jakarta_Sans({
  weight: ['700'],
  variable: "--font-heading",
  subsets: ["latin"],
  display: 'swap',
});

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  variable: "--font-body",
  subsets: ["latin"],
  display: 'swap',
});

const dmMono = DM_Mono({
  weight: ['400', '500'],
  variable: "--font-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "ASCE India Section",
  description: "Engineering India's Future — American Society of Civil Engineers, India Section",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${dmMono.variable}`}
    >
      <body>
        <Navigation />
        <ClientLayout>
          <main>
            {children}
          </main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
