import IndiaMap from '@/components/students/IndiaMap';

export const metadata = {
  title: "Student Chapters | ASCE India Section",
  description: "47 student chapters across the Indian subcontinent — empowering the next generation of civil engineers.",
};

export default function Students() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Student Chapters</h1>
          <p>47 chapters across the Indian subcontinent</p>
        </div>
      </div>
      
      <IndiaMap />

      <section style={{ padding: '60px 0', textAlign: 'center', background: 'rgba(0, 61, 165, 0.03)' }}>
        <div className="container">
          <h2 style={{ marginBottom: '24px' }}>Ready to lead your own chapter?</h2>
          <a 
            href="https://www.asce.org/communities/student-members/start" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Start a Student Chapter &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
