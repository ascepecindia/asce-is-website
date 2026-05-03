'use client';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  return (
    <div className={styles.container}>
       <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.field}>
             <label>[ INPUT_NAME ]</label>
             <input type="text" placeholder="John_Doe" className={styles.input} />
          </div>
          <div className={styles.field}>
             <label>[ INPUT_EMAIL ]</label>
             <input type="email" placeholder="john@example.com" className={styles.input} />
          </div>
          <div className={styles.field}>
             <label>[ INPUT_SUBJECT ]</label>
             <select className={styles.select}>
                <option>MEMBERSHIP_INQUIRY</option>
                <option>TECHNICAL_RESOURCES</option>
                <option>BRANCH_COLLABORATION</option>
                <option>STUDENT_PROGRAMS</option>
             </select>
          </div>
          <div className={styles.field}>
             <label>[ INPUT_MESSAGE ]</label>
             <textarea placeholder="Type_your_message_here..." className={styles.textarea}></textarea>
          </div>
          <button className="btn-primary" style={{ width: '100%' }}>$ transmit --data</button>
       </form>
    </div>
  );
}
