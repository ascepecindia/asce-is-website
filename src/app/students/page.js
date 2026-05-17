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
      
      <section style={{ 
        padding: '80px 0', 
        textAlign: 'center', 
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div className="container">
          <h2 style={{ 
            marginBottom: '32px', 
            color: '#FFFFFF', 
            fontSize: '2.5rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            Ready to lead your own chapter?
          </h2>
          <a 
            href="https://www.asce.org/communities/student-members/start" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '16px 40px', fontSize: '1.1rem' }}
          >
            Start a Student Chapter &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
