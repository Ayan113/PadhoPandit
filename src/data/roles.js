// PadhoPandit - Career Roles Data
// Comprehensive role definitions with skills, paths, and salary info

export const roles = {
    frontend: {
        id: 'frontend',
        name: 'Frontend Developer',
        shortName: 'Frontend',
        icon: '🎨',
        color: '#3b82f6',
        description: 'Build beautiful, interactive user interfaces and web experiences',
        longDescription: 'Create stunning web applications using modern frameworks like React, Vue, and Angular. Focus on user experience, responsive design, and performance optimization.',
        avgSalary: {
            entry: '₹4-8 LPA',
            mid: '₹10-18 LPA',
            senior: '₹20-40 LPA'
        },
        demand: 'Very High',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Responsive Design'],
        roadmapDuration: '4-6 months',
        popular: true
    },

    backend: {
        id: 'backend',
        name: 'Backend Developer',
        shortName: 'Backend',
        icon: '⚙️',
        color: '#22c55e',
        description: 'Build robust APIs, databases, and server-side logic',
        longDescription: 'Design and implement server-side applications, RESTful APIs, database systems, and microservices architecture.',
        avgSalary: {
            entry: '₹5-10 LPA',
            mid: '₹12-22 LPA',
            senior: '₹25-50 LPA'
        },
        demand: 'Very High',
        skills: ['Node.js', 'Python', 'Java', 'SQL', 'REST APIs', 'System Design'],
        roadmapDuration: '4-6 months',
        popular: true
    },

    fullstack: {
        id: 'fullstack',
        name: 'Full Stack Developer',
        shortName: 'Full Stack',
        icon: '🚀',
        color: '#8b5cf6',
        description: 'Master both frontend and backend development',
        longDescription: 'End-to-end development expertise covering UI/UX, APIs, databases, deployment, and DevOps basics.',
        avgSalary: {
            entry: '₹6-12 LPA',
            mid: '₹15-28 LPA',
            senior: '₹30-60 LPA'
        },
        demand: 'Extremely High',
        skills: ['React', 'Node.js', 'Databases', 'APIs', 'DevOps', 'System Design'],
        roadmapDuration: '6-9 months',
        popular: true
    },

    dataScientist: {
        id: 'dataScientist',
        name: 'Data Scientist',
        shortName: 'Data Science',
        icon: '📊',
        color: '#f59e0b',
        description: 'Extract insights from data and build predictive models',
        longDescription: 'Analyze complex datasets, build machine learning models, and derive actionable insights to drive business decisions.',
        avgSalary: {
            entry: '₹6-12 LPA',
            mid: '₹15-30 LPA',
            senior: '₹35-70 LPA'
        },
        demand: 'High',
        skills: ['Python', 'Statistics', 'Machine Learning', 'SQL', 'Visualization', 'Deep Learning'],
        roadmapDuration: '6-9 months',
        popular: true
    },

    mlEngineer: {
        id: 'mlEngineer',
        name: 'AI/ML Engineer',
        shortName: 'AI/ML',
        icon: '🤖',
        color: '#ec4899',
        description: 'Build and deploy machine learning models at scale',
        longDescription: 'Design, train, and deploy ML models in production environments. Focus on MLOps, model optimization, and AI systems.',
        avgSalary: {
            entry: '₹8-15 LPA',
            mid: '₹18-35 LPA',
            senior: '₹40-80 LPA'
        },
        demand: 'Very High',
        skills: ['Python', 'TensorFlow', 'PyTorch', 'MLOps', 'Deep Learning', 'Computer Vision'],
        roadmapDuration: '8-12 months',
        popular: true
    },

    genaiEngineer: {
        id: 'genaiEngineer',
        name: 'GenAI Engineer',
        shortName: 'GenAI',
        icon: '✨',
        color: '#06b6d4',
        description: 'Build applications powered by generative AI and LLMs',
        longDescription: 'Develop applications using large language models, prompt engineering, fine-tuning, and AI agents.',
        avgSalary: {
            entry: '₹10-18 LPA',
            mid: '₹25-45 LPA',
            senior: '₹50-100+ LPA'
        },
        demand: 'Extremely High',
        skills: ['LLMs', 'Prompt Engineering', 'LangChain', 'RAG', 'Fine-tuning', 'AI Agents'],
        roadmapDuration: '4-6 months',
        popular: true,
        trending: true
    },

    devops: {
        id: 'devops',
        name: 'DevOps Engineer',
        shortName: 'DevOps',
        icon: '🔧',
        color: '#f97316',
        description: 'Automate, deploy, and manage cloud infrastructure',
        longDescription: 'Build CI/CD pipelines, manage cloud infrastructure, implement IaC, and ensure system reliability.',
        avgSalary: {
            entry: '₹6-12 LPA',
            mid: '₹14-28 LPA',
            senior: '₹30-55 LPA'
        },
        demand: 'High',
        skills: ['Linux', 'Docker', 'Kubernetes', 'AWS/GCP', 'CI/CD', 'Terraform'],
        roadmapDuration: '5-7 months',
        popular: false
    },

    productEngineer: {
        id: 'productEngineer',
        name: 'Product Engineer',
        shortName: 'Product Eng',
        icon: '💡',
        color: '#a855f7',
        description: 'Bridge product thinking with engineering execution',
        longDescription: 'Combine full-stack development skills with product sense, user empathy, and business understanding.',
        avgSalary: {
            entry: '₹8-15 LPA',
            mid: '₹18-35 LPA',
            senior: '₹35-65 LPA'
        },
        demand: 'High',
        skills: ['Full Stack', 'Product Thinking', 'User Research', 'Analytics', 'A/B Testing', 'System Design'],
        roadmapDuration: '6-9 months',
        popular: false
    }
};

