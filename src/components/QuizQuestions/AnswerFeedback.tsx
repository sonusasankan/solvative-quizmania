import { CheckCircle, XCircle } from 'lucide-react';

export const AnswerFeedback: React.FC<{
    selectedAnswer: string | null;
    correctAnswer: string;
}> = ({ selectedAnswer, correctAnswer }) => {
    if (!selectedAnswer) return null;

    return (
        <div className="mt-4">
            {selectedAnswer === correctAnswer ? (
                <div className="flex items-center text-green-600">
                    <CheckCircle className="mr-2 w-5 h-5" />
                    Correct!
                </div>
            ) : (
                <div className="flex items-center text-red-600">
                    <XCircle className="mr-2 w-5 h-5" />
                    Incorrect. The correct answer was {correctAnswer}.
                </div>
            )}
        </div>
    );
};