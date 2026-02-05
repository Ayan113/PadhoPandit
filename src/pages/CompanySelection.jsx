// Company Selection Page - Choose your target company for interview prep

import { Link } from 'react-router-dom';
import { companyTypes, companies, getCompaniesByType } from '../data/companies';
import { roadmaps } from '../data/roadmaps';

const CompanySelection = () => {
    const renderCompanyCard = (company) => (
        <Link
            to={`/interview?company=${company.id}`}
            key={company.id}
            className="company-card glass-card"
            style={{
                padding: '1.5rem',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                transition: 'all 0.3s ease',
                borderLeft: `4px solid ${company.color}`,
                cursor: 'pointer'
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '2rem' }}>{company.logo}</span>
                <div>
                    <h4 style={{ margin: 0, color: 'var(--text-primary)' }}>{company.name}</h4>
                    <span style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                    }}>
                        {company.type}
                    </span>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {company.focusAreas?.slice(0, 3).map((area, idx) => (
                    <span key={idx} className="badge badge-category" style={{ fontSize: '0.7rem' }}>
                        {area}
                    </span>
                ))}
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 'auto'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    {[...Array(5)].map((_, i) => (
                        <span
                            key={i}
                            style={{
                                color: i < company.difficulty ? 'var(--warning)' : 'var(--border-subtle)',
                                fontSize: '0.8rem'
                            }}
                        >
                            ★
                        </span>
                    ))}
                </div>
                <span style={{
                    fontSize: '0.8rem',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                }}>
                    Start Prep
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9,18 15,12 9,6" />
                    </svg>
                </span>
            </div>
        </Link>
    );

    const renderCompanyTypeSection = (typeId, typeData) => {
        const typeCompanies = getCompaniesByType(typeId);

        return (
            <section key={typeId} className="company-section" style={{ marginBottom: '3rem' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                }}>
                    <span style={{ fontSize: '2.5rem' }}>{typeData.icon}</span>
                    <div>
                        <h2 style={{ margin: 0, color: 'var(--text-primary)' }}>{typeData.name}</h2>
                        <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            {typeData.description}
                        </p>
                    </div>
                    <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Avg. Salary</div>
                        <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{typeData.avgSalary}</div>
                    </div>
                </div>

                <div className="grid grid-3" style={{ gap: '1rem' }}>
                    {typeCompanies.map(company => renderCompanyCard(company))}
                </div>
            </section>
        );
    };

    return (
        <div className="page">
            {/* Header */}
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

                    <div className="flex gap-md items-center">
                        <Link to="/roadmap" className="btn btn-ghost">
                            📍 Roadmaps
                        </Link>
                        <Link to="/dsa" className="btn btn-ghost">
                            📊 DSA Revision
                        </Link>
                    </div>
                </div>
            </header>

            <div className="container page-content">
                {/* Hero Section */}
                <div className="text-center mb-xl animate-fade-in">
                    <h1 className="hero-title">
                        Choose Your <span className="text-gradient">Target Company</span>
                    </h1>
                    <p className="hero-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Select a company to get tailored interview questions, evaluation criteria,
                        and preparation roadmaps designed specifically for their interview process.
                    </p>
                </div>

                {/* Quick Roadmap Cards */}
                <div className="grid grid-3 mb-xl" style={{ gap: '1.5rem' }}>
                    {Object.values(roadmaps).map(roadmap => (
                        <Link
                            to={`/roadmap/${roadmap.id}`}
                            key={roadmap.id}
                            className="glass-card p-xl"
                            style={{ textDecoration: 'none' }}
                        >
                            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{roadmap.icon}</div>
                            <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{roadmap.name}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                {roadmap.description}
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span className="badge badge-difficulty">{roadmap.duration} Days</span>
                                <span style={{
                                    color: 'var(--accent-primary)',
                                    fontSize: '0.875rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.25rem'
                                }}>
                                    View Roadmap
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="9,18 15,12 9,6" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Company Sections */}
                {Object.entries(companyTypes).map(([typeId, typeData]) =>
                    renderCompanyTypeSection(typeId, typeData)
                )}

                {/* Quick Actions */}
                <section className="glass-card p-xl text-center" style={{ marginTop: '2rem' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Not Sure Where to Start?</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                        Try our general interview practice with questions from all categories
                    </p>
                    <div className="flex gap-lg justify-center">
                        <Link to="/interview" className="btn btn-primary">
                            General Practice
                        </Link>
                        <Link to="/dsa" className="btn btn-secondary">
                            DSA Revision
                        </Link>
                        <Link to="/tutor" className="btn btn-ghost">
                            Ask AI Tutor
                        </Link>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer style={{
                padding: '2rem',
                textAlign: 'center',
                borderTop: '1px solid var(--border-subtle)',
                marginTop: '3rem'
            }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    AI Interview Prep • Crack Your Dream Job
                </p>
            </footer>
        </div>
    );
};

export default CompanySelection;
