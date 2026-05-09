import EventHero from '@/components/events/EventHero';
import EventsList from '@/components/events/EventsList';
import EventFilters from '@/components/events/EventFilters';

export const metadata = {
  title: "Events | ASCE India Section",
  description: "Conferences, webinars, and field trips for the Indian engineering community.",
};

export default function Events() {
  return (
    <>
      <EventHero />
      <div className="container">
        <EventFilters />
        <EventsList />
      </div>
    </>
  );
}
