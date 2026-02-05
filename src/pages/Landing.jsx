// PadhoPandit - Landing Page
// Premium landing page with hero, features, and CTA

import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="page">
            {/* Navbar */}
            <nav className="navbar">
                <div className="container flex justify-between items-center">
                    <Link to="/" className="navbar-brand">
                        <span className="logo-icon">📚</span>
                        <span>PadhoPandit</span>
                    </Link>

                    <div className="nav-links">
                        <Link to="/learn" className="nav-link">Roadmaps</Link>
                        <Link to="/practice" className="nav-link">Practice</Link>
                        <Link to="/mentor" className="nav-link">AI Mentor</Link>
                        <Link to="/onboarding" className="btn btn-primary btn-sm">
                            Get Started
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content animate-fade-in-up">
                    <div className="hero-badge">
                        <span className="dot"></span>
                        <span>AI-Powered Career GPS for Tech Jobs</span>
                    </div>

                    <h1 className="hero-title">
                        From <span className="text-gradient">Confusion</span> to Career
                        <br />
                        <span className="text-gradient">Step by Step</span>
                    </h1>

                    <p className="hero-subtitle">
                        Stop wandering through endless courses. Get a personalized roadmap
                        to crack your dream tech job — tailored to your role, company, and experience level.
                    </p>

                    <div className="hero-cta">
                        <Link to="/onboarding" className="btn btn-primary btn-lg">
                            <span>🚀</span>
                            Get Your Free Roadmap
                        </Link>
                        <Link to="/learn" className="btn btn-secondary btn-lg">
                            <span>👀</span>
                            Explore Roadmaps
                        </Link>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section style={{ padding: 'var(--spacing-4xl) 0' }}>
                <div className="container">
                    <div className="text-center mb-2xl animate-fade-in">
                        <h2 className="mb-md">How It Works</h2>
                        <p className="text-secondary" style={{ fontSize: '1.125rem' }}>
                            Your personalized path to a tech job in 3 simple steps
                        </p>
                    </div>

                    <div className="grid grid-3" style={{ gap: 'var(--spacing-2xl)' }}>
                        {[
                            {
                                step: '01',
                                icon: '🎯',
                                title: 'Choose Your Role',
                                description: 'Frontend, Backend, AI/ML, Data Science, DevOps — pick the career you want'
                            },
                            {
                                step: '02',
                                icon: '🏢',
                                title: 'Pick Your Target',
                                description: 'FAANG, startups, or service companies — we customize for each'
                            },
                            {
                                step: '03',
                                icon: '🗺️',
                                title: 'Get Your Roadmap',
                                description: 'Daily learning plan, practice problems, projects, and interview prep'
                            }
                        ].map((item, index) => (
                            <div
                                key={item.step}
                                className="glass-card p-2xl text-center animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div style={{
                                    fontSize: '0.875rem',
                                    color: 'var(--accent-primary)',
                                    fontWeight: '600',
                                    marginBottom: 'var(--spacing-md)'
                                }}>
                                    STEP {item.step}
                                </div>
                                <div className="feature-icon">{item.icon}</div>
                                <h3 className="feature-title">{item.title}</h3>
                                <p className="feature-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section style={{ padding: 'var(--spacing-4xl) 0', background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="text-center mb-2xl">
                        <h2 className="mb-md">Everything You Need to <span className="text-gradient">Crack Tech Jobs</span></h2>
                        <p className="text-secondary" style={{ fontSize: '1.125rem' }}>
                            Not just another course. A complete career transformation system.
                        </p>
                    </div>

                    <div className="grid grid-3" style={{ gap: 'var(--spacing-xl)' }}>
                        {[
                            {
                                icon: '📍',
                                title: 'Personalized Roadmaps',
                                description: 'Day-by-day learning path based on your role, target company, and current level'
                            },
                            {
                                icon: '💻',
                                title: 'Curated Practice',
                                description: 'Topic-wise coding problems with Easy → Medium → Hard progression'
                            },
                            {
                                icon: '🔧',
                                title: 'Resume-Worthy Projects',
                                description: 'Build real projects that showcase your skills to recruiters'
                            },
                            {
                                icon: '🤖',
                                title: 'AI Mentor',
                                description: 'Get explanations, doubt resolution, and guidance from your personal AI mentor'
                            },
                            {
                                icon: '🎤',
                                title: 'Interview Prep',
                                description: 'Behavioral questions, technical rounds, and mock interview simulations'
                            },
                            {
                                icon: '📈',
                                title: 'Progress Tracking',
                                description: 'Visual dashboard with streaks, milestones, and achievement badges'
                            }
                        ].map((feature, index) => (
                            <div
                                key={feature.title}
                                className="glass-card p-xl animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div style={{
                                    fontSize: '2rem',
                                    marginBottom: 'var(--spacing-md)',
                                    width: '56px',
                                    height: '56px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'var(--info-soft)',
                                    borderRadius: 'var(--radius-lg)'
                                }}>
                                    {feature.icon}
                                </div>
                                <h4 style={{ marginBottom: 'var(--spacing-sm)' }}>{feature.title}</h4>
                                <p className="text-muted" style={{ fontSize: '0.9rem' }}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Roles Preview */}
            <section style={{ padding: 'var(--spacing-4xl) 0' }}>
                <div className="container">
                    <div className="text-center mb-2xl">
                        <h2 className="mb-md">Pick Your <span className="text-gradient">Dream Role</span></h2>
                        <p className="text-secondary" style={{ fontSize: '1.125rem' }}>
                            8 in-demand tech roles with complete roadmaps
                        </p>
                    </div>

                    <div className="grid grid-4" style={{ gap: 'var(--spacing-lg)' }}>
                        {[
                            { icon: '🎨', name: 'Frontend Developer', tag: 'Popular' },
                            { icon: '⚙️', name: 'Backend Developer', tag: 'Popular' },
                            { icon: '🚀', name: 'Full Stack', tag: 'Most Demand' },
                            { icon: '📊', name: 'Data Scientist', tag: 'High Pay' },
                            { icon: '🤖', name: 'AI/ML Engineer', tag: 'Growing' },
                            { icon: '✨', name: 'GenAI Engineer', tag: '🔥 Trending' },
                            { icon: '🔧', name: 'DevOps Engineer', tag: 'Stable' },
                            { icon: '💡', name: 'Product Engineer', tag: 'Startup Favorite' }
                        ].map((role, index) => (
                            <div
                                key={role.name}
                                className="glass-card p-lg text-center"
                                style={{
                                    cursor: 'pointer',
                                    animationDelay: `${index * 0.05}s`
                                }}
                            >
                                <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>
                                    {role.icon}
                                </div>
                                <h4 style={{ fontSize: '1rem', marginBottom: 'var(--spacing-xs)' }}>
                                    {role.name}
                                </h4>
                                <span className="badge badge-primary" style={{ fontSize: '0.65rem' }}>
                                    {role.tag}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-2xl">
                        <Link to="/onboarding" className="btn btn-primary btn-lg">
                            Choose Your Role →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section style={{ padding: 'var(--spacing-4xl) 0', background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="text-center mb-2xl">
                        <h2 className="mb-md">Trusted by <span className="text-gradient">Ambitious Students</span></h2>
                    </div>

                    <div className="grid grid-4" style={{ gap: 'var(--spacing-xl)' }}>
                        {[
                            { value: '10,000+', label: 'Students Learning' },
                            { value: '500+', label: 'Success Stories' },
                            { value: '8', label: 'Career Paths' },
                            { value: '90%', label: 'Interview Ready in 90 Days' }
                        ].map((stat) => (
                            <div key={stat.label} className="stat-card glass-card text-center">
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Testimonial */}
                    <div className="glass-card p-2xl mt-2xl" style={{ maxWidth: '700px', margin: '0 auto', marginTop: 'var(--spacing-2xl)' }}>
                        <p style={{
                            fontSize: '1.25rem',
                            fontStyle: 'italic',
                            color: 'var(--text-secondary)',
                            marginBottom: 'var(--spacing-lg)',
                            lineHeight: '1.8'
                        }}>
                            "Finally… someone told me EXACTLY what to do. I was lost with too many courses,
                            but PadhoPandit gave me a clear 90-day roadmap. Got my first offer at Flipkart!"
                        </p>
                        <div className="flex items-center gap-md">
                            <div style={{
                                width: '48px',
                                height: '48px',
                                background: 'var(--gradient-primary)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.25rem'
                            }}>
                                👨‍💻
                            </div>
                            <div>
                                <div style={{ fontWeight: '600' }}>Rahul K.</div>
                                <div className="text-muted" style={{ fontSize: '0.875rem' }}>
                                    Full Stack Developer at Flipkart • From Tier-3 College
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: 'var(--spacing-4xl) 0' }}>
                <div className="container text-center">
                    <div style={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        padding: 'var(--spacing-3xl)',
                        background: 'var(--gradient-card)',
                        borderRadius: 'var(--radius-2xl)',
                        border: '1px solid var(--border-accent)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15), transparent 60%)',
                            pointerEvents: 'none'
                        }} />

                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h2 className="mb-md">Ready to <span className="text-gradient">Transform Your Career?</span></h2>
                            <p className="text-secondary mb-xl">
                                Join thousands of students who got their dream tech jobs with PadhoPandit
                            </p>
                            <Link to="/onboarding" className="btn btn-primary btn-lg animate-glow">
                                🚀 Get Your Free Roadmap
                            </Link>
                            <p className="text-muted mt-md" style={{ fontSize: '0.875rem' }}>
                                No credit card required • Start for free
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{
                padding: 'var(--spacing-2xl) 0',
                borderTop: '1px solid var(--border-subtle)',
                background: 'var(--bg-secondary)'
            }}>
                <div className="container">
                    <div className="flex justify-between items-center" style={{ flexWrap: 'wrap', gap: 'var(--spacing-lg)' }}>
                        <div className="flex items-center gap-sm">
                            <span style={{ fontSize: '1.5rem' }}>📚</span>
                            <span style={{ fontFamily: 'var(--font-display)', fontWeight: '700' }}>
                                <span className="text-gradient">PadhoPandit</span>
                            </span>
                        </div>

                        <div className="flex gap-lg">
                            <Link to="/learn" className="text-muted" style={{ fontSize: '0.875rem' }}>Roadmaps</Link>
                            <Link to="/practice" className="text-muted" style={{ fontSize: '0.875rem' }}>Practice</Link>
                            <Link to="/mentor" className="text-muted" style={{ fontSize: '0.875rem' }}>AI Mentor</Link>
                        </div>

                        <div className="text-muted" style={{ fontSize: '0.875rem' }}>
                            © 2025 PadhoPandit. Made with ❤️ for students.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
