
import { QuizData } from "../types/quizTypes";
import React, { useState, useEffect, useRef, useCallback } from 'react';

export const useQuiz = (initialQuizData: QuizData) => {
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [timeLeft, setTimeLeft] = useState<number | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [loading, setLoading] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const [quizStarted, setQuizStarted] = useState(false);

    const currentCategory = initialQuizData.categories[currentCategoryIndex];
    const currentQuestion = currentCategory?.questions[currentQuestionIndex];
    const totalQuestions = initialQuizData.categories.reduce((acc, cat) => acc + cat.questions.length, 0);

    // --- Timer Logic ---
    useEffect(() => {
        if (quizStarted && !isPaused && timeLeft !== null && timeLeft > 0) {
            timerRef.current = setTimeout(() => {
                setTimeLeft(prevTime => (prevTime !== null ? prevTime - 1 : null));
            }, 1000);
        } else if (timeLeft === 0) {
            handleAnswerSelection(null); // Auto-submit on timeout
        }

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [timeLeft, isPaused, quizStarted, currentQuestionIndex, quizCompleted]);

    // --- Start Quiz & Initialize Timer ---
    const startQuiz = () => {
        setQuizStarted(true);
        setQuizCompleted(false);
        setScore(0);
        setCurrentCategoryIndex(0);
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        if (currentQuestion) {
            setTimeLeft(currentQuestion.timeLimit);
        }
    };

    // --- Reset Timer on Question Change ---
    useEffect(() => {
        if (quizStarted && currentQuestion) {
            setTimeLeft(currentQuestion.timeLimit);
        }
    }, [currentQuestion, currentQuestionIndex, quizStarted]);

    // --- Answer Selection & Handling ---
    const handleAnswerSelection = useCallback((answer: string | null) => {
        setSelectedAnswer(answer);
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
    }, []);

    const submitAnswer = useCallback(() => {
        if (selectedAnswer === null) return;

        if (selectedAnswer === currentQuestion?.correctAnswer) {
            setScore(prevScore => prevScore + 1);
        }

        if (currentQuestionIndex < currentCategory.questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setSelectedAnswer(null);
        } else if (currentCategoryIndex < initialQuizData.categories.length - 1) {
            setCurrentCategoryIndex(prevCategoryIndex => prevCategoryIndex + 1);
            setCurrentQuestionIndex(0);
            setSelectedAnswer(null);
        }
        else {
            setQuizCompleted(true);
            setTimeLeft(null);
        }
    }, [initialQuizData, currentCategoryIndex, currentCategory?.questions.length, currentQuestion?.correctAnswer, currentQuestionIndex]);

    // --- Restart Quiz ---
    const restartQuiz = () => {
        setQuizStarted(true);
        setQuizCompleted(false);
        setScore(0);
        setCurrentCategoryIndex(0);
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        if (currentQuestion) {
            setTimeLeft(currentQuestion.timeLimit);
        }
    };

    // --- Loading state for demonstration ---
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return {
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
    };
};