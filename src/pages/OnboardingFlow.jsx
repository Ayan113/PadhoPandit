// PadhoPandit - Onboarding Flow
// 4-step wizard: Role → Company → Experience → Generate Roadmap

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
    roles,
    experienceLevels,
    companyTiers,
    getAllRoles,
    getAllExperienceLevels,
    getAllCompanyTiers
} from '../data/roles';

const OnboardingFlow = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [selections, setSelections] = useState({
        role: null,
        companyTier: null,
        experienceLevel: null
    });
    const [isGenerating, setIsGenerating] = useState(false);

    const steps = [
        { number: 1, label: 'Choose Role' },
        { number: 2, label: 'Target Company' },
        { number: 3, label: 'Experience' },
        { number: 4, label: 'Your Roadmap' }
    ];

    const handleRoleSelect = (roleId) => {
        setSelections(prev => ({ ...prev, role: roleId }));
    };

    const handleCompanySelect = (tierId) => {
        setSelections(prev => ({ ...prev, companyTier: tierId }));
    };

    const handleExperienceSelect = (levelId) => {
        setSelections(prev => ({ ...prev, experienceLevel: levelId }));
    };

    const handleNext = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleGenerateRoadmap = () => {
        setIsGenerating(true);

        // Save selections to localStorage
        localStorage.setItem('padhopandit_profile', JSON.stringify(selections));

        // Simulate AI generating roadmap
        setTimeout(() => {
            navigate('/dashboard', { state: { newUser: true, ...selections } });
        }, 2500);
    };

    const canProceed = () => {
        switch (currentStep) {
            case 1: return selections.role !== null;
            case 2: return selections.companyTier !== null;
            case 3: return selections.experienceLevel !== null;
            default: return true;
        }
    };

    const renderStepIndicator = () => (
        <div className="step-indicator">
            {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                    <div className={`step ${currentStep >= step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''}`}>
                        <div className="step-number">
                            {currentStep > step.number ? '✓' : step.number}
                        </div>
                        <span className="step-label">{step.label}</span>
                    </div>
                    {index < steps.length - 1 && (
                        <div className={`step-line ${currentStep > step.number ? 'completed' : ''}`} />
                    )}
                </div>
            ))}
        </div>
    );

    const renderStep1 = () => (
        <div className="animate-fade-in">
            <div className="text-center mb-2xl">
                <h2 className="mb-md">What role do you want to <span className="text-gradient">crack?</span></h2>
                <p className="text-secondary">Select the career path you're preparing for</p>
            </div>

            <div className="grid grid-4" style={{ gap: 'var(--spacing-lg)' }}>
                {getAllRoles().map((role) => (
                    <div
                        key={role.id}
                        className={`glass-card role-card ${selections.role === role.id ? 'selected' : ''}`}
                        onClick={() => handleRoleSelect(role.id)}
                    >
                        <div className="role-icon" style={{
                            background: selections.role === role.id ? role.color + '20' : 'var(--bg-elevated)'
                        }}>
                            {role.icon}
                        </div>
                        <h3>{role.name}</h3>
                        <p>{role.description}</p>
                        <div className="role-tags">
                            {role.trending && (
                                <span className="badge badge-gradient">🔥 Trending</span>
                            )}
                            {role.popular && !role.trending && (
                                <span className="badge badge-primary">Popular</span>
                            )}
                            <span className="tag">{role.demand} Demand</span>
                        </div>
                        {selections.role === role.id && (
                            <div style={{
                                marginTop: 'var(--spacing-md)',
                                padding: 'var(--spacing-sm) var(--spacing-md)',
                                background: 'var(--success-soft)',
                                borderRadius: 'var(--radius-md)',
                                fontSize: '0.8rem',
                                color: 'var(--success)'
                            }}>
                                ✓ Selected
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    const renderStep2 = () => (
        <div className="animate-fade-in">
            <div className="text-center mb-2xl">
                <h2 className="mb-md">What type of company are you <span className="text-gradient">targeting?</span></h2>
                <p className="text-secondary">We'll customize your prep based on interview patterns</p>
            </div>

            <div className="grid grid-2" style={{ gap: 'var(--spacing-xl)', maxWidth: '900px', margin: '0 auto' }}>
                {getAllCompanyTiers().map((tier) => (
                    <div
                        key={tier.id}
                        className={`glass-card company-card ${selections.companyTier === tier.id ? 'selected' : ''}`}
                        onClick={() => handleCompanySelect(tier.id)}
                    >
                        <div className="company-logo" style={{
                            fontSize: '2.5rem',
                            background: selections.companyTier === tier.id ? 'var(--info-soft)' : 'var(--bg-elevated)'
                        }}>
                            {tier.icon}
                        </div>
                        <h3>{tier.name}</h3>
                        <p>{tier.description}</p>

                        <div style={{
                            display: 'flex',
                            gap: 'var(--spacing-lg)',
                            marginTop: 'var(--spacing-md)',
                            paddingTop: 'var(--spacing-md)',
                            borderTop: '1px solid var(--border-subtle)'
                        }}>
                            <div>
                                <div className="text-muted" style={{ fontSize: '0.75rem' }}>DIFFICULTY</div>
                                <div style={{ display: 'flex', gap: '2px' }}>
                                    {[1, 2, 3, 4, 5].map(n => (
                                        <span
                                            key={n}
                                            style={{
                                                color: n <= tier.difficulty ? 'var(--accent-primary)' : 'var(--text-muted)',
                                                fontSize: '0.875rem'
                                            }}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className="text-muted" style={{ fontSize: '0.75rem' }}>PREP TIME</div>
                                <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{tier.prepTime}</div>
                            </div>
                        </div>

                        <div className="company-tags" style={{ marginTop: 'var(--spacing-md)' }}>
                            {tier.focus.slice(0, 3).map(f => (
                                <span key={f} className="tag">{f}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderStep3 = () => (
        <div className="animate-fade-in">
            <div className="text-center mb-2xl">
                <h2 className="mb-md">What's your current <span className="text-gradient">experience level?</span></h2>
                <p className="text-secondary">We'll adjust the learning pace and depth accordingly</p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--spacing-xl)', maxWidth: '1000px', margin: '0 auto' }}>
                {getAllExperienceLevels().map((level) => (
                    <div
                        key={level.id}
                        className={`glass-card ${selections.experienceLevel === level.id ? 'selected' : ''}`}
                        style={{
                            padding: 'var(--spacing-2xl)',
                            cursor: 'pointer',
                            textAlign: 'center'
                        }}
                        onClick={() => handleExperienceSelect(level.id)}
                    >
                        <div style={{
                            fontSize: '3rem',
                            marginBottom: 'var(--spacing-md)'
                        }}>
                            {level.icon}
                        </div>
                        <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>{level.name}</h3>
                        <p style={{ marginBottom: 'var(--spacing-lg)' }}>{level.description}</p>

                        <div style={{
                            textAlign: 'left',
                            background: 'var(--bg-tertiary)',
                            borderRadius: 'var(--radius-md)',
                            padding: 'var(--spacing-md)'
                        }}>
                            <div className="text-muted" style={{ fontSize: '0.75rem', marginBottom: 'var(--spacing-sm)' }}>
                                FOCUS AREAS
                            </div>
                            {level.focusAreas.map(area => (
                                <div key={area} style={{
                                    fontSize: '0.85rem',
                                    color: 'var(--text-secondary)',
                                    padding: '2px 0'
                                }}>
                                    • {area}
                                </div>
                            ))}
                        </div>

                        {selections.experienceLevel === level.id && (
                            <div style={{
                                marginTop: 'var(--spacing-md)',
                                color: 'var(--success)',
                                fontWeight: '600'
                            }}>
                                ✓ Selected
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    const renderStep4 = () => {
        const selectedRole = roles[selections.role];
        const selectedTier = companyTiers[selections.companyTier];
        const selectedLevel = experienceLevels[selections.experienceLevel];

        if (isGenerating) {
            return (
                <div className="animate-fade-in text-center" style={{ padding: 'var(--spacing-4xl) 0' }}>
                    <div style={{
                        width: '120px',
                        height: '120px',
                        margin: '0 auto var(--spacing-xl)',
                        background: 'var(--gradient-primary)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '3rem',
                        animation: 'pulse 1.5s infinite'
                    }}>
                        🧠
                    </div>
                    <h2 className="mb-md">Generating Your <span className="text-gradient">Personalized Roadmap</span></h2>
                    <p className="text-secondary" style={{ maxWidth: '500px', margin: '0 auto' }}>
                        Our AI is creating a custom learning path based on your selections...
                    </p>
                    <div style={{
                        marginTop: 'var(--spacing-2xl)',
                        maxWidth: '400px',
                        margin: '0 auto'
                    }}>
                        <div className="progress-container" style={{ height: '6px' }}>
                            <div
                                className="progress-bar"
                                style={{
                                    width: '100%',
                                    animation: 'shimmer 1.5s infinite'
                                }}
                            />
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="animate-fade-in">
                <div className="text-center mb-2xl">
                    <h2 className="mb-md">Ready to Generate Your <span className="text-gradient">Roadmap!</span></h2>
                    <p className="text-secondary">Review your selections and let's get started</p>
                </div>

                <div className="glass-card p-2xl" style={{ maxWidth: '700px', margin: '0 auto' }}>
                    <h4 style={{ marginBottom: 'var(--spacing-lg)' }}>📋 Your Profile Summary</h4>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                        {/* Role */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--spacing-lg)',
                            padding: 'var(--spacing-lg)',
                            background: 'var(--bg-tertiary)',
                            borderRadius: 'var(--radius-lg)'
                        }}>
                            <div style={{
                                fontSize: '2rem',
                                width: '56px',
                                height: '56px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'var(--info-soft)',
                                borderRadius: 'var(--radius-md)'
                            }}>
                                {selectedRole?.icon}
                            </div>
                            <div>
                                <div className="text-muted" style={{ fontSize: '0.75rem' }}>TARGET ROLE</div>
                                <div style={{ fontWeight: '600', fontSize: '1.125rem' }}>{selectedRole?.name}</div>
                            </div>
                        </div>

                        {/* Company Tier */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--spacing-lg)',
                            padding: 'var(--spacing-lg)',
                            background: 'var(--bg-tertiary)',
                            borderRadius: 'var(--radius-lg)'
                        }}>
                            <div style={{
                                fontSize: '2rem',
                                width: '56px',
                                height: '56px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'var(--info-soft)',
                                borderRadius: 'var(--radius-md)'
                            }}>
                                {selectedTier?.icon}
                            </div>
                            <div>
                                <div className="text-muted" style={{ fontSize: '0.75rem' }}>TARGET COMPANIES</div>
                                <div style={{ fontWeight: '600', fontSize: '1.125rem' }}>{selectedTier?.name}</div>
                            </div>
                        </div>

                        {/* Experience Level */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--spacing-lg)',
                            padding: 'var(--spacing-lg)',
                            background: 'var(--bg-tertiary)',
                            borderRadius: 'var(--radius-lg)'
                        }}>
                            <div style={{
                                fontSize: '2rem',
                                width: '56px',
                                height: '56px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'var(--info-soft)',
                                borderRadius: 'var(--radius-md)'
                            }}>
                                {selectedLevel?.icon}
                            </div>
                            <div>
                                <div className="text-muted" style={{ fontSize: '0.75rem' }}>EXPERIENCE LEVEL</div>
                                <div style={{ fontWeight: '600', fontSize: '1.125rem' }}>{selectedLevel?.name}</div>
                            </div>
                        </div>
                    </div>

                    {/* Estimated Timeline */}
                    <div style={{
                        marginTop: 'var(--spacing-xl)',
                        padding: 'var(--spacing-lg)',
                        background: 'var(--info-soft)',
                        borderRadius: 'var(--radius-lg)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <div className="flex items-center gap-md">
                            <span style={{ fontSize: '1.5rem' }}>⏱️</span>
                            <div>
                                <div className="text-muted" style={{ fontSize: '0.75rem' }}>ESTIMATED PREP TIME</div>
                                <div style={{ fontWeight: '600', color: 'var(--accent-primary)' }}>
                                    {selectedTier?.prepTime}
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-muted" style={{ fontSize: '0.75rem' }}>SALARY RANGE</div>
                            <div style={{ fontWeight: '600', color: 'var(--success)' }}>
                                {selectedRole?.avgSalary?.entry} - {selectedRole?.avgSalary?.senior}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-2xl">
                    <button
                        className="btn btn-primary btn-lg animate-glow"
                        onClick={handleGenerateRoadmap}
                    >
                        🚀 Generate My Roadmap
                    </button>
                    <p className="text-muted mt-md" style={{ fontSize: '0.875rem' }}>
                        This will take about 10 seconds
                    </p>
                </div>
            </div>
        );
    };

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
                        <Link to="/" className="btn btn-ghost btn-sm">
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="page-content" style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    {renderStepIndicator()}

                    <div style={{ marginTop: 'var(--spacing-2xl)' }}>
                        {currentStep === 1 && renderStep1()}
                        {currentStep === 2 && renderStep2()}
                        {currentStep === 3 && renderStep3()}
                        {currentStep === 4 && renderStep4()}
                    </div>

                    {/* Navigation Buttons */}
                    {currentStep < 4 && (
                        <div className="flex justify-between items-center mt-2xl" style={{ maxWidth: '600px', margin: '0 auto', marginTop: 'var(--spacing-2xl)' }}>
                            <button
                                className="btn btn-secondary"
                                onClick={handleBack}
                                disabled={currentStep === 1}
                                style={{ visibility: currentStep === 1 ? 'hidden' : 'visible' }}
                            >
                                ← Back
                            </button>

                            <button
                                className="btn btn-primary"
                                onClick={handleNext}
                                disabled={!canProceed()}
                            >
                                {currentStep === 3 ? 'Review & Generate' : 'Continue'} →
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OnboardingFlow;
