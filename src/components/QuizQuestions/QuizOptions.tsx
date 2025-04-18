export const QuizOptions: React.FC<{
    options: string[];
    selectedAnswer: string | null;
    onAnswerChange: (answer: string | null) => void;
}> = ({ options, selectedAnswer, onAnswerChange }) => (
    <div className="space-y-4">
        {options.map((option, index) => {
            const optionLetter = String.fromCharCode(65 + index); // A, B, C, D
            return (
                <div key={optionLetter} className="flex items-center">
                    <input
                        type="radio"
                        id={`option-${optionLetter}`}
                        value={optionLetter}
                        checked={selectedAnswer === optionLetter}
                        onChange={() => onAnswerChange(optionLetter)}
                        className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label htmlFor={`option-${optionLetter}`} className="text-lg">
                        {option}
                    </label>
                </div>
            );
        })}
    </div>
);