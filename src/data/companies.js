// Company Data - FAANG, Service, and Startup Company Profiles
// Complete interview patterns, focus areas, and preparation guidance

export const companyTypes = {
    faang: {
        id: 'faang',
        name: 'FAANG & Big Tech',
        description: 'Top tech giants with competitive interviews',
        icon: '🚀',
        difficulty: 'Advanced',
        avgSalary: '₹25-60 LPA',
        prepTime: '3-6 months'
    },
    service: {
        id: 'service',
        name: 'Service Companies',
        description: 'IT services and consulting firms',
        icon: '🏢',
        difficulty: 'Beginner to Intermediate',
        avgSalary: '₹3.5-8 LPA',
        prepTime: '1-2 months'
    },
    startup: {
        id: 'startup',
        name: 'Startups',
        description: 'Fast-paced startup environments',
        icon: '⚡',
        difficulty: 'Intermediate',
        avgSalary: '₹8-25 LPA',
        prepTime: '1-3 months'
    },
    product: {
        id: 'product',
        name: 'Product Companies',
        description: 'Mid to large product-based companies',
        icon: '📦',
        difficulty: 'Intermediate to Advanced',
        avgSalary: '₹12-35 LPA',
        prepTime: '2-4 months'
    }
};

export const companies = {
    // ============ FAANG & Big Tech ============
    google: {
        id: 'google',
        name: 'Google',
        type: 'faang',
        logo: '🔵',
        tagline: 'Organize the world\'s information',
        color: '#4285F4',
        difficulty: 5,
        interviewRounds: [
            { name: 'Online Assessment', duration: '90 mins', focus: 'DSA, Problem Solving' },
            { name: 'Phone Screen', duration: '45 mins', focus: 'Coding + Communication' },
            { name: 'Onsite Round 1', duration: '45 mins', focus: 'Data Structures' },
            { name: 'Onsite Round 2', duration: '45 mins', focus: 'Algorithms' },
            { name: 'Onsite Round 3', duration: '45 mins', focus: 'System Design' },
            { name: 'Onsite Round 4', duration: '45 mins', focus: 'Googleyness & Leadership' }
        ],
        focusAreas: ['Algorithms', 'Data Structures', 'System Design', 'Problem Solving', 'Code Quality'],
        interviewStyle: {
            description: 'Focus on problem-solving approach over perfect solutions',
            tips: [
                'Think out loud and explain your approach',
                'Ask clarifying questions before coding',
                'Discuss time and space complexity',
                'Consider edge cases thoroughly',
                'Write clean, readable code'
            ],
            commonPatterns: ['Arrays', 'Strings', 'Trees', 'Graphs', 'Dynamic Programming', 'Recursion']
        },
        questionTypes: {
            coding: 60,
            systemDesign: 25,
            behavioral: 15
        },
        famousQuestions: [
            'Design a search autocomplete system',
            'Find the median of two sorted arrays',
            'Word ladder problem',
            'Design Google Maps',
            'LRU Cache implementation'
        ],
        resources: [
            { name: 'LeetCode Google Tag', url: 'https://leetcode.com/company/google/' },
            { name: 'Google Interview Prep', url: 'https://careers.google.com/how-we-hire/' }
        ]
    },

    amazon: {
        id: 'amazon',
        name: 'Amazon',
        type: 'faang',
        logo: '🟠',
        tagline: 'Customer obsession over competitor focus',
        color: '#FF9900',
        difficulty: 5,
        interviewRounds: [
            { name: 'Online Assessment', duration: '90 mins', focus: 'Coding + Work Simulation' },
            { name: 'Phone Screen', duration: '60 mins', focus: 'Coding + LP Questions' },
            { name: 'Loop Round 1', duration: '60 mins', focus: 'Data Structures + LP' },
            { name: 'Loop Round 2', duration: '60 mins', focus: 'Problem Solving + LP' },
            { name: 'Loop Round 3', duration: '60 mins', focus: 'System Design + LP' },
            { name: 'Bar Raiser', duration: '60 mins', focus: 'Leadership Principles Deep Dive' }
        ],
        focusAreas: ['Leadership Principles', 'Data Structures', 'System Design', 'Scalability', 'Customer Focus'],
        interviewStyle: {
            description: 'Heavy emphasis on Leadership Principles with every answer',
            tips: [
                'Use STAR format for behavioral questions',
                'Connect your answers to Leadership Principles',
                'Think about scale (millions of users)',
                'Consider customer impact in system design',
                'Prepare 2-3 stories per Leadership Principle'
            ],
            leadershipPrinciples: [
                'Customer Obsession',
                'Ownership',
                'Invent and Simplify',
                'Are Right, A Lot',
                'Learn and Be Curious',
                'Hire and Develop the Best',
                'Insist on the Highest Standards',
                'Think Big',
                'Bias for Action',
                'Frugality',
                'Earn Trust',
                'Dive Deep',
                'Have Backbone; Disagree and Commit',
                'Deliver Results'
            ]
        },
        questionTypes: {
            coding: 40,
            systemDesign: 30,
            behavioral: 30
        },
        famousQuestions: [
            'Design Amazon\'s recommendation system',
            'Two sum and its variations',
            'Design a rate limiter',
            'Tell me about a time you disagreed with your manager',
            'Maximum subarray problem'
        ],
        resources: [
            { name: 'Amazon LP Guide', url: 'https://www.amazon.jobs/en/principles' },
            { name: 'LeetCode Amazon Tag', url: 'https://leetcode.com/company/amazon/' }
        ]
    },

    meta: {
        id: 'meta',
        name: 'Meta (Facebook)',
        type: 'faang',
        logo: '🔷',
        tagline: 'Move fast and build things',
        color: '#1877F2',
        difficulty: 5,
        interviewRounds: [
            { name: 'Initial Screen', duration: '45 mins', focus: 'Coding' },
            { name: 'Onsite Coding 1', duration: '45 mins', focus: 'Algorithms' },
            { name: 'Onsite Coding 2', duration: '45 mins', focus: 'Data Structures' },
            { name: 'System Design', duration: '45 mins', focus: 'Architecture' },
            { name: 'Behavioral', duration: '45 mins', focus: 'Culture Fit' }
        ],
        focusAreas: ['Quick Problem Solving', 'Graph Algorithms', 'Product Sense', 'System Design', 'Move Fast'],
        interviewStyle: {
            description: 'Fast-paced coding with emphasis on working solutions quickly',
            tips: [
                'Solve problems quickly - time is valued',
                'Think about product implications',
                'Graph problems are very common',
                'Consider social network scale',
                'Show passion for building products'
            ],
            commonPatterns: ['Graphs', 'BFS/DFS', 'Trees', 'Arrays', 'String Manipulation', 'Dynamic Programming']
        },
        questionTypes: {
            coding: 55,
            systemDesign: 25,
            behavioral: 20
        },
        famousQuestions: [
            'Design Facebook News Feed',
            'Clone a graph',
            'Minimum remove to make valid parentheses',
            'Design Instagram Stories',
            'Serialize and deserialize binary tree'
        ],
        resources: [
            { name: 'Meta Careers', url: 'https://www.metacareers.com/' },
            { name: 'LeetCode Facebook Tag', url: 'https://leetcode.com/company/facebook/' }
        ]
    },

    microsoft: {
        id: 'microsoft',
        name: 'Microsoft',
        type: 'faang',
        logo: '🟦',
        tagline: 'Empower every person and organization',
        color: '#00A4EF',
        difficulty: 4,
        interviewRounds: [
            { name: 'Online Assessment', duration: '90 mins', focus: 'Coding + MCQs' },
            { name: 'Phone Screen', duration: '45 mins', focus: 'Technical Discussion' },
            { name: 'Onsite Round 1', duration: '60 mins', focus: 'Coding' },
            { name: 'Onsite Round 2', duration: '60 mins', focus: 'Design' },
            { name: 'Onsite Round 3', duration: '60 mins', focus: 'Behavioral' },
            { name: 'As Appropriate', duration: '60 mins', focus: 'Hiring Manager' }
        ],
        focusAreas: ['Technical Depth', 'Data Structures', 'Object-Oriented Design', 'Problem Solving', 'Communication'],
        interviewStyle: {
            description: 'Balanced approach with emphasis on understanding concepts deeply',
            tips: [
                'Explain your thought process clearly',
                'Focus on OOP design principles',
                'Be prepared for follow-up questions',
                'Show growth mindset',
                'Discuss trade-offs in your solutions'
            ],
            commonPatterns: ['Arrays', 'Linked Lists', 'Trees', 'Dynamic Programming', 'Bit Manipulation']
        },
        questionTypes: {
            coding: 50,
            systemDesign: 25,
            behavioral: 25
        },
        famousQuestions: [
            'Design a parking lot system',
            'Reverse a linked list',
            'LRU Cache',
            'Find all anagrams in a string',
            'Design Microsoft Teams'
        ],
        resources: [
            { name: 'Microsoft Careers', url: 'https://careers.microsoft.com/' },
            { name: 'LeetCode Microsoft Tag', url: 'https://leetcode.com/company/microsoft/' }
        ]
    },

    apple: {
        id: 'apple',
        name: 'Apple',
        type: 'faang',
        logo: '⚪',
        tagline: 'Think different',
        color: '#555555',
        difficulty: 5,
        interviewRounds: [
            { name: 'Recruiter Call', duration: '30 mins', focus: 'Background' },
            { name: 'Technical Phone', duration: '60 mins', focus: 'Coding + CS Fundamentals' },
            { name: 'Onsite - Coding', duration: '45 mins', focus: 'Algorithms' },
            { name: 'Onsite - Design', duration: '45 mins', focus: 'System/Object Design' },
            { name: 'Onsite - Domain', duration: '45 mins', focus: 'Role-specific' },
            { name: 'Onsite - Culture', duration: '45 mins', focus: 'Behavioral' }
        ],
        focusAreas: ['Attention to Detail', 'Design Thinking', 'Technical Excellence', 'Innovation', 'Quality'],
        interviewStyle: {
            description: 'Focus on quality, attention to detail, and elegant solutions',
            tips: [
                'Quality over quantity in your code',
                'Think about user experience',
                'Show attention to edge cases',
                'Demonstrate passion for Apple products',
                'Focus on clean, maintainable code'
            ],
            commonPatterns: ['Arrays', 'Strings', 'Trees', 'System Design', 'Concurrency']
        },
        questionTypes: {
            coding: 45,
            systemDesign: 30,
            behavioral: 25
        },
        famousQuestions: [
            'Design the iOS App Store',
            'Implement a thread-safe data structure',
            'String manipulation problems',
            'Design iCloud sync',
            'Merge intervals'
        ],
        resources: [
            { name: 'Apple Careers', url: 'https://www.apple.com/careers/' },
            { name: 'LeetCode Apple Tag', url: 'https://leetcode.com/company/apple/' }
        ]
    },

    // ============ Service Companies ============
    tcs: {
        id: 'tcs',
        name: 'TCS (Tata Consultancy Services)',
        type: 'service',
        logo: '🔴',
        tagline: 'Building on Belief',
        color: '#E21836',
        difficulty: 2,
        interviewRounds: [
            { name: 'TCS NQT', duration: '180 mins', focus: 'Aptitude + Coding' },
            { name: 'Technical Interview', duration: '30-45 mins', focus: 'CS Fundamentals' },
            { name: 'Managerial Interview', duration: '20-30 mins', focus: 'HR + Situational' },
            { name: 'HR Interview', duration: '15-20 mins', focus: 'Background + Salary' }
        ],
        focusAreas: ['Aptitude', 'Basic Programming', 'Communication', 'DBMS', 'OS Basics'],
        interviewStyle: {
            description: 'Focus on fundamentals and communication skills',
            tips: [
                'Practice aptitude thoroughly',
                'Be confident in communication',
                'Know your resume well',
                'Basic data structures are enough',
                'Focus on clarity over complexity'
            ],
            commonTopics: ['SQL Queries', 'OOP Concepts', 'Basic Coding', 'Arrays', 'Strings']
        },
        questionTypes: {
            aptitude: 40,
            coding: 30,
            technical: 20,
            hr: 10
        },
        famousQuestions: [
            'Explain OOP concepts',
            'Write a program to reverse a string',
            'SQL queries (JOIN, GROUP BY)',
            'Tell me about yourself',
            'Why TCS?'
        ],
        resources: [
            { name: 'TCS NQT Practice', url: 'https://www.tcsion.com/hub/national-qualifier-test/' },
            { name: 'TCS Careers', url: 'https://www.tcs.com/careers' }
        ]
    },

    infosys: {
        id: 'infosys',
        name: 'Infosys',
        type: 'service',
        logo: '🔵',
        tagline: 'Navigate your next',
        color: '#007CC3',
        difficulty: 2,
        interviewRounds: [
            { name: 'InfyTQ / Online Test', duration: '150 mins', focus: 'Aptitude + Coding' },
            { name: 'Technical Interview', duration: '30-45 mins', focus: 'Programming Basics' },
            { name: 'HR Interview', duration: '20-30 mins', focus: 'Behavioral' }
        ],
        focusAreas: ['Logical Reasoning', 'Programming Basics', 'Puzzles', 'DBMS', 'Problem Solving'],
        interviewStyle: {
            description: 'Emphasis on logical thinking and puzzle-solving abilities',
            tips: [
                'Practice puzzles and brain teasers',
                'Strong fundamentals in any one language',
                'Be prepared for logical reasoning',
                'Know about Infosys and its services',
                'Show enthusiasm for learning'
            ],
            commonTopics: ['Puzzles', 'Pattern Recognition', 'Basic DSA', 'SQL', 'OOP']
        },
        questionTypes: {
            aptitude: 35,
            coding: 35,
            technical: 20,
            hr: 10
        },
        famousQuestions: [
            'Puzzle: River crossing problems',
            'Pattern printing programs',
            'DBMS normalization',
            'What are your strengths?',
            'Where do you see yourself in 5 years?'
        ],
        resources: [
            { name: 'InfyTQ', url: 'https://infytq.infosys.com/' },
            { name: 'Infosys Careers', url: 'https://www.infosys.com/careers/' }
        ]
    },

    wipro: {
        id: 'wipro',
        name: 'Wipro',
        type: 'service',
        logo: '🌸',
        tagline: 'Delivering on the promise of new',
        color: '#5B1F69',
        difficulty: 2,
        interviewRounds: [
            { name: 'NLTH / Online Test', duration: '120 mins', focus: 'Aptitude + Essay' },
            { name: 'Technical Interview', duration: '30-40 mins', focus: 'Basics' },
            { name: 'HR Interview', duration: '20-30 mins', focus: 'Behavioral' }
        ],
        focusAreas: ['Written Communication', 'Aptitude', 'Basic Programming', 'Networking', 'OS'],
        interviewStyle: {
            description: 'Balanced focus on technical basics and communication',
            tips: [
                'Practice essay writing',
                'Focus on networking and OS basics',
                'Good communication is key',
                'Know about Wipro\'s digital services',
                'Be genuine in HR round'
            ],
            commonTopics: ['Networking', 'OS Concepts', 'Basic Coding', 'SQL', 'Java/Python Basics']
        },
        questionTypes: {
            aptitude: 35,
            coding: 30,
            technical: 25,
            hr: 10
        },
        famousQuestions: [
            'OSI model layers',
            'Process vs Thread',
            'Simple coding problems',
            'Describe a challenge you faced',
            'Why Wipro?'
        ],
        resources: [
            { name: 'Wipro Elite NLTH', url: 'https://www.wipro.com/careers/' },
            { name: 'Wipro Careers', url: 'https://careers.wipro.com/' }
        ]
    },

    cognizant: {
        id: 'cognizant',
        name: 'Cognizant',
        type: 'service',
        logo: '🔷',
        tagline: 'Intuition Engineered',
        color: '#0033A0',
        difficulty: 2,
        interviewRounds: [
            { name: 'GenC / Online Test', duration: '120 mins', focus: 'Aptitude + Coding' },
            { name: 'Technical Interview', duration: '30-45 mins', focus: 'CS Fundamentals' },
            { name: 'HR Interview', duration: '20-30 mins', focus: 'Behavioral' }
        ],
        focusAreas: ['Aptitude', 'Basic Programming', 'Automata', 'Communication', 'DBMS'],
        interviewStyle: {
            description: 'Focus on coding basics and clear communication',
            tips: [
                'Practice Automata-based coding',
                'Know basic programming well',
                'Clear communication is valued',
                'Research about digital transformation',
                'Show problem-solving attitude'
            ],
            commonTopics: ['Arrays', 'Strings', 'SQL', 'Java Basics', 'OOP']
        },
        questionTypes: {
            aptitude: 35,
            coding: 35,
            technical: 20,
            hr: 10
        },
        famousQuestions: [
            'Automata coding problems',
            'SQL queries and joins',
            'OOP pillars with examples',
            'Tell me about a project',
            'Why do you want to join Cognizant?'
        ],
        resources: [
            { name: 'Cognizant Careers', url: 'https://careers.cognizant.com/' }
        ]
    },

    accenture: {
        id: 'accenture',
        name: 'Accenture',
        type: 'service',
        logo: '🟣',
        tagline: 'Let there be change',
        color: '#A100FF',
        difficulty: 2,
        interviewRounds: [
            { name: 'Online Assessment', duration: '90 mins', focus: 'Cognitive + Technical' },
            { name: 'Coding Assessment', duration: '45 mins', focus: 'Programming' },
            { name: 'Communication Test', duration: '20 mins', focus: 'English' },
            { name: 'Technical + HR', duration: '30-45 mins', focus: 'Combined' }
        ],
        focusAreas: ['Cognitive Ability', 'English Communication', 'Basic Coding', 'Adaptability', 'Teamwork'],
        interviewStyle: {
            description: 'Strong emphasis on communication and cognitive abilities',
            tips: [
                'Focus on English communication',
                'Practice cognitive ability tests',
                'Know about Accenture\'s services',
                'Show leadership potential',
                'Be adaptable and flexible'
            ],
            commonTopics: ['Pseudo Code', 'Basic Logic', 'English Grammar', 'Aptitude', 'Situational Questions']
        },
        questionTypes: {
            aptitude: 30,
            coding: 30,
            communication: 25,
            hr: 15
        },
        famousQuestions: [
            'Pseudo code questions',
            'English comprehension',
            'Describe a team situation',
            'What do you know about Accenture?',
            'How do you handle pressure?'
        ],
        resources: [
            { name: 'Accenture Careers', url: 'https://www.accenture.com/in-en/careers' }
        ]
    },

    // ============ Product Companies ============
    flipkart: {
        id: 'flipkart',
        name: 'Flipkart',
        type: 'product',
        logo: '🟡',
        tagline: 'India\'s e-commerce leader',
        color: '#F8E71C',
        difficulty: 4,
        interviewRounds: [
            { name: 'Online Coding', duration: '90 mins', focus: 'DSA' },
            { name: 'Machine Coding', duration: '90 mins', focus: 'LLD Implementation' },
            { name: 'Problem Solving 1', duration: '60 mins', focus: 'DSA' },
            { name: 'Problem Solving 2', duration: '60 mins', focus: 'DSA' },
            { name: 'System Design', duration: '60 mins', focus: 'HLD' },
            { name: 'Hiring Manager', duration: '45 mins', focus: 'Behavioral' }
        ],
        focusAreas: ['DSA', 'Machine Coding', 'LLD', 'HLD', 'Problem Solving'],
        interviewStyle: {
            description: 'Heavy focus on coding and low-level design',
            tips: [
                'Practice machine coding rounds',
                'Know design patterns well',
                'E-commerce domain knowledge helps',
                'Focus on clean code and testing',
                'Think about scale'
            ],
            commonPatterns: ['Arrays', 'Trees', 'Graphs', 'DP', 'OOP Design']
        },
        questionTypes: {
            coding: 50,
            lld: 25,
            hld: 15,
            behavioral: 10
        },
        famousQuestions: [
            'Design a parking lot (machine coding)',
            'Design Flipkart\'s search',
            'LRU Cache variations',
            'Design a cab booking system',
            'Order management system'
        ],
        resources: [
            { name: 'Flipkart Careers', url: 'https://www.flipkartcareers.com/' }
        ]
    },

    uber: {
        id: 'uber',
        name: 'Uber',
        type: 'product',
        logo: '⚫',
        tagline: 'Move the way you want',
        color: '#000000',
        difficulty: 5,
        interviewRounds: [
            { name: 'Phone Screen', duration: '45 mins', focus: 'Coding' },
            { name: 'Onsite Coding 1', duration: '45 mins', focus: 'DSA' },
            { name: 'Onsite Coding 2', duration: '45 mins', focus: 'DSA' },
            { name: 'System Design', duration: '60 mins', focus: 'Architecture' },
            { name: 'Behavioral', duration: '45 mins', focus: 'Culture' }
        ],
        focusAreas: ['Algorithms', 'System Design', 'Real-time Systems', 'Geo-spatial', 'Scale'],
        interviewStyle: {
            description: 'Focus on real-time systems and geo-spatial algorithms',
            tips: [
                'Understand location-based systems',
                'Think about real-time constraints',
                'Consider high availability',
                'Graph algorithms are important',
                'Know about ride-sharing domain'
            ],
            commonPatterns: ['Graphs', 'Heap', 'Trees', 'Concurrency', 'Rate Limiting']
        },
        questionTypes: {
            coding: 50,
            systemDesign: 30,
            behavioral: 20
        },
        famousQuestions: [
            'Design Uber ride matching',
            'Find nearest drivers',
            'Design surge pricing',
            'Rate limiter implementation',
            'Shortest path algorithms'
        ],
        resources: [
            { name: 'Uber Engineering Blog', url: 'https://eng.uber.com/' },
            { name: 'Uber Careers', url: 'https://www.uber.com/careers/' }
        ]
    }
};

// Get companies by type
export const getCompaniesByType = (type) => {
    return Object.values(companies).filter(c => c.type === type);
};

// Get company by ID
export const getCompanyById = (id) => {
    return companies[id] || null;
};

// Get all company types with their companies
export const getCompanyTypeWithCompanies = () => {
    return Object.entries(companyTypes).map(([key, type]) => ({
        ...type,
        companies: getCompaniesByType(key)
    }));
};

// Get interview tips for a company
export const getInterviewTips = (companyId) => {
    const company = getCompanyById(companyId);
    return company?.interviewStyle?.tips || [];
};

// Get preparation time recommendation
export const getPrepTimeRecommendation = (companyId) => {
    const company = getCompanyById(companyId);
    const type = companyTypes[company?.type];
    return {
        company: company?.name,
        prepTime: type?.prepTime,
        difficulty: company?.difficulty,
        focusAreas: company?.focusAreas
    };
};

export default companies;
