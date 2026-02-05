// AI Tutor Page - Interactive AI assistant for interview preparation

import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Mock AI responses for common topics
const mockResponses = {
    'two pointer': `## Two Pointer Technique

The **Two Pointer** technique is a pattern where you use two pointers to iterate through an array, typically from opposite ends or at different speeds.

### When to Use:
- Searching pairs in a sorted array
- Finding subarrays with specific properties
- Linked list cycle detection

### Common Patterns:

**1. Opposite Direction (Converging)**
\`\`\`javascript
let left = 0, right = arr.length - 1;
while (left < right) {
    // Process and move pointers
}
\`\`\`

**2. Same Direction (Fast-Slow)**
\`\`\`javascript
let slow = 0, fast = 0;
while (fast < arr.length) {
    // Fast moves every iteration, slow conditionally
}
\`\`\`

### Classic Problems:
1. **Two Sum (sorted)** - Converging pointers
2. **Remove Duplicates** - Same direction
3. **Container With Most Water** - Converging
4. **Linked List Cycle** - Fast-slow

💡 **Tip:** If the array is sorted and you need pairs, think two pointers first!`,

    'sliding window': `## Sliding Window Technique

The **Sliding Window** technique maintains a "window" that slides across an array to find subarrays satisfying specific conditions.

### Types:

**1. Fixed Size Window**
Window size is known. Slide and update.
\`\`\`javascript
for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];
    if (i >= k - 1) {
        // Process window
        windowSum -= arr[i - k + 1];
    }
}
\`\`\`

**2. Variable Size Window**
Expand/shrink based on condition.
\`\`\`javascript
let left = 0;
for (let right = 0; right < arr.length; right++) {
    // Expand: add arr[right]
    while (invalid) {
        // Shrink: remove arr[left]
        left++;
    }
    // Update result
}
\`\`\`

### Classic Problems:
1. **Maximum Sum Subarray of Size K**
2. **Longest Substring Without Repeating**
3. **Minimum Window Substring**
4. **Fruits Into Baskets**

💡 **Tip:** If you need contiguous subarrays with a condition, try sliding window!`,

    'dynamic programming': `## Dynamic Programming Fundamentals

**DP** breaks complex problems into simpler subproblems, storing solutions to avoid recomputation.

### Key Concepts:

**1. Optimal Substructure**
Solution uses optimal solutions of subproblems.

**2. Overlapping Subproblems**
Same subproblems solved multiple times.

### Approaches:

**Top-Down (Memoization)**
\`\`\`javascript
function solve(n, memo = {}) {
    if (n in memo) return memo[n];
    // Base case
    // Recursive case with memoization
    memo[n] = result;
    return result;
}
\`\`\`

**Bottom-Up (Tabulation)**
\`\`\`javascript
const dp = new Array(n + 1).fill(0);
// Fill base cases
for (let i = 2; i <= n; i++) {
    dp[i] = /* use previous dp values */;
}
return dp[n];
\`\`\`

### Common Patterns:
1. **Fibonacci** - Linear DP
2. **Knapsack** - 2D with take/skip
3. **LCS/LIS** - Sequence problems
4. **Grid paths** - 2D DP

### Framework for Solving:
1. Define state: What does dp[i] represent?
2. Find recurrence: How does dp[i] relate to smaller problems?
3. Identify base cases
4. Determine computation order
5. Extract answer

💡 **Tip:** Start with brute force recursion, add memoization, then optimize to tabulation!`,

    'system design': `## System Design Interview Framework

### Step-by-Step Approach:

**1. Requirements (5 min)**
- Functional: What should the system do?
- Non-functional: Scale, latency, availability
- Ask clarifying questions!

**2. Estimation (5 min)**
- Users, QPS, storage, bandwidth
- Back-of-envelope calculations

**3. High-Level Design (10-15 min)**
- Draw main components
- Show data flow
- Identify APIs

**4. Deep Dive (15-20 min)**
- Focus on 2-3 interesting components
- Database schema
- Caching strategy
- Handling edge cases

**5. Wrap Up (5 min)**
- Address bottlenecks
- Discuss tradeoffs
- Future improvements

### Key Concepts:

| Concept | Use Case |
|---------|----------|
| Load Balancer | Distribute traffic |
| Cache (Redis) | Reduce DB load |
| CDN | Static content |
| Message Queue | Async processing |
| Sharding | Horizontal scale |
| Replication | Availability |

### Common Designs:
- URL Shortener (basics)
- Twitter Feed (fanout)
- Chat System (real-time)
- Search Engine (indexing)

💡 **Tip:** There's no perfect answer. Explain your tradeoffs clearly!`,

    'behavioral': `## Behavioral Interview - STAR Method

### Structure:

**S - Situation**
Set the context. Be specific but concise.
- When and where?
- What was the challenge?

**T - Task**
Your responsibility in the situation.
- What was expected of you?
- What was the goal?

**A - Action**
What YOU did (not the team).
- Step-by-step actions
- Why you chose that approach
- How you handled obstacles

**R - Result**
The outcome with metrics if possible.
- What happened?
- What did you learn?
- How did it impact the team/company?

### Sample Answer Format:
"In my previous role at [Company], [SITUATION - 2 sentences]. I was tasked with [TASK]. I decided to [ACTION 1], then [ACTION 2], and also [ACTION 3]. As a result, [RESULT with numbers if possible]."

### Top Questions by Company:

**Amazon (Leadership Principles)**
- Customer obsession
- Bias for action
- Disagree and commit

**Google (Googleyness)**
- Collaborative work
- Handling ambiguity
- Learning from failure

### Tips:
1. Prepare 5-6 versatile stories
2. Quantify results
3. Focus on YOUR actions
4. Be honest about failures
5. Show growth mindset

💡 **Tip:** Practice delivery out loud. Aim for 2-3 minutes per answer!`,

    default: `## How Can I Help?

I can explain concepts related to:

### 📊 Data Structures & Algorithms
- Arrays, Strings, Two Pointers
- Linked Lists, Stacks, Queues
- Trees, Graphs, Heaps
- Dynamic Programming
- Sorting, Searching, Recursion

### 🏗️ System Design
- Scalability patterns
- Database design
- Caching strategies
- Load balancing
- Microservices

### 💼 Behavioral Interviews
- STAR method
- Leadership principles
- Common questions
- Storytelling techniques

### 🎯 Company-Specific
- FAANG interview patterns
- Service company focus
- Startup interviews

**Try asking about:**
- "Explain two pointer technique"
- "How does dynamic programming work?"
- "System design primer"
- "Behavioral interview tips"

💡 Type your question below!`
};

