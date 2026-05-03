import ContactForm from '@/components/contact/ContactForm';
import BranchTerminals from '@/components/contact/BranchTerminals';
import styles from './page.module.css';

export const metadata = {
  title: "Contact | ASCE India Section",
  description: "Get in touch with the ASCE India Section for inquiries, support, and collaboration.",
};

export default function Contact() {
  return (
    <div className={`bg-grid ${styles.pageWrapper}`}>
      <div className="container">
        <div className={styles.hero}>
          <h1 className="text-display">ESTABLISH_CONNECTION</h1>
          <p className="text-hero-sub" style={{ color: 'var(--accent-blue)', marginTop: '16px' }}>// DIRECT CHANNELS TO THE SECTION LEADERSHIP</p>
        </div>
        
        <div className={styles.grid}>
          <ContactForm />
          <BranchTerminals />
        </div>
      </div>
    </div>
  );
}
