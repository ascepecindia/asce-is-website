import Hero from '@/components/home/Hero';
import StatsBand from '@/components/home/StatsBand';
import EventsGrid from '@/components/home/EventsGrid';
import SVGDraw from '@/components/home/SVGDraw';
import MemberCarousel from '@/components/home/MemberCarousel';
import NewsStrip from '@/components/home/NewsStrip';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <EventsGrid />
      <SVGDraw />
      <MemberCarousel />
      <NewsStrip />
    </>
  );
}
