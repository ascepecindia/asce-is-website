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
    </>
  );
}
