// Results Page - Session summary with company benchmarks
// Enhanced with company-specific evaluation and interview readiness

import { useLocation, Link, useSearchParams } from 'react-router-dom';
import { getCompanyById, companyTypes } from '../data/companies';
import { getCompanyBenchmark, compareWithBenchmark } from '../utils/companyEvaluator';

const Results = () => {
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const companyId = searchParams.get('company');

    const {
        answeredQuestions = [],
        sessionStats = {},
        categoryProgress = {},
        companyContext = null
    } = location.state || {};

    const hasData = answeredQuestions.length > 0;
    const company = companyId ? getCompanyById(companyId) : (companyContext ? getCompanyById(companyContext) : null);
    const benchmark = company ? getCompanyBenchmark(company.id) : null;

    // Calculate performance distribution
    const totalQuestions = answeredQuestions.length;
    const excellentPercent = totalQuestions > 0 ? Math.round((sessionStats.excellent / totalQuestions) * 100) : 0;
    const goodPercent = totalQuestions > 0 ? Math.round((sessionStats.good / totalQuestions) * 100) : 0;
    const needsWorkPercent = totalQuestions > 0 ? Math.round((sessionStats.needsImprovement / totalQuestions) * 100) : 0;

    // Calculate interview readiness
    const averageScore = sessionStats.averageScore || 0;
    const benchmarkComparison = benchmark ? compareWithBenchmark(averageScore, company.id) : null;

    // Get readiness status
    const getReadinessStatus = () => {
        if (!benchmarkComparison) return { label: 'N/A', color: 'var(--text-muted)', icon: '📊' };

        if (benchmarkComparison.isStrong) {
            return { label: 'Strong Candidate', color: 'var(--success)', icon: '🌟', description: 'Excellent! You\'re well-prepared.' };
        } else if (benchmarkComparison.isReady) {
            return { label: 'Interview Ready', color: 'var(--accent-primary)', icon: '✅', description: 'You\'re ready with minor improvements needed.' };
        } else if (averageScore >= (benchmark?.benchmarks?.needsPractice || 50)) {
            return { label: 'Needs Practice', color: 'var(--warning)', icon: '📚', description: 'Keep practicing to improve your score.' };
        } else {
            return { label: 'Keep Learning', color: 'var(--error)', icon: '🎯', description: 'Focus on fundamentals and practice more.' };
        }
    };

    const readiness = getReadinessStatus();

    // Identify weak areas from answers
    const getWeakAreas = () => {
        if (!answeredQuestions.length) return [];

        const dimensionScores = {};
        const dimensionCounts = {};

        answeredQuestions.forEach(item => {
            if (item.evaluation?.dimensions) {
                item.evaluation.dimensions.forEach(dim => {
                    if (!dimensionScores[dim.name]) {
                        dimensionScores[dim.name] = 0;
                        dimensionCounts[dim.name] = 0;
                    }
                    dimensionScores[dim.name] += dim.percentage || 0;
                    dimensionCounts[dim.name]++;
                });
            }
        });

        const avgDimensions = Object.entries(dimensionScores).map(([name, total]) => ({
            name,
            avgScore: Math.round(total / (dimensionCounts[name] || 1))
        }));

        return avgDimensions.filter(d => d.avgScore < 60).slice(0, 3);
    };

    const weakAreas = getWeakAreas();

    // Get recommended next steps
    const getRecommendations = () => {
        const recs = [];

        if (company) {
            if (benchmarkComparison?.gap > 0) {
                recs.push({
                    icon: '📈',
                    title: `Improve by ${benchmarkComparison.gap}%`,
                    description: `You need ${benchmarkComparison.gap}% more to be interview-ready for ${company.name}`
                });
            }

            if (company.interviewStyle?.tips) {
                recs.push({
                    icon: '💡',
                    title: 'Company Tip',
                    description: company.interviewStyle.tips[0]
                });
            }
        }

        if (weakAreas.length > 0) {
            recs.push({
                icon: '🎯',
                title: 'Focus Area',
                description: `Work on improving ${weakAreas[0].name} (${weakAreas[0].avgScore}%)`
            });
        }

        if (sessionStats.needsImprovement > sessionStats.excellent) {
            recs.push({
                icon: '📚',
                title: 'Practice More',
                description: 'Try the DSA Revision module for topic-wise practice'
            });
        }

        return recs;
    };

    const recommendations = getRecommendations();

    return (
        <div className="page">
            {/* Header */}
            <header style={{
                padding: '1rem 0',
                borderBottom: '1px solid var(--border-subtle)',
                marginBottom: '1.5rem'
            }}>
                <div className="container flex justify-between items-center">
                    <Link to="/" style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        fontFamily: 'var(--font-display)',
                        textDecoration: 'none',
                        color: 'var(--text-primary)'
                    }}>
                        <span className="text-gradient">Interview</span> Prep Pro
                    </Link>

                    <div className="flex gap-md">
                        <Link to="/interview" className="btn btn-primary">
                            New Session
                        </Link>
                        {company && (
                            <Link to={`/companies`} className="btn btn-secondary">
                                Browse Companies
                            </Link>
                        )}
                    </div>
                </div>
            </header>

            <div className="container page-content">
                {!hasData ? (
                    /* No Data State */
                    <div className="text-center animate-fade-in" style={{ padding: '4rem 0' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📊</div>
                        <h2 className="mb-md">No Session Data</h2>
                        <p className="text-muted mb-xl">Complete a practice session to see your results here.</p>
                        <Link to="/interview" className="btn btn-primary">
                            Start a Session
                        </Link>
                    </div>
                ) : (
                    /* Results Content */
                    <div className="animate-fade-in">
                        <div className="text-center mb-xl">
                            <h1 className="mb-md">Session Complete! 🎉</h1>
                            <p className="text-muted">
                                {company
                                    ? `Performance analysis for ${company.name} interview preparation`
                                    : `Here's how you performed across ${totalQuestions} questions`
                                }
                            </p>
                        </div>

                        {/* Company Context Banner */}
                        {company && (
                            <div className="glass-card p-lg mb-xl" style={{
                                background: `linear-gradient(135deg, ${company.color}15, ${company.color}05)`,
                                borderLeft: `4px solid ${company.color}`
                            }}>
                                <div className="flex items-center gap-lg">
                                    <div style={{ fontSize: '2.5rem' }}>{company.logo}</div>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ marginBottom: '0.25rem' }}>{company.name}</h3>
                                        <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                                            {companyTypes[company.type]?.name} • Difficulty: {'★'.repeat(company.difficulty)}{'☆'.repeat(5 - company.difficulty)}
                                        </p>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            color: readiness.color
                                        }}>
                                            {readiness.icon} {readiness.label}
                                        </div>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                            {readiness.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Summary Cards */}
                        <div className="grid grid-4 mb-xl" style={{ gap: '1rem' }}>
                            <div className="glass-card p-lg text-center">
                                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                                    {totalQuestions}
                                </div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Questions</div>
                            </div>
                            <div className="glass-card p-lg text-center">
                                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent-primary)' }}>
                                    {sessionStats.averageScore || 0}%
                                </div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Avg Score</div>
                            </div>
                            <div className="glass-card p-lg text-center">
                                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--success)' }}>
                                    {sessionStats.excellent || 0}
                                </div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Excellent</div>
                            </div>
                            <div className="glass-card p-lg text-center">
                                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--warning)' }}>
                                    {sessionStats.needsImprovement || 0}
                                </div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Need Work</div>
                            </div>
                        </div>

                        {/* Company Benchmark Comparison */}
                        {benchmark && benchmarkComparison && (
                            <div className="glass-card p-xl mb-xl">
                                <h3 style={{ marginBottom: '1.5rem' }}>
                                    📊 {company.name} Interview Readiness
                                </h3>

                                {/* Progress Bar */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        marginBottom: '0.5rem',
                                        fontSize: '0.85rem'
                                    }}>
                                        <span>Your Score: <strong>{averageScore}%</strong></span>
                                        <span style={{ color: 'var(--text-muted)' }}>
                                            Interview Ready: {benchmark.benchmarks.interviewReady}%
                                        </span>
                                    </div>
                                    <div style={{
                                        height: '16px',
                                        background: 'var(--bg-tertiary)',
                                        borderRadius: 'var(--radius-md)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Your score */}
                                        <div style={{
                                            width: `${Math.min(averageScore, 100)}%`,
                                            height: '100%',
                                            background: `linear-gradient(90deg, ${company.color}, ${company.color}cc)`,
                                            borderRadius: 'var(--radius-md)',
                                            transition: 'width 1s ease'
                                        }} />
                                        {/* Benchmark marker */}
                                        <div style={{
                                            position: 'absolute',
                                            left: `${benchmark.benchmarks.interviewReady}%`,
                                            top: 0,
                                            bottom: 0,
                                            width: '2px',
                                            background: 'var(--success)',
                                            zIndex: 1
                                        }} />
                                        <div style={{
                                            position: 'absolute',
                                            left: `${benchmark.benchmarks.strongCandidate}%`,
                                            top: 0,
                                            bottom: 0,
                                            width: '2px',
                                            background: 'gold',
                                            zIndex: 1
                                        }} />
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        marginTop: '0.5rem',
                                        fontSize: '0.75rem',
                                        color: 'var(--text-muted)'
                                    }}>
                                        <span>Estimated Percentile: {benchmarkComparison.percentileEstimate}%</span>
                                        <span>Strong Candidate: {benchmark.benchmarks.strongCandidate}%</span>
                                    </div>
                                </div>

                                {/* Focus Areas */}
                                {benchmark.focusAreas.length > 0 && (
                                    <div>
                                        <h4 style={{ fontSize: '0.9rem', marginBottom: '0.75rem', color: 'var(--text-secondary)' }}>
                                            Key Focus Areas for {company.name}
                                        </h4>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {benchmark.focusAreas.slice(0, 5).map((area, idx) => (
                                                <span key={idx} style={{
                                                    padding: '0.35rem 0.75rem',
                                                    background: `${company.color}20`,
                                                    color: company.color,
                                                    borderRadius: 'var(--radius-full)',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '500'
                                                }}>
                                                    {area}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Performance Distribution */}
                        <div className="glass-card p-xl mb-xl">
                            <h3 style={{ marginBottom: '1.5rem' }}>Performance Distribution</h3>

                            <div style={{ display: 'flex', height: '24px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1rem' }}>
                                {excellentPercent > 0 && (
                                    <div style={{ width: `${excellentPercent}%`, background: 'var(--success)' }} />
                                )}
                                {goodPercent > 0 && (
                                    <div style={{ width: `${goodPercent}%`, background: 'var(--accent-primary)' }} />
                                )}
                                {needsWorkPercent > 0 && (
                                    <div style={{ width: `${needsWorkPercent}%`, background: 'var(--warning)' }} />
                                )}
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--success)' }} />
                                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Excellent ({excellentPercent}%)</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-primary)' }} />
                                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Good ({goodPercent}%)</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--warning)' }} />
                                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Needs Work ({needsWorkPercent}%)</span>
                                </div>
                            </div>
                        </div>

                        {/* Weak Areas & Recommendations */}
                        <div className="grid grid-2 mb-xl" style={{ gap: '1.5rem' }}>
                            {/* Weak Areas */}
                            {weakAreas.length > 0 && (
                                <div className="glass-card p-xl">
                                    <h3 style={{ marginBottom: '1rem' }}>⚠️ Areas to Improve</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        {weakAreas.map((area, idx) => (
                                            <div key={idx} style={{
                                                padding: '0.75rem 1rem',
                                                background: 'var(--bg-tertiary)',
                                                borderRadius: 'var(--radius-md)',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}>
                                                <span>{area.name}</span>
                                                <span style={{
                                                    fontWeight: '600',
                                                    color: 'var(--warning)'
                                                }}>
                                                    {area.avgScore}%
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Recommendations */}
                            {recommendations.length > 0 && (
                                <div className="glass-card p-xl">
                                    <h3 style={{ marginBottom: '1rem' }}>💡 Recommendations</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        {recommendations.map((rec, idx) => (
                                            <div key={idx} style={{
                                                padding: '0.75rem 1rem',
                                                background: 'var(--bg-tertiary)',
                                                borderRadius: 'var(--radius-md)'
                                            }}>
                                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                                    <span>{rec.icon}</span>
                                                    <strong style={{ fontSize: '0.9rem' }}>{rec.title}</strong>
                                                </div>
                                                <p style={{
                                                    fontSize: '0.85rem',
                                                    color: 'var(--text-muted)',
                                                    margin: 0,
                                                    paddingLeft: '1.5rem'
                                                }}>
                                                    {rec.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Category Breakdown */}
                        {Object.keys(categoryProgress).length > 0 && (
                            <div className="glass-card p-xl mb-xl">
                                <h3 style={{ marginBottom: '1.5rem' }}>Questions by Category</h3>
                                <div className="grid grid-3" style={{ gap: '1rem' }}>
                                    {Object.entries(categoryProgress).map(([category, count]) => (
                                        <div key={category} style={{
                                            padding: '1rem',
                                            background: 'var(--bg-tertiary)',
                                            borderRadius: 'var(--radius-md)',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{category}</span>
                                            <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Question Review */}
                        <div className="glass-card p-xl">
                            <h3 style={{ marginBottom: '1.5rem' }}>Question Review</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {answeredQuestions.map((item, index) => (
                                    <div key={index} style={{
                                        padding: '1rem',
                                        background: 'var(--bg-tertiary)',
                                        borderRadius: 'var(--radius-md)',
                                        borderLeft: `4px solid ${item.evaluation.scoreLabel?.label === 'Excellent' ? 'var(--success)' :
                                            item.evaluation.scoreLabel?.label === 'Good' ? 'var(--accent-primary)' : 'var(--warning)'
                                            }`
                                    }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                            <span style={{
                                                fontSize: '0.75rem',
                                                background: 'var(--bg-glass)',
                                                padding: '0.2rem 0.5rem',
                                                borderRadius: 'var(--radius-sm)',
                                                color: 'var(--text-muted)'
                                            }}>
                                                {item.question.category}
                                            </span>
                                            <span style={{
                                                fontSize: '0.875rem',
                                                fontWeight: '600',
                                                color: item.evaluation.scoreLabel?.label === 'Excellent' ? 'var(--success)' :
                                                    item.evaluation.scoreLabel?.label === 'Good' ? 'var(--accent-primary)' : 'var(--warning)'
                                            }}>
                                                {item.evaluation.totalScore}/100
                                            </span>
                                        </div>
                                        <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                                            {item.question.question}
                                        </p>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontStyle: 'italic' }}>
                                            Your answer: {item.answer?.substring(0, 100)}...
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-center gap-lg mt-xl" style={{ paddingBottom: '2rem' }}>
                            <Link to="/interview" className="btn btn-primary">
                                Practice Again
                            </Link>
                            <Link to="/dsa" className="btn btn-secondary">
                                DSA Revision
                            </Link>
                            <Link to="/tutor" className="btn btn-ghost">
                                Ask AI Tutor
                            </Link>
                            <Link to="/" className="btn btn-ghost">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Results;
