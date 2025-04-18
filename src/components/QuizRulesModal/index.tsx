import React from 'react';
import './QuizRulesModal.css'; 

interface QuizRulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuizRulesModal: React.FC<QuizRulesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="quiz-rules-modal-overlay">
      <div className="quiz-rules-modal">
        <div className="modal-header">
          <h2>Quiz rules</h2>
          <button className="close-button" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="modal-content">
          <div className="rule-section">
            <h3>10-Second Timer</h3>
            <ul>
              <li>Each question comes with a 10-second timer.</li>
              <li>If you don't answer within the time limit, the app will automatically move to the next question.</li>
            </ul>
          </div>
          <div className="rule-section">
            <h3>Manual Navigation</h3>
            <ul>
              <li>You can navigate to the next question manually before the timer expires.</li>
              <li>Use the "Next" button to move ahead if you're ready before the timer runs out.</li>
            </ul>
          </div>
          <div className="rule-section">
            <h3>Final Score and Performance Message</h3>
            <ul>
              <li>After all questions are answered, your final score will be displayed.</li>
              <li>Based on your performance, you will receive a personalized message:</li>
              <ul>
                <li>Great job!: If you score **above 80%**.</li>
                <li>Well done!: If you score **between 60% and 80%**.</li>
                <li>Keep practicing! : If you score **below 60%**.</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizRulesModal;