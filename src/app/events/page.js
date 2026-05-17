export const metadata = {
  title: "Events | ASCE India Section",
  description: "Conferences, webinars, and workshops organised by the ASCE India Section.",
};

export default function Events() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Events</h1>
          <p>Conferences, webinars, and workshops for the Indian engineering community</p>
        </div>
      </div>

      <section style={{ padding: '80px 0 120px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '60px 40px',
            background: 'rgba(255,255,255,0.9)',
            borderRadius: '16px',
            border: '1px solid rgba(0,61,165,0.1)',
            boxShadow: '0 8px 32px rgba(0,61,165,0.08)'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '24px' }}>📅</div>
            <h2 style={{ color: '#003DA5', marginBottom: '16px' }}>Upcoming Events</h2>
            <p style={{ color: '#64748b', fontSize: '16px', lineHeight: '1.7', marginBottom: '32px' }}>
              Events are being planned for the 2025–2027 term. Stay tuned for announcements on
              conferences, webinars, and workshops organised by the ASCE India Section and its regional branches.
            </p>
            <a
              href="https://collaborate.asce.org/indias/home"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Follow us on ASCE Collaborate →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
