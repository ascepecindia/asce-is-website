'use client';
import { useState, useEffect } from 'react';
import styles from './TerminalQuiz.module.css';

const QUESTIONS = [
  { id: 1, text: "ENTER YOUR EMAIL ADDRESS:", type: "input" },
  { id: 2, text: "ENTER YOUR FIRST NAME:", type: "input" },
  { id: 3, text: "ENTER YOUR LAST NAME:", type: "input" },
  { id: 4, text: "ENTER YOUR COUNTRY:", type: "input" },
  { id: 5, text: "ENTER YOUR ADDRESS (LINE 1):", type: "input" },
  { id: 6, text: "ENTER YOUR CITY:", type: "input" },
  { id: 7, text: "ENTER YOUR PHONE NUMBER:", type: "input" },
  { id: 8, text: "ARE YOU ENROLLED IN AN ENGINEERING PROGRAM? [Y/N]", options: ["Y", "N"] },
  { id: 9, text: "DO YOU HAVE MORE THAN 5 YEARS OF PROFESSIONAL EXPERIENCE? [Y/N]", options: ["Y", "N"] }
];

export default function TerminalQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);

  const handleAnswer = (ans) => {
    const newAnswers = { ...answers, [QUESTIONS[step].id]: ans };
    setAnswers(newAnswers);
    setInputValue("");
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
    const isStudent = ans[8] === 'Y';
    const isExperienced = ans[9] === 'Y';
    
    if (isStudent) {
      setResult({ grade: "STUDENT MEMBER", fee: "₹0 / YEAR", desc: "Access to all student chapters and competitions.", user: ans });
    } else if (isExperienced) {
      setResult({ grade: "PROFESSIONAL MEMBER", fee: "₹4,500 / YEAR", desc: "Full voting rights and leadership opportunities.", user: ans });
    } else {
      setResult({ grade: "ASSOCIATE MEMBER", fee: "₹2,800 / YEAR", desc: "Professional networking and technical resources.", user: ans });
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
            {QUESTIONS[step].type === "input" ? (
              <div className={styles.inputArea}>
                <input 
                  type="text" 
                  value={inputValue} 
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && inputValue.trim() && handleAnswer(inputValue.trim())}
                  className={styles.terminalInput}
                  autoFocus
                  placeholder="..."
                />
                <button 
                  className={styles.optBtn} 
                  onClick={() => inputValue.trim() && handleAnswer(inputValue.trim())}
                  style={{ marginLeft: '12px' }}
                >
                  [ENTER]
                </button>
              </div>
            ) : (
              <div className={styles.options}>
                {QUESTIONS[step].options.map(opt => (
                  <button key={opt} className={styles.optBtn} onClick={() => handleAnswer(opt)}>
                    [{opt}]
                  </button>
                ))}
              </div>
            )}
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
            <div className={styles.prompt}>PROFILE GENERATED FOR: {result.user[2]} {result.user[3]}</div>
            <div className={styles.userData}>
              <div className={styles.userRow}><span>EMAIL:</span> {result.user[1]}</div>
              <div className={styles.userRow}><span>PHONE:</span> {result.user[7]}</div>
              <div className={styles.userRow}><span>LOCATION:</span> {result.user[6]}, {result.user[4]}</div>
            </div>
            
            <div className={styles.prompt} style={{ marginTop: '24px' }}>RECOMMENDED GRADE:</div>
            <div className={styles.gradeName}>{result.grade}</div>
            <div className={styles.fee}>{result.fee}</div>
            <p className={styles.desc}>{result.desc}</p>
            
            <div className={styles.notice}>
              DATA PREPARED. CLICK BELOW TO SYNC WITH ASCE GLOBAL REGISTRATION.
            </div>

            <a 
              href={`https://sp360.asce.org/personifyebusiness/Membership/Join-ASCE/MembershipJoinRegistration`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary" 
              style={{ marginTop: '20px', width: '100%', display: 'inline-block', textAlign: 'center' }}
            >
              PROCEED TO ASCE REGISTRATION &rarr;
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
