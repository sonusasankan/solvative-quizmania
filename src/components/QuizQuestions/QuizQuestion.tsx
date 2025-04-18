import { AnswerFeedback } from "./AnswerFeedback";
import { QuizTimer } from "./QuizTimer";
import { QuestionDisplay } from "./QuestionDisplay";
import { QuizOptions } from "./QuizOptions";
import { Question } from "../../types/quizTypes";

import { useState } from "react";
import { cn } from "../../utils/cn";

export const QuizQuestion: React.FC<{
    questionData: Question;
    selectedAnswer: string | null;
    onAnswerChange: (answer: string | null) => void;
    timeLeft: number | null;
    isPaused: boolean;
    onSubmit: () => void;
    currentQuestionIndex: number;
    totalQuestions: number;
}> = ({ questionData, selectedAnswer, onAnswerChange, timeLeft, isPaused: initialIsPaused, onSubmit, currentQuestionIndex, totalQuestions }) => {
    const [isPaused, setIsPaused] = useState(initialIsPaused);
    return (
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">
                Question {currentQuestionIndex + 1} / {totalQuestions}
            </h2>
            <QuizTimer timeLeft={timeLeft} />
            <QuestionDisplay question={questionData.question} />
            <QuizOptions options={questionData.options} selectedAnswer={selectedAnswer} onAnswerChange={onAnswerChange} />
            <div className="flex justify-between mt-6">
                <button
                    onClick={() => setIsPaused(prev => !prev)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                >
                    {isPaused ? 'Resume' : 'Pause'}
                </button>
                <button
                    onClick={onSubmit}
                    disabled={selectedAnswer === null || isPaused}
                    className={cn(
                        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                        selectedAnswer === null && "opacity-50 cursor-not-allowed",
                        isPaused && "opacity-50 cursor-not-allowed"
                    )}
                >
                    {currentQuestionIndex === totalQuestions - 1
                        ? 'Finish Quiz'
                        : 'Next Question'}
                </button>
            </div>
            <AnswerFeedback selectedAnswer={selectedAnswer} correctAnswer={questionData.correctAnswer} />
        </div>
    );
};