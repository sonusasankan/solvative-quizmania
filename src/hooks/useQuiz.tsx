
import { QuizData } from "../types/quizTypes";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Question } from "../types/quizTypes";

export const useQuiz = (initialQuizData: QuizData, selectedTopic: string) => {
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
    const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);

    // --- Filter questions by selected topic ---
      useEffect(() => {
        if (quizStarted) {
            const category = initialQuizData.categories.find(cat => cat.id === selectedTopic);
            if (category) {
                setCurrentQuestions(category.questions);
                setCurrentCategoryIndex(initialQuizData.categories.findIndex(cat => cat.id === selectedTopic));
                setCurrentQuestionIndex(0);
            }
            else{
              setCurrentQuestions([]);
              setCurrentCategoryIndex(0);
              setCurrentQuestionIndex(0)
            }
        }
    }, [selectedTopic, quizStarted, initialQuizData]);

    const currentQuestion = currentQuestions[currentQuestionIndex];
    const totalQuestions = currentQuestions.length;

    // --- Timer Logic ---
    useEffect(() => {
        if (quizStarted && !isPaused && timeLeft !== null && timeLeft > 0) {
            timerRef.current = setTimeout(() => {
                setTimeLeft(prevTime => (prevTime !== null ? prevTime - 1 : null));
            }, 1000);
        } else if (timeLeft === 0) {
            handleAnswerSelection(null); // Auto-submit on timeout
            submitAnswer(true); // Pass true to indicate it's a timeout
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
        setSelectedAnswer(null);
        if (currentQuestion) {
            setTimeLeft(currentQuestion.timeLimit);
        }
    };

    // --- Reset Timer on Question Change ---
    useEffect(() => {
        if (quizStarted && currentQuestions.length > 0) {
            setTimeLeft(currentQuestions[currentQuestionIndex]?.timeLimit || 0);
        }
    }, [currentQuestionIndex, currentQuestions, quizStarted]);

    // --- Answer Selection & Handling ---
    const handleAnswerSelection = useCallback((answer: string | null) => {
        setSelectedAnswer(answer);
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
    }, []);

    const submitAnswer = useCallback((isTimeout = false) => {
        if (selectedAnswer === null && !isTimeout) return;
    
        if (selectedAnswer === currentQuestion?.correctAnswer) {
            setScore(prevScore => prevScore + 1);
        }
    
        if (currentQuestionIndex < currentQuestions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setSelectedAnswer(null);
            // Timer will be reset in the next useEffect triggered by currentQuestionIndex change
        } else {
            setQuizCompleted(true);
            setTimeLeft(null);
        }
    }, [currentQuestion?.correctAnswer, currentQuestionIndex, currentQuestions.length, selectedAnswer]);

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