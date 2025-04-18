export interface Question {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
    timeLimit: number; // in seconds
}

export interface Category {
    id: string;
    name: string;
    questions: Question[];
}

export interface QuizData {
    categories: Category[];
}