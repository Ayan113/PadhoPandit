// ModeSelector Component - Interview mode selection

const modes = [
    {
        id: 'practice',
        name: 'Practice Mode',
        icon: '📝',
        description: 'Get hints and structure guidance while you practice',
        features: ['Show hints', 'Framework tips', 'Detailed feedback']
    },
    {
        id: 'mock',
        name: 'Mock Interview',
        icon: '🎯',
        description: 'Simulate a real interview experience',
        features: ['Timed responses', 'No hints', 'Full evaluation']
    },
    {
        id: 'feedback',
        name: 'Feedback Mode',
        icon: '💬',
        description: 'Get detailed improvement insights on your answers',
        features: ['Deep analysis', 'Framework breakdown', 'Coaching tips']
    },
    {
        id: 'beginner',
        name: 'Beginner Mode',
        icon: '🌱',
        description: 'Extra simplification and examples for newcomers',
        features: ['Extended hints', 'Examples shown', 'Gentle feedback']
    }
];

const ModeSelector = ({ selectedMode, onModeChange }) => {
    return (
        <div className="mode-selector">
            <h3 style={{ marginBottom: '1rem', textAlign: 'center' }}>Select Interview Mode</h3>
            <div className="grid grid-4" style={{ gap: '1rem' }}>
                {modes.map((mode) => (
                    <div
                        key={mode.id}
                        className={`mode-card glass-card ${selectedMode === mode.id ? 'active' : ''}`}
                        onClick={() => onModeChange(mode.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && onModeChange(mode.id)}
                    >
                        <div className="mode-icon">{mode.icon}</div>
                        <h3>{mode.name}</h3>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                            {mode.description}
                        </p>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.25rem'
                        }}>
                            {mode.features.map((feature, index) => (
                                <li key={index} style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--text-muted)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.25rem'
                                }}>
                                    <span style={{ color: 'var(--accent-primary)' }}>✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { modes };
export default ModeSelector;
