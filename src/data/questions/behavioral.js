// Behavioral & Professionalism Questions for PadhoPandit Interview Prep
// Includes model answers optimized for AI-proctored interviews

export const behavioralQuestions = [
  {
    id: 'beh-001',
    category: 'Behavioral & Professionalism',
    difficulty: 'beginner',
    question: 'Tell me about a challenging project you worked on. What made it challenging and how did you handle it?',
    variations: [
      'Describe a difficult project you completed. What obstacles did you face?',
      'Can you share an experience where you had to overcome significant challenges in a project?',
      'Walk me through a project that pushed you outside your comfort zone.'
    ],
    idealFramework: 'STAR',
    keyPoints: [
      'Clear situation context',
      'Specific task/responsibility',
      'Concrete actions taken',
      'Measurable results',
      'Lessons learned'
    ],
    timeTarget: 90,
    hints: [
      'Choose a project with clear challenges and outcomes',
      'Focus on YOUR specific contributions and decisions',
      'Mention both technical and non-technical challenges if applicable'
    ],
    modelAnswer: {
      structure: 'STAR',
      answer: `**Situation:** During my final year, I worked on a team project to build a student management system with a tight 6-week deadline.

**Task:** I was responsible for designing and implementing the backend API and database schema. The challenge was that we had to integrate with an existing legacy system that had poor documentation.

**Action:** I took a systematic approach. First, I reverse-engineered the legacy API by testing endpoints and documenting responses. I created a compatibility layer to bridge the old and new systems. When we hit a critical bug two weeks before the deadline, I organized daily standups and worked extra hours to resolve integration issues.

**Result:** We delivered the project on time with all core features working. The system handled 500+ student records efficiently. My documentation also helped future teams maintain the integration.

**Learning:** This taught me the importance of thorough documentation and proactive communication. Now I always document APIs as I develop them.`,
      keyTakeaways: [
        'Shows technical problem-solving',
        'Demonstrates leadership and initiative',
        'Includes measurable outcomes',
        'Ends with a learning reflection'
      ]
    }
  },
  {
    id: 'beh-002',
    category: 'Behavioral & Professionalism',
    difficulty: 'beginner',
    question: 'How do you handle disagreements with team members or conflicting opinions?',
    variations: [
      'Describe a situation where you disagreed with a colleague. How did you resolve it?',
      'Tell me about a time you had a conflict at work. What was the outcome?',
      'How do you approach situations where your opinion differs from the team?'
    ],
    idealFramework: 'STAR',
    keyPoints: [
      'Professional approach to conflict',
      'Active listening skills',
      'Finding common ground',
      'Collaborative resolution',
      'Relationship preservation'
    ],
    timeTarget: 90,
    hints: [
      'Show you value different perspectives',
      'Demonstrate emotional intelligence',
      'Focus on the positive outcome and learning'
    ],
    modelAnswer: {
      structure: 'STAR',
      answer: `**Situation:** During a group project, my teammate and I disagreed about the database choice. I preferred PostgreSQL for its reliability, while they wanted MongoDB for flexibility.

**Task:** We needed to reach a decision quickly as it was blocking our development progress.

**Action:** Instead of pushing my preference, I suggested we both present our reasoning to the team. I listened carefully to their points about schema flexibility. I then proposed a compromise: we would use PostgreSQL but design our schemas to be more flexible using JSON columns for dynamic data.

**Result:** The team agreed with this approach. The project succeeded, and my teammate later thanked me for considering their perspective. We maintained a positive working relationship throughout.

**Learning:** I learned that disagreements often lead to better solutions when handled constructively. Now I always try to understand the reasoning behind different opinions before advocating for my own.`,
      keyTakeaways: [
        'Shows emotional intelligence',
        'Demonstrates active listening',
        'Focuses on collaborative resolution',
        'Preserves relationships'
      ]
    }
  },
  {
    id: 'beh-003',
    category: 'Behavioral & Professionalism',
    difficulty: 'beginner',
    question: 'Why are you interested in this role at our company?',
    variations: [
      'What attracts you to this position?',
      'Why do you want to work here?',
      'What interests you about our company and this role?'
    ],
    idealFramework: 'TECHNICAL',
    keyPoints: [
      'Research about company products/services',
      'Alignment with career goals',
      'Interest in the domain/industry',
      'Growth opportunities',
      'Company culture fit'
    ],
    timeTarget: 60,
    hints: [
      'Research the company\'s products and mission',
      'Connect your skills to their needs',
      'Show genuine enthusiasm'
    ],
    modelAnswer: {
      structure: 'TECHNICAL',
      answer: `I'm excited about this opportunity for three key reasons.

**First**, your company's focus on building impactful technology aligns perfectly with my interest in creating software that solves real problems. The products you build serve important industries, which means the work has meaningful impact.

**Second**, as a Software Engineer here, I see tremendous learning opportunities. Working on production-grade systems at scale will help me grow significantly. I'm particularly interested in learning about scalable architecture and clean code practices from experienced engineers.

**Third**, your culture of innovation appeals to me. The company invests in modern technologies and encourages continuous learning. I'm eager to contribute fresh ideas while learning from the team.

My background in programming, data structures, and system design gives me a solid foundation to contribute from day one while growing with the team.`,
      keyTakeaways: [
        'Shows company research',
        'Connects personal goals to role',
        'Demonstrates relevant skills',
        'Expresses genuine enthusiasm'
      ]
    }
  },
  {
    id: 'beh-004',
    category: 'Behavioral & Professionalism',
    difficulty: 'intermediate',
    question: 'Describe a time when you had to learn a new technology or skill quickly. How did you approach it?',
    variations: [
      'Tell me about a situation where you had to pick up something new in a short time.',
      'How do you typically approach learning unfamiliar technologies?',
      'Share an experience where you had to rapidly upskill for a project.'
    ],
    idealFramework: 'STAR',
    keyPoints: [
      'Self-directed learning approach',
      'Resource utilization (docs, tutorials, mentors)',
      'Time management',
      'Practical application',
      'Continuous improvement mindset'
    ],
    timeTarget: 90,
    hints: [
      'Show a structured approach to learning',
      'Mention specific resources you used',
      'Highlight the successful outcome'
    ],
    modelAnswer: {
      structure: 'STAR',
      answer: `**Situation:** For my capstone project, we decided to use React for the frontend, but I had only worked with vanilla JavaScript before. I had three weeks before development started.

**Task:** I needed to become proficient enough in React to build production-quality components and contribute meaningfully to the team.

**Action:** I created a structured learning plan. First, I completed the official React documentation tutorial. Then I built two small practice projects to apply concepts. I used YouTube tutorials for visual learning and Stack Overflow for specific questions. I also paired with a teammate who knew React, which accelerated my understanding of best practices.

**Result:** Within three weeks, I was comfortable building functional components, managing state, and using hooks. I ended up creating the dashboard and user profile modules for our project. The professor praised the code quality.

**Learning:** This experience taught me that structured, hands-on learning is most effective for me. I now apply this approach whenever I need to learn new technologies quickly.`,
      keyTakeaways: [
        'Shows structured learning approach',
        'Mentions specific resources',
        'Demonstrates practical application',
        'Includes successful outcome'
      ]
    }
  },
  {
    id: 'beh-005',
    category: 'Behavioral & Professionalism',
    difficulty: 'beginner',
    question: 'How do you prioritize your tasks when you have multiple deadlines?',
    variations: [
      'Describe your approach to managing competing priorities.',
      'How do you organize your work when juggling multiple assignments?',
      'Tell me about a time you had too many things to do. How did you manage?'
    ],
    idealFramework: 'SCENARIO',
    keyPoints: [
      'Prioritization methodology',
      'Communication with stakeholders',
      'Time management techniques',
      'Flexibility and adaptation',
      'Meeting commitments'
    ],
    timeTarget: 60,
    hints: [
      'Mention specific techniques (Eisenhower matrix, etc.)',
      'Show you communicate proactively about priorities',
      'Demonstrate adaptability'
    ],
    modelAnswer: {
      structure: 'SCENARIO',
      answer: `When facing multiple deadlines, I use a systematic three-step approach.

**First, I assess urgency and impact.** I list all tasks and categorize them by deadline and importance. Critical, time-sensitive tasks get immediate attention, while lower-priority items are scheduled for later.

**Second, I break down large tasks** into smaller, manageable chunks. This helps me make progress on multiple fronts without feeling overwhelmed. I use tools like Trello or simple to-do lists to track progress.

**Third, I communicate proactively.** If I realize I can't meet a deadline without compromising quality, I inform stakeholders early and propose alternatives—either adjusting the timeline or scope.

For example, during finals week, I had three project submissions within two days. I prioritized by deadline order, allocated focused time blocks for each, and communicated with one professor about needing a 12-hour extension. All projects were submitted successfully with good grades.`,
      keyTakeaways: [
        'Uses structured methodology',
        'Emphasizes communication',
        'Shows practical application',
        'Demonstrates adaptability'
      ]
    }
  },
  {
    id: 'beh-006',
    category: 'Behavioral & Professionalism',
    difficulty: 'intermediate',
    question: 'Tell me about a mistake you made in a project. How did you handle it?',
    variations: [
      'Describe a time when something you worked on didn\'t go as planned.',
      'Share an experience where you failed. What did you learn?',
      'Can you tell me about a time you made an error at work?'
    ],
    idealFramework: 'STAR',
    keyPoints: [
      'Accountability and ownership',
      'Quick identification of the issue',
      'Corrective actions taken',
      'Prevention measures',
      'Growth and learning'
    ],
    timeTarget: 90,
    hints: [
      'Be honest but choose a recoverable mistake',
      'Focus on what you learned',
      'Show how you prevented similar issues'
    ],
    modelAnswer: {
      structure: 'STAR',
      answer: `**Situation:** During an internship, I was tasked with writing a database migration script. I tested it in the development environment but didn't fully test the rollback procedure.

**Task:** When we ran the migration in staging, a bug caused data corruption in a few records. I needed to fix the issue quickly and prevent further damage.

**Action:** I immediately informed my supervisor rather than trying to hide or fix it alone. We rolled back using a backup, then I analyzed the root cause. I discovered I hadn't handled null values correctly. I fixed the script, wrote comprehensive tests including edge cases, and documented the rollback procedure properly.

**Result:** The corrected migration ran successfully. More importantly, I proposed adding a migration testing checklist to our team's workflow, which my supervisor adopted. No similar issues occurred afterward.

**Learning:** This taught me the importance of thorough testing, including edge cases and rollback scenarios. I now always test worst-case scenarios before running any data migrations.`,
      keyTakeaways: [
        'Shows accountability',
        'Demonstrates problem-solving',
        'Includes preventive measures',
        'Honest and reflective'
      ]
    }
  },
  {
    id: 'beh-007',
    category: 'Behavioral & Professionalism',
    difficulty: 'beginner',
    question: 'How do you stay updated with new technologies and industry trends?',
    variations: [
      'What do you do to keep your technical skills current?',
      'How do you continue learning in your field?',
      'Describe your approach to professional development.'
    ],
    idealFramework: 'TECHNICAL',
    keyPoints: [
      'Regular learning habits',
      'Variety of resources',
      'Practical application of learning',
      'Community involvement',
      'Curiosity and passion'
    ],
    timeTarget: 60,
    hints: [
      'Mention specific resources (blogs, podcasts, courses)',
      'Show practical application of learning',
      'Demonstrate genuine curiosity'
    ],
    modelAnswer: {
      structure: 'TECHNICAL',
      answer: `I believe continuous learning is essential in software engineering, so I've built regular habits around it.

**For daily learning**, I follow tech newsletters like TLDR and read articles from Dev.to and Medium. I also browse GitHub trending repositories to see what's gaining traction.

**For deeper learning**, I take online courses on platforms like Coursera and Udemy. Recently, I completed a course on system design fundamentals. I also read technical books—currently working through "Clean Code" by Robert Martin.

**For hands-on practice**, I work on personal projects that let me experiment with new technologies. Last month, I built a small CLI tool in Go to explore the language.

**For community engagement**, I participate in coding forums, attend local meetups when possible, and follow thought leaders on LinkedIn and Twitter.

This combination of passive consumption and active practice helps me stay current while building practical skills I can apply immediately.`,
      keyTakeaways: [
        'Shows structured approach',
        'Mentions specific resources',
        'Includes practical application',
        'Demonstrates genuine passion'
      ]
    }
  },
  {
    id: 'beh-008',
    category: 'Behavioral & Professionalism',
    difficulty: 'intermediate',
    question: 'Describe a time when you worked as part of a team. What was your role and contribution?',
    variations: [
      'Tell me about a successful team project. How did you contribute?',
      'How do you typically work within a team setting?',
      'Share an experience of effective teamwork.'
    ],
    idealFramework: 'STAR',
    keyPoints: [
      'Clear role definition',
      'Collaboration skills',
      'Communication approach',
      'Team dynamics handling',
      'Collective success focus'
    ],
    timeTarget: 90,
    hints: [
      'Highlight your specific contributions',
      'Show appreciation for team members',
      'Mention both individual and team outcomes'
    ],
    modelAnswer: {
      structure: 'STAR',
      answer: `**Situation:** In my software engineering course, we had a team project to build an e-commerce platform. Our team had four members with varying skill levels.

**Task:** I took on the role of backend developer and also became the informal technical lead since I had the most backend experience.

**Action:** I set up our project structure and established coding conventions early on. I organized weekly code reviews where we could learn from each other. When a teammate struggled with API development, I pair-programmed with them instead of just taking over the task. I also created documentation to help the frontend developers understand the API endpoints.

**Result:** We delivered a fully functional platform with user authentication, product catalog, and cart functionality. All team members contributed meaningfully, and we received an A grade. Two teammates thanked me for helping them improve their backend skills.

**Learning:** I learned that a good teammate shares knowledge rather than gatekeeping it. Helping others succeed makes the whole team stronger.`,
      keyTakeaways: [
        'Shows clear role and contributions',
        'Demonstrates collaboration',
        'Highlights helping others grow',
        'Focuses on team success'
      ]
    }
  }
];

export default behavioralQuestions;
