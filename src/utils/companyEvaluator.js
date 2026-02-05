// Company-Specific Evaluation Engine
// Provides tailored evaluation criteria and benchmarks for different company types

import { companies, companyTypes } from '../data/companies';

// Company-specific evaluation dimensions and weights
export const companyEvaluationProfiles = {
    // FAANG companies prioritize different aspects
    google: {
        name: 'Google',
        weights: {
            problemSolving: 0.30,
            codeQuality: 0.25,
            communication: 0.20,
            optimization: 0.15,
            edgeCases: 0.10
        },
        dimensions: [
            { id: 'problemSolving', name: 'Problem Solving Approach', maxScore: 30, description: 'Thinking out loud, clarifying approach' },
            { id: 'codeQuality', name: 'Code Quality', maxScore: 25, description: 'Clean, readable, maintainable code' },
            { id: 'communication', name: 'Communication', maxScore: 20, description: 'Explaining thought process clearly' },
            { id: 'optimization', name: 'Time/Space Optimization', maxScore: 15, description: 'Discussing complexity and trade-offs' },
            { id: 'edgeCases', name: 'Edge Cases', maxScore: 10, description: 'Considering boundary conditions' }
        ],
        benchmarks: {
            interviewReady: 80,
            needsPractice: 60,
            strongCandidate: 90
        },
        specificTips: [
            'Always discuss your approach before coding',
            'Analyze time and space complexity',
            'Ask clarifying questions early',
            'Consider edge cases thoroughly'
        ]
    },

    amazon: {
        name: 'Amazon',
        weights: {
            leadershipPrinciples: 0.35,
            starFormat: 0.25,
            technicalDepth: 0.20,
            customerFocus: 0.10,
            ownership: 0.10
        },
        dimensions: [
            { id: 'leadershipPrinciples', name: 'Leadership Principles', maxScore: 35, description: 'Alignment with Amazon LPs' },
            { id: 'starFormat', name: 'STAR Format', maxScore: 25, description: 'Situation, Task, Action, Result structure' },
            { id: 'technicalDepth', name: 'Technical Depth', maxScore: 20, description: 'Deep understanding of concepts' },
            { id: 'customerFocus', name: 'Customer Focus', maxScore: 10, description: 'Customer obsession in answers' },
            { id: 'ownership', name: 'Ownership', maxScore: 10, description: 'Taking responsibility and initiative' }
        ],
        benchmarks: {
            interviewReady: 75,
            needsPractice: 55,
            strongCandidate: 88
        },
        leadershipPrincipleKeywords: {
            customerObsession: ['customer', 'user', 'client', 'end-user', 'experience', 'satisfaction'],
            ownership: ['owned', 'responsible', 'initiative', 'proactive', 'took charge', 'led'],
            inventSimplify: ['simplified', 'innovated', 'automated', 'improved', 'streamlined'],
            biasForAction: ['quickly', 'immediately', 'decided', 'acted', 'executed'],
            deliverResults: ['delivered', 'achieved', 'completed', 'accomplished', 'met deadline'],
            diveDeep: ['analyzed', 'investigated', 'root cause', 'metrics', 'data-driven']
        },
        specificTips: [
            'Prepare 2-3 stories for each Leadership Principle',
            'Always use STAR format for behavioral questions',
            'Mention metrics and measurable impact',
            'Connect technical decisions to customer impact'
        ]
    },

    meta: {
        name: 'Meta',
        weights: {
            speedOfExecution: 0.25,
            productSense: 0.25,
            technicalSkill: 0.25,
            collaboration: 0.15,
            innovation: 0.10
        },
        dimensions: [
            { id: 'speedOfExecution', name: 'Speed of Execution', maxScore: 25, description: 'Quick, working solutions' },
            { id: 'productSense', name: 'Product Sense', maxScore: 25, description: 'Understanding product implications' },
            { id: 'technicalSkill', name: 'Technical Skills', maxScore: 25, description: 'Strong coding fundamentals' },
            { id: 'collaboration', name: 'Collaboration', maxScore: 15, description: 'Team-oriented thinking' },
            { id: 'innovation', name: 'Innovation', maxScore: 10, description: 'Creative problem solving' }
        ],
        benchmarks: {
            interviewReady: 78,
            needsPractice: 58,
            strongCandidate: 90
        },
        specificTips: [
            'Move fast - working solutions are valued',
            'Think about product and user implications',
            'Graph problems are very common',
            'Show enthusiasm for building products'
        ]
    },

    microsoft: {
        name: 'Microsoft',
        weights: {
            technicalDepth: 0.30,
            communication: 0.25,
            problemSolving: 0.20,
            growthMindset: 0.15,
            collaboration: 0.10
        },
        dimensions: [
            { id: 'technicalDepth', name: 'Technical Depth', maxScore: 30, description: 'Deep understanding of CS fundamentals' },
            { id: 'communication', name: 'Communication', maxScore: 25, description: 'Clear explanation of concepts' },
            { id: 'problemSolving', name: 'Problem Solving', maxScore: 20, description: 'Systematic approach to problems' },
            { id: 'growthMindset', name: 'Growth Mindset', maxScore: 15, description: 'Learning from feedback and failures' },
            { id: 'collaboration', name: 'Collaboration', maxScore: 10, description: 'Team and stakeholder awareness' }
        ],
        benchmarks: {
            interviewReady: 75,
            needsPractice: 55,
            strongCandidate: 88
        },
        specificTips: [
            'Explain your thought process clearly',
            'Discuss trade-offs in your solutions',
            'Show continuous learning mindset',
            'Be prepared for deep follow-up questions'
        ]
    },

    // Service company profiles
    tcs: {
        name: 'TCS',
        weights: {
            correctness: 0.30,
            communication: 0.30,
            fundamentals: 0.25,
            attitude: 0.15
        },
        dimensions: [
            { id: 'correctness', name: 'Technical Correctness', maxScore: 30, description: 'Accurate answers' },
            { id: 'communication', name: 'Communication', maxScore: 30, description: 'Clear, confident speaking' },
            { id: 'fundamentals', name: 'CS Fundamentals', maxScore: 25, description: 'Basic concepts knowledge' },
            { id: 'attitude', name: 'Professional Attitude', maxScore: 15, description: 'Enthusiasm and professionalism' }
        ],
        benchmarks: {
            interviewReady: 65,
            needsPractice: 45,
            strongCandidate: 80
        },
        specificTips: [
            'Focus on clear communication',
            'Know basic programming concepts well',
            'Practice aptitude questions',
            'Be confident and professional'
        ]
    },

    infosys: {
        name: 'Infosys',
        weights: {
            logicalReasoning: 0.30,
            programming: 0.25,
            puzzleSolving: 0.25,
            communication: 0.20
        },
        dimensions: [
            { id: 'logicalReasoning', name: 'Logical Reasoning', maxScore: 30, description: 'Problem-solving ability' },
            { id: 'programming', name: 'Programming Skills', maxScore: 25, description: 'Coding fundamentals' },
            { id: 'puzzleSolving', name: 'Puzzle Solving', maxScore: 25, description: 'Creative thinking' },
            { id: 'communication', name: 'Communication', maxScore: 20, description: 'Clear expression' }
        ],
        benchmarks: {
            interviewReady: 65,
            needsPractice: 45,
            strongCandidate: 82
        },
        specificTips: [
            'Practice puzzles and brain teasers',
            'Be strong in one programming language',
            'Prepare for logical reasoning',
            'Show enthusiasm for learning'
        ]
    },

    wipro: {
        name: 'Wipro',
        weights: {
            technicalBasics: 0.30,
            communication: 0.30,
            adaptability: 0.25,
            teamwork: 0.15
        },
        dimensions: [
            { id: 'technicalBasics', name: 'Technical Basics', maxScore: 30, description: 'Networking, OS, Programming' },
            { id: 'communication', name: 'Communication', maxScore: 30, description: 'Written and verbal skills' },
            { id: 'adaptability', name: 'Adaptability', maxScore: 25, description: 'Flexibility and learning' },
            { id: 'teamwork', name: 'Teamwork', maxScore: 15, description: 'Collaboration skills' }
        ],
        benchmarks: {
            interviewReady: 65,
            needsPractice: 45,
            strongCandidate: 80
        },
        specificTips: [
            'Know networking and OS basics',
            'Practice essay writing',
            'Show adaptability in answers',
            'Highlight teamwork experiences'
        ]
    }
};

