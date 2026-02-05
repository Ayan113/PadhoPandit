// Google and Big Tech Specific Interview Questions
// Focuses on problem-solving approach, algorithm optimization, and system design

export const googleQuestions = [
    // Algorithm & Problem Solving
    {
        id: 'google-001',
        category: 'Algorithms',
        company: 'google',
        difficulty: 'hard',
        question: 'Given a 2D matrix of integers, find the maximum sum submatrix. Explain your approach step by step.',
        variations: [
            'What if the matrix is very large?',
            'How would you handle negative numbers only?',
            'Can you extend this to 3D?'
        ],
        idealFramework: 'TECHNICAL',
        focusAreas: ['Dynamic Programming', 'Kadane\'s Algorithm', 'Optimization'],
        keyPoints: [
            'Reduce 2D to 1D using column prefixes',
            'Apply Kadane\'s algorithm to each row range',
            'Time complexity: O(n² * m)',
            'Space optimization possible'
        ],
        interviewTips: [
            'Think out loud as you work through the problem',
            'Start with brute force, then optimize',
            'Discuss time-space tradeoffs',
            'Ask clarifying questions about constraints'
        ],
        timeTarget: 180,
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Approach:**

**1. Brute Force (O(n⁴m²)):**
Check all possible submatrices - too slow.

**2. Optimized with Kadane's:**
- Fix left and right column boundaries
- For each pair, compress rows into 1D array
- Apply Kadane's algorithm to find max sum subarray

**Algorithm:**
\`\`\`
For left = 0 to cols:
    Create temp[] array of size rows, all zeros
    For right = left to cols:
        For each row i:
            temp[i] += matrix[i][right]
        Apply Kadane on temp[] to get max sum for this (left, right)
        Track global maximum
\`\`\`

**Complexity:**
- Time: O(cols² × rows)
- Space: O(rows)

**Key insight:** By fixing column boundaries and using prefix sums, we reduce the 2D problem to multiple 1D Kadane problems.`,
            keyTakeaways: [
                'Shows reduction technique',
                'Explains optimization step by step',
                'Discusses complexity'
            ]
        }
    },
    {
        id: 'google-002',
        category: 'System Design',
        company: 'google',
        difficulty: 'hard',
        question: 'Design Google Search Autocomplete. How would you handle billions of queries with low latency?',
        variations: [
            'How do you personalize suggestions?',
            'What about trending queries?',
            'How do you filter inappropriate suggestions?'
        ],
        idealFramework: 'SCENARIO',
        focusAreas: ['Distributed Systems', 'Trie/Tree Structures', 'Caching', 'ML Integration'],
        keyPoints: [
            'Trie data structure for prefix matching',
            'Distributed storage with sharding',
            'Multi-level caching (CDN, Application, Database)',
            'Real-time ranking with ML',
            'Personalization layer'
        ],
        interviewTips: [
            'Start with functional requirements',
            'Think about scale: billions of users',
            'Discuss latency requirements (<100ms)',
            'Consider regional distribution'
        ],
        timeTarget: 240,
        modelAnswer: {
            structure: 'SCENARIO',
            answer: `**Requirements:**
- Suggest top 10 queries for prefix
- <100ms latency globally
- Handle 100K QPS
- Personalized + trending

**High-Level Design:**

**1. Data Layer:**
- Distributed Trie sharded by prefix
- Each node stores: query, frequency, timestamp
- Historical query data in data warehouse

**2. Ranking Service:**
- Base ranking: query frequency
- Personalization: user history, location
- Trending boost: recent surge detection
- ML model for relevance scoring

**3. Caching Strategy:**
- CDN caching for top 1000 prefixes (90% of queries)
- Application cache (Redis) for hot prefixes
- Precomputed suggestions updated hourly

**4. Serving Path:**
\`\`\`
User types → CDN (cache hit?) → Load Balancer 
    → Autocomplete Service → Trie Lookup + Ranking 
    → Return top 10
\`\`\`

**5. Personalization:**
- User embeddings stored in fast key-value store
- Blend personal + global suggestions

**Scale:**
- Shard tries by prefix ranges
- Replicate read-heavy nodes
- Async updates via Kafka

**Latency Optimizations:**
- Precompute popular prefix results
- Edge caching
- Connection pooling`
        }
    },
    {
        id: 'google-003',
        category: 'Algorithms',
        company: 'google',
        difficulty: 'medium',
        question: 'Implement an efficient solution for finding all anagrams of a pattern in a text. Explain the time complexity.',
        variations: [
            'What if the pattern is very long?',
            'How would you handle Unicode characters?',
            'Can you do it without extra space?'
        ],
        idealFramework: 'TECHNICAL',
        focusAreas: ['Sliding Window', 'Hash Map', 'String Processing'],
        keyPoints: [
            'Sliding window of pattern length',
            'Character frequency comparison',
            'O(n) time, O(1) space for fixed alphabet'
        ],
        timeTarget: 120,
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Problem:** Find all starting indices where text contains an anagram of pattern.

**Approach: Sliding Window with Frequency Count**

\`\`\`javascript
function findAnagrams(s, p) {
    if (s.length < p.length) return [];
    
    const result = [];
    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);
    
    // Build pattern frequency
    for (const c of p) {
        pCount[c.charCodeAt(0) - 97]++;
    }
    
    for (let i = 0; i < s.length; i++) {
        // Add current char
        sCount[s.charCodeAt(i) - 97]++;
        
        // Remove char outside window
        if (i >= p.length) {
            sCount[s.charCodeAt(i - p.length) - 97]--;
        }
        
        // Compare frequencies
        if (i >= p.length - 1 && arraysEqual(sCount, pCount)) {
            result.push(i - p.length + 1);
        }
    }
    
    return result;
}
\`\`\`

**Complexity:**
- Time: O(n) - single pass through text
- Space: O(1) - fixed 26-character array

**Key Insight:** Instead of computing anagram from scratch at each position, we slide the window and update counts incrementally.`
        }
    },
    {
        id: 'google-004',
        category: 'Googleyness',
        company: 'google',
        difficulty: 'behavioral',
        question: 'Tell me about a time when you had to learn something complex quickly to solve a problem.',
        variations: [
            'How do you approach learning new technologies?',
            'Describe a time you taught yourself something new',
            'How do you stay current with technology trends?'
        ],
        idealFramework: 'STAR',
        focusAreas: ['Learning Agility', 'Problem Solving', 'Intellectual Curiosity'],
        keyPoints: [
            'Specific situation and challenge',
            'Learning approach and resources used',
            'How you applied the knowledge',
            'Outcome and what you learned about learning'
        ],
        timeTarget: 120,
        modelAnswer: {
            structure: 'STAR',
            answer: `**Situation:**
During a hackathon, our team decided to build a real-time collaboration tool, but none of us had experience with WebSockets or real-time data sync.

**Task:**
I needed to understand WebSockets and implement conflict-free collaborative editing in 24 hours.

**Action:**
1. **Prioritized learning:** Identified that understanding CRDTs (Conflict-free Replicated Data Types) was the core challenge
2. **Focused resources:** Read the original CRDT paper, watched 2 focused tutorials
3. **Hands-on immediately:** Built a simple shared counter within 3 hours to validate understanding
4. **Iterative approach:** Started with basic sync, added operation-based CRDT for text
5. **Asked for help:** Reached out to an online community when stuck on a specific merge issue

**Result:**
- Delivered working collaborative text editor
- Won "Best Technical Implementation" prize
- Later used this knowledge in my main project

**Learning:**
I discovered that for complex topics, building something small immediately helps solidify understanding faster than just reading.`
        }
    },
    {
        id: 'google-005',
        category: 'Algorithms',
        company: 'google',
        difficulty: 'hard',
        question: 'Design a data structure that supports insert, delete, getRandom in O(1) average time.',
        variations: [
            'What if we need getRandom to be weighted?',
            'How would you handle duplicates?',
            'What if delete needs to be O(1) worst case?'
        ],
        idealFramework: 'TECHNICAL',
        focusAreas: ['Data Structure Design', 'Hash Map + Array', 'Randomization'],
        keyPoints: [
            'Hash map for O(1) lookups',
            'Array for O(1) random access',
            'Swap-and-pop for O(1) deletion',
            'Map stores value -> index'
        ],
        timeTarget: 150,
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Insight:** Combine hash map and dynamic array.

**Data Structure:**
- \`arr[]\`: stores all elements
- \`map{}\`: value → index in array

**Operations:**

**Insert(val):**
\`\`\`
if val in map: return false
arr.push(val)
map[val] = arr.length - 1
return true
\`\`\`

**Delete(val):**
\`\`\`
if val not in map: return false
idx = map[val]
lastVal = arr[arr.length - 1]

// Swap with last element
arr[idx] = lastVal
map[lastVal] = idx

// Remove last
arr.pop()
delete map[val]
return true
\`\`\`

**getRandom():**
\`\`\`
randomIdx = Math.floor(Math.random() * arr.length)
return arr[randomIdx]
\`\`\`

**Why it works:**
- Hash map gives O(1) lookup for position
- Swap-and-pop maintains contiguous array without shifting
- Random index on array is O(1)

**Code:**
\`\`\`javascript
class RandomizedSet {
    constructor() {
        this.arr = [];
        this.map = new Map();
    }
    
    insert(val) {
        if (this.map.has(val)) return false;
        this.arr.push(val);
        this.map.set(val, this.arr.length - 1);
        return true;
    }
    
    remove(val) {
        if (!this.map.has(val)) return false;
        const idx = this.map.get(val);
        const last = this.arr[this.arr.length - 1];
        
        this.arr[idx] = last;
        this.map.set(last, idx);
        
        this.arr.pop();
        this.map.delete(val);
        return true;
    }
    
    getRandom() {
        return this.arr[Math.floor(Math.random() * this.arr.length)];
    }
}
\`\`\``
        }
    }
];