const AITutor = () => {
    const [messages, setMessages] = useState([
        { role: 'assistant', content: mockResponses.default }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const getAIResponse = (query) => {
        const lowerQuery = query.toLowerCase();

        // Check for matching topics
        for (const [key, response] of Object.entries(mockResponses)) {
            if (key !== 'default' && lowerQuery.includes(key)) {
                return response;
            }
        }

        // Check for related terms
        if (lowerQuery.includes('array') || lowerQuery.includes('string') || lowerQuery.includes('pointer')) {
            return mockResponses['two pointer'];
        }
        if (lowerQuery.includes('window') || lowerQuery.includes('subarray') || lowerQuery.includes('substring')) {
            return mockResponses['sliding window'];
        }
        if (lowerQuery.includes('dp') || lowerQuery.includes('dynamic') || lowerQuery.includes('memoization')) {
            return mockResponses['dynamic programming'];
        }
        if (lowerQuery.includes('design') || lowerQuery.includes('scale') || lowerQuery.includes('architecture')) {
            return mockResponses['system design'];
        }
        if (lowerQuery.includes('behavioral') || lowerQuery.includes('star') || lowerQuery.includes('hr') || lowerQuery.includes('tell me')) {
            return mockResponses['behavioral'];
        }

        // Default response with acknowledgment
        return `I understand you're asking about: "${query}"

Let me provide some guidance:

${mockResponses.default}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsTyping(true);

        // Simulate AI thinking
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

        const response = getAIResponse(userMessage);
        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        setIsTyping(false);
    };

    const quickQuestions = [
        'Explain two pointer technique',
        'How does sliding window work?',
        'Dynamic programming basics',
        'System design primer',
        'Behavioral interview tips'
    ];

    return (
        <div className="page" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <header style={{
                padding: '1rem 0',
                borderBottom: '1px solid var(--border-subtle)'
            }}>
                <div className="container flex justify-between items-center">
                    <Link to="/" style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        fontFamily: 'var(--font-display)',
                        textDecoration: 'none',
                        color: 'var(--text-primary)'
                    }}>
                        <span className="text-gradient">Interview</span>Prep
                    </Link>
                    <div className="flex gap-md">
                        <Link to="/companies" className="btn btn-ghost">
                            🏢 Companies
                        </Link>
                        <Link to="/dsa" className="btn btn-ghost">
                            📊 DSA
                        </Link>
                    </div>
                </div>
            </header>

            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '900px',
                width: '100%',
                margin: '0 auto',
                padding: '0 1rem'
            }}>
                {/* Chat Header */}
                <div style={{
                    padding: '1rem 0',
                    borderBottom: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem'
                    }}>
                        🤖
                    </div>
                    <div>
                        <h2 style={{ margin: 0, color: 'var(--text-primary)' }}>AI Interview Tutor</h2>
                        <p style={{ margin: 0, color: 'var(--success)', fontSize: '0.85rem' }}>
                            ● Online - Ready to help
                        </p>
                    </div>
                </div>

                {/* Messages Area */}
                <div style={{
                    flex: 1,
                    overflowY: 'auto',
                    padding: '1.5rem 0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                }}>
                    {messages.map((message, idx) => (
                        <div
                            key={idx}
                            style={{
                                display: 'flex',
                                justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start'
                            }}
                        >
                            <div style={{
                                maxWidth: message.role === 'user' ? '70%' : '85%',
                                padding: '1rem 1.25rem',
                                borderRadius: '16px',
                                background: message.role === 'user'
                                    ? 'var(--accent-primary)'
                                    : 'var(--bg-secondary)',
                                color: message.role === 'user'
                                    ? 'white'
                                    : 'var(--text-primary)',
                                borderBottomRightRadius: message.role === 'user' ? '4px' : '16px',
                                borderBottomLeftRadius: message.role === 'user' ? '16px' : '4px'
                            }}>
                                {message.role === 'assistant' ? (
                                    <div
                                        className="markdown-content"
                                        style={{
                                            fontSize: '0.9rem',
                                            lineHeight: '1.6',
                                            whiteSpace: 'pre-wrap'
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html: message.content
                                                .replace(/## (.*)/g, '<h3>$1</h3>')
                                                .replace(/### (.*)/g, '<h4>$1</h4>')
                                                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                                .replace(/`([^`]+)`/g, '<code style="background: var(--bg-tertiary); padding: 2px 6px; border-radius: 4px;">$1</code>')
                                                .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre style="background: var(--bg-tertiary); padding: 12px; border-radius: 8px; overflow-x: auto; margin: 8px 0;"><code>$2</code></pre>')
                                                .replace(/💡/g, '<span style="font-size: 1.2em;">💡</span>')
                                                .replace(/\n\n/g, '<br><br>')
                                        }}
                                    />
                                ) : (
                                    <p style={{ margin: 0 }}>{message.content}</p>
                                )}
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{
                                padding: '1rem',
                                borderRadius: '16px',
                                background: 'var(--bg-secondary)',
                                display: 'flex',
                                gap: '0.25rem'
                            }}>
                                <span className="typing-dot" style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: 'var(--text-muted)',
                                    animation: 'pulse 1s infinite'
                                }}></span>
                                <span className="typing-dot" style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: 'var(--text-muted)',
                                    animation: 'pulse 1s infinite 0.2s'
                                }}></span>
                                <span className="typing-dot" style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: 'var(--text-muted)',
                                    animation: 'pulse 1s infinite 0.4s'
                                }}></span>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Quick Questions */}
                {messages.length <= 1 && (
                    <div style={{
                        padding: '1rem 0',
                        display: 'flex',
                        gap: '0.5rem',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        {quickQuestions.map((q, idx) => (
                            <button
                                key={idx}
                                onClick={() => setInput(q)}
                                className="btn btn-ghost"
                                style={{ fontSize: '0.8rem' }}
                            >
                                {q}
                            </button>
                        ))}
                    </div>
                )}

                {/* Input Area */}
                <form
                    onSubmit={handleSubmit}
                    style={{
                        padding: '1rem 0 2rem',
                        display: 'flex',
                        gap: '0.75rem',
                        borderTop: '1px solid var(--border-subtle)'
                    }}
                >
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about DSA, System Design, or Behavioral interviews..."
                        style={{
                            flex: 1,
                            padding: '1rem 1.25rem',
                            borderRadius: '12px',
                            border: '1px solid var(--border-subtle)',
                            background: 'var(--bg-secondary)',
                            color: 'var(--text-primary)',
                            fontSize: '1rem'
                        }}
                        disabled={isTyping}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isTyping || !input.trim()}
                        style={{
                            padding: '1rem 1.5rem',
                            borderRadius: '12px'
                        }}
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AITutor;
