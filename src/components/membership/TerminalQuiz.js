'use client';
import { useState, useEffect } from 'react';
import styles from './TerminalQuiz.module.css';

const QUESTIONS = [
  { id: 1, text: "ARE YOU CURRENTLY ENROLLED IN AN ENGINEERING PROGRAM? [Y/N]", options: ["Y", "N"] },
  { id: 2, text: "DO YOU HAVE MORE THAN 5 YEARS OF PROFESSIONAL EXPERIENCE? [Y/N]", options: ["Y", "N"] },
  { id: 3, text: "ARE YOU LOOKING FOR INTERNATIONAL NETWORKING OPPORTUNITIES? [Y/N]", options: ["Y", "N"] }
];

export default function TerminalQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);

  const handleAnswer = (ans) => {
    const newAnswers = [...answers, ans];
    setAnswers(newAnswers);
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      processResult(newAnswers);
    }
  };

  const processResult = (finalAnswers) => {
    setIsProcessing(true);
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          determineGrade(finalAnswers);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  const determineGrade = (ans) => {
    if (ans[0] === 'Y') {
      setResult({ grade: "STUDENT MEMBER", fee: "₹0 / YEAR", desc: "Access to all student chapters and competitions." });
    } else if (ans[1] === 'Y') {
      setResult({ grade: "PROFESSIONAL MEMBER", fee: "₹4,500 / YEAR", desc: "Full voting rights and leadership opportunities." });
    } else {
      setResult({ grade: "ASSOCIATE MEMBER", fee: "₹2,800 / YEAR", desc: "Professional networking and technical resources." });
    }
  };

  return (
    <div className={styles.terminal}>
      <div className={styles.topBar}>
        <div className={styles.dots}>
          <span></span><span></span><span></span>
        </div>
        <div className={styles.title}>ASCE_MEMBERSHIP_TERMINAL v1.0</div>
      </div>
      
      <div className={styles.content}>
        {!isProcessing && !result && (
          <div className={styles.quizArea}>
            <div className={styles.prompt}>
              <span className={styles.user}>user@asce-india:~$</span> INITIALIZING MEMBERSHIP ASSESSMENT...
            </div>
            <div className={styles.question}>
              Q{QUESTIONS[step].id} {'>'} {QUESTIONS[step].text}
            </div>
            <div className={styles.options}>
              {QUESTIONS[step].options.map(opt => (
                <button key={opt} className={styles.optBtn} onClick={() => handleAnswer(opt)}>
                  [{opt}]
                </button>
              ))}
            </div>
          </div>
        )}

        {isProcessing && (
          <div className={styles.processing}>
            <div className={styles.prompt}>PROCESSING DATA...</div>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: `${progress}%` }}></div>
            </div>
            <div className={styles.progressText}>{progress}% COMPLETE</div>
          </div>
        )}

        {result && (
          <div className={styles.result}>
            <div className={styles.prompt}>RECOMMENDED GRADE:</div>
            <div className={styles.gradeName}>{result.grade}</div>
            <div className={styles.fee}>{result.fee}</div>
            <p className={styles.desc}>{result.desc}</p>
            <button className="btn-primary" style={{ marginTop: '20px', width: '100%' }}>APPLY NOW &rarr;</button>
          </div>
        )}
      </div>
    </div>
  );
}