export const amazonQuestions = [
    // Leadership Principles focused
    {
        id: 'amazon-001',
        category: 'Leadership Principles',
        company: 'amazon',
        difficulty: 'behavioral',
        question: 'Tell me about a time when you had to make a decision with incomplete information. How did you handle the ambiguity?',
        relatedPrinciples: ['Bias for Action', 'Are Right, A Lot'],
        variations: [
            'What was the risk involved?',
            'How did you gather more information?',
            'What would you do differently?'
        ],
        idealFramework: 'STAR',
        keyPoints: [
            '70% information is enough to decide',
            'Calculated risk taking',
            'Speed vs perfection tradeoff',
            'Course correction mechanism'
        ],
        timeTarget: 180,
        modelAnswer: {
            structure: 'STAR',
            answer: `**Situation:**
Our e-commerce platform was experiencing a 30% drop in checkout completions. We had multiple theories but limited data to pinpoint the cause.

**Task:**
As the lead, I needed to decide whether to:
A) Wait for full analytics (2 weeks)
B) Act immediately on best hypothesis
The revenue loss was ~$50K/day.

**Action:**
**Bias for Action approach:**
1. **Assessed available data:** Checkout abandonment was highest at payment step
2. **Quick hypothesis:** Based on customer complaints and limited data, suspected payment gateway latency
3. **Reversible decision:** Implemented a secondary payment provider as fallback
4. **Set success metrics:** Defined that if conversion improved by 5% in 24 hours, we were on track
5. **Parallel investigation:** Didn't stop deeper analysis

**Result:**
- Checkout completion improved by 22% within 48 hours
- Full analysis later confirmed payment latency was root cause
- Saved ~$100K in lost revenue by acting quickly
- Team learned we could make faster decisions with "disagree and commit" approach

**Key Learning:**
Many decisions are reversible. Cost of delay often exceeds cost of being wrong.`
        }
    },
    {
        id: 'amazon-002',
        category: 'Leadership Principles',
        company: 'amazon',
        difficulty: 'behavioral',
        question: 'Describe a situation where you had to convince others to follow a direction they initially disagreed with.',
        relatedPrinciples: ['Have Backbone; Disagree and Commit', 'Earn Trust'],
        variations: [
            'What if they still didn\'t agree?',
            'How did you build support?',
            'What was the outcome?'
        ],
        idealFramework: 'STAR',
        keyPoints: [
            'Data-driven persuasion',
            'Listening to concerns first',
            'Finding common ground',
            'Committing after decision'
        ],
        timeTarget: 180,
        modelAnswer: {
            structure: 'STAR',
            answer: `**Situation:**
I proposed migrating our monolithic application to microservices. Senior engineers were skeptical, citing increased complexity and operational overhead.

**Task:**
Convince the team that the long-term benefits outweighed short-term costs.

**Action:**
1. **Listened first:** Scheduled 1:1s to understand specific concerns
   - Top concern: Debugging across services
   - Second: Deployment complexity
   
2. **Addressed concerns with data:**
   - Showed deployment frequency stats from similar companies
   - Demonstrated observability tools that solve debugging
   
3. **Proposed pilot:**
   - Extract one service (notifications) as proof of concept
   - Define success metrics together
   
4. **Built coalition:**
   - Got buy-in from one senior engineer first
   - He helped advocate to others
   
5. **Remained open:**
   - Agreed to rollback criteria if pilot failed

**Result:**
- Pilot succeeded: notification service deployed 10x more frequently
- Team voted 7-2 to continue migration
- Two dissenters committed fully after decision
- Full migration completed in 8 months

**Backbone + Trust:**
I stood by my conviction but respected disagreement and earned trust through the pilot approach.`
        }
    },
    {
        id: 'amazon-003',
        category: 'System Design',
        company: 'amazon',
        difficulty: 'hard',
        question: 'Design Amazon\'s Order Processing System that handles millions of daily orders.',
        variations: [
            'How do you ensure no duplicate orders?',
            'What happens when inventory updates?',
            'How do you handle peak traffic (Prime Day)?'
        ],
        idealFramework: 'SCENARIO',
        focusAreas: ['Distributed Systems', 'Event-Driven Architecture', 'Idempotency', 'Scalability'],
        keyPoints: [
            'Event-driven with message queues',
            'Idempotent order processing',
            'Inventory reservation patterns',
            'Saga pattern for transactions',
            'Graceful degradation'
        ],
        timeTarget: 300,
        modelAnswer: {
            structure: 'SCENARIO',
            answer: `**Requirements:**
- 100M orders/day, 10x spike on Prime Day
- <2 second order confirmation
- Exactly-once processing
- Inventory accuracy

**High-Level Architecture:**

**1. Order Service:**
- Receives order requests
- Validates, assigns order ID (UUID)
- Publishes OrderCreated event
- Returns confirmation to customer

**2. Event-Driven Flow:**
\`\`\`
OrderCreated → Inventory Service (reserve)
            → Payment Service (charge)
            → Fulfillment Service (ship)
Each step publishes completion events
\`\`\`

**3. Saga Pattern for Transactions:**
- Each step is compensatable
- Failure triggers compensation events
- e.g., PaymentFailed → Release inventory

**4. Idempotency:**
- Order ID as idempotency key
- Each service tracks processed order IDs
- Retry-safe processing

**5. Inventory Reservation:**
- Soft reservation at order creation
- Hard reservation at payment confirmation
- Release after 15 min if not confirmed

**6. Scaling for Prime Day:**
- Pre-scaled message queue partitions
- Auto-scaling consumer groups
- Circuit breakers for downstream services
- Graceful degradation: queue over reject

**7. Database Design:**
- Orders: sharded by customer ID
- Order items: partitioned by order ID
- Eventually consistent view for analytics

**Failure Handling:**
- Dead letter queues for failed messages
- Manual review for stuck orders
- Automated retry with exponential backoff`
        }
    },
    {
        id: 'amazon-004',
        category: 'Algorithms',
        company: 'amazon',
        difficulty: 'medium',
        question: 'Design an algorithm to find the top K most frequent items in a data stream.',
        variations: [
            'What if K is very large?',
            'How would you handle a sliding window?',
            'What about approximate solutions?'
        ],
        idealFramework: 'TECHNICAL',
        focusAreas: ['Heap', 'Hash Map', 'Stream Processing'],
        keyPoints: [
            'Min heap of size K',
            'Hash map for frequencies',
            'O(n log k) time complexity',
            'Space-frequency tradeoff'
        ],
        timeTarget: 120,
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Problem:** Find K most frequent elements in stream.

**Approach: Hash Map + Min Heap**

1. Count frequencies with hash map
2. Maintain min heap of size K
3. Heap stores (frequency, element) pairs

\`\`\`javascript
function topKFrequent(nums, k) {
    // Count frequencies
    const freq = new Map();
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    
    // Min heap of size k (using array + heapify)
    const heap = [];
    
    for (const [num, count] of freq) {
        heap.push([count, num]);
        heapifyUp(heap);
        
        if (heap.length > k) {
            // Remove minimum
            swap(heap, 0, heap.length - 1);
            heap.pop();
            heapifyDown(heap, 0);
        }
    }
    
    return heap.map(([_, num]) => num);
}
\`\`\`

**Complexity:**
- Time: O(n log k) - n insertions, each O(log k)
- Space: O(n) for frequency map + O(k) for heap

**For streaming:**
- Process each element as it arrives
- Update frequency, adjust heap
- Query returns current top K

**Approximate (Count-Min Sketch):**
For very high volume, use probabilistic structure:
- O(1) update, small error rate
- Much lower memory footprint`
        }
    }
];

