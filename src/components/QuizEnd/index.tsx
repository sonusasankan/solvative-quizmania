export const QuizEnd: React.FC<{ score: number; totalQuestions: number; onRestart: () => void }> = ({ score, totalQuestions, onRestart }) => (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">
            Quiz Completed!
        </h2>
        <p className="text-gray-600 mb-2">
            Your final score:
        </p>
        <p className="text-4xl font-semibold text-blue-600 mb-6">{score} / {totalQuestions}</p>
        <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onRestart}
        >
            Restart Quiz
        </button>
    </div>
);