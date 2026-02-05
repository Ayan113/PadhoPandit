// QuestionCard Component - Displays interview question with metadata

import { useState, useEffect } from 'react';

const QuestionCard = ({ question, showHints, onVariationChange, timeRemaining }) => {
    const [currentVariation, setCurrentVariation] = useState(0);
    const [showAllHints, setShowAllHints] = useState(false);

    const displayQuestion = currentVariation === 0
        ? question.question
        : question.variations[currentVariation - 1];

    const handleVariationChange = (index) => {
        setCurrentVariation(index);
        if (onVariationChange) onVariationChange(index);
    };

    // Format time remaining
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    // Timer warning class
    const getTimerClass = () => {
        if (timeRemaining <= 15) return 'timer danger';
        if (timeRemaining <= 30) return 'timer warning';
        return 'timer';
    };

    return (
        <div className="question-card glass-card animate-fade-in">
            <div className="question-header">
                <div className="question-meta">
                    <span className="badge badge-category">{question.category}</span>
                    <span className={`badge badge-difficulty-${question.difficulty}`}>
                        {question.difficulty}
                    </span>
                </div>

                {timeRemaining !== undefined && (
                    <div className={getTimerClass()}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12,6 12,12 16,14" />
                        </svg>
                        {formatTime(timeRemaining)}
                    </div>
                )}
            </div>

            <p className="question-text">{displayQuestion}</p>

            {/* Variation selector */}
            {question.variations && question.variations.length > 0 && (
                <div className="variation-selector mt-md">
                    <span className="text-muted" style={{ fontSize: '0.875rem', marginRight: '0.5rem' }}>
                        Question phrasing:
                    </span>
                    <div className="flex gap-sm" style={{ flexWrap: 'wrap' }}>
                        <button
                            className={`btn btn-ghost ${currentVariation === 0 ? 'active' : ''}`}
                            onClick={() => handleVariationChange(0)}
                            style={{
                                padding: '0.25rem 0.75rem',
                                fontSize: '0.75rem',
                                background: currentVariation === 0 ? 'var(--accent-primary)' : 'transparent',
                                color: currentVariation === 0 ? 'white' : 'var(--text-secondary)'
                            }}
                        >
                            Original
                        </button>
                        {question.variations.map((_, index) => (
                            <button
                                key={index}
                                className={`btn btn-ghost ${currentVariation === index + 1 ? 'active' : ''}`}
                                onClick={() => handleVariationChange(index + 1)}
                                style={{
                                    padding: '0.25rem 0.75rem',
                                    fontSize: '0.75rem',
                                    background: currentVariation === index + 1 ? 'var(--accent-primary)' : 'transparent',
                                    color: currentVariation === index + 1 ? 'white' : 'var(--text-secondary)'
                                }}
                            >
                                Variation {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Hints section */}
            {showHints && question.hints && question.hints.length > 0 && (
                <div className="mt-lg">
                    <button
                        className="btn btn-ghost"
                        onClick={() => setShowAllHints(!showAllHints)}
                        style={{ marginBottom: '0.5rem' }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                            <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                        {showAllHints ? 'Hide Hints' : 'Show Hints'}
                    </button>

                    {showAllHints && (
                        <div className="question-hint animate-fade-in">
                            <strong style={{ display: 'block', marginBottom: '0.5rem' }}>💡 Hints:</strong>
                            <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                                {question.hints.map((hint, index) => (
                                    <li key={index} style={{ marginBottom: '0.25rem', color: 'var(--text-secondary)' }}>
                                        {hint}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}

            {/* Target time indicator */}
            <div className="mt-lg" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                </svg>
                <span className="text-muted" style={{ fontSize: '0.875rem' }}>
                    Target: {question.timeTarget} seconds
                </span>
                <span className="text-muted" style={{ fontSize: '0.875rem', marginLeft: 'auto' }}>
                    Framework: <span className="text-accent">{question.idealFramework}</span>
                </span>
            </div>
        </div>
    );
};

export default QuestionCard;