export const metaQuestions = [
    {
        id: 'meta-001',
        category: 'Algorithms',
        company: 'meta',
        difficulty: 'medium',
        question: 'Given a binary tree, serialize it to a string and deserialize back to the original tree.',
        variations: [
            'What if the tree is very deep?',
            'How would you handle n-ary trees?',
            'What about a BST specifically?'
        ],
        idealFramework: 'TECHNICAL',
        focusAreas: ['Tree Traversal', 'String Processing', 'Recursion'],
        keyPoints: [
            'Use preorder traversal',
            'Mark null nodes explicitly',
            'Use delimiter for parsing'
        ],
        timeTarget: 120,
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Approach: Preorder with null markers**

**Serialize:**
- Preorder traversal
- Use "null" for empty nodes
- Comma as delimiter

**Deserialize:**
- Parse string to queue
- Recursively rebuild using preorder

\`\`\`javascript
function serialize(root) {
    const result = [];
    
    function dfs(node) {
        if (!node) {
            result.push('null');
            return;
        }
        result.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    
    dfs(root);
    return result.join(',');
}

function deserialize(data) {
    const values = data.split(',');
    let index = 0;
    
    function build() {
        if (values[index] === 'null') {
            index++;
            return null;
        }
        
        const node = new TreeNode(parseInt(values[index]));
        index++;
        node.left = build();
        node.right = build();
        return node;
    }
    
    return build();
}
\`\`\`

**Complexity:**
- Time: O(n) both operations
- Space: O(n) for serialized string

**Why preorder?**
- Root comes first, makes reconstruction straightforward
- Level order also works but needs more bookkeeping`
        }
    },
    {
        id: 'meta-002',
        category: 'Product Sense',
        company: 'meta',
        difficulty: 'behavioral',
        question: 'If you were on the Instagram team, how would you improve the Stories feature to increase engagement?',
        variations: [
            'How would you prioritize these ideas?',
            'What metrics would you track?',
            'How would you handle creator vs viewer needs?'
        ],
        idealFramework: 'SCENARIO',
        focusAreas: ['Product Thinking', 'User Empathy', 'Metrics', 'Trade-offs'],
        keyPoints: [
            'Define current state and problems',
            'User segments consideration',
            'Specific feature proposals',
            'Success metrics',
            'Potential risks'
        ],
        timeTarget: 180,
        modelAnswer: {
            structure: 'SCENARIO',
            answer: `**Current State Analysis:**
Stories: 24-hour ephemeral content, high engagement, competes for time with Reels/TikTok

**User Segments:**
1. **Casual viewers:** Consume stories passively
2. **Active creators:** Post 2-5 stories/day
3. **Businesses:** Use for promotions

**Improvement Ideas:**

**1. Collaborative Stories (High Priority)**
- Multiple friends contribute to shared story
- Use case: Group events, shared experiences
- Metric: Story creation rate, time to first contribution
- Risk: Privacy concerns, moderation

**2. Story Reactions with Intensity**
- Slider-based reactions (super love!)
- Creates more engaging feedback loop
- Metric: Reaction rate, creator retention
- Low risk, easy to test

**3. Story Threads (Medium Priority)**
- Reply to stories creates mini-thread
- Visible to mutual followers
- Increases conversation, time spent
- Risk: Notification overload

**Prioritization Framework:**
| Idea | Impact | Effort | Risk |
|------|--------|--------|------|
| Collaborative | High | High | Medium |
| Intensity Reactions | Medium | Low | Low |
| Threads | High | Medium | Medium |

**Start with:** Intensity Reactions (quick win, low risk)
**Then:** Collaborative Stories (differentiation from TikTok)

**Success Metrics:**
- Stories posted per creator
- Stories viewed per viewer
- Time spent in Stories
- Creator 7-day retention`
        }
    },
    {
        id: 'meta-003',
        category: 'System Design',
        company: 'meta',
        difficulty: 'hard',
        question: 'Design Facebook Messenger for 2 billion users with real-time messaging.',
        variations: [
            'How do you handle offline users?',
            'What about read receipts at scale?',
            'How do you ensure message ordering?'
        ],
        idealFramework: 'SCENARIO',
        focusAreas: ['Real-time Systems', 'WebSocket', 'Message Queues', 'Data Modeling'],
        keyPoints: [
            'Long-polling vs WebSocket',
            'Message fanout strategies',
            'Presence management',
            'Push notification integration'
        ],
        timeTarget: 300,
        modelAnswer: {
            structure: 'SCENARIO',
            answer: `**Requirements:**
- 2B users, 100B messages/day
- Real-time delivery (<200ms)
- Offline support, history sync
- Read receipts, typing indicators

**Architecture:**

**1. Connection Layer:**
- WebSocket servers for persistent connections
- Connection to user mapping in Redis
- Load balancer with sticky sessions

**2. Message Flow:**
\`\`\`
Sender → WebSocket Server → Message Service 
    → Fanout Service → Recipient's WebSocket Server
    → Recipient
\`\`\`

**3. Message Storage:**
- Recent conversations: Hot storage (Cassandra)
- Older messages: Cold storage (HBase)
- Sharding by conversation ID

**4. Fanout Strategy:**
- 1:1 chat: Direct delivery
- Group chat (small): Fanout on send
- Large groups: Fanout on read

**5. Offline Handling:**
- Store undelivered messages
- Push notification trigger
- Sync on reconnect

**6. Ordering Guarantees:**
- Timestamp from server (not client)
- Sequence numbers per conversation
- Client sorts by sequence

**7. Presence Service:**
- Heartbeat every 30 seconds
- In-memory store with TTL
- Broadcast changes to active conversations only

**8. Push Notifications:**
- FCM/APNS integration
- Rate limiting per user
- Silent push for background sync

**Scale:**
- Partition WebSocket servers by region
- Message service is stateless, horizontally scaled
- Index messages by (user_id, conversation_id, timestamp)`
        }
    }
];

// Combined export
export const faangQuestions = [
    ...googleQuestions,
    ...amazonQuestions,
    ...metaQuestions
];

// Get questions by company
export const getQuestionsByCompany = (companyId) => {
    switch (companyId) {
        case 'google': return googleQuestions;
        case 'amazon': return amazonQuestions;
        case 'meta': return metaQuestions;
        default: return faangQuestions;
    }
};

// Get questions by category
export const getFaangQuestionsByCategory = (category) => {
    return faangQuestions.filter(q =>
        q.category.toLowerCase().includes(category.toLowerCase())
    );
};

// Get questions by difficulty
export const getFaangQuestionsByDifficulty = (difficulty) => {
    return faangQuestions.filter(q => q.difficulty === difficulty);
};

export default faangQuestions;
