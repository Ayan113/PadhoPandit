// PadhoPandit - AI Guide Agent
// Your personal mentor from Day 1 to Job Offer

// AI Guide persona and configuration
export const aiGuideConfig = {
    name: 'Pandit Ji',
    tagline: 'Your AI Career Mentor',
    role: 'Senior engineer + mentor who actually cares',
    avatar: '🧙‍♂️',

    // Personality traits
    personality: {
        tone: 'friendly, encouraging, no-BS',
        style: 'simple English, no jargon unless explained',
        approach: 'Supportive but pushes you to grow',
        humor: 'occasional light humor to keep things engaging'
    }
};

// Journey phases with daily tasks and milestones
export const journeyPhases = {
    foundation: {
        id: 'foundation',
        name: 'Build Your Foundation',
        icon: '🧱',
        duration: 'Weeks 1-3',
        description: 'Master the basics before running',
        color: '#3b82f6',
        milestones: [
            {
                id: 'setup',
                title: 'Environment Setup',
                day: 1,
                tasks: [
                    { id: 'install-vscode', title: 'Install VS Code', type: 'action', time: '15 min' },
                    { id: 'setup-github', title: 'Create GitHub account', type: 'action', time: '10 min' },
                    { id: 'learn-terminal', title: 'Learn basic terminal commands', type: 'learn', time: '30 min' }
                ],
                reward: '🏆 Dev Environment Ready!'
            },
            {
                id: 'programming-basics',
                title: 'Programming Fundamentals',
                day: 2,
                duration: 5,
                tasks: [
                    { id: 'variables', title: 'Variables & Data Types', type: 'learn', time: '45 min' },
                    { id: 'conditions', title: 'Conditionals & Loops', type: 'learn', time: '45 min' },
                    { id: 'functions', title: 'Functions & Scope', type: 'learn', time: '45 min' },
                    { id: 'practice-1', title: 'Solve 5 Easy coding problems', type: 'practice', time: '1 hr' }
                ],
                reward: '🎯 Syntax Master!'
            },
            {
                id: 'git-basics',
                title: 'Version Control with Git',
                day: 7,
                duration: 2,
                tasks: [
                    { id: 'git-init', title: 'Learn git init, add, commit', type: 'learn', time: '30 min' },
                    { id: 'git-push', title: 'Push your first repo', type: 'action', time: '20 min' },
                    { id: 'git-branch', title: 'Branches and PRs', type: 'learn', time: '45 min' }
                ],
                reward: '🌿 Git Ninja!'
            }
        ]
    },

    dataStructures: {
        id: 'data-structures',
        name: 'Data Structures Mastery',
        icon: '📊',
        duration: 'Weeks 4-7',
        description: 'The backbone of every interview',
        color: '#8b5cf6',
        milestones: [
            {
                id: 'arrays-strings',
                title: 'Arrays & Strings',
                day: 22,
                duration: 7,
                tasks: [
                    { id: 'array-basics', title: 'Array operations & complexity', type: 'learn', time: '1 hr' },
                    { id: 'two-pointers', title: 'Two Pointer technique', type: 'learn', time: '1 hr' },
                    { id: 'sliding-window', title: 'Sliding Window pattern', type: 'learn', time: '1 hr' },
                    { id: 'array-problems', title: 'Solve 10 Array problems', type: 'practice', time: '3 hr' }
                ],
                reward: '🎖️ Array Warrior!'
            },
            {
                id: 'linked-lists',
                title: 'Linked Lists',
                day: 29,
                duration: 3,
                tasks: [
                    { id: 'll-basics', title: 'Singly & Doubly LL', type: 'learn', time: '1 hr' },
                    { id: 'll-ops', title: 'Insert, Delete, Reverse', type: 'learn', time: '1 hr' },
                    { id: 'll-problems', title: 'Solve 5 LL problems', type: 'practice', time: '2 hr' }
                ],
                reward: '🔗 Link Master!'
            },
            {
                id: 'stacks-queues',
                title: 'Stacks & Queues',
                day: 32,
                duration: 3,
                tasks: [
                    { id: 'stack-basics', title: 'Stack operations & patterns', type: 'learn', time: '45 min' },
                    { id: 'queue-basics', title: 'Queue & variants (Deque)', type: 'learn', time: '45 min' },
                    { id: 'monotonic', title: 'Monotonic Stack pattern', type: 'learn', time: '1 hr' },
                    { id: 'sq-problems', title: 'Solve 8 Stack/Queue problems', type: 'practice', time: '2 hr' }
                ],
                reward: '📚 LIFO/FIFO Pro!'
            },
            {
                id: 'trees',
                title: 'Trees & Binary Search Trees',
                day: 35,
                duration: 7,
                tasks: [
                    { id: 'tree-basics', title: 'Tree traversals (DFS, BFS)', type: 'learn', time: '1.5 hr' },
                    { id: 'bst', title: 'BST operations', type: 'learn', time: '1 hr' },
                    { id: 'recursion-trees', title: 'Recursion in trees', type: 'learn', time: '1 hr' },
                    { id: 'tree-problems', title: 'Solve 10 Tree problems', type: 'practice', time: '4 hr' }
                ],
                reward: '🌳 Tree Whisperer!'
            },
            {
                id: 'graphs',
                title: 'Graphs',
                day: 42,
                duration: 7,
                tasks: [
                    { id: 'graph-rep', title: 'Graph representations', type: 'learn', time: '1 hr' },
                    { id: 'dfs-bfs-graph', title: 'DFS & BFS in graphs', type: 'learn', time: '1.5 hr' },
                    { id: 'dijkstra', title: 'Shortest path algorithms', type: 'learn', time: '2 hr' },
                    { id: 'graph-problems', title: 'Solve 8 Graph problems', type: 'practice', time: '4 hr' }
                ],
                reward: '🕸️ Graph Guru!'
            }
        ]
    },

    algorithms: {
        id: 'algorithms',
        name: 'Algorithm Techniques',
        icon: '⚡',
        duration: 'Weeks 8-10',
        description: 'The patterns that crack interviews',
        color: '#f59e0b',
        milestones: [
            {
                id: 'sorting',
                title: 'Sorting & Searching',
                day: 50,
                duration: 4,
                tasks: [
                    { id: 'sort-algos', title: 'Merge Sort, Quick Sort', type: 'learn', time: '2 hr' },
                    { id: 'binary-search', title: 'Binary Search patterns', type: 'learn', time: '1.5 hr' },
                    { id: 'sort-problems', title: 'Solve 6 Sorting problems', type: 'practice', time: '2 hr' }
                ],
                reward: '🔍 Search Expert!'
            },
            {
                id: 'dynamic-programming',
                title: 'Dynamic Programming',
                day: 54,
                duration: 10,
                tasks: [
                    { id: 'dp-intro', title: 'DP fundamentals & memoization', type: 'learn', time: '2 hr' },
                    { id: 'dp-patterns', title: 'Classic DP patterns', type: 'learn', time: '3 hr' },
                    { id: 'dp-2d', title: '2D DP problems', type: 'learn', time: '2 hr' },
                    { id: 'dp-problems', title: 'Solve 15 DP problems', type: 'practice', time: '8 hr' }
                ],
                reward: '🧠 DP Legend!'
            },
            {
                id: 'recursion-backtracking',
                title: 'Recursion & Backtracking',
                day: 64,
                duration: 5,
                tasks: [
                    { id: 'recursion-master', title: 'Master recursion patterns', type: 'learn', time: '1.5 hr' },
                    { id: 'backtrack', title: 'Backtracking technique', type: 'learn', time: '2 hr' },
                    { id: 'bt-problems', title: 'Solve 8 Backtracking problems', type: 'practice', time: '3 hr' }
                ],
                reward: '🔄 Recursion King!'
            }
        ]
    },

    projects: {
        id: 'projects',
        name: 'Build Real Projects',
        icon: '🚀',
        duration: 'Weeks 11-13',
        description: 'Resume-worthy builds that impress',
        color: '#10b981',
        milestones: [
            {
                id: 'project-1',
                title: 'Portfolio Website',
                day: 70,
                duration: 5,
                tasks: [
                    { id: 'design', title: 'Design your portfolio', type: 'action', time: '2 hr' },
                    { id: 'code', title: 'Build with React', type: 'action', time: '6 hr' },
                    { id: 'deploy', title: 'Deploy on Vercel', type: 'action', time: '1 hr' }
                ],
                reward: '🌐 Live on Web!'
            },
            {
                id: 'project-2',
                title: 'Full Stack App',
                day: 75,
                duration: 10,
                tasks: [
                    { id: 'plan', title: 'Plan features & schema', type: 'action', time: '2 hr' },
                    { id: 'backend', title: 'Build REST API', type: 'action', time: '8 hr' },
                    { id: 'frontend', title: 'Build React frontend', type: 'action', time: '8 hr' },
                    { id: 'integrate', title: 'Deploy full stack', type: 'action', time: '3 hr' }
                ],
                reward: '🏗️ Full Stack Dev!'
            }
        ]
    },

    interviewPrep: {
        id: 'interview-prep',
        name: 'Interview Prep',
        icon: '🎤',
        duration: 'Weeks 14-16',
        description: 'Crack the interview with confidence',
        color: '#ef4444',
        milestones: [
            {
                id: 'behavioral',
                title: 'Behavioral Questions',
                day: 90,
                duration: 5,
                tasks: [
                    { id: 'star', title: 'Master STAR method', type: 'learn', time: '1 hr' },
                    { id: 'stories', title: 'Prepare 5 key stories', type: 'action', time: '2 hr' },
                    { id: 'mock-behavioral', title: 'Mock behavioral interviews', type: 'practice', time: '3 hr' }
                ],
                reward: '💬 Story Teller!'
            },
            {
                id: 'system-design-intro',
                title: 'System Design Basics',
                day: 95,
                duration: 7,
                tasks: [
                    { id: 'sd-concepts', title: 'Core SD concepts', type: 'learn', time: '3 hr' },
                    { id: 'sd-patterns', title: 'Common patterns', type: 'learn', time: '2 hr' },
                    { id: 'sd-practice', title: 'Design 3 systems', type: 'practice', time: '4 hr' }
                ],
                reward: '🏛️ Architect!'
            },
            {
                id: 'mock-interviews',
                title: 'Mock Interviews',
                day: 102,
                duration: 10,
                tasks: [
                    { id: 'mock-1', title: 'Technical mock #1', type: 'practice', time: '1 hr' },
                    { id: 'mock-2', title: 'Technical mock #2', type: 'practice', time: '1 hr' },
                    { id: 'mock-3', title: 'Technical mock #3', type: 'practice', time: '1 hr' },
                    { id: 'refine', title: 'Review and improve', type: 'action', time: '2 hr' }
                ],
                reward: '🎯 Interview Ready!'
            }
        ]
    }
};

