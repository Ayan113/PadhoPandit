// PadhoPandit - Dashboard Page
// Main hub after onboarding with personalized roadmap overview

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { roles, experienceLevels, companyTiers } from '../data/roles';

const Dashboard = () => {
    const location = useLocation();
    const [profile, setProfile] = useState(null);
    const [progress, setProgress] = useState({
        overall: 0,
        streak: 0,
        completedTopics: 0,
        totalTopics: 24,
        hoursLearned: 0
    });
    const [todaysTasks, setTodaysTasks] = useState([]);
    const [showWelcome, setShowWelcome] = useState(false);

    useEffect(() => {
        // Load profile from localStorage or location state
        const savedProfile = localStorage.getItem('padhopandit_profile');
        if (savedProfile) {
            setProfile(JSON.parse(savedProfile));
        }

        // Check if new user
        if (location.state?.newUser) {
            setShowWelcome(true);
            setTimeout(() => setShowWelcome(false), 4000);
        }

        // Load or initialize progress
        const savedProgress = localStorage.getItem('padhopandit_progress');
        if (savedProgress) {
            setProgress(JSON.parse(savedProgress));
        }

        // Generate today's tasks
        generateTodaysTasks();
    }, [location]);

    const generateTodaysTasks = () => {
        const tasks = [
            { id: 1, type: 'learn', title: 'Complete Arrays & Hashing basics', time: '30 mins', done: false },
            { id: 2, type: 'practice', title: 'Solve 3 Easy problems on Two Pointers', time: '45 mins', done: false },
            { id: 3, type: 'project', title: 'Work on Todo App project', time: '1 hour', done: false },
            { id: 4, type: 'review', title: 'Review yesterday\'s concepts', time: '15 mins', done: false }
        ];
        setTodaysTasks(tasks);
    };

    const toggleTask = (taskId) => {
        setTodaysTasks(prev => prev.map(task =>
            task.id === taskId ? { ...task, done: !task.done } : task
        ));
    };

    const selectedRole = profile?.role ? roles[profile.role] : null;
    const selectedTier = profile?.companyTier ? companyTiers[profile.companyTier] : null;
    const selectedLevel = profile?.experienceLevel ? experienceLevels[profile.experienceLevel] : null;

    const completedTasks = todaysTasks.filter(t => t.done).length;
    const taskProgress = (completedTasks / todaysTasks.length) * 100;

    const milestones = [
        { id: 1, title: 'Programming Fundamentals', status: 'completed', duration: 'Week 1-2' },
        { id: 2, title: 'Data Structures Basics', status: 'current', duration: 'Week 3-4', progress: 60 },
        { id: 3, title: 'Algorithms', status: 'locked', duration: 'Week 5-7' },
        { id: 4, title: 'System Design Intro', status: 'locked', duration: 'Week 8-9' },
        { id: 5, title: 'Interview Prep', status: 'locked', duration: 'Week 10-12' }
    ];

    return (
        <div className="page">
            {/* Welcome Toast */}
            {showWelcome && (
                <div style={{
                    position: 'fixed',
                    top: 'var(--spacing-xl)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--gradient-primary)',
                    padding: 'var(--spacing-md) var(--spacing-xl)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-lg)',
                    zIndex: 1000,
                    animation: 'fadeInDown 0.5s ease'
                }}>
                    <span style={{ fontSize: '1.125rem', fontWeight: '600' }}>
                        🎉 Welcome to PadhoPandit! Your roadmap is ready.
                    </span>
                </div>
            )}

            {/* Navbar */}
            <nav className="navbar">
                <div className="container flex justify-between items-center">
                    <Link to="/" className="navbar-brand">
                        <span className="logo-icon">📚</span>
                        <span>PadhoPandit</span>
                    </Link>

                    <div className="nav-links">
                        <Link to="/dashboard" className="nav-link active">Dashboard</Link>
                        <Link to="/learn" className="nav-link">Learn</Link>
                        <Link to="/practice" className="nav-link">Practice</Link>
                        <Link to="/mentor" className="nav-link">AI Mentor</Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="page-content">
                <div className="container">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-2xl" style={{ flexWrap: 'wrap', gap: 'var(--spacing-lg)' }}>
                        <div>
                            <h1 className="mb-sm">
                                Welcome back! <span style={{ fontSize: '2.5rem' }}>👋</span>
                            </h1>
                            <p className="text-secondary" style={{ fontSize: '1.125rem' }}>
                                You're on track to become a {selectedRole?.name || 'Developer'}. Keep going!
                            </p>
                        </div>

                        {/* Profile Card */}
                        {profile && (
                            <div className="glass-card p-lg flex items-center gap-lg">
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    background: 'var(--gradient-primary)',
                                    borderRadius: 'var(--radius-lg)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem'
                                }}>
                                    {selectedRole?.icon || '👤'}
                                </div>
                                <div>
                                    <div style={{ fontWeight: '600' }}>{selectedRole?.shortName}</div>
                                    <div className="text-muted" style={{ fontSize: '0.875rem' }}>
                                        {selectedTier?.name}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-4 mb-2xl" style={{ gap: 'var(--spacing-lg)' }}>
                        <div className="glass-card stat-card">
                            <div style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>📈</div>
                            <div className="stat-value">{progress.overall}%</div>
                            <div className="stat-label">Overall Progress</div>
                        </div>
                        <div className="glass-card stat-card">
                            <div style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>🔥</div>
                            <div className="stat-value">{progress.streak}</div>
                            <div className="stat-label">Day Streak</div>
                        </div>
                        <div className="glass-card stat-card">
                            <div style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>✅</div>
                            <div className="stat-value">{progress.completedTopics}/{progress.totalTopics}</div>
                            <div className="stat-label">Topics Completed</div>
                        </div>
                        <div className="glass-card stat-card">
                            <div style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>⏱️</div>
                            <div className="stat-value">{progress.hoursLearned}h</div>
                            <div className="stat-label">Hours Learned</div>
                        </div>
                    </div>

                    <div className="grid grid-2" style={{ gap: 'var(--spacing-xl)' }}>
                        {/* Today's Tasks */}
                        <div className="glass-card p-xl">
                            <div className="flex justify-between items-center mb-lg">
                                <h3>Today's Tasks</h3>
                                <span className="badge badge-primary">{completedTasks}/{todaysTasks.length} done</span>
                            </div>

                            <div className="progress-container mb-lg">
                                <div className="progress-bar" style={{ width: `${taskProgress}%` }} />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                                {todaysTasks.map((task) => (
                                    <div
                                        key={task.id}
                                        onClick={() => toggleTask(task.id)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 'var(--spacing-md)',
                                            padding: 'var(--spacing-md)',
                                            background: task.done ? 'var(--success-soft)' : 'var(--bg-tertiary)',
                                            borderRadius: 'var(--radius-md)',
                                            cursor: 'pointer',
                                            transition: 'all var(--transition-fast)'
                                        }}
                                    >
                                        <div style={{
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '50%',
                                            border: task.done ? 'none' : '2px solid var(--border-default)',
                                            background: task.done ? 'var(--success)' : 'transparent',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontSize: '0.75rem'
                                        }}>
                                            {task.done && '✓'}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{
                                                fontWeight: '500',
                                                textDecoration: task.done ? 'line-through' : 'none',
                                                color: task.done ? 'var(--text-muted)' : 'var(--text-primary)'
                                            }}>
                                                {task.title}
                                            </div>
                                            <div className="text-muted" style={{ fontSize: '0.8rem' }}>
                                                {task.time}
                                            </div>
                                        </div>
                                        <span className="tag" style={{
                                            textTransform: 'capitalize',
                                            fontSize: '0.7rem'
                                        }}>
                                            {task.type}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Roadmap Timeline */}
                        <div className="glass-card p-xl">
                            <div className="flex justify-between items-center mb-lg">
                                <h3>Your Roadmap</h3>
                                <Link to="/learn" className="btn btn-ghost btn-sm">
                                    View Full →
                                </Link>
                            </div>

                            <div className="timeline">
                                {milestones.map((milestone) => (
                                    <div
                                        key={milestone.id}
                                        className={`timeline-item ${milestone.status}`}
                                    >
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                            marginBottom: 'var(--spacing-sm)'
                                        }}>
                                            <div style={{ fontWeight: '600' }}>{milestone.title}</div>
                                            <span className="text-muted" style={{ fontSize: '0.75rem' }}>
                                                {milestone.duration}
                                            </span>
                                        </div>

                                        {milestone.status === 'current' && (
                                            <div style={{ marginTop: 'var(--spacing-sm)' }}>
                                                <div className="progress-container" style={{ height: '4px' }}>
                                                    <div
                                                        className="progress-bar"
                                                        style={{ width: `${milestone.progress}%` }}
                                                    />
                                                </div>
                                                <div className="text-muted" style={{ fontSize: '0.75rem', marginTop: '4px' }}>
                                                    {milestone.progress}% complete
                                                </div>
                                            </div>
                                        )}

                                        {milestone.status === 'completed' && (
                                            <span className="badge badge-success" style={{ fontSize: '0.65rem' }}>
                                                ✓ Completed
                                            </span>
                                        )}

                                        {milestone.status === 'locked' && (
                                            <span className="text-muted" style={{ fontSize: '0.8rem' }}>
                                                🔒 Locked
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="mt-2xl">
                        <h3 className="mb-lg">Quick Actions</h3>
                        <div className="grid grid-4" style={{ gap: 'var(--spacing-lg)' }}>
                            <Link to="/learn" className="glass-card p-lg text-center" style={{ textDecoration: 'none' }}>
                                <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>📖</div>
                                <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Continue Learning</div>
                                <div className="text-muted" style={{ fontSize: '0.8rem' }}>Pick up where you left off</div>
                            </Link>

                            <Link to="/practice" className="glass-card p-lg text-center" style={{ textDecoration: 'none' }}>
                                <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>💻</div>
                                <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Practice Problems</div>
                                <div className="text-muted" style={{ fontSize: '0.8rem' }}>Solve DSA questions</div>
                            </Link>

                            <Link to="/interview" className="glass-card p-lg text-center" style={{ textDecoration: 'none' }}>
                                <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>🎤</div>
                                <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Mock Interview</div>
                                <div className="text-muted" style={{ fontSize: '0.8rem' }}>Practice with AI</div>
                            </Link>

                            <Link to="/mentor" className="glass-card p-lg text-center" style={{ textDecoration: 'none' }}>
                                <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>🤖</div>
                                <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Ask AI Mentor</div>
                                <div className="text-muted" style={{ fontSize: '0.8rem' }}>Get help anytime</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
