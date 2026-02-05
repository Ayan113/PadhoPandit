// PadhoPandit - AI Guide Page
// Your personal mentor from Day 1 to Job Offer

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    aiGuideConfig,
    journeyPhases,
    getTodaysFocus,
    getTimeSensitiveGreeting,
    getRandomResponse,
    guideResponses
} from '../data/aiGuide';
import { roles, experienceLevels, companyTiers } from '../data/roles';

const AIGuide = () => {
    const [profile, setProfile] = useState(null);
    const [currentDay, setCurrentDay] = useState(1);
    const [todaysFocus, setTodaysFocus] = useState(null);
    const [chatMessages, setChatMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [completedTasks, setCompletedTasks] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [activeTab, setActiveTab] = useState('today'); // 'today', 'journey', 'chat'
    const chatEndRef = useRef(null);

    useEffect(() => {
        // Load profile
        const savedProfile = localStorage.getItem('padhopandit_profile');
        if (savedProfile) {
            setProfile(JSON.parse(savedProfile));
        }

        // Load progress
        const savedProgress = localStorage.getItem('padhopandit_journey');
        if (savedProgress) {
            const progress = JSON.parse(savedProgress);
            setCurrentDay(progress.currentDay || 1);
            setCompletedTasks(progress.completedTasks || []);
        }

        // Initialize chat with greeting
        setChatMessages([{
            id: 1,
            sender: 'guide',
            text: getTimeSensitiveGreeting(),
            timestamp: new Date()
        }]);
    }, []);

    useEffect(() => {
        // Update today's focus when day changes
        setTodaysFocus(getTodaysFocus(currentDay, profile));
    }, [currentDay, profile]);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatMessages]);

    const handleTaskToggle = (taskId) => {
        const newCompleted = completedTasks.includes(taskId)
            ? completedTasks.filter(id => id !== taskId)
            : [...completedTasks, taskId];

        setCompletedTasks(newCompleted);

        // Save progress
        localStorage.setItem('padhopandit_journey', JSON.stringify({
            currentDay,
            completedTasks: newCompleted
        }));

        // Celebrate if completing
        if (!completedTasks.includes(taskId)) {
            const celebration = getRandomResponse('celebration');
            addGuideMessage(celebration);
        }
    };

    const addGuideMessage = (text) => {
        setIsTyping(true);
        setTimeout(() => {
            setChatMessages(prev => [...prev, {
                id: Date.now(),
                sender: 'guide',
                text,
                timestamp: new Date()
            }]);
            setIsTyping(false);
        }, 800 + Math.random() * 700);
    };

    const handleSendMessage = () => {
        if (!inputMessage.trim()) return;

        // Add user message
        setChatMessages(prev => [...prev, {
            id: Date.now(),
            sender: 'user',
            text: inputMessage,
            timestamp: new Date()
        }]);

        const userMessage = inputMessage.toLowerCase();
        setInputMessage('');

        // Generate AI response based on context
        let response;
        if (userMessage.includes('stuck') || userMessage.includes('help') || userMessage.includes('confused')) {
            response = getRandomResponse('encouragement');
        } else if (userMessage.includes('discouraged') || userMessage.includes('hard') || userMessage.includes('give up')) {
            response = "I hear you. 💙 This journey isn't easy—if it were, everyone would do it. But you've already made it to Day " + currentDay + ". That's more than most people attempt. Take a breather, then let's tackle just ONE small thing today. Small wins build momentum.";
        } else if (userMessage.includes('thank') || userMessage.includes('done') || userMessage.includes('finished')) {
            response = getRandomResponse('celebration');
        } else if (userMessage.includes('what should') || userMessage.includes('next')) {
            const task = todaysFocus?.tasks?.find(t => !completedTasks.includes(t.id));
            response = task
                ? `Great question! Your next task is: **${task.title}** (${task.time}). This will help you ${task.type === 'learn' ? 'build understanding' : task.type === 'practice' ? 'sharpen your skills' : 'make progress'}. Ready to start?`
                : "You've completed all of today's tasks! 🎉 Either take a well-deserved break or move on to the next milestone. You're doing amazing!";
        } else if (userMessage.includes('explain') || userMessage.includes('how')) {
            response = "I'd love to help! Could you be more specific about what you're struggling with? For example:\n\n• A concept you're confused about\n• A problem you're stuck on\n• An approach you're unsure about\n\nThe more specific you are, the better I can help!";
        } else {
            response = "Got it! Here's what I suggest: stay focused on your current milestone, complete today's tasks one by one, and don't hesitate to ask if you get stuck. You're on track—keep pushing! 💪";
        }

        addGuideMessage(response);
    };

    const handleAdvanceDay = () => {
        const newDay = currentDay + 1;
        setCurrentDay(newDay);
        localStorage.setItem('padhopandit_journey', JSON.stringify({
            currentDay: newDay,
            completedTasks
        }));
        addGuideMessage(`Day ${newDay} begins! 🌅 Let's see what's on the agenda...`);
    };

    const selectedRole = profile?.role ? roles[profile.role] : null;
    const selectedTier = profile?.companyTier ? companyTiers[profile.companyTier] : null;

    const allTodayTasksComplete = todaysFocus?.tasks?.every(t => completedTasks.includes(t.id));

    return (
        <div className="page">
            {/* Navbar */}
            <nav className="navbar">
                <div className="container flex justify-between items-center">
                    <Link to="/dashboard" className="navbar-brand">
                        <span className="logo-icon">📚</span>
                        <span>PadhoPandit</span>
                    </Link>

                    <div className="nav-links">
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                        <Link to="/learn" className="nav-link">Learn</Link>
                        <Link to="/practice" className="nav-link">Practice</Link>
                        <Link to="/mentor" className="nav-link active">AI Guide</Link>
                    </div>
                </div>
            </nav>

            <div className="page-content">
                <div className="container">
                    {/* Guide Header */}
                    <div className="glass-card p-xl mb-xl" style={{
                        background: 'linear-gradient(135deg, var(--bg-elevated) 0%, var(--accent-primary-10) 100%)',
                        border: '1px solid var(--accent-primary-30)'
                    }}>
                        <div className="flex items-center gap-xl">
                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: 'var(--gradient-primary)',
                                borderRadius: 'var(--radius-xl)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2.5rem'
                            }}>
                                {aiGuideConfig.avatar}
                            </div>
                            <div style={{ flex: 1 }}>
                                <h2 style={{ marginBottom: '0.25rem' }}>
                                    {aiGuideConfig.name} • <span className="text-gradient">{aiGuideConfig.tagline}</span>
                                </h2>
                                <p className="text-secondary">{aiGuideConfig.role}</p>
                                <div className="flex items-center gap-lg mt-md">
                                    <div className="badge badge-gradient">Day {currentDay}</div>
                                    {selectedRole && (
                                        <span className="text-muted" style={{ fontSize: '0.9rem' }}>
                                            {selectedRole.icon} {selectedRole.shortName} → {selectedTier?.name}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-muted" style={{ fontSize: '0.8rem' }}>YOUR JOURNEY</div>
                                <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-primary)' }}>
                                    {Math.round((currentDay / 112) * 100)}%
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex gap-md mb-xl">
                        {['today', 'journey', 'chat'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`btn ${activeTab === tab ? 'btn-primary' : 'btn-ghost'}`}
                            >
                                {tab === 'today' && '📋 Today\'s Focus'}
                                {tab === 'journey' && '🗺️ Full Journey'}
                                {tab === 'chat' && '💬 Ask Pandit Ji'}
                            </button>
                        ))}
                    </div>

                    {/* Today's Focus Tab */}
                    {activeTab === 'today' && todaysFocus && (
                        <div className="animate-fade-in">
                            {/* Motivation */}
                            <div className="glass-card p-lg mb-xl" style={{
                                borderLeft: '4px solid var(--accent-primary)'
                            }}>
                                <p style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>
                                    "{todaysFocus.motivation}"
                                </p>
                            </div>

                            <div className="grid grid-2" style={{ gap: 'var(--spacing-xl)' }}>
                                {/* Current Milestone */}
                                <div className="glass-card p-xl">
                                    <div className="flex items-center gap-md mb-lg">
                                        <span style={{ fontSize: '2rem' }}>{todaysFocus.phase?.icon}</span>
                                        <div>
                                            <h3>{todaysFocus.milestone?.title || 'Getting Started'}</h3>
                                            <p className="text-muted">{todaysFocus.phase?.name} • {todaysFocus.phase?.duration}</p>
                                        </div>
                                    </div>

                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 'var(--spacing-md)'
                                    }}>
                                        {todaysFocus.tasks?.map((task) => (
                                            <div
                                                key={task.id}
                                                onClick={() => handleTaskToggle(task.id)}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 'var(--spacing-md)',
                                                    padding: 'var(--spacing-md)',
                                                    background: completedTasks.includes(task.id)
                                                        ? 'var(--success-soft)'
                                                        : 'var(--bg-tertiary)',
                                                    borderRadius: 'var(--radius-md)',
                                                    cursor: 'pointer',
                                                    transition: 'all var(--transition-fast)'
                                                }}
                                            >
                                                <div style={{
                                                    width: '24px',
                                                    height: '24px',
                                                    borderRadius: '50%',
                                                    border: completedTasks.includes(task.id)
                                                        ? 'none'
                                                        : '2px solid var(--border-default)',
                                                    background: completedTasks.includes(task.id)
                                                        ? 'var(--success)'
                                                        : 'transparent',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: 'white',
                                                    fontSize: '0.75rem',
                                                    flexShrink: 0
                                                }}>
                                                    {completedTasks.includes(task.id) && '✓'}
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <div style={{
                                                        fontWeight: '500',
                                                        textDecoration: completedTasks.includes(task.id)
                                                            ? 'line-through'
                                                            : 'none',
                                                        color: completedTasks.includes(task.id)
                                                            ? 'var(--text-muted)'
                                                            : 'var(--text-primary)'
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

                                    {allTodayTasksComplete && (
                                        <button
                                            className="btn btn-primary w-full mt-lg"
                                            onClick={handleAdvanceDay}
                                        >
                                            ✅ Complete Day {currentDay} → Start Day {currentDay + 1}
                                        </button>
                                    )}
                                </div>

                                {/* Quick Chat */}
                                <div className="glass-card p-xl">
                                    <h3 className="mb-lg">💬 Quick Questions?</h3>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 'var(--spacing-sm)'
                                    }}>
                                        {[
                                            "I'm stuck on a concept",
                                            "What should I do next?",
                                            "I finished my tasks!",
                                            "I'm feeling discouraged"
                                        ].map((q) => (
                                            <button
                                                key={q}
                                                className="btn btn-secondary text-left"
                                                style={{ justifyContent: 'flex-start' }}
                                                onClick={() => {
                                                    setInputMessage(q);
                                                    setActiveTab('chat');
                                                }}
                                            >
                                                {q}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="mt-xl pt-lg" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                                        <h4 className="mb-md">🏆 Milestone Reward</h4>
                                        <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
                                            Complete all tasks to earn:
                                        </p>
                                        <div style={{
                                            marginTop: 'var(--spacing-md)',
                                            padding: 'var(--spacing-md)',
                                            background: 'var(--warning-soft)',
                                            borderRadius: 'var(--radius-md)',
                                            textAlign: 'center',
                                            fontWeight: '600'
                                        }}>
                                            {todaysFocus.milestone?.reward || '🎯 Progress Made!'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Journey Tab */}
                    {activeTab === 'journey' && (
                        <div className="animate-fade-in">
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2xl)' }}>
                                {Object.entries(journeyPhases).map(([phaseId, phase]) => {
                                    const phaseStartDay = phase.milestones[0]?.day || 0;
                                    const phaseEndDay = phase.milestones[phase.milestones.length - 1]?.day +
                                        (phase.milestones[phase.milestones.length - 1]?.duration || 1);
                                    const isCurrentPhase = currentDay >= phaseStartDay && currentDay < phaseEndDay;
                                    const isPastPhase = currentDay >= phaseEndDay;

                                    return (
                                        <div key={phaseId} className="glass-card p-xl" style={{
                                            borderLeft: `4px solid ${phase.color}`,
                                            opacity: isPastPhase ? 0.7 : 1
                                        }}>
                                            <div className="flex items-center gap-lg mb-lg">
                                                <span style={{ fontSize: '2.5rem' }}>{phase.icon}</span>
                                                <div>
                                                    <h3 style={{ color: phase.color }}>{phase.name}</h3>
                                                    <p className="text-muted">{phase.duration} • {phase.description}</p>
                                                </div>
                                                {isPastPhase && (
                                                    <span className="badge badge-success" style={{ marginLeft: 'auto' }}>
                                                        ✓ Completed
                                                    </span>
                                                )}
                                                {isCurrentPhase && (
                                                    <span className="badge badge-gradient" style={{ marginLeft: 'auto' }}>
                                                        🔥 Current
                                                    </span>
                                                )}
                                            </div>

                                            <div className="grid grid-3" style={{ gap: 'var(--spacing-md)' }}>
                                                {phase.milestones.map((milestone) => {
                                                    const isCurrent = currentDay >= milestone.day &&
                                                        currentDay < milestone.day + (milestone.duration || 1);
                                                    const isPast = currentDay >= milestone.day + (milestone.duration || 1);

                                                    return (
                                                        <div
                                                            key={milestone.id}
                                                            style={{
                                                                padding: 'var(--spacing-md)',
                                                                background: isCurrent
                                                                    ? 'var(--accent-primary-10)'
                                                                    : 'var(--bg-tertiary)',
                                                                borderRadius: 'var(--radius-md)',
                                                                border: isCurrent
                                                                    ? '1px solid var(--accent-primary-30)'
                                                                    : '1px solid transparent'
                                                            }}
                                                        >
                                                            <div className="flex items-center gap-sm mb-sm">
                                                                <span style={{ fontSize: '1.25rem' }}>
                                                                    {isPast ? '✅' : isCurrent ? '🔥' : '🔒'}
                                                                </span>
                                                                <span style={{
                                                                    fontWeight: '600',
                                                                    fontSize: '0.9rem'
                                                                }}>
                                                                    {milestone.title}
                                                                </span>
                                                            </div>
                                                            <p className="text-muted" style={{ fontSize: '0.8rem' }}>
                                                                Day {milestone.day}{milestone.duration ? `-${milestone.day + milestone.duration - 1}` : ''}
                                                            </p>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Chat Tab */}
                    {activeTab === 'chat' && (
                        <div className="animate-fade-in">
                            <div className="glass-card" style={{
                                height: '60vh',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                {/* Chat Messages */}
                                <div style={{
                                    flex: 1,
                                    overflowY: 'auto',
                                    padding: 'var(--spacing-xl)'
                                }}>
                                    {chatMessages.map((msg) => (
                                        <div
                                            key={msg.id}
                                            style={{
                                                display: 'flex',
                                                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                                marginBottom: 'var(--spacing-md)'
                                            }}
                                        >
                                            {msg.sender === 'guide' && (
                                                <div style={{
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '50%',
                                                    background: 'var(--gradient-primary)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginRight: 'var(--spacing-sm)',
                                                    fontSize: '1.25rem',
                                                    flexShrink: 0
                                                }}>
                                                    {aiGuideConfig.avatar}
                                                </div>
                                            )}
                                            <div style={{
                                                maxWidth: '70%',
                                                padding: 'var(--spacing-md) var(--spacing-lg)',
                                                borderRadius: 'var(--radius-lg)',
                                                background: msg.sender === 'user'
                                                    ? 'var(--gradient-primary)'
                                                    : 'var(--bg-tertiary)',
                                                color: msg.sender === 'user'
                                                    ? 'white'
                                                    : 'var(--text-primary)'
                                            }}>
                                                <div style={{
                                                    whiteSpace: 'pre-wrap',
                                                    lineHeight: '1.5'
                                                }}>
                                                    {msg.text}
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {isTyping && (
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                                            <div style={{
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '50%',
                                                background: 'var(--gradient-primary)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.25rem'
                                            }}>
                                                {aiGuideConfig.avatar}
                                            </div>
                                            <div style={{
                                                padding: 'var(--spacing-md)',
                                                background: 'var(--bg-tertiary)',
                                                borderRadius: 'var(--radius-lg)',
                                                color: 'var(--text-muted)'
                                            }}>
                                                Pandit Ji is typing...
                                            </div>
                                        </div>
                                    )}
                                    <div ref={chatEndRef} />
                                </div>

                                {/* Input */}
                                <div style={{
                                    padding: 'var(--spacing-lg)',
                                    borderTop: '1px solid var(--border-subtle)',
                                    display: 'flex',
                                    gap: 'var(--spacing-md)'
                                }}>
                                    <input
                                        type="text"
                                        value={inputMessage}
                                        onChange={(e) => setInputMessage(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                        placeholder="Ask Pandit Ji anything..."
                                        style={{
                                            flex: 1,
                                            padding: 'var(--spacing-md) var(--spacing-lg)',
                                            background: 'var(--bg-tertiary)',
                                            border: '1px solid var(--border-default)',
                                            borderRadius: 'var(--radius-lg)',
                                            color: 'var(--text-primary)',
                                            fontSize: '1rem'
                                        }}
                                    />
                                    <button
                                        className="btn btn-primary"
                                        onClick={handleSendMessage}
                                        disabled={!inputMessage.trim()}
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AIGuide;