// Daily motivational messages from AI Guide
export const dailyMotivation = [
    { day: 1, message: "Welcome aboard! 🚀 Today marks Day 1 of your journey. Every expert was once a beginner. Let's go!" },
    { day: 7, message: "One week down! 💪 You've set up your environment and written your first code. That's huge!" },
    { day: 14, message: "Two weeks in! You're building consistency. That's the #1 predictor of success. Keep going!" },
    { day: 30, message: "30 days! 🎉 You've covered the basics. The foundation is set. Now we build on it!" },
    { day: 50, message: "Halfway there! You're solving problems that seemed impossible on Day 1. See how far you've come?" },
    { day: 75, message: "You're in the project phase now! Building real things feels different, right? You're becoming a creator." },
    { day: 90, message: "90 days! Interview prep begins. You've put in the work. Now let's show companies what you've got!" },
    { day: 100, message: "🔥 The final stretch! You're ready. Trust your preparation. The job is within reach!" }
];

// AI Guide responses for different contexts
export const guideResponses = {
    greeting: [
        "Hey! Ready to level up today? Let's check what's on your plate. 📚",
        "Good to see you back! Your consistency is impressive. Let's keep that streak going! 🔥",
        "Welcome back, future developer! Your roadmap awaits. Let's make today count! 💪"
    ],

    encouragement: [
        "Stuck? That's normal. The best engineers get stuck all the time—they just don't give up.",
        "Remember: confusion is part of learning. Push through, and clarity will come.",
        "You've solved hard problems before. This one is no different. Break it down, try again.",
        "Take a 5-minute break, then come back fresh. Sometimes distance brings clarity."
    ],

    celebration: [
        "🎉 Amazing work! You crushed that milestone. Reward yourself with something nice!",
        "Look at you go! Another task done. You're unstoppable! 🚀",
        "That's the consistency I love to see! Keep stacking these wins!"
    ],

    taskComplete: [
        "✅ Task complete! You're {progress}% through this milestone. Keep it up!",
        "Done! That's {streak} days in a row. Your future self will thank you.",
        "Another one down! You're building skills that will last a lifetime."
    ],

    struggleDetected: [
        "I noticed you've been on this for a while. Want me to break it down differently?",
        "This is a tough one. Let me show you a hint without giving it all away.",
        "No shame in taking a step back. Should we review the prerequisite concepts?"
    ],

    nightOwl: [
        "Still grinding at this hour? 🦉 Respect! But don't forget—rest is part of learning too.",
        "Late night session! Just make sure you're sleeping enough. Tired brains don't learn well."
    ],

    comeback: [
        "Welcome back! It's been {days} days. No judgment—let's pick up where you left off.",
        "You're back! That takes courage. Let's review quickly and get you rolling again.",
        "Glad to see you! Progress isn't linear. The important thing is you showed up today."
    ]
};

