import React from 'react';
import './index.css'; // Ensure your CSS is updated
import { ReactComponent as SadFaceIcon } from '../../assets/sad-face.svg'; // Import a sad face SVG

interface QuizEndProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export const QuizEnd: React.FC<QuizEndProps> = ({ score, totalQuestions, onRestart }) => {
  const percentageScore = (score / totalQuestions) * 100;
  let congratulationsMessage = 'You successfully completed the Quiz and holds';
  let performanceMessage = '';
  let showSadFace = false;

  if (percentageScore > 80) {
    performanceMessage = 'Great job!';
  } else if (percentageScore >= 50) {
    performanceMessage = 'Well done!';
  } else {
    performanceMessage = 'KEEP PRACTICING!';
    congratulationsMessage = 'You successfully completed the Quiz but you need to';
    showSadFace = true;
  }

  const incorrectAnswers = totalQuestions - score - (totalQuestions - score - (percentageScore === 100 ? totalQuestions : (percentageScore / 100) * totalQuestions)); // Adjust if your logic differs.

  return (
    <div className="quiz-end-container">
      <div className="congratulations">
        {showSadFace ? (
          <div className="sad-face-container flex justify-center items-center">
            <SadFaceIcon className="sad-face-icon" />
          </div>
        ) : (
          <div className="checkmark-container">
            <svg viewBox="0 0 24 24" fill="currentColor" className="checkmark">
              <path fillRule="evenodd" d="M19.94 5.23a.75.75 0 010 1.06l-7.75 7.75-4.75-4.75a.75.75 0 011.06-1.06l4.22 4.22 7.22-7.22a.75.75 0 011.06 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
        <h1>{showSadFace ? '' : 'CONGRATULATION'}</h1>
        <p>{congratulationsMessage}</p>
        {showSadFace && <p className="keep-practicing-text">{performanceMessage}</p>}
      </div>

      <div className="score-section">
        <h2>Your Score</h2>
        <div className="score-percentage">{percentageScore.toFixed(0)}%</div>
        {!showSadFace && <p className="performance-message">{performanceMessage}</p>}
      </div>

      <div className="summary-section">
        <p>Out of {totalQuestions} question</p>
        <div className="summary-details">
          <span className="correct"><span>{score}</span> Correct</span>
          <span className="incorrect"><span>{incorrectAnswers}</span> Incorrect</span>
          <span className="not-answered"><span>{totalQuestions - score - incorrectAnswers}</span> Not answered</span>
        </div>
      </div>

      <button className="retake-button" onClick={onRestart}>
        Retake Quiz
      </button>
    </div>
  );
};

export default QuizEnd;