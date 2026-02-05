// Scenario-Based Engineering Judgment Questions for PadhoPandit Interview Prep
// Includes model answers optimized for AI-proctored interviews

export const scenarioQuestions = [
    {
        id: 'scen-001',
        category: 'Scenario-Based',
        difficulty: 'intermediate',
        question: 'You discover a critical bug in production on a Friday afternoon. How would you handle this situation?',
        variations: [
            'Walk me through how you\'d handle an urgent production issue.',
            'What steps would you take if you found a major bug right before the weekend?',
            'How do you approach crisis situations in software development?'
        ],
        idealFramework: 'SCENARIO',
        keyPoints: [
            'Assess severity and impact first',
            'Communicate immediately with stakeholders',
            'Prioritize based on risk',
            'Document everything',
            'Learn from the incident'
        ],
        timeTarget: 90,
        hints: [
            'Show a calm, systematic approach',
            'Emphasize communication',
            'Mention both short-term fix and long-term prevention'
        ],
        modelAnswer: {
            structure: 'SCENARIO',
            answer: `I would follow a systematic incident response approach:

**1. Assess Impact (First 5-10 minutes)**
- How many users are affected?
- Is data being corrupted or lost?
- Is it security-related?
- Can we reproduce it?

**2. Communicate Immediately**
- Alert my manager and team lead
- If customer-facing, notify relevant stakeholders
- Set expectations: "I'm investigating, will update in 30 minutes"

**3. Triage and Decide**
Based on severity:
- **Critical (data loss/security):** Start hotfix immediately, consider rollback
- **High (major feature broken):** Fix today if possible, or rollback
- **Medium (workaround exists):** Document and plan for Monday fix

**4. Execute the Fix**
- Work on fix with team review even on Friday
- Test thoroughly in staging before deploying
- Have a rollback plan ready

**5. Deploy and Monitor**
- Deploy during low-traffic window if possible
- Monitor logs and metrics closely
- Stay available for issues

**6. Post-Incident**
- Write incident report (what, why, how we fixed)
- Root cause analysis on Monday
- Add tests to prevent recurrence
- Update runbooks if needed

**Key mindset:** Stay calm, communicate proactively, and prioritize safety over speed. A rushed fix can create bigger problems.`,
            keyTakeaways: [
                'Systematic approach',
                'Emphasizes communication',
                'Shows severity-based decisions',
                'Includes post-incident learning'
            ]
        }
    },
    {
        id: 'scen-002',
        category: 'Scenario-Based',
        difficulty: 'intermediate',
        question: 'Your team is working on a feature, but halfway through, you realize the original design approach won\'t work. What do you do?',
        variations: [
            'How do you handle discovering a design flaw mid-implementation?',
            'What would you do if you realized your current approach has issues?',
            'Describe how you\'d pivot from a failing design.'
        ],
        idealFramework: 'SCENARIO',
        keyPoints: [
            'Raise concerns early',
            'Document the issue and alternatives',
            'Involve the team in decisions',
            'Consider sunk cost objectively',
            'Propose concrete alternatives'
        ],
        timeTarget: 90,
        hints: [
            'Show you would raise it early, not hide it',
            'Demonstrate structured problem-solving',
            'Balance speed with doing it right'
        ],
        modelAnswer: {
            structure: 'SCENARIO',
            answer: `This is a common situation that requires honesty and structured problem-solving:

**1. Verify and Document**
First, confirm the issue is real and not a misunderstanding:
- What specifically doesn't work?
- Have I explored all options within the current design?
- Document the technical reasons clearly

**2. Raise It Early**
Don't hide or delay—raise concerns immediately:
- "Hey team, I've hit a blocker. Can we discuss?"
- The longer you wait, the more wasted effort

**3. Propose Alternatives**
Don't just bring problems; bring solutions:
- Option A: Modify the current approach (describe how)
- Option B: Alternative architecture (describe trade-offs)
- Option C: Scope reduction (what can we cut?)

**4. Team Discussion**
- Present findings objectively
- Get input from senior engineers
- Avoid ego about "my design" — focus on best outcome

**5. Decide and Move Forward**
- Consider sunk cost, but don't let it trap us
- If redesign is better long-term, advocate for it
- If tight deadline, consider minimal viable fix now + iteration later

**6. Learn and Update**
- Add discovery to project documentation
- Update original design doc
- Consider design review process improvements

**Key principle:** Early, honest communication prevents small problems from becoming large ones. It's better to raise an issue on Day 3 than deliver a broken feature on Day 30.`,
            keyTakeaways: [
                'Emphasizes early communication',
                'Proposes alternatives',
                'Shows team collaboration',
                'Balances pragmatism and quality'
            ]
        }
    },
    {
        id: 'scen-003',
        category: 'Scenario-Based',
        difficulty: 'beginner',
        question: 'A colleague asks you to review their code, but you notice several issues and poor practices. How would you give feedback?',
        variations: [
            'How do you handle giving constructive criticism in code reviews?',
            'Describe your approach to reviewing code that needs significant changes.',
            'How would you provide feedback on problematic code?'
        ],
        idealFramework: 'SCENARIO',
        keyPoints: [
            'Focus on code, not person',
            'Be specific and actionable',
            'Balance positive and constructive feedback',
            'Explain the "why" behind suggestions',
            'Prioritize important issues'
        ],
        timeTarget: 60,
        hints: [
            'Show empathy and professionalism',
            'Demonstrate how you educate without condescending',
            'Mention how you prioritize feedback'
        ],
        modelAnswer: {
            structure: 'SCENARIO',
            answer: `Code review is about improving code quality while maintaining good team relationships. Here's my approach:

**1. Start With What's Good**
Acknowledge positive aspects first:
- "Nice job on the error handling here"
- "The function naming is clear"

This sets a constructive tone.

**2. Prioritize Issues**
Not all issues are equal—categorize them:
- 🔴 **Must fix:** Bugs, security issues, breaking changes
- 🟡 **Should fix:** Performance, maintainability concerns
- 🟢 **Nice to have:** Style preferences, minor optimizations

**3. Focus on Code, Not Person**
- ❌ "You wrote this wrong"
- ✅ "This function might have an edge case..."

Make it collaborative:
- "What if we..." instead of "You should..."
- "I wonder if..." instead of "This is wrong"

**4. Be Specific and Educational**
Don't just say "fix this"—explain why:
- "This could cause N+1 queries. Consider eager loading."
- "Using a hashmap here would reduce from O(n²) to O(n)"

**5. Offer to Help**
If the changes are significant:
- "I'm happy to pair if you'd like to walk through these"
- "Let me know if you want to discuss any of this"

**Result:** The colleague learns, code improves, and the relationship stays positive.`,
            keyTakeaways: [
                'Shows professional approach',
                'Prioritizes feedback types',
                'Demonstrates teaching mindset',
                'Maintains positive relationships'
            ]
        }
    },
    {
        id: 'scen-004',
        category: 'Scenario-Based',
        difficulty: 'intermediate',
        question: 'You\'re assigned a task with unclear requirements. How do you proceed?',
        variations: [
            'What do you do when given vague or incomplete requirements?',
            'How do you handle ambiguity in your work?',
            'Describe your approach when stakeholders haven\'t specified details.'
        ],
        idealFramework: 'SCENARIO',
        keyPoints: [
            'Identify what\'s unclear',
            'Ask clarifying questions',
            'Document assumptions',
            'Propose options for ambiguous areas',
            'Get sign-off before coding'
        ],
        timeTarget: 60,
        hints: [
            'Show you don\'t just guess',
            'Demonstrate proactive communication',
            'Mention documenting decisions'
        ],
        modelAnswer: {
            structure: 'SCENARIO',
            answer: `Unclear requirements are common in software development. Here's how I handle them:

**1. Identify What's Missing**
Before asking questions, analyze:
- What do I understand clearly?
- What's ambiguous?
- What edge cases aren't addressed?

**2. Prepare Specific Questions**
Don't ask "Can you explain more?" Instead, be specific:

✅ Good questions:
- "Should the user see an error message or just a silent failure?"
- "What happens if the user submits an empty form?"
- "Is this feature for admins only or all users?"

**3. Propose Options**
When asking, present options:
- "For the date format, I can do (a) user's timezone, (b) UTC, or (c) configurable. Which do you prefer?"

This shows initiative and makes it easy for stakeholders to decide.

**4. Document Assumptions**
If stakeholders are unavailable, document assumptions clearly:
- "Assuming X based on Y. Will confirm before merging."

**5. Get Sign-off Before Coding**
Share my understanding in writing:
- "Here's what I understand. Please confirm before I start."

This prevents wasted effort and misalignment.

**Key mindset:** It's better to slow down and clarify than to build the wrong thing quickly. Asking questions shows professionalism, not weakness.`,
            keyTakeaways: [
                'Proactive clarification',
                'Specific questions',
                'Documents assumptions',
                'Gets confirmation'
            ]
        }
    },
    {
        id: 'scen-005',
        category: 'Scenario-Based',
        difficulty: 'beginner',
        question: 'You\'re struggling to meet a deadline. What would you do?',
        variations: [
            'How do you handle being behind schedule?',
            'What steps do you take when you might miss a deadline?',
            'Describe a time when you had too much on your plate.'
        ],
        idealFramework: 'SCENARIO',
        keyPoints: [
            'Communicate early',
            'Assess what\'s causing the delay',
            'Propose solutions (scope, timeline, help)',
            'Don\'t sacrifice quality silently',
            'Learn from the experience'
        ],
        timeTarget: 60,
        hints: [
            'Show you communicate proactively',
            'Demonstrate problem-solving',
            'Balance commitment with realism'
        ],
        modelAnswer: {
            structure: 'SCENARIO',
            answer: `Missing deadlines happens, but how you handle it matters. Here's my approach:

**1. Communicate Early**
As soon as I recognize the risk, I raise it:
- "Hey, I'm tracking behind on the deadline. Can we discuss?"

**Do NOT:** Wait until the last minute hoping to catch up.

**2. Analyze the Gap**
Understand why:
- Were estimates off?
- Unexpected blockers?
- Scope larger than expected?
- Personal productivity issues?

**3. Propose Solutions**
Come with options, not just problems:

**Option A: Extend Timeline**
"If we push to Friday, I can deliver everything with quality."

**Option B: Reduce Scope**
"I can deliver feature X on time and Y in the next sprint."

**Option C: Get Help**
"If a teammate can help with Z, we can hit the deadline."

**4. Commit to What I Say**
If I negotiate a new deadline, I meet it. Trust is built by following through.

**5. Post-Mortem**
After the deadline:
- Was estimation too aggressive?
- Were there unknown dependencies?
- How can I improve next time?

**Key principle:** Proactive communication maintains trust. Managers prefer early bad news over late surprises.`,
            keyTakeaways: [
                'Early communication',
                'Analyzes root cause',
                'Proposes concrete options',
                'Shows learning mindset'
            ]
        }
    },
    {
        id: 'scen-006',
        category: 'Scenario-Based',
        difficulty: 'intermediate',
        question: 'You\'re asked to work on a legacy codebase with poor documentation. How do you approach it?',
        variations: [
            'How would you get up to speed on an unfamiliar, older codebase?',
            'What\'s your approach to working with legacy code?',
            'Describe how you\'d understand a complex system you didn\'t build.'
        ],
        idealFramework: 'SCENARIO',
        keyPoints: [
            'Start with understanding flow, not details',
            'Use multiple approaches (reading, running, debugging)',
            'Document as you learn',
            'Be careful with changes',
            'Improve gradually'
        ],
        timeTarget: 90,
        hints: [
            'Show patience and curiosity',
            'Mention documentation as you go',
            'Balance learning with contributing'
        ],
        modelAnswer: {
            structure: 'SCENARIO',
            answer: `Working with legacy code requires patience and a methodical approach:

**1. Understand the Big Picture First**
Before diving into code:
- What does the system do? Who uses it?
- What are the main components/modules?
- Look for architecture diagrams, READMEs, wikis

**2. Run the Code**
- Get the system running locally
- Click through the UI, trigger different flows
- Seeing it work creates mental models

**3. Follow the Happy Path**
Start with one feature:
- Pick a simple user action (e.g., login)
- Trace it through the code: entry point → logic → database
- Use debugger breakpoints to understand the flow

**4. Document As I Learn**
Create the documentation I wish existed:
- Draw sequence diagrams
- Note which files do what
- Record gotchas and quirks

This helps me and future team members.

**5. Talk to People**
If anyone has context:
- Original developers
- Long-time team members
- Ask "Why is it done this way?"

**6. Make Changes Carefully**
- Write tests before modifying
- Small, incremental changes
- Don't rewrite everything at once

**7. Improve Gradually**
As I work on features:
- Refactor small pieces
- Add missing tests
- Improve naming and structure

**Key mindset:** Legacy code isn't "bad code"—it's code that's been running in production successfully. Treat it with respect while gradually improving it.`,
            keyTakeaways: [
                'Systematic exploration',
                'Documents learning',
                'Respects existing code',
                'Improves incrementally'
            ]
        }
    },
    {
        id: 'scen-007',
        category: 'Scenario-Based',
        difficulty: 'beginner',
        question: 'How would you estimate how long a development task will take?',
        variations: [
            'Describe your approach to task estimation.',
            'How do you determine how long something will take to build?',
            'What factors do you consider when estimating development time?'
        ],
        idealFramework: 'SCENARIO',
        keyPoints: [
            'Break down into smaller tasks',
            'Consider unknowns and risks',
            'Account for testing and review',
            'Use historical data when available',
            'Communicate ranges, not false precision'
        ],
        timeTarget: 60,
        hints: [
            'Show you think beyond just coding time',
            'Mention buffer for unknowns',
            'Demonstrate realistic thinking'
        ],
        modelAnswer: {
            structure: 'SCENARIO',
            answer: `Estimation is challenging but essential. Here's my approach:

**1. Break Down the Task**
Split into smaller, estimable pieces:
- Backend API work
- Frontend UI work
- Database changes
- Testing
- Code review and fixes

Smaller pieces are easier to estimate accurately.

**2. Consider All the Work**
Coding is often only 50% of the time:
- 🔍 Research and understanding: 10-15%
- 💻 Actual coding: 40-50%
- 🧪 Testing: 15-20%
- 🔄 Code review and revisions: 10-15%
- 📝 Documentation: 5-10%

**3. Identify Risks and Unknowns**
- Dependencies on other teams?
- Technologies I haven't used?
- Integration complexity?

Add buffer for uncertainty.

**4. Use References**
If available:
- How long did similar past tasks take?
- Ask teammates who've done similar work

**5. Communicate Ranges**
Avoid false precision:
- ✅ "3-5 days depending on API complexity"
- ❌ "Exactly 3.5 days"

**6. Re-estimate as I Learn**
After starting:
- "Now that I understand it better, I think..."
- Updating estimates is professional, not failure

**Rule of thumb:** Multiply my gut estimate by 1.5-2x to account for unexpected issues.`,
            keyTakeaways: [
                'Breaks down tasks',
                'Accounts for all work',
                'Includes uncertainty',
                'Uses ranges'
            ]
        }
    },
    {
        id: 'scen-008',
        category: 'Scenario-Based',
        difficulty: 'intermediate',
        question: 'Your manager asks you to implement a feature in a way you think is technically wrong. How do you handle it?',
        variations: [
            'What do you do when you disagree with a technical direction?',
            'How would you push back on a decision you think is a mistake?',
            'Describe handling a disagreement with your manager about implementation.'
        ],
        idealFramework: 'SCENARIO',
        keyPoints: [
            'Express concerns respectfully',
            'Focus on facts, not opinions',
            'Propose alternatives with trade-offs',
            'Disagree and commit if overruled',
            'Know when to escalate'
        ],
        timeTarget: 90,
        hints: [
            'Show you speak up professionally',
            'Demonstrate you can disagree respectfully',
            'Mention commit after disagreement'
        ],
        modelAnswer: {
            structure: 'SCENARIO',
            answer: `This requires balancing advocacy with professionalism:

**1. Make Sure I Understand**
First, check my understanding:
- "Can you help me understand the reasoning behind this approach?"
- Maybe there's context I'm missing (budget, timeline, constraints)

**2. Present Concerns Professionally**
Focus on technical facts, not personal preference:

❌ "That's a bad idea"
✅ "I have some concerns about scalability. Can I share them?"

Structure the concern:
- **Problem:** "This approach might cause X issue"
- **Evidence:** "Because of Y technical reason"
- **Impact:** "Which could lead to Z consequence"

**3. Propose Alternatives**
Don't just criticize—suggest solutions:
- "What if we did it this way instead? It would achieve the same goal while avoiding..."
- Present trade-offs objectively

**4. Accept the Decision**
If my manager decides to proceed anyway:
- They may have information I don't
- Express disagreement clearly, then commit
- "I still have concerns, but I'll implement it as requested"

**5. Document If Needed**
For significant technical risk:
- Note concerns in writing (email, doc)
- This protects everyone if issues arise later

**What I DON'T do:**
- Undermine the decision after it's made
- Sabotage the implementation
- Complain to others

**Key principle:** "Disagree and commit" — voice objections, but once a decision is made, execute wholeheartedly.`,
            keyTakeaways: [
                'Professional disagreement',
                'Fact-based concerns',
                'Proposes alternatives',
                'Commits after decision'
            ]
        }
    }
];

export default scenarioQuestions;
