'use client';
import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);
    // Add Web3Forms Access Key - Users can get this from web3forms.com
    formData.append("access_key", "1ea840be-38d1-46cc-8547-8e681238ebe7");
    formData.append("subject", `${formData.get('subject')} - From ${formData.get('name')}`);
    formData.append("to_email", "asceindia@gmail.com");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Send a Message</h3>

      {status === 'success' ? (
        <div className={styles.successMessage}>
          <h4>✓ Message Sent!</h4>
          <p>Thank you for reaching out. We will get back to you shortly at SHUBHAM172021@GMAIL.COM.</p>
          <button onClick={() => setStatus('')} className="btn-primary" style={{ marginTop: '20px' }}>Send Another</button>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label>Name</label>
            <input name="name" type="text" placeholder="Your full name" className={styles.input} required />
          </div>
          <div className={styles.field}>
            <label>Email</label>
            <input name="email" type="email" placeholder="you@example.com" className={styles.input} required />
          </div>
          <div className={styles.field}>
            <label>Subject</label>
            <select name="subject" className={styles.select}>
              <option>General Inquiry</option>
              <option>Membership Inquiry</option>
              <option>Technical Resources</option>
              <option>Branch Collaboration</option>
              <option>Student Programs</option>
            </select>
          </div>
          <div className={styles.field}>
            <label>Message</label>
            <textarea name="message" placeholder="How can we help?" className={styles.textarea} required></textarea>
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ width: '100%', opacity: status === 'sending' ? 0.7 : 1 }}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'error' && (
            <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '12px', textAlign: 'center' }}>
              Oops! Something went wrong. Please try again or email us directly.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