// Default profile for companies without specific evaluation
export const defaultEvaluationProfile = {
    name: 'General',
    weights: {
        correctness: 0.30,
        clarity: 0.25,
        structure: 0.20,
        relevance: 0.15,
        confidence: 0.10
    },
    dimensions: [
        { id: 'correctness', name: 'Technical Correctness', maxScore: 30, description: 'Accurate content' },
        { id: 'clarity', name: 'Clarity', maxScore: 25, description: 'Clear explanation' },
        { id: 'structure', name: 'Structure', maxScore: 20, description: 'Organized answer' },
        { id: 'relevance', name: 'Relevance', maxScore: 15, description: 'On-topic response' },
        { id: 'confidence', name: 'Confidence', maxScore: 10, description: 'Professional tone' }
    ],
    benchmarks: {
        interviewReady: 70,
        needsPractice: 50,
        strongCandidate: 85
    },
    specificTips: []
};

// Evaluation patterns for company-specific scoring
const evaluationPatterns = {
    // STAR format detection
    starFormat: {
        situation: ['situation', 'context', 'background', 'when', 'at that time'],
        task: ['task', 'goal', 'objective', 'challenge', 'needed to', 'had to'],
        action: ['i did', 'i implemented', 'i designed', 'took action', 'decided to', 'my approach'],
        result: ['result', 'outcome', 'achieved', 'delivered', 'completed', 'impact']
    },

    // Technical depth keywords
    technicalDepth: {
        positive: ['complexity', 'trade-off', 'alternatively', 'time complexity', 'space complexity', 'optimization', 'design pattern', 'architecture'],
        concepts: ['algorithm', 'data structure', 'recursion', 'iteration', 'memory', 'performance', 'scalability']
    },

    // Communication quality
    communication: {
        positive: ['specifically', 'for example', 'in other words', 'let me explain', 'the reason is'],
        negative: ['um', 'uh', 'like', 'you know', 'maybe', 'i guess', 'sort of', 'kind of']
    }
};

