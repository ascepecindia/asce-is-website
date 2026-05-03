import EventHero from '@/components/events/EventHero';
import BlueprintCalendar from '@/components/events/BlueprintCalendar';
import EventFilters from '@/components/events/EventFilters';
import styles from './page.module.css';

export const metadata = {
  title: "Events | ASCE India Section",
  description: "Conferences, webinars, and field trips for the Indian engineering community.",
};

export default function Events() {
  return (
    <div className={`bg-grid ${styles.pageWrapper}`}>
      <EventHero />
      <div className="container">
        <EventFilters />
        <BlueprintCalendar />
      </div>
    </div>
  );
}
