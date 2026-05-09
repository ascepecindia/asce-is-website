'use client';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Send a Message</h3>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.field}>
          <label>Name</label>
          <input type="text" placeholder="Your full name" className={styles.input} />
        </div>
        <div className={styles.field}>
          <label>Email</label>
          <input type="email" placeholder="you@example.com" className={styles.input} />
        </div>
        <div className={styles.field}>
          <label>Subject</label>
          <select className={styles.select}>
            <option>Membership Inquiry</option>
            <option>Technical Resources</option>
            <option>Branch Collaboration</option>
            <option>Student Programs</option>
          </select>
        </div>
        <div className={styles.field}>
          <label>Message</label>
          <textarea placeholder="How can we help?" className={styles.textarea}></textarea>
        </div>
        <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
      </form>
    </div>
  );
}
