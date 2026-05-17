import Hero from '@/components/home/Hero';
import StatsBand from '@/components/home/StatsBand';
import AboutSection from '@/components/home/AboutSection';
import FocusAreas from '@/components/home/FocusAreas';
import SVGDraw from '@/components/home/SVGDraw';
import Highlights from '@/components/home/Highlights';
import MemberCarousel from '@/components/home/MemberCarousel';
import NewsStrip from '@/components/home/NewsStrip';

export const metadata = {
  title: "ASCE India Section | Advancing Civil Engineering Since 1989",
  description: "The India Section of the American Society of Civil Engineers — advancing civil engineering practice, education, and research across 4 regional branches and 47 student chapters.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <AboutSection />
      <FocusAreas />
      <SVGDraw />
      <Highlights />
      <MemberCarousel />
      <NewsStrip />
    </>
  );
}