// Experience levels with roadmap adjustments
export const experienceLevels = {
    beginner: {
        id: 'beginner',
        name: 'Complete Beginner',
        icon: '🌱',
        description: 'No prior programming experience (0-6 months)',
        multiplier: 1.5, // 50% more time needed
        focusAreas: ['Fundamentals', 'Basics', 'Building blocks'],
        tips: [
            'Start with programming basics',
            'Build small projects to learn',
            'Don\'t rush - consistency is key'
        ]
    },
    intermediate: {
        id: 'intermediate',
        name: 'Intermediate',
        icon: '🚀',
        description: 'Some programming experience (6-18 months)',
        multiplier: 1,
        focusAreas: ['Advanced concepts', 'Projects', 'Problem-solving'],
        tips: [
            'Focus on DSA and projects',
            'Start interview prep early',
            'Build a strong portfolio'
        ]
    },
    advanced: {
        id: 'advanced',
        name: 'Advanced / Working Professional',
        icon: '⭐',
        description: 'Experienced (18+ months or working)',
        multiplier: 0.7, // 30% less time needed
        focusAreas: ['System design', 'Advanced topics', 'Interview prep'],
        tips: [
            'Focus on company-specific prep',
            'Practice mock interviews',
            'Polish your resume and LinkedIn'
        ]
    }
};

// Company tiers
export const companyTiers = {
    faang: {
        id: 'faang',
        name: 'FAANG & Big Tech',
        icon: '🚀',
        description: 'Google, Amazon, Meta, Microsoft, Apple, Netflix',
        difficulty: 5,
        prepTime: '4-6 months',
        focus: ['DSA', 'System Design', 'Behavioral'],
        companies: ['google', 'amazon', 'meta', 'microsoft', 'apple']
    },
    productStartups: {
        id: 'productStartups',
        name: 'Product Startups',
        icon: '⚡',
        description: 'Flipkart, Swiggy, Razorpay, Zerodha, CRED',
        difficulty: 4,
        prepTime: '3-4 months',
        focus: ['DSA', 'Machine Coding', 'System Design'],
        companies: ['flipkart', 'swiggy', 'razorpay']
    },
    serviceCompanies: {
        id: 'serviceCompanies',
        name: 'Service Companies',
        icon: '🏢',
        description: 'TCS, Infosys, Wipro, Cognizant, Accenture',
        difficulty: 2,
        prepTime: '1-2 months',
        focus: ['Aptitude', 'Basics', 'Communication'],
        companies: ['tcs', 'infosys', 'wipro']
    },
    anyCompany: {
        id: 'anyCompany',
        name: 'Any / General Prep',
        icon: '🎯',
        description: 'Well-rounded preparation for any opportunity',
        difficulty: 3,
        prepTime: '3-4 months',
        focus: ['Balanced approach'],
        companies: []
    }
};

// Helper functions
export const getRoleById = (id) => roles[id] || null;
export const getExperienceLevelById = (id) => experienceLevels[id] || null;
export const getCompanyTierById = (id) => companyTiers[id] || null;

export const getPopularRoles = () => Object.values(roles).filter(r => r.popular);
export const getTrendingRoles = () => Object.values(roles).filter(r => r.trending);
export const getAllRoles = () => Object.values(roles);
export const getAllExperienceLevels = () => Object.values(experienceLevels);
export const getAllCompanyTiers = () => Object.values(companyTiers);

export default roles;
