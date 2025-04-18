import React from 'react';
import { useQuiz } from './hooks/useQuiz';
import { QuizStart } from './components/QuizStart';
import { QuizLoading } from './components/QuizLoading';
import { QuizEnd } from './components/QuizEnd';
import { NoQuestions } from './components/NoQuestions';
import { QuizQuestion } from './components/QuizQuestions/QuizQuestion';
import { quizData } from './data/quizData'; // Import your quiz data

const App: React.FC = () => {
    const {
        currentQuestion,
        currentQuestionIndex,
        totalQuestions,
        selectedAnswer,
        score,
        quizCompleted,
        timeLeft,
        isPaused,
        loading,
        quizStarted,
        startQuiz,
        handleAnswerSelection,
        submitAnswer,
        restartQuiz,
        setIsPaused
    } = useQuiz(quizData); // Use the hook, passing in the data

    if (!quizStarted) {
        return <QuizStart onStart={startQuiz} />;
    }

    if (loading) {
        return <QuizLoading />;
    }

    if (quizCompleted) {
        return <QuizEnd score={score} totalQuestions={totalQuestions} onRestart={restartQuiz} />;
    }

    if (!currentQuestion) {
        return <NoQuestions />;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <QuizQuestion
                questionData={currentQuestion}
                selectedAnswer={selectedAnswer}
                onAnswerChange={handleAnswerSelection}
                timeLeft={timeLeft}
                isPaused={isPaused}
                onSubmit={submitAnswer}
                currentQuestionIndex={currentQuestionIndex}
                totalQuestions={totalQuestions}
            />
        </div>
    );
};

export default App;
