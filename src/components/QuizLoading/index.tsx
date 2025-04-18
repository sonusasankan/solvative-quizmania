import { Loader2, BookOpen } from 'lucide-react';

export const QuizLoading: React.FC = () => (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
            Loading Quiz...
        </h2>
        <div className="flex justify-center items-center">
            <Loader2 className="animate-spin w-10 h-10 text-blue-500" />
        </div>
    </div>
);