// AI Guide chat contexts
export const chatContexts = {
    concept: {
        prompt: 'I\'m confused about {topic}. Can you explain it simply?',
        responseStyle: 'Start with a real-world analogy, then break down the technical concept step by step.'
    },
    debug: {
        prompt: 'My code isn\'t working. Here\'s what I\'m getting: {error}',
        responseStyle: 'Ask clarifying questions, then guide them to the solution without giving it directly.'
    },
    approach: {
        prompt: 'How should I approach this problem: {problem}',
        responseStyle: 'Walk through the thought process. Explain patterns that apply. Give hints, not solutions.'
    },
    motivation: {
        prompt: 'I\'m feeling discouraged. Is this normal?',
        responseStyle: 'Be empathetic. Share that struggle is normal. Point to their progress. Encourage small wins.'
    },
    career: {
        prompt: 'What should I focus on for {company} interviews?',
        responseStyle: 'Provide specific guidance for the company type. Be actionable and realistic.'
    }
};

// Generate today's focus based on user's journey day
export const getTodaysFocus = (dayNumber, profile) => {
    let currentPhase = null;
    let currentMilestone = null;
    let tasksForToday = [];

    // Find current phase and milestone based on day
    for (const [phaseId, phase] of Object.entries(journeyPhases)) {
        for (const milestone of phase.milestones) {
            if (dayNumber >= milestone.day && dayNumber < (milestone.day + (milestone.duration || 1))) {
                currentPhase = phase;
                currentMilestone = milestone;

                // Calculate which tasks are relevant today
                const daysIntoMilestone = dayNumber - milestone.day;
                const tasksPerDay = Math.ceil(milestone.tasks.length / (milestone.duration || 1));
                const startIdx = daysIntoMilestone * tasksPerDay;
                tasksForToday = milestone.tasks.slice(startIdx, startIdx + tasksPerDay);
                break;
            }
        }
        if (currentMilestone) break;
    }

    return {
        dayNumber,
        phase: currentPhase,
        milestone: currentMilestone,
        tasks: tasksForToday,
        motivation: dailyMotivation.find(m => m.day <= dayNumber)?.message || dailyMotivation[0].message
    };
};

// AI Guide helper functions
export const getTimeSensitiveGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 6) return guideResponses.nightOwl[0];
    if (hour < 12) return "Good morning! ☀️ Early bird catches the bug... I mean, fixes the bug! 😄";
    if (hour < 17) return "Good afternoon! Perfect time for some focused learning. Let's dive in!";
    if (hour < 21) return "Good evening! 🌆 Winding down? Let's make this session count!";
    return guideResponses.nightOwl[Math.floor(Math.random() * guideResponses.nightOwl.length)];
};

export const getRandomResponse = (category) => {
    const responses = guideResponses[category] || guideResponses.greeting;
    return responses[Math.floor(Math.random() * responses.length)];
};
