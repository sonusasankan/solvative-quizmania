import { Timer } from 'lucide-react';

export const QuizTimer: React.FC<{ timeLeft: number | null }> = ({ timeLeft }) => {
    return (
      timeLeft !== null ? (
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Timer className="mr-1 w-4 h-4" />
          Time Left: {timeLeft} seconds
        </div>
      ) : null
    );
  };