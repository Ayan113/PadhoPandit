// Answer Evaluation Engine
// Enhanced with company-specific evaluation support

import { evaluationDimensions, getScoreLabel, getFramework } from '../data/frameworks';
import { evaluateWithCompanyContext, getEvaluationProfile } from './companyEvaluator';

// Keywords and patterns for basic evaluation
const evaluationPatterns = {
    clarity: {
        positive: ['because', 'for example', 'specifically', 'in other words', 'to clarify', 'means that', 'such as'],
        negative: ['um', 'uh', 'like', 'you know', 'kind of', 'sort of', 'basically', 'actually']
    },
    structure: {
        positive: ['first', 'second', 'third', 'finally', 'to begin', 'next', 'then', 'in conclusion', 'to summarize'],
        negative: ['anyway', 'but wait', 'oh', 'going back to']
    },
    correctness: {
        // This will be checked against question keyPoints
    },
    relevance: {
        // This will be checked against question text and keyPoints
    },
    confidence: {
        positive: ['i believe', 'in my experience', 'i would', 'i\'ve learned', 'i\'m confident'],
        negative: ['i think maybe', 'i\'m not sure', 'probably', 'i guess', 'i don\'t know if', 'sorry']
    }
};

// Evaluate a single dimension
const evaluateDimension = (answer, question, dimensionId) => {
    const answerLower = answer.toLowerCase();
    const words = answerLower.split(/\s+/).length;

    switch (dimensionId) {
        case 'clarity': {
            const positiveCount = evaluationPatterns.clarity.positive.filter(p => answerLower.includes(p)).length;
            const negativeCount = evaluationPatterns.clarity.negative.filter(p => answerLower.includes(p)).length;
            const hasGoodLength = words >= 30 && words <= 200;

            let score = 10;
            score += positiveCount * 2;
            score -= negativeCount * 2;
            score += hasGoodLength ? 5 : -3;

            return Math.max(0, Math.min(20, score));
        }

        case 'structure': {
            const positiveCount = evaluationPatterns.structure.positive.filter(p => answerLower.includes(p)).length;
            const negativeCount = evaluationPatterns.structure.negative.filter(p => answerLower.includes(p)).length;
            const hasParagraphs = answer.includes('\n') || answer.includes('.') && answer.split('.').length >= 3;

            let score = 10;
            score += positiveCount * 3;
            score -= negativeCount * 3;
            score += hasParagraphs ? 4 : -2;

            return Math.max(0, Math.min(20, score));
        }

        case 'correctness': {
            const keyPoints = question.keyPoints || [];
            const matchedPoints = keyPoints.filter(point =>
                answerLower.includes(point.toLowerCase().split(' ')[0])
            ).length;

            const coverage = keyPoints.length > 0 ? matchedPoints / keyPoints.length : 0.5;
            return Math.round(coverage * 30);
        }

        case 'relevance': {
            const questionWords = question.question.toLowerCase().split(/\s+/);
            const keyTerms = questionWords.filter(w => w.length > 4);
            const matchedTerms = keyTerms.filter(term => answerLower.includes(term)).length;

            const coverage = keyTerms.length > 0 ? matchedTerms / keyTerms.length : 0.5;
            const hasDirectAddress = answer.length >= 50;

            let score = Math.round(coverage * 15);
            score += hasDirectAddress ? 5 : 0;

            return Math.max(0, Math.min(20, score));
        }

        case 'confidence': {
            const positiveCount = evaluationPatterns.confidence.positive.filter(p => answerLower.includes(p)).length;
            const negativeCount = evaluationPatterns.confidence.negative.filter(p => answerLower.includes(p)).length;

            let score = 5;
            score += positiveCount * 2;
            score -= negativeCount * 2;

            return Math.max(0, Math.min(10, score));
        }

        default:
            return 10;
    }
};

