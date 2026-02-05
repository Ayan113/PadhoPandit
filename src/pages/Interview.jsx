// Interview Page - Main interview session

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

import QuestionCard from '../components/QuestionCard';
import AnswerInput from '../components/AnswerInput';
import FeedbackPanel from '../components/FeedbackPanel';
import ModelAnswerPanel from '../components/ModelAnswerPanel';
import ModeSelector from '../components/ModeSelector';
import ProgressTracker from '../components/ProgressTracker';
import CategoryNav from '../components/CategoryNav';

import { getRandomQuestion, getQuestionsByCategory, allQuestions } from '../data/questions';
import { evaluateAnswer, generateFeedback } from '../utils/evaluator';

const Interview = () => {
    const [searchParams] = useSearchParams();
    const initialCategory = searchParams.get('category');

    // Session State
    const [mode, setMode] = useState('practice');
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [sessionStarted, setSessionStarted] = useState(false);

    // Question State
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);

    // Timer State
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [timerActive, setTimerActive] = useState(false);

    // Evaluation State
    const [evaluation, setEvaluation] = useState(null);
    const [feedback, setFeedback] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);

    // Session Stats
    const [sessionStats, setSessionStats] = useState({
        excellent: 0,
        good: 0,
        needsImprovement: 0,
        totalScore: 0,
        averageScore: 0
    });
    const [categoryProgress, setCategoryProgress] = useState({});

    // Get next question
    const loadNextQuestion = useCallback(() => {
        const question = getRandomQuestion(selectedCategory);
        setCurrentQuestion(question);
        setTimeRemaining(question?.timeTarget || 60);
        setShowFeedback(false);
        setEvaluation(null);
        setFeedback(null);

        if (mode === 'mock') {
            setTimerActive(true);
        }
    }, [selectedCategory, mode]);

    // Start session
    const startSession = () => {
        setSessionStarted(true);
        loadNextQuestion();
    };

    // Timer effect
    useEffect(() => {
        let interval = null;
        if (timerActive && timeRemaining > 0) {
            interval = setInterval(() => {
                setTimeRemaining((time) => time - 1);
            }, 1000);
        } else if (timeRemaining === 0 && timerActive) {
            setTimerActive(false);
        }
        return () => clearInterval(interval);
    }, [timerActive, timeRemaining]);

    // Handle answer submission
    const handleSubmitAnswer = async (answer) => {
        setTimerActive(false);

        // Evaluate the answer
        const evalResult = evaluateAnswer(answer, currentQuestion);
        const feedbackResult = generateFeedback(evalResult, currentQuestion, mode);

        setEvaluation(evalResult);
        setFeedback(feedbackResult);
        setShowFeedback(true);

        // Update stats
        const scoreLabel = evalResult.scoreLabel.label;
        setSessionStats((prev) => {
            const newStats = { ...prev };
            if (scoreLabel === 'Excellent') newStats.excellent++;
            else if (scoreLabel === 'Good') newStats.good++;
            else newStats.needsImprovement++;

            newStats.totalScore += evalResult.totalScore;
            const totalAnswered = newStats.excellent + newStats.good + newStats.needsImprovement;
            newStats.averageScore = Math.round(newStats.totalScore / totalAnswered);

            return newStats;
        });

        // Update category progress
        setCategoryProgress((prev) => ({
            ...prev,
            [currentQuestion.category]: (prev[currentQuestion.category] || 0) + 1
        }));

        // Track answered questions
        setAnsweredQuestions((prev) => [...prev, {
            question: currentQuestion,
            answer,
            evaluation: evalResult
        }]);

        setQuestionIndex((prev) => prev + 1);
    };

    // Handle next question
    const handleNextQuestion = () => {
        loadNextQuestion();
    };

    // Handle mode change
    const handleModeChange = (newMode) => {
        setMode(newMode);
        if (sessionStarted) {
            loadNextQuestion();
        }
    };

    // Handle category change
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        if (sessionStarted) {
            loadNextQuestion();
        }
    };

    // Calculate total questions in pool
    const questionPool = selectedCategory
        ? getQuestionsByCategory(selectedCategory)
        : allQuestions;

    // Mode-specific settings
    const showHints = mode === 'practice' || mode === 'beginner';
    const showTimer = mode === 'mock';

    return (
        <div className="page">
            {/* Header */}
            <header style={{
                padding: '1rem 0',
                borderBottom: '1px solid var(--border-subtle)',
                marginBottom: '1.5rem'
            }}>
                <div className="container flex justify-between items-center">
                    <Link to="/" style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        fontFamily: 'var(--font-display)',
                        textDecoration: 'none',
                        color: 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <span>📚</span>
                        <span className="text-gradient">PadhoPandit</span>
                    </Link>

                    <div className="flex gap-md items-center">
                        <span className="badge badge-category" style={{ textTransform: 'capitalize' }}>
                            {mode} Mode
                        </span>
                        <Link to="/" className="btn btn-ghost">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9,22 9,12 15,12 15,22" />
                            </svg>
                            Home
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="container page-content">
                {!sessionStarted ? (
                    /* Pre-session: Mode and Category Selection */
                    <div className="animate-fade-in">
                        <div className="text-center mb-xl">
                            <h1 className="mb-md">Set Up Your Practice Session</h1>
                            <p className="text-muted">Choose your interview mode and focus area</p>
                        </div>

                        <ModeSelector selectedMode={mode} onModeChange={setMode} />

                        <div className="mt-xl">
                            <CategoryNav
                                selectedCategory={selectedCategory}
                                onCategoryChange={setSelectedCategory}
                            />
                        </div>

                        <div className="text-center mt-xl">
                            <p className="text-muted mb-md">
                                {questionPool.length} questions available
                            </p>
                            <button className="btn btn-primary" onClick={startSession} style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polygon points="5,3 19,12 5,21 5,3" />
                                </svg>
                                Start Session
                            </button>
                        </div>
                    </div>
                ) : (
                    /* Active Session */
                    <div className="interview-layout animate-fade-in">
                        <div className="interview-main">
                            {/* Category Filter */}
                            <CategoryNav
                                selectedCategory={selectedCategory}
                                onCategoryChange={handleCategoryChange}
                            />

                            {/* Question Card */}
                            {currentQuestion && (
                                <QuestionCard
                                    question={currentQuestion}
                                    showHints={showHints}
                                    timeRemaining={showTimer ? timeRemaining : undefined}
                                />
                            )}

                            {/* Answer Input or Feedback */}
                            {!showFeedback ? (
                                <div className="glass-card p-xl">
                                    <AnswerInput
                                        onSubmit={handleSubmitAnswer}
                                        mode={mode}
                                        disabled={showFeedback}
                                    />
                                </div>
                            ) : (
                                <>
                                    <FeedbackPanel
                                        evaluation={evaluation}
                                        feedback={feedback}
                                        question={currentQuestion}
                                        mode={mode}
                                        onNextQuestion={handleNextQuestion}
                                    />

                                    {/* Model Answer - Show ideal response */}
                                    <ModelAnswerPanel question={currentQuestion} />
                                </>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="interview-sidebar">
                            <ProgressTracker
                                currentQuestion={questionIndex}
                                totalQuestions={questionPool.length}
                                answeredQuestions={answeredQuestions.length}
                                sessionStats={answeredQuestions.length > 0 ? sessionStats : null}
                                categoryProgress={categoryProgress}
                            />

                            {/* Quick Mode Switch */}
                            <div className="glass-card p-lg">
                                <h4 style={{ marginBottom: '0.75rem', fontSize: '0.9rem' }}>Switch Mode</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {['practice', 'mock', 'feedback', 'beginner'].map((m) => (
                                        <button
                                            key={m}
                                            className={`btn ${mode === m ? 'btn-primary' : 'btn-ghost'}`}
                                            onClick={() => handleModeChange(m)}
                                            style={{
                                                padding: '0.5rem 1rem',
                                                fontSize: '0.8rem',
                                                textTransform: 'capitalize',
                                                justifyContent: 'flex-start'
                                            }}
                                        >
                                            {m === 'practice' && '📝'}
                                            {m === 'mock' && '🎯'}
                                            {m === 'feedback' && '💬'}
                                            {m === 'beginner' && '🌱'}
                                            <span style={{ marginLeft: '0.5rem' }}>{m}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* End Session */}
                            <Link
                                to="/results"
                                state={{ answeredQuestions, sessionStats, categoryProgress }}
                                className="btn btn-secondary"
                                style={{ width: '100%', justifyContent: 'center' }}
                            >
                                End Session
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Interview;
