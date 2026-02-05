// DSA Revision Page - Last minute DSA practice

import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    dsaRevisionQuestions,
    getDSACategories,
    getDSAProblemsByCategory,
    filterByDifficulty,
    filterByCompany
} from '../data/questions/dsa-revision';

const DSARevision = () => {
    const [selectedCategory, setSelectedCategory] = useState('arraysAndStrings');
    const [selectedProblem, setSelectedProblem] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [difficultyFilter, setDifficultyFilter] = useState('all');
    const [companyFilter, setCompanyFilter] = useState('');

    const categories = getDSACategories();

    let problems = getDSAProblemsByCategory(selectedCategory);

    // Apply filters
    if (difficultyFilter !== 'all') {
        problems = problems.filter(p => p.difficulty === difficultyFilter);
    }
    if (companyFilter) {
        problems = problems.filter(p =>
            p.companies.some(c => c.toLowerCase().includes(companyFilter.toLowerCase()))
        );
    }

    const selectProblem = (problem) => {
        setSelectedProblem(problem);
        setShowSolution(false);
    };

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Easy': return 'var(--success)';
            case 'Medium': return 'var(--warning)';
            case 'Hard': return 'var(--error)';
            default: return 'var(--text-muted)';
        }
    };

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
                    <div className="flex gap-md">
                        <Link to="/companies" className="btn btn-ghost">
                            🏢 Companies
                        </Link>
                        <Link to="/roadmap" className="btn btn-ghost">
                            📍 Roadmaps
                        </Link>
                    </div>
                </div>
            </header>

            <div className="container page-content">
                {/* Hero */}
                <div className="text-center mb-xl animate-fade-in">
                    <h1 className="hero-title">
                        <span className="text-gradient">DSA</span> Last Minute Revision
                    </h1>
                    <p className="hero-subtitle">
                        Top interview problems organized by topic • Quick hints • Complete solutions
                    </p>
                </div>

                {/* Filters */}
                <div className="glass-card p-md mb-lg" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <label style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Difficulty:</label>
                        <select
                            value={difficultyFilter}
                            onChange={(e) => setDifficultyFilter(e.target.value)}
                            style={{
                                padding: '0.5rem',
                                borderRadius: '6px',
                                border: '1px solid var(--border-subtle)',
                                background: 'var(--bg-secondary)',
                                color: 'var(--text-primary)'
                            }}
                        >
                            <option value="all">All Levels</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <label style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Company:</label>
                        <input
                            type="text"
                            placeholder="e.g., Google, Amazon"
                            value={companyFilter}
                            onChange={(e) => setCompanyFilter(e.target.value)}
                            style={{
                                padding: '0.5rem',
                                borderRadius: '6px',
                                border: '1px solid var(--border-subtle)',
                                background: 'var(--bg-secondary)',
                                color: 'var(--text-primary)',
                                width: '180px'
                            }}
                        />
                    </div>

                    <div style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                        {problems.length} problems
                    </div>
                </div>

                {/* Main Content Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr 400px', gap: '1.5rem' }}>
                    {/* Category Sidebar */}
                    <div className="glass-card p-md" style={{ alignSelf: 'start', position: 'sticky', top: '1rem' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Topics</h4>
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => {
                                    setSelectedCategory(cat.id);
                                    setSelectedProblem(null);
                                }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    width: '100%',
                                    padding: '0.75rem',
                                    marginBottom: '0.5rem',
                                    borderRadius: '8px',
                                    border: 'none',
                                    background: selectedCategory === cat.id
                                        ? 'var(--accent-primary)'
                                        : 'transparent',
                                    color: selectedCategory === cat.id
                                        ? 'white'
                                        : 'var(--text-secondary)',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <span>{cat.icon}</span>
                                <span style={{ fontSize: '0.85rem' }}>{cat.name}</span>
                                <span style={{
                                    marginLeft: 'auto',
                                    fontSize: '0.75rem',
                                    opacity: 0.7
                                }}>
                                    {cat.problemCount}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Problem List */}
                    <div>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
                            {dsaRevisionQuestions[selectedCategory]?.name || 'Problems'}
                        </h3>

                        {problems.length === 0 ? (
                            <div className="glass-card p-xl text-center">
                                <p style={{ color: 'var(--text-muted)' }}>
                                    No problems match your filters
                                </p>
                            </div>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {problems.map((problem) => (
                                    <button
                                        key={problem.id}
                                        onClick={() => selectProblem(problem)}
                                        className="glass-card"
                                        style={{
                                            padding: '1rem',
                                            textAlign: 'left',
                                            cursor: 'pointer',
                                            border: selectedProblem?.id === problem.id
                                                ? '2px solid var(--accent-primary)'
                                                : '1px solid var(--border-subtle)',
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                            <h4 style={{ margin: 0, color: 'var(--text-primary)' }}>
                                                {problem.name}
                                            </h4>
                                            <span style={{
                                                color: getDifficultyColor(problem.difficulty),
                                                fontSize: '0.75rem',
                                                fontWeight: '600'
                                            }}>
                                                {problem.difficulty}
                                            </span>
                                        </div>

                                        <p style={{
                                            margin: '0.5rem 0',
                                            color: 'var(--text-secondary)',
                                            fontSize: '0.85rem',
                                            lineHeight: '1.4'
                                        }}>
                                            {problem.question}
                                        </p>

                                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                            <span className="badge" style={{
                                                background: 'var(--bg-tertiary)',
                                                color: 'var(--accent-primary)',
                                                fontSize: '0.7rem'
                                            }}>
                                                {problem.pattern}
                                            </span>
                                            {problem.companies.slice(0, 3).map((company, idx) => (
                                                <span key={idx} className="badge" style={{
                                                    background: 'var(--bg-secondary)',
                                                    color: 'var(--text-muted)',
                                                    fontSize: '0.7rem'
                                                }}>
                                                    {company}
                                                </span>
                                            ))}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Solution Panel */}
                    <div className="glass-card p-lg" style={{ alignSelf: 'start', position: 'sticky', top: '1rem' }}>
                        {selectedProblem ? (
                            <>
                                <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                                    {selectedProblem.name}
                                </h3>

                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                                    <span style={{
                                        color: getDifficultyColor(selectedProblem.difficulty),
                                        fontWeight: '600',
                                        fontSize: '0.85rem'
                                    }}>
                                        {selectedProblem.difficulty}
                                    </span>
                                    <span style={{ color: 'var(--text-muted)' }}>•</span>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                                        {selectedProblem.pattern}
                                    </span>
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h5 style={{ color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.8rem' }}>
                                        💡 HINTS
                                    </h5>
                                    <ul style={{
                                        paddingLeft: '1.25rem',
                                        margin: 0,
                                        color: 'var(--text-secondary)'
                                    }}>
                                        {selectedProblem.hints.map((hint, idx) => (
                                            <li key={idx} style={{ marginBottom: '0.25rem', fontSize: '0.85rem' }}>
                                                {hint}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button
                                    onClick={() => setShowSolution(!showSolution)}
                                    className="btn btn-secondary"
                                    style={{ width: '100%', marginBottom: '1rem' }}
                                >
                                    {showSolution ? '🙈 Hide Solution' : '👁️ Show Solution'}
                                </button>

                                {showSolution && (
                                    <div className="animate-fade-in">
                                        <div style={{ marginBottom: '1rem' }}>
                                            <h5 style={{ color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.8rem' }}>
                                                📝 APPROACH
                                            </h5>
                                            <pre style={{
                                                background: 'var(--bg-tertiary)',
                                                padding: '1rem',
                                                borderRadius: '8px',
                                                overflow: 'auto',
                                                fontSize: '0.8rem',
                                                color: 'var(--text-secondary)',
                                                whiteSpace: 'pre-wrap',
                                                maxHeight: '200px'
                                            }}>
                                                {selectedProblem.approach}
                                            </pre>
                                        </div>

                                        <div style={{ marginBottom: '1rem' }}>
                                            <h5 style={{ color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.8rem' }}>
                                                💻 CODE
                                            </h5>
                                            <pre style={{
                                                background: 'var(--code-bg, #1e1e1e)',
                                                padding: '1rem',
                                                borderRadius: '8px',
                                                overflow: 'auto',
                                                fontSize: '0.75rem',
                                                color: 'var(--code-text, #d4d4d4)',
                                                maxHeight: '300px',
                                                fontFamily: 'monospace'
                                            }}>
                                                {selectedProblem.code}
                                            </pre>
                                        </div>

                                        <div style={{
                                            display: 'flex',
                                            gap: '1rem',
                                            padding: '0.75rem',
                                            background: 'var(--bg-tertiary)',
                                            borderRadius: '8px'
                                        }}>
                                            <div>
                                                <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Time</span>
                                                <div style={{ color: 'var(--success)', fontWeight: '600' }}>
                                                    {selectedProblem.timeComplexity}
                                                </div>
                                            </div>
                                            <div>
                                                <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Space</span>
                                                <div style={{ color: 'var(--accent-primary)', fontWeight: '600' }}>
                                                    {selectedProblem.spaceComplexity}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div style={{
                                    marginTop: '1.5rem',
                                    paddingTop: '1rem',
                                    borderTop: '1px solid var(--border-subtle)'
                                }}>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
                                        Asked at:
                                    </p>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {selectedProblem.companies.map((company, idx) => (
                                            <span key={idx} className="badge" style={{
                                                background: 'var(--bg-secondary)',
                                                color: 'var(--text-secondary)',
                                                fontSize: '0.75rem'
                                            }}>
                                                {company}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="text-center" style={{ padding: '2rem 0' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                                    Select a Problem
                                </h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                    Click on any problem to see hints and solution
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DSARevision;