// Main evaluation function
export const evaluateAnswer = (answer, question) => {
    if (!answer || answer.trim().length < 20) {
        return {
            totalScore: 0,
            scoreLabel: getScoreLabel(0),
            dimensions: evaluationDimensions.map(d => ({
                ...d,
                score: 0,
                percentage: 0
            })),
            strengths: [],
            improvements: ['Answer is too short. Try to provide more detail.'],
            suggestedStructure: getFramework(question.idealFramework)
        };
    }

    const dimensionScores = evaluationDimensions.map(dimension => {
        const score = evaluateDimension(answer, question, dimension.id);
        return {
            ...dimension,
            score,
            percentage: Math.round((score / dimension.maxScore) * 100)
        };
    });

    const totalScore = dimensionScores.reduce((sum, d) => sum + d.score, 0);
    const scoreLabel = getScoreLabel(totalScore);

    // Identify strengths (dimensions scoring >= 70%)
    const strengths = dimensionScores
        .filter(d => d.percentage >= 70)
        .map(d => {
            switch (d.id) {
                case 'clarity': return 'Clear and well-explained answer';
                case 'structure': return 'Good logical flow and organization';
                case 'correctness': return 'Demonstrates solid understanding of the concept';
                case 'relevance': return 'Directly addresses the question';
                case 'confidence': return 'Confident and professional tone';
                default: return d.name;
            }
        });

    // Identify improvements (dimensions scoring < 60%)
    const improvements = dimensionScores
        .filter(d => d.percentage < 60)
        .slice(0, 2) // Limit to 1-2 improvements
        .map(d => {
            switch (d.id) {
                case 'clarity': return 'Try using examples and clearer explanations';
                case 'structure': return 'Consider using transition words (first, then, finally)';
                case 'correctness': return 'Review the key concepts and include more technical accuracy';
                case 'relevance': return 'Make sure to directly address all parts of the question';
                case 'confidence': return 'Use more confident language and avoid hedging';
                default: return `Work on improving ${d.name.toLowerCase()}`;
            }
        });

    return {
        totalScore,
        scoreLabel,
        dimensions: dimensionScores,
        strengths: strengths.length > 0 ? strengths : ['You provided a response - keep practicing!'],
        improvements: improvements.length > 0 ? improvements : [],
        suggestedStructure: getFramework(question.idealFramework)
    };
};

// Generate coaching feedback
export const generateFeedback = (evaluation, question, mode = 'standard') => {
    const { scoreLabel, strengths, improvements, suggestedStructure } = evaluation;

    let feedback = {
        summary: '',
        whatWentWell: strengths,
        toImprove: improvements,
        structureTip: null
    };

    // Summary based on score
    if (scoreLabel.label === 'Excellent') {
        feedback.summary = 'Great answer! You demonstrated strong understanding and communicated clearly.';
    } else if (scoreLabel.label === 'Good') {
        feedback.summary = 'Good effort! Your answer shows understanding with room for refinement.';
    } else {
        feedback.summary = 'Keep practicing! Focus on the structure and key concepts.';
    }

    // Add structure tip based on mode
    if (mode === 'beginner' || mode === 'practice') {
        feedback.structureTip = {
            framework: suggestedStructure.name,
            components: suggestedStructure.components.map(c => c.name),
            tip: suggestedStructure.tips[0]
        };
    }

    return feedback;
};

// Enhanced evaluation with optional company context
export const evaluateAnswerWithContext = (answer, question, companyId = null) => {
    // If company context is provided, use company-specific evaluation
    if (companyId) {
        const companyEval = evaluateWithCompanyContext(answer, question, companyId);

        // Convert to standard format for compatibility
        return {
            totalScore: companyEval.percentageScore,
            scoreLabel: getScoreLabelFromPercentage(companyEval.percentageScore),
            dimensions: companyEval.dimensions,
            strengths: companyEval.strengths,
            improvements: companyEval.improvements,
            suggestedStructure: getFramework(question.idealFramework),
            companyContext: {
                readinessLevel: companyEval.readinessLevel,
                benchmark: companyEval.benchmark,
                companyTips: companyEval.companyTips
            }
        };
    }

    // Fall back to standard evaluation
    return evaluateAnswer(answer, question);
};

// Helper to get score label from percentage
const getScoreLabelFromPercentage = (percentage) => {
    if (percentage >= 80) {
        return { label: 'Excellent', color: 'var(--success)' };
    } else if (percentage >= 60) {
        return { label: 'Good', color: 'var(--accent-primary)' };
    } else {
        return { label: 'Needs Improvement', color: 'var(--warning)' };
    }
};

// Generate company-aware feedback
export const generateCompanyFeedback = (evaluation, question, companyId, mode = 'standard') => {
    const baseFeedback = generateFeedback(evaluation, question, mode);

    if (evaluation.companyContext) {
        baseFeedback.companyReadiness = evaluation.companyContext.readinessLevel;
        baseFeedback.companyTips = evaluation.companyContext.companyTips;
        baseFeedback.benchmark = evaluation.companyContext.benchmark;
    }

    return baseFeedback;
};

export default {
    evaluateAnswer,
    generateFeedback,
    evaluateAnswerWithContext,
    generateCompanyFeedback
};