// Evaluate answer with company-specific criteria
export const evaluateWithCompanyContext = (answer, question, companyId) => {
    const profile = companyEvaluationProfiles[companyId] || defaultEvaluationProfile;
    const answerLower = answer.toLowerCase();
    const words = answerLower.split(/\\s+/).length;

    // Calculate dimension scores based on company profile
    const dimensionScores = profile.dimensions.map(dimension => {
        let score = evaluateDimensionForCompany(answer, question, dimension.id, companyId);
        const percentage = Math.round((score / dimension.maxScore) * 100);

        return {
            ...dimension,
            score,
            percentage
        };
    });

    // Calculate total score
    const totalScore = dimensionScores.reduce((sum, d) => sum + d.score, 0);
    const maxPossible = dimensionScores.reduce((sum, d) => sum + d.maxScore, 0);
    const percentageScore = Math.round((totalScore / maxPossible) * 100);

    // Determine readiness level
    const readinessLevel = getReadinessLevel(percentageScore, profile.benchmarks);

    // Generate company-specific feedback
    const strengths = dimensionScores
        .filter(d => d.percentage >= 70)
        .map(d => getStrengthMessage(d.id, companyId));

    const improvements = dimensionScores
        .filter(d => d.percentage < 60)
        .slice(0, 2)
        .map(d => getImprovementMessage(d.id, companyId));

    return {
        totalScore,
        percentageScore,
        maxPossible,
        dimensions: dimensionScores,
        readinessLevel,
        strengths: strengths.length > 0 ? strengths : ['Good effort - keep practicing!'],
        improvements,
        companyTips: profile.specificTips,
        benchmark: profile.benchmarks
    };
};

