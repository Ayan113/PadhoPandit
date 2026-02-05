// Roadmap Page - Day-by-day preparation visualization

import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { roadmaps, getRoadmapById, getDayContent, getProgressStats } from '../data/roadmaps';

const Roadmap = () => {
    const { roadmapId } = useParams();
    const [selectedRoadmap, setSelectedRoadmap] = useState(null);
    const [currentDay, setCurrentDay] = useState(1);
    const [completedDays, setCompletedDays] = useState([]);

    useEffect(() => {
        if (roadmapId) {
            const roadmap = getRoadmapById(roadmapId);
            setSelectedRoadmap(roadmap);
        }
    }, [roadmapId]);

    useEffect(() => {
        // Load progress from localStorage
        const saved = localStorage.getItem(`roadmap-${roadmapId}-progress`);
        if (saved) {
            setCompletedDays(JSON.parse(saved));
        }
    }, [roadmapId]);

    const toggleDayComplete = (day) => {
        let newCompleted;
        if (completedDays.includes(day)) {
            newCompleted = completedDays.filter(d => d !== day);
        } else {
            newCompleted = [...completedDays, day];
        }
        setCompletedDays(newCompleted);
        localStorage.setItem(`roadmap-${roadmapId}-progress`, JSON.stringify(newCompleted));
    };

    // Roadmap selection view
    if (!selectedRoadmap) {
        return (
            <div className="page">
                <header style={{
                    padding: '1rem 0',
                    borderBottom: '1px solid var(--border-subtle)',
                    marginBottom: '2rem'
                }}>
                    <div className="container flex justify-between items-center">
                        <Link to="/" style={{
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            fontFamily: 'var(--font-display)',
                            textDecoration: 'none',
                            color: 'var(--text-primary)'
                        }}>
                            <span className="text-gradient">Interview</span>Prep
                        </Link>
                        <Link to="/companies" className="btn btn-ghost">
                            ← Back to Companies
                        </Link>
                    </div>
                </header>

                <div className="container page-content">
                    <div className="text-center mb-xl animate-fade-in">
                        <h1 className="hero-title">
                            Choose Your <span className="text-gradient">Roadmap</span>
                        </h1>
                        <p className="hero-subtitle">
                            Select a preparation track based on your target and timeline
                        </p>
                    </div>

                    <div className="grid grid-3 gap-xl">
                        {Object.values(roadmaps).map(roadmap => (
                            <Link
                                to={`/roadmap/${roadmap.id}`}
                                key={roadmap.id}
                                className="glass-card p-xl"
                                style={{ textDecoration: 'none' }}
                            >
                                <div style={{
                                    fontSize: '4rem',
                                    marginBottom: '1rem',
                                    textAlign: 'center'
                                }}>
                                    {roadmap.icon}
                                </div>

                                <h2 style={{
                                    textAlign: 'center',
                                    marginBottom: '0.5rem',
                                    color: 'var(--text-primary)'
                                }}>
                                    {roadmap.name}
                                </h2>

                                <p style={{
                                    textAlign: 'center',
                                    color: 'var(--text-secondary)',
                                    marginBottom: '1.5rem',
                                    fontSize: '0.9rem'
                                }}>
                                    {roadmap.description}
                                </p>

                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: '0.75rem',
                                    marginBottom: '1.5rem'
                                }}>
                                    <span className="badge badge-difficulty">
                                        {roadmap.duration} Days
                                    </span>
                                    <span className="badge badge-category">
                                        {roadmap.difficulty}
                                    </span>
                                </div>

                                <div style={{
                                    fontSize: '0.8rem',
                                    color: 'var(--text-muted)',
                                    textAlign: 'center'
                                }}>
                                    <strong>Target:</strong> {roadmap.targetCompanies.slice(0, 3).join(', ')}
                                    {roadmap.targetCompanies.length > 3 && '...'}
                                </div>

                                <button className="btn btn-primary" style={{
                                    width: '100%',
                                    marginTop: '1.5rem'
                                }}>
                                    Start This Roadmap
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Roadmap detail view
    const progress = getProgressStats(roadmapId, completedDays);
    const currentDayContent = getDayContent(roadmapId, currentDay);

    return (
        <div className="page">
            <header style={{
                padding: '1rem 0',
                borderBottom: '1px solid var(--border-subtle)',
                marginBottom: '2rem'
            }}>
                <div className="container flex justify-between items-center">
                    <Link to="/" style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        fontFamily: 'var(--font-display)',
                        textDecoration: 'none',
                        color: 'var(--text-primary)'
                    }}>
                        <span className="text-gradient">Interview</span>Prep
                    </Link>
                    <Link to="/roadmap" className="btn btn-ghost">
                        ← All Roadmaps
                    </Link>
                </div>
            </header>

            <div className="container page-content">
                {/* Roadmap Header */}
                <div className="glass-card p-xl mb-lg animate-fade-in">
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <div style={{ fontSize: '4rem' }}>{selectedRoadmap.icon}</div>

                        <div style={{ flex: 1 }}>
                            <h1 style={{ margin: '0 0 0.5rem', color: 'var(--text-primary)' }}>
                                {selectedRoadmap.name}
                            </h1>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                {selectedRoadmap.description}
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <span className="badge badge-difficulty">{selectedRoadmap.duration} Days</span>
                                <span className="badge badge-category">{selectedRoadmap.difficulty}</span>
                            </div>
                        </div>

                        {/* Progress Circle */}
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                background: `conic-gradient(
                                    var(--accent-primary) ${progress?.percentage || 0}%,
                                    var(--bg-tertiary) ${progress?.percentage || 0}%
                                )`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative'
                            }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: 'var(--bg-primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column'
                                }}>
                                    <span style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                                        {progress?.percentage || 0}%
                                    </span>
                                </div>
                            </div>
                            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontSize: '0.8rem' }}>
                                {progress?.completed || 0} of {progress?.total || 0} days
                            </p>
                        </div>
                    </div>
                </div>

                {/* Two Column Layout */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '1.5rem' }}>
                    {/* Week Timeline */}
                    <div>
                        {selectedRoadmap.weeks.map((week, weekIdx) => (
                            <div key={weekIdx} className="glass-card p-lg mb-md">
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '1rem',
                                    paddingBottom: '0.75rem',
                                    borderBottom: '1px solid var(--border-subtle)'
                                }}>
                                    <div>
                                        <h3 style={{ margin: 0, color: 'var(--text-primary)' }}>
                                            Week {week.week}: {week.title}
                                        </h3>
                                        <p style={{
                                            margin: '0.25rem 0 0',
                                            color: 'var(--text-muted)',
                                            fontSize: '0.85rem'
                                        }}>
                                            {week.focus}
                                        </p>
                                    </div>
                                    <span className="badge" style={{
                                        background: 'var(--bg-tertiary)',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        {week.days.filter(d => completedDays.includes(d.day)).length}/{week.days.length} done
                                    </span>
                                </div>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {week.days.map(day => {
                                        const isCompleted = completedDays.includes(day.day);
                                        const isSelected = currentDay === day.day;

                                        return (
                                            <button
                                                key={day.day}
                                                onClick={() => setCurrentDay(day.day)}
                                                style={{
                                                    width: '50px',
                                                    height: '50px',
                                                    borderRadius: '8px',
                                                    border: isSelected
                                                        ? '2px solid var(--accent-primary)'
                                                        : '1px solid var(--border-subtle)',
                                                    background: isCompleted
                                                        ? 'var(--success)'
                                                        : isSelected
                                                            ? 'var(--accent-primary)'
                                                            : 'var(--bg-secondary)',
                                                    color: (isCompleted || isSelected)
                                                        ? 'white'
                                                        : 'var(--text-primary)',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexDirection: 'column',
                                                    transition: 'all 0.2s ease'
                                                }}
                                                title={day.topic}
                                            >
                                                <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>Day</span>
                                                <span style={{ fontWeight: '600' }}>{day.day}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Day Detail Panel */}
                    <div className="glass-card p-lg" style={{ position: 'sticky', top: '1rem', alignSelf: 'start' }}>
                        {currentDayContent ? (
                            <>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '1rem'
                                }}>
                                    <h3 style={{ margin: 0 }}>Day {currentDay}</h3>
                                    <button
                                        onClick={() => toggleDayComplete(currentDay)}
                                        className="btn"
                                        style={{
                                            background: completedDays.includes(currentDay)
                                                ? 'var(--success)'
                                                : 'var(--bg-tertiary)',
                                            color: completedDays.includes(currentDay)
                                                ? 'white'
                                                : 'var(--text-primary)',
                                            padding: '0.5rem 1rem',
                                            fontSize: '0.8rem'
                                        }}
                                    >
                                        {completedDays.includes(currentDay) ? '✓ Completed' : 'Mark Complete'}
                                    </button>
                                </div>

                                <h4 style={{
                                    color: 'var(--accent-primary)',
                                    marginBottom: '0.75rem',
                                    fontSize: '1.1rem'
                                }}>
                                    {currentDayContent.topic}
                                </h4>

                                <div style={{ marginBottom: '1rem' }}>
                                    <p style={{
                                        color: 'var(--text-muted)',
                                        fontSize: '0.8rem',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {currentDayContent.weekTitle} • {currentDayContent.weekFocus}
                                    </p>
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h5 style={{
                                        color: 'var(--text-primary)',
                                        marginBottom: '0.5rem',
                                        fontSize: '0.9rem'
                                    }}>
                                        📋 Tasks for Today
                                    </h5>
                                    <ul style={{
                                        paddingLeft: '1.25rem',
                                        margin: 0,
                                        color: 'var(--text-secondary)'
                                    }}>
                                        {currentDayContent.tasks.map((task, idx) => (
                                            <li key={idx} style={{ marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                                                {task}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {currentDayContent.resources.length > 0 && (
                                    <div>
                                        <h5 style={{
                                            color: 'var(--text-primary)',
                                            marginBottom: '0.5rem',
                                            fontSize: '0.9rem'
                                        }}>
                                            📚 Resources & Problems
                                        </h5>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {currentDayContent.resources.map((resource, idx) => (
                                                <span
                                                    key={idx}
                                                    className="badge"
                                                    style={{
                                                        background: 'var(--bg-tertiary)',
                                                        color: 'var(--text-secondary)',
                                                        fontSize: '0.75rem'
                                                    }}
                                                >
                                                    {resource}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <Link
                                    to={`/interview?day=${currentDay}&roadmap=${roadmapId}`}
                                    className="btn btn-primary"
                                    style={{ width: '100%', marginTop: '1.5rem' }}
                                >
                                    Start Day {currentDay} Practice
                                </Link>
                            </>
                        ) : (
                            <p style={{ color: 'var(--text-muted)', textAlign: 'center' }}>
                                Select a day to view details
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
