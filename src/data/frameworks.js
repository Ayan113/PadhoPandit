// Answer Evaluation Frameworks and Utilities

// Framework definitions for different question types
export const frameworks = {
    STAR: {
        name: 'STAR Framework',
        description: 'Situation - Task - Action - Result - Learning',
        components: [
            { id: 'situation', name: 'Situation', description: 'Set the context and background', weight: 15 },
            { id: 'task', name: 'Task', description: 'Describe your responsibility or goal', weight: 15 },
            { id: 'action', name: 'Action', description: 'Explain what you specifically did', weight: 30 },
            { id: 'result', name: 'Result', description: 'Share the outcomes and impact', weight: 25 },
            { id: 'learning', name: 'Learning', description: 'Reflect on what you learned', weight: 15 }
        ],
        tips: [
            'Keep the situation brief - focus on relevant context only',
            'Emphasize YOUR specific actions, not the team\'s',
            'Quantify results when possible (percentages, numbers, timeframes)',
            'Always end with a learning or reflection'
        ]
    },
    TECHNICAL: {
        name: 'Technical Explanation Framework',
        description: 'Definition - Example - Application',
        components: [
            { id: 'definition', name: 'Simple Definition', description: 'Clear, jargon-free explanation', weight: 30 },
            { id: 'example', name: 'Practical Example', description: 'Concrete code or scenario example', weight: 35 },
            { id: 'application', name: 'Real-World Application', description: 'When and why to use it', weight: 25 },
            { id: 'analogy', name: 'Analogy (Optional)', description: 'Relatable comparison for clarity', weight: 10 }
        ],
        tips: [
            'Start with the simplest possible definition',
            'Use concrete examples, not abstract descriptions',
            'Explain the "why" along with the "what"',
            'Analogies help but are optional'
        ]
    },
    SCENARIO: {
        name: 'Scenario Response Framework',
        description: 'Understand - Approach - Trade-offs - Team',
        components: [
            { id: 'understanding', name: 'Problem Understanding', description: 'Clarify and restate the problem', weight: 20 },
            { id: 'approach', name: 'Step-by-Step Approach', description: 'Logical sequence of actions', weight: 35 },
            { id: 'tradeoffs', name: 'Trade-offs & Reasoning', description: 'Discuss alternatives and choices', weight: 25 },
            { id: 'team', name: 'Team & Quality', description: 'Consider collaboration and standards', weight: 20 }
        ],
        tips: [
            'Show you understand the problem before jumping to solutions',
            'Think aloud - explain your reasoning',
            'Acknowledge there may be multiple valid approaches',
            'Consider team dynamics and communication'
        ]
    }
};

// Evaluation dimensions with scoring criteria
export const evaluationDimensions = [
    {
        id: 'clarity',
        name: 'Clarity of Explanation',
        maxScore: 20,
        criteria: {
            excellent: 'Answer is crystal clear, well-organized, and easy to follow',
            good: 'Answer is mostly clear with minor organizational issues',
            needsImprovement: 'Answer is confusing, disorganized, or hard to follow'
        }
    },
    {
        id: 'structure',
        name: 'Logical Structure',
        maxScore: 20,
        criteria: {
            excellent: 'Perfect flow from start to finish, uses appropriate framework',
            good: 'Good structure but could be more cohesive',
            needsImprovement: 'Jumps around, lacks clear beginning/middle/end'
        }
    },
    {
        id: 'correctness',
        name: 'Conceptual Correctness',
        maxScore: 30,
        criteria: {
            excellent: 'Demonstrates deep understanding, all facts are accurate',
            good: 'Shows understanding with minor gaps or imprecisions',
            needsImprovement: 'Contains significant errors or misconceptions'
        }
    },
    {
        id: 'relevance',
        name: 'Relevance to Question',
        maxScore: 20,
        criteria: {
            excellent: 'Directly addresses all parts of the question',
            good: 'Addresses the question with some tangential content',
            needsImprovement: 'Misses key parts of the question or goes off-topic'
        }
    },
    {
        id: 'confidence',
        name: 'Confidence & Tone',
        maxScore: 10,
        criteria: {
            excellent: 'Confident, professional tone without being arrogant',
            good: 'Generally confident with occasional hesitation',
            needsImprovement: 'Uncertain, apologetic, or overly casual'
        }
    }
];

// Score thresholds
export const scoreThresholds = {
    excellent: { min: 80, label: 'Excellent', color: 'success' },
    good: { min: 60, label: 'Good', color: 'accent' },
    needsImprovement: { min: 0, label: 'Needs Improvement', color: 'warning' }
};

// Get overall score label
export const getScoreLabel = (score) => {
    if (score >= scoreThresholds.excellent.min) return scoreThresholds.excellent;
    if (score >= scoreThresholds.good.min) return scoreThresholds.good;
    return scoreThresholds.needsImprovement;
};

// Helper function to get framework by type
export const getFramework = (type) => {
    return frameworks[type] || frameworks.TECHNICAL;
};
