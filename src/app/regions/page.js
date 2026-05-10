import RegionList from '@/components/regions/RegionList';

export const metadata = {
  title: "Regions | ASCE India Section",
  description: "Contact information for the regional office bearers of ASCE India Section.",
};

export default function Regions() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Regional Branches</h1>
          <p>Connecting civil engineering excellence across the subcontinent</p>
        </div>
      </div>
      
      <section style={{ padding: '80px 0 120px' }}>
        <div className="container">
          <RegionList />
        </div>
      </section>
    </>
  );
}
