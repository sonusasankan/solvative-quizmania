import React from 'react';
import { useQuiz } from './hooks/useQuiz';
import { QuizStart } from './components/QuizStart';
import { QuizLoading } from './components/QuizLoading';
import { QuizEnd } from './components/QuizEnd';
import { NoQuestions } from './components/NoQuestions';
import { QuizQuestion } from './components/QuizQuestions/QuizQuestion';
import { quizData } from './data/quizData';
import { useState as reactUseState } from 'react';

import Header from './components/ui/Header';


const App: React.FC = () => {
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

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
    } = useQuiz(quizData, selectedTopic!);

    const handleStartQuiz = (name: string, topic: string) => {
        console.log(topic);
        setSelectedTopic(topic);
        startQuiz();
    }
    

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow flex items-center justify-center">
                {!quizStarted && <QuizStart onStart={handleStartQuiz} />}
                {loading && <QuizLoading />}
                {quizCompleted && <QuizEnd score={score} totalQuestions={totalQuestions} onRestart={restartQuiz} />}
                {!currentQuestion && quizStarted && !loading && !quizCompleted && <NoQuestions />}
                {currentQuestion && !quizCompleted && (
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
                )}
            </div>
        </div>
    );
};

export default App;

function useState<T>(initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
    return reactUseState(initialValue);
}