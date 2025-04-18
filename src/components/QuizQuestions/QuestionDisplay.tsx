
export const QuestionDisplay: React.FC<{ question: string }> = ({ question }) => (
    <div className="text-lg font-medium mb-6">
        {question}
    </div>
);