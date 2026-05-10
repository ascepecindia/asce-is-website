import ContactForm from '@/components/contact/ContactForm';
import BranchTerminals from '@/components/contact/BranchTerminals';

export const metadata = {
  title: "Contact | ASCE India Section",
  description: "Get in touch with the ASCE India Section for inquiries, support, and collaboration.",
};

export default function Contact() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you — reach out to the ASCE India Section central leadership</p>
        </div>
      </div>
      
      <section style={{ padding: '64px 0 100px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
          <BranchTerminals />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