// Evaluate individual dimension based on company context
const evaluateDimensionForCompany = (answer, question, dimensionId, companyId) => {
    const answerLower = answer.toLowerCase();
    const words = answerLower.split(/\\s+/).length;
    const profile = companyEvaluationProfiles[companyId] || defaultEvaluationProfile;
    const dimension = profile.dimensions.find(d => d.id === dimensionId);
    const maxScore = dimension?.maxScore || 20;

    switch (dimensionId) {
        case 'leadershipPrinciples': {
            // Amazon-specific: Check for LP alignment
            const lpKeywords = companyEvaluationProfiles.amazon?.leadershipPrincipleKeywords || {};
            let lpScore = 0;
            Object.values(lpKeywords).forEach(keywords => {
                if (keywords.some(kw => answerLower.includes(kw))) {
                    lpScore += 5;
                }
            });
            return Math.min(lpScore, maxScore);
        }

        case 'starFormat': {
            // Check for STAR structure
            const starParts = evaluationPatterns.starFormat;
            let starScore = 0;
            if (starParts.situation.some(s => answerLower.includes(s))) starScore += 6;
            if (starParts.task.some(t => answerLower.includes(t))) starScore += 6;
            if (starParts.action.some(a => answerLower.includes(a))) starScore += 7;
            if (starParts.result.some(r => answerLower.includes(r))) starScore += 6;
            return Math.min(starScore, maxScore);
        }

        case 'problemSolving':
        case 'technicalDepth': {
            const techPatterns = evaluationPatterns.technicalDepth;
            let techScore = Math.round(maxScore * 0.4);
            techPatterns.positive.forEach(p => {
                if (answerLower.includes(p)) techScore += 3;
            });
            techPatterns.concepts.forEach(c => {
                if (answerLower.includes(c)) techScore += 2;
            });
            return Math.min(techScore, maxScore);
        }

        case 'communication': {
            const commPatterns = evaluationPatterns.communication;
            let commScore = Math.round(maxScore * 0.5);
            commPatterns.positive.forEach(p => {
                if (answerLower.includes(p)) commScore += 3;
            });
            commPatterns.negative.forEach(n => {
                if (answerLower.includes(n)) commScore -= 2;
            });
            const hasGoodLength = words >= 30 && words <= 250;
            if (hasGoodLength) commScore += 4;
            return Math.max(0, Math.min(commScore, maxScore));
        }

        case 'codeQuality':
        case 'correctness': {
            const keyPoints = question.keyPoints || [];
            const matchedPoints = keyPoints.filter(point =>
                answerLower.includes(point.toLowerCase().split(' ')[0])
            ).length;
            const coverage = keyPoints.length > 0 ? matchedPoints / keyPoints.length : 0.5;
            return Math.round(coverage * maxScore);
        }

        case 'speedOfExecution': {
            // Meta values concise, working solutions
            const isConise = words >= 50 && words <= 150;
            let score = Math.round(maxScore * 0.4);
            if (isConise) score += 5;
            if (answerLower.includes('solution') || answerLower.includes('approach')) score += 5;
            if (answerLower.includes('working') || answerLower.includes('implemented')) score += 5;
            return Math.min(score, maxScore);
        }

        case 'productSense': {
            const productKeywords = ['user', 'product', 'feature', 'experience', 'impact', 'scale', 'growth'];
            let score = Math.round(maxScore * 0.3);
            productKeywords.forEach(kw => {
                if (answerLower.includes(kw)) score += 3;
            });
            return Math.min(score, maxScore);
        }

        case 'customerFocus': {
            const customerKeywords = ['customer', 'user', 'client', 'experience', 'satisfaction', 'value'];
            let score = 0;
            customerKeywords.forEach(kw => {
                if (answerLower.includes(kw)) score += 2;
            });
            return Math.min(score, maxScore);
        }

        case 'ownership':
        case 'growthMindset': {
            const ownershipKeywords = ['i took', 'i owned', 'i led', 'i initiated', 'responsible', 'learned', 'improved'];
            let score = 0;
            ownershipKeywords.forEach(kw => {
                if (answerLower.includes(kw)) score += 2;
            });
            return Math.min(score, maxScore);
        }

        case 'edgeCases':
        case 'optimization': {
            const optKeywords = ['edge case', 'boundary', 'null', 'empty', 'optimize', 'complexity', 'efficient'];
            let score = 0;
            optKeywords.forEach(kw => {
                if (answerLower.includes(kw)) score += 2;
            });
            return Math.min(score, maxScore);
        }

        case 'fundamentals':
        case 'technicalBasics': {
            const keyPoints = question.keyPoints || [];
            const basicMatch = keyPoints.filter(p =>
                answerLower.includes(p.toLowerCase().split(' ')[0])
            ).length;
            const coverage = keyPoints.length > 0 ? basicMatch / keyPoints.length : 0.5;
            return Math.round(coverage * maxScore);
        }

        case 'logicalReasoning':
        case 'puzzleSolving': {
            const logicKeywords = ['because', 'therefore', 'since', 'step by step', 'first', 'then', 'finally'];
            let score = Math.round(maxScore * 0.3);
            logicKeywords.forEach(kw => {
                if (answerLower.includes(kw)) score += 3;
            });
            return Math.min(score, maxScore);
        }

        case 'programming': {
            const progKeywords = ['function', 'variable', 'loop', 'array', 'algorithm', 'code', 'implement'];
            let score = Math.round(maxScore * 0.3);
            progKeywords.forEach(kw => {
                if (answerLower.includes(kw)) score += 3;
            });
            return Math.min(score, maxScore);
        }

        case 'innovation':
        case 'collaboration':
        case 'teamwork': {
            const teamKeywords = ['team', 'collaborated', 'together', 'worked with', 'shared', 'helped', 'new approach'];
            let score = 0;
            teamKeywords.forEach(kw => {
                if (answerLower.includes(kw)) score += 2;
            });
            return Math.min(score, maxScore);
        }

        case 'attitude':
        case 'adaptability': {
            const positiveKeywords = ['eager', 'excited', 'passionate', 'learned', 'adapted', 'flexible'];
            const negativeKeywords = ['can\'t', 'won\'t', 'difficult', 'impossible'];
            let score = Math.round(maxScore * 0.5);
            positiveKeywords.forEach(kw => {
                if (answerLower.includes(kw)) score += 2;
            });
            negativeKeywords.forEach(kw => {
                if (answerLower.includes(kw)) score -= 2;
            });
            return Math.max(0, Math.min(score, maxScore));
        }

        default: {
            // Generic evaluation
            const hasContent = words >= 30;
            const hasStructure = answer.split('.').length >= 3;
            return hasContent && hasStructure ? Math.round(maxScore * 0.6) : Math.round(maxScore * 0.3);
        }
    }
};

