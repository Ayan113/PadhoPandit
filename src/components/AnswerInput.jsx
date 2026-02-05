// AnswerInput Component - Text input for user responses

import { useState, useEffect } from 'react';

const AnswerInput = ({ onSubmit, onClear, disabled, mode }) => {
    const [answer, setAnswer] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const wordCount = answer.trim().split(/\s+/).filter(Boolean).length;
    const charCount = answer.length;

    const handleSubmit = async () => {
        if (answer.trim().length < 20) return;

        setIsSubmitting(true);
        await onSubmit(answer);
        setIsSubmitting(false);
    };

    const handleClear = () => {
        setAnswer('');
        if (onClear) onClear();
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.ctrlKey && answer.trim().length >= 20) {
            handleSubmit();
        }
    };

    // Reset answer when mode changes
    useEffect(() => {
        setAnswer('');
    }, [mode]);

    return (
        <div className="answer-section">
            <label
                htmlFor="answer-input"
                style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: 'var(--text-primary)'
                }}
            >
                Your Answer
            </label>

            <textarea
                id="answer-input"
                className="input-field answer-textarea"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                    mode === 'beginner'
                        ? "Type your answer here. Take your time and focus on clarity...\n\nTip: Use the STAR framework for behavioral questions (Situation, Task, Action, Result)"
                        : "Type your answer here. Aim for clarity and structure..."
                }
                disabled={disabled || isSubmitting}
                style={{ minHeight: '180px' }}
            />

            <div className="answer-footer">
                <div className="char-count">
                    <span style={{
                        color: wordCount < 20 ? 'var(--warning)' : 'var(--text-muted)'
                    }}>
                        {wordCount} words
                    </span>
                    <span style={{ margin: '0 0.5rem', color: 'var(--text-muted)' }}>•</span>
                    <span style={{ color: 'var(--text-muted)' }}>{charCount} characters</span>
                    {wordCount < 20 && (
                        <span style={{ color: 'var(--warning)', marginLeft: '0.5rem', fontSize: '0.75rem' }}>
                            (min 20 words)
                        </span>
                    )}
                </div>

                <div className="answer-actions">
                    <button
                        className="btn btn-ghost"
                        onClick={handleClear}
                        disabled={!answer || disabled || isSubmitting}
                    >
                        Clear
                    </button>

                    <button
                        className="btn btn-primary"
                        onClick={handleSubmit}
                        disabled={answer.trim().length < 20 || disabled || isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <span className="animate-pulse">Evaluating...</span>
                            </>
                        ) : (
                            <>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="22" y1="2" x2="11" y2="13" />
                                    <polygon points="22,2 15,22 11,13 2,9 22,2" />
                                </svg>
                                Submit Answer
                            </>
                        )}
                    </button>
                </div>
            </div>

            <p style={{
                marginTop: '0.75rem',
                fontSize: '0.75rem',
                color: 'var(--text-muted)'
            }}>
                💡 Press <kbd style={{
                    background: 'var(--bg-tertiary)',
                    padding: '0.1rem 0.4rem',
                    borderRadius: '4px',
                    fontSize: '0.7rem'
                }}>Ctrl</kbd> + <kbd style={{
                    background: 'var(--bg-tertiary)',
                    padding: '0.1rem 0.4rem',
                    borderRadius: '4px',
                    fontSize: '0.7rem'
                }}>Enter</kbd> to submit
            </p>
        </div>
    );
};

export default AnswerInput;
