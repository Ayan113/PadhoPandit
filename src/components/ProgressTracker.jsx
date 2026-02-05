// ProgressTracker Component - Session progress indicator

const ProgressTracker = ({
    currentQuestion,
    totalQuestions,
    answeredQuestions,
    categoryProgress,
    sessionStats
}) => {
    const progressPercentage = totalQuestions > 0
        ? Math.round((answeredQuestions / totalQuestions) * 100)
        : 0;

    return (
        <div className="glass-card p-lg">
            <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22,4 12,14.01 9,11.01" />
                </svg>
                Session Progress
            </h4>

            {/* Overall Progress */}
            <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                        Questions Answered
                    </span>
                    <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>
                        {answeredQuestions}/{totalQuestions}
                    </span>
                </div>
                <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${progressPercentage}%` }} />
                </div>
            </div>

            {/* Current Question Indicator */}
            <div style={{
                padding: '0.75rem',
                background: 'var(--bg-tertiary)',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1rem'
            }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                    Current Question
                </span>
                <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                    #{currentQuestion + 1}
                </span>
            </div>

            {/* Session Stats */}
            {sessionStats && (
                <div>
                    <h5 style={{ fontSize: '0.875rem', marginBottom: '0.75rem', color: 'var(--text-secondary)' }}>
                        Session Statistics
                    </h5>
                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '0.5rem',
                            background: 'var(--bg-glass)',
                            borderRadius: 'var(--radius-sm)'
                        }}>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Excellent</span>
                            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--success)' }}>
                                {sessionStats.excellent || 0}
                            </span>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '0.5rem',
                            background: 'var(--bg-glass)',
                            borderRadius: 'var(--radius-sm)'
                        }}>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Good</span>
                            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--accent-primary)' }}>
                                {sessionStats.good || 0}
                            </span>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '0.5rem',
                            background: 'var(--bg-glass)',
                            borderRadius: 'var(--radius-sm)'
                        }}>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Needs Work</span>
                            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--warning)' }}>
                                {sessionStats.needsImprovement || 0}
                            </span>
                        </div>
                    </div>

                    {/* Average Score */}
                    {sessionStats.averageScore !== undefined && (
                        <div style={{
                            marginTop: '1rem',
                            padding: '0.75rem',
                            background: 'var(--accent-gradient)',
                            borderRadius: 'var(--radius-md)',
                            textAlign: 'center'
                        }}>
                            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', display: 'block' }}>
                                Average Score
                            </span>
                            <span style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                                {sessionStats.averageScore}
                            </span>
                        </div>
                    )}
                </div>
            )}

            {/* Category Progress */}
            {categoryProgress && Object.keys(categoryProgress).length > 0 && (
                <div style={{ marginTop: '1.5rem' }}>
                    <h5 style={{ fontSize: '0.875rem', marginBottom: '0.75rem', color: 'var(--text-secondary)' }}>
                        By Category
                    </h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {Object.entries(categoryProgress).map(([category, count]) => (
                            <div
                                key={category}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    fontSize: '0.8rem',
                                    padding: '0.25rem 0'
                                }}
                            >
                                <span style={{ color: 'var(--text-muted)' }}>{category}</span>
                                <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{count}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProgressTracker;