// Get readiness level based on score and benchmarks
const getReadinessLevel = (score, benchmarks) => {
    if (score >= benchmarks.strongCandidate) {
        return {
            level: 'strong',
            label: 'Strong Candidate',
            color: 'var(--success)',
            description: 'Excellent! You\'re well-prepared for this company.'
        };
    } else if (score >= benchmarks.interviewReady) {
        return {
            level: 'ready',
            label: 'Interview Ready',
            color: 'var(--accent-primary)',
            description: 'Good preparation. You\'re ready for interviews with some minor improvements.'
        };
    } else if (score >= benchmarks.needsPractice) {
        return {
            level: 'practice',
            label: 'Needs Practice',
            color: 'var(--warning)',
            description: 'Keep practicing. Focus on the improvement areas.'
        };
    } else {
        return {
            level: 'beginner',
            label: 'Keep Learning',
            color: 'var(--error)',
            description: 'More preparation needed. Review fundamentals and practice regularly.'
        };
    }
};

// Get strength message based on dimension and company
const getStrengthMessage = (dimensionId, companyId) => {
    const messages = {
        leadershipPrinciples: 'Strong alignment with Leadership Principles',
        starFormat: 'Excellent use of STAR format',
        problemSolving: 'Great problem-solving approach',
        technicalDepth: 'Deep technical understanding',
        communication: 'Clear and effective communication',
        codeQuality: 'High-quality code practices',
        speedOfExecution: 'Good speed of execution',
        productSense: 'Strong product thinking',
        customerFocus: 'Great customer focus',
        ownership: 'Shows ownership mentality',
        growthMindset: 'Demonstrates growth mindset',
        edgeCases: 'Good edge case consideration',
        optimization: 'Optimization-aware thinking',
        correctness: 'Technically accurate response',
        fundamentals: 'Strong fundamentals',
        logicalReasoning: 'Logical reasoning skills',
        puzzleSolving: 'Creative problem solving',
        programming: 'Good programming knowledge',
        collaboration: 'Team-oriented mindset',
        teamwork: 'Collaborative approach',
        innovation: 'Innovative thinking',
        adaptability: 'Shows adaptability',
        attitude: 'Professional attitude',
        technicalBasics: 'Solid technical basics',
        relevance: 'Relevant and focused answer',
        structure: 'Well-structured response',
        clarity: 'Clear explanation',
        confidence: 'Confident delivery'
    };
    return messages[dimensionId] || 'Good performance in this area';
};

