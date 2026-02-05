// FeedbackPanel Component - Displays evaluation results and coaching feedback

import { useState } from 'react';

const FeedbackPanel = ({ evaluation, feedback, question, mode, onNextQuestion }) => {
    const [showFrameworkDetails, setShowFrameworkDetails] = useState(false);

    if (!evaluation) return null;

    const { totalScore, scoreLabel, dimensions, strengths, improvements, suggestedStructure } = evaluation;

    // Score circle color
    const getScoreClass = () => {
        if (scoreLabel.label === 'Excellent') return 'excellent';
        if (scoreLabel.label === 'Good') return 'good';
        return 'needs-improvement';
    };

    return (
        <div className="feedback-panel glass-card animate-fade-in">
            <div className="feedback-header">
                <div className="score-display">
                    <div className={`score-circle ${getScoreClass()}`}>
                        {totalScore}
                    </div>
                    <span className={`badge badge-score-${getScoreClass()}`}>
                        {scoreLabel.label}
                    </span>
                </div>

                <div style={{ flex: 1, marginLeft: '1.5rem' }}>
                    <h3 style={{ marginBottom: '0.5rem' }}>Evaluation Summary</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                        {feedback?.summary || 'Your answer has been evaluated across 5 dimensions.'}
                    </p>
                </div>
            </div>

            {/* Dimension Scores */}
            <div className="dimension-list">
                <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22,4 12,14.01 9,11.01" />
                    </svg>
                    Dimension Breakdown
                </h4>
                {dimensions.map((dim) => (
                    <div key={dim.id} className="dimension-item">
                        <div>
                            <span className="dimension-name">{dim.name}</span>
                            <div className="progress-container" style={{ width: '150px', marginTop: '0.25rem' }}>
                                <div
                                    className="progress-bar"
                                    style={{
                                        width: `${dim.percentage}%`,
                                        background: dim.percentage >= 70 ? 'var(--success)' :
                                            dim.percentage >= 50 ? 'var(--accent-primary)' : 'var(--warning)'
                                    }}
                                />
                            </div>
                        </div>
                        <span className="dimension-score" style={{
                            color: dim.percentage >= 70 ? 'var(--success)' :
                                dim.percentage >= 50 ? 'var(--accent-primary)' : 'var(--warning)'
                        }}>
                            {dim.score}/{dim.maxScore}
                        </span>
                    </div>
                ))}
            </div>

            {/* Strengths */}
            {strengths.length > 0 && (
                <div className="feedback-section">
                    <h4>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2">
                            <polyline points="20,6 9,17 4,12" />
                        </svg>
                        What You Did Well
                    </h4>
                    <ul className="feedback-list">
                        {strengths.map((strength, index) => (
                            <li key={index} style={{ borderLeft: '3px solid var(--success)', paddingLeft: '0.75rem' }}>
                                {strength}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Areas to Improve */}
            {improvements.length > 0 && (
                <div className="feedback-section">
                    <h4>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--warning)" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        Areas to Improve
                    </h4>
                    <ul className="feedback-list">
                        {improvements.map((improvement, index) => (
                            <li key={index} style={{ borderLeft: '3px solid var(--warning)', paddingLeft: '0.75rem' }}>
                                {improvement}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Suggested Framework */}
            {(mode === 'practice' || mode === 'beginner' || mode === 'feedback') && suggestedStructure && (
                <div className="feedback-section">
                    <h4 style={{ cursor: 'pointer' }} onClick={() => setShowFrameworkDetails(!showFrameworkDetails)}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <line x1="3" y1="9" x2="21" y2="9" />
                            <line x1="9" y1="21" x2="9" y2="9" />
                        </svg>
                        Suggested Structure: {suggestedStructure.name}
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            style={{
                                marginLeft: 'auto',
                                transform: showFrameworkDetails ? 'rotate(180deg)' : 'rotate(0)',
                                transition: 'transform 0.2s ease'
                            }}
                        >
                            <polyline points="6,9 12,15 18,9" />
                        </svg>
                    </h4>

                    {showFrameworkDetails && (
                        <div className="animate-fade-in" style={{
                            background: 'var(--bg-tertiary)',
                            borderRadius: 'var(--radius-md)',
                            padding: '1rem',
                            marginTop: '0.5rem'
                        }}>
                            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                {suggestedStructure.description}
                            </p>
                            <div style={{ display: 'grid', gap: '0.5rem' }}>
                                {suggestedStructure.components.map((comp, index) => (
                                    <div key={comp.id} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        padding: '0.5rem',
                                        background: 'var(--bg-glass)',
                                        borderRadius: 'var(--radius-sm)'
                                    }}>
                                        <span style={{
                                            width: '24px',
                                            height: '24px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: 'var(--accent-gradient)',
                                            borderRadius: '50%',
                                            fontSize: '0.75rem',
                                            fontWeight: '600'
                                        }}>
                                            {index + 1}
                                        </span>
                                        <div>
                                            <span style={{ fontWeight: '500', color: 'var(--text-primary)' }}>{comp.name}</span>
                                            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginLeft: '0.5rem' }}>
                                                ({comp.weight}%)
                                            </span>
                                            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '0.25rem 0 0' }}>
                                                {comp.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {suggestedStructure.tips && suggestedStructure.tips.length > 0 && (
                                <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: 'var(--radius-sm)' }}>
                                    <strong style={{ fontSize: '0.85rem', color: 'var(--accent-primary)' }}>💡 Quick Tip:</strong>
                                    <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                        {suggestedStructure.tips[0]}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}

            {/* Next Question Button */}
            {onNextQuestion && (
                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                    <button className="btn btn-primary" onClick={onNextQuestion}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12,5 19,12 12,19" />
                        </svg>
                        Next Question
                    </button>
                </div>
            )}
        </div>
    );
};

export default FeedbackPanel;
