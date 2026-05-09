import Leadership from '@/components/about/Leadership';

export const metadata = {
  title: "Office Bearers | ASCE India Section",
  description: "Current leadership team of the ASCE India Section.",
};

export default function About() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Office Bearers</h1>
        </div>
      </div>
      <Leadership />
    </>
  );
}