// Get improvement message based on dimension and company
const getImprovementMessage = (dimensionId, companyId) => {
    const messages = {
        leadershipPrinciples: 'Connect your answers to Amazon\'s Leadership Principles more explicitly',
        starFormat: 'Use STAR format (Situation, Task, Action, Result) for behavioral answers',
        problemSolving: 'Talk through your approach before diving into solutions',
        technicalDepth: 'Discuss trade-offs and complexity analysis more',
        communication: 'Explain your thought process more clearly',
        codeQuality: 'Focus on writing clean, readable code with good naming',
        speedOfExecution: 'Practice solving problems more quickly',
        productSense: 'Think about product implications and user impact',
        customerFocus: 'Emphasize customer/user value in your solutions',
        ownership: 'Highlight instances where you took initiative',
        growthMindset: 'Share examples of learning from challenges',
        edgeCases: 'Consider and discuss edge cases in your solutions',
        optimization: 'Analyze time and space complexity of solutions',
        correctness: 'Review technical concepts and ensure accuracy',
        fundamentals: 'Strengthen your foundational CS knowledge',
        logicalReasoning: 'Practice more logical and structured thinking',
        puzzleSolving: 'Work on puzzle-solving techniques',
        programming: 'Practice coding fundamentals regularly',
        collaboration: 'Include examples of teamwork in responses',
        teamwork: 'Highlight collaborative experiences more',
        innovation: 'Show creative approaches to problems',
        adaptability: 'Demonstrate flexibility in your responses',
        attitude: 'Show more enthusiasm and professionalism',
        technicalBasics: 'Review networking, OS, and basic concepts',
        relevance: 'Address all parts of the question directly',
        structure: 'Organize your answer with clear sections',
        clarity: 'Use examples to clarify your points',
        confidence: 'Use more assertive language'
    };
    return messages[dimensionId] || 'Work on improving this area';
};

// Get company benchmark comparison
export const getCompanyBenchmark = (companyId) => {
    const profile = companyEvaluationProfiles[companyId] || defaultEvaluationProfile;
    const company = companies[companyId];
    const type = companyTypes[company?.type];

    return {
        company: profile.name,
        type: type?.name || 'General',
        difficulty: company?.difficulty || 3,
        benchmarks: profile.benchmarks,
        dimensions: profile.dimensions,
        tips: profile.specificTips,
        focusAreas: company?.focusAreas || [],
        interviewStyle: company?.interviewStyle
    };
};

// Get evaluation profile for a company
export const getEvaluationProfile = (companyId) => {
    return companyEvaluationProfiles[companyId] || defaultEvaluationProfile;
};

// Compare score against company benchmark
export const compareWithBenchmark = (score, companyId) => {
    const profile = companyEvaluationProfiles[companyId] || defaultEvaluationProfile;
    const { interviewReady, needsPractice, strongCandidate } = profile.benchmarks;

    return {
        score,
        interviewReadyThreshold: interviewReady,
        strongCandidateThreshold: strongCandidate,
        gap: score < interviewReady ? interviewReady - score : 0,
        isReady: score >= interviewReady,
        isStrong: score >= strongCandidate,
        percentileEstimate: getPercentileEstimate(score, profile.benchmarks)
    };
};

// Estimate percentile based on score and benchmarks
const getPercentileEstimate = (score, benchmarks) => {
    if (score >= benchmarks.strongCandidate) return '90+';
    if (score >= benchmarks.interviewReady) return '70-90';
    if (score >= benchmarks.needsPractice) return '40-70';
    return '<40';
};

export default {
    evaluateWithCompanyContext,
    getCompanyBenchmark,
    getEvaluationProfile,
    compareWithBenchmark,
    companyEvaluationProfiles,
    defaultEvaluationProfile
};
