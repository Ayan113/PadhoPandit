// Model Answer Panel - Displays the ideal answer for a question

import { useState } from 'react';

const ModelAnswerPanel = ({ question }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    if (!question?.modelAnswer) {
        return null;
    }

    const { modelAnswer } = question;

    return (
        <div className="glass-card p-xl animate-fade-in">
            {/* Header */}
            <div
                className="flex justify-between items-center"
                style={{ cursor: 'pointer' }}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-center gap-md">
                    <span style={{ fontSize: '1.5rem' }}>📝</span>
                    <div>
                        <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Model Answer</h3>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                            Framework: {modelAnswer.structure}
                        </span>
                    </div>
                </div>
                <button
                    className="btn btn-ghost"
                    style={{ padding: '0.5rem' }}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{
                            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease'
                        }}
                    >
                        <polyline points="6,9 12,15 18,9" />
                    </svg>
                </button>
            </div>

            {/* Collapsed Preview */}
            {!isExpanded && (
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    marginTop: '0.75rem',
                    fontStyle: 'italic'
                }}>
                    Click to reveal the ideal answer structured using the {modelAnswer.structure} framework...
                </p>
            )}

            {/* Expanded Content */}
            {isExpanded && (
                <div className="mt-lg">
                    {/* The Answer */}
                    <div style={{
                        background: 'var(--bg-tertiary)',
                        borderRadius: 'var(--radius-md)',
                        padding: '1.5rem',
                        marginBottom: '1.5rem',
                        borderLeft: '4px solid var(--accent-primary)'
                    }}>
                        <div style={{
                            color: 'var(--text-primary)',
                            fontSize: '0.95rem',
                            lineHeight: '1.8',
                            whiteSpace: 'pre-line'
                        }}>
                            {formatAnswer(modelAnswer.answer)}
                        </div>
                    </div>

                    {/* Key Takeaways */}
                    <div>
                        <h4 style={{
                            fontSize: '0.9rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '0.75rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <span style={{ color: 'var(--success)' }}>✓</span>
                            Key Takeaways for AI Scoring
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {modelAnswer.keyTakeaways.map((takeaway, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '0.5rem',
                                    fontSize: '0.85rem',
                                    color: 'var(--text-secondary)'
                                }}>
                                    <span style={{
                                        color: 'var(--accent-primary)',
                                        fontWeight: '600',
                                        minWidth: '1.5rem'
                                    }}>
                                        {index + 1}.
                                    </span>
                                    {takeaway}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Framework Tips */}
                    <div style={{
                        marginTop: '1.5rem',
                        padding: '1rem',
                        background: 'rgba(99, 102, 241, 0.1)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid rgba(99, 102, 241, 0.2)'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '0.75rem'
                        }}>
                            <span style={{ fontSize: '1rem' }}>💡</span>
                            <span style={{
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                color: 'var(--text-primary)'
                            }}>
                                {modelAnswer.structure} Framework Tips
                            </span>
                        </div>
                        <p style={{
                            fontSize: '0.8rem',
                            color: 'var(--text-secondary)',
                            margin: 0,
                            lineHeight: '1.6'
                        }}>
                            {getFrameworkTip(modelAnswer.structure)}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

// Format the answer with markdown-like styling
const formatAnswer = (answer) => {
    // Convert **bold** syntax to styled spans
    return answer.split('\n').map((line, i) => {
        // Handle bold text
        const parts = line.split(/\*\*(.*?)\*\*/g);

        if (parts.length === 1) {
            return <div key={i}>{line || <br />}</div>;
        }

        return (
            <div key={i}>
                {parts.map((part, j) => (
                    j % 2 === 1
                        ? <strong key={j} style={{ color: 'var(--accent-primary)' }}>{part}</strong>
                        : <span key={j}>{part}</span>
                ))}
            </div>
        );
    });
};

// Framework-specific tips
const getFrameworkTip = (framework) => {
    const tips = {
        STAR: 'The STAR framework (Situation, Task, Action, Result) is ideal for behavioral questions. AI systems look for clear structure - start with context, specify your role, describe concrete actions, and quantify results when possible.',
        TECHNICAL: 'For technical questions, AI systems score clarity and accuracy. Define concepts first, provide examples, compare alternatives, and mention real-world applications. Structure your answer logically with clear sections.',
        SCENARIO: 'Scenario questions test judgment and problem-solving. AI systems look for systematic thinking - show your decision-making process, consider multiple options, and explain why you chose your approach. Include stakeholder communication.'
    };
    return tips[framework] || 'Structure your answer clearly with a beginning, middle, and end.';
};

export default ModelAnswerPanel;
