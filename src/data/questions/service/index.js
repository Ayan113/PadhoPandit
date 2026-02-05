// Service Company Interview Questions
// TCS, Infosys, Wipro, Cognizant, Accenture patterns

export const tcsQuestions = [
    {
        id: 'tcs-001',
        category: 'Technical',
        company: 'tcs',
        difficulty: 'beginner',
        question: 'What is Object-Oriented Programming? Explain its four main pillars with examples.',
        variations: [
            'Give a real-world example of OOP',
            'How is OOP different from procedural programming?',
            'Which OOP concept do you find most useful?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Encapsulation - bundling data and methods',
            'Abstraction - hiding complexity',
            'Inheritance - code reuse',
            'Polymorphism - many forms'
        ],
        timeTarget: 90,
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Object-Oriented Programming (OOP)** is a programming paradigm that organizes code into objects containing data (attributes) and behavior (methods).

**Four Pillars:**

**1. Encapsulation**
Bundling data and methods together, restricting direct access.
*Example:* A BankAccount class keeps balance private, exposing only deposit() and withdraw() methods.

**2. Abstraction**
Hiding complex implementation, showing only essential features.
*Example:* When you drive a car, you use the steering wheel without knowing engine internals.

**3. Inheritance**
Creating new classes from existing ones, enabling code reuse.
*Example:* Dog and Cat classes inherit from Animal class, gaining eat() and sleep() methods.

**4. Polymorphism**
Same interface, different implementations.
*Example:* Both Circle and Rectangle have an area() method, but each calculates differently.

**Benefits:**
- Code reusability
- Better code organization
- Easier maintenance
- Models real-world entities naturally`
        }
    },
    {
        id: 'tcs-002',
        category: 'Technical',
        company: 'tcs',
        difficulty: 'beginner',
        question: 'Write a program to reverse a string without using built-in functions.',
        variations: [
            'Can you do it in-place?',
            'What is the time complexity?',
            'How would you reverse each word in a sentence?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Loop from end to start',
            'Two-pointer approach',
            'Understanding of string manipulation'
        ],
        timeTarget: 60,
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Approach 1: Build new string**
\`\`\`java
public static String reverse(String str) {
    String result = "";
    for (int i = str.length() - 1; i >= 0; i--) {
        result += str.charAt(i);
    }
    return result;
}
\`\`\`

**Approach 2: Two Pointers (for char array)**
\`\`\`java
public static void reverseInPlace(char[] str) {
    int left = 0, right = str.length - 1;
    while (left < right) {
        char temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
    }
}
\`\`\`

**Time Complexity:** O(n) where n is string length
**Space Complexity:** 
- Approach 1: O(n) for new string
- Approach 2: O(1) in-place

**Edge Cases:**
- Empty string
- Single character
- Palindrome strings`
        }
    },
    {
        id: 'tcs-003',
        category: 'SQL',
        company: 'tcs',
        difficulty: 'beginner',
        question: 'Write a SQL query to find employees with the second highest salary.',
        variations: [
            'What if there are ties?',
            'Find the Nth highest salary',
            'What about using window functions?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Subquery approach',
            'LIMIT and OFFSET',
            'Handling NULL cases'
        ],
        timeTarget: 60,
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Method 1: Subquery with MAX**
\`\`\`sql
SELECT MAX(salary) AS SecondHighest
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);
\`\`\`

**Method 2: DISTINCT with LIMIT/OFFSET**
\`\`\`sql
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;
\`\`\`

**Method 3: Handling NULL (if no second highest)**
\`\`\`sql
SELECT 
    (SELECT DISTINCT salary 
     FROM employees 
     ORDER BY salary DESC 
     LIMIT 1 OFFSET 1) AS SecondHighest;
\`\`\`

**For Nth Highest:**
\`\`\`sql
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET N-1;
\`\`\`

**Window Function Approach:**
\`\`\`sql
SELECT salary FROM (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rank
    FROM employees
) ranked
WHERE rank = 2;
\`\`\`

**Note:** DENSE_RANK handles ties correctly.`
        }
    },
    {
        id: 'tcs-004',
        category: 'HR',
        company: 'tcs',
        difficulty: 'beginner',
        question: 'Tell me about yourself.',
        variations: [
            'What motivates you?',
            'Why did you choose your field?',
            'What are your career goals?'
        ],
        idealFramework: 'STAR',
        keyPoints: [
            'Brief introduction (30 sec)',
            'Education and skills',
            'Relevant experience/projects',
            'Why this company'
        ],
        timeTarget: 120,
        modelAnswer: {
            structure: 'STAR',
            answer: `**Structure: Present → Past → Future**

**Example Answer:**

"Good morning, I'm [Name], a final year B.Tech Computer Science student from [University].

**Present:**
Currently, I'm focusing on full-stack development and have been working on projects that solve real-world problems. I maintain a 8.5 CGPA while actively participating in coding competitions.

**Past:**
I developed a student attendance management system during my internship, which reduced manual effort by 60%. I'm proficient in Java, Python, and have strong fundamentals in data structures and databases.

**Future:**
I'm looking to join TCS because of its global exposure and learning opportunities. I'm particularly interested in your digital transformation projects and believe my problem-solving skills would contribute to your team.

My goal is to grow as a software engineer while contributing to impactful projects."

**Tips:**
- Keep it under 2 minutes
- Be specific about achievements
- Show enthusiasm for the company
- Practice but don't memorize`
        }
    },
    {
        id: 'tcs-005',
        category: 'Technical',
        company: 'tcs',
        difficulty: 'beginner',
        question: 'What is the difference between an abstract class and an interface?',
        variations: [
            'When would you use each?',
            'Can an abstract class have a constructor?',
            'What about default methods in interfaces?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Methods: abstract vs all abstract',
            'Variables: can have instance vs only constants',
            'Inheritance: single vs multiple',
            'Use cases'
        ],
        timeTarget: 90,
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `| Feature | Abstract Class | Interface |
|---------|---------------|-----------|
| Methods | Can have both abstract and concrete | Only abstract (before Java 8) |
| Variables | Can have instance variables | Only static final constants |
| Constructor | Yes | No |
| Inheritance | Single class only | Multiple interfaces |
| Access Modifiers | Any | Public only (default) |
| Keyword | extends | implements |

**When to use Abstract Class:**
- Classes share common implementation
- You need state (instance variables)
- IS-A relationship is strong
- Example: Animal → Dog, Cat

**When to use Interface:**
- Define a capability/contract
- Multiple inheritance needed
- Unrelated classes share behavior
- Example: Flyable → Bird, Airplane

**Java 8+ Note:**
Interfaces can have default methods with implementation:
\`\`\`java
interface Printable {
    default void print() {
        System.out.println("Printing...");
    }
}
\`\`\`

**Key Insight:** Use abstract class for "is-a" relationships where you want to share code. Use interface for "can-do" capabilities.`
        }
    }
];

export const infosysQuestions = [
    {
        id: 'infosys-001',
        category: 'Aptitude',
        company: 'infosys',
        difficulty: 'beginner',
        question: 'A boat can travel 20 km downstream in 2 hours and 10 km upstream in 2 hours. Find the speed of the boat in still water and speed of the stream.',
        variations: [
            'How long to travel 30 km downstream?',
            'What if stream speed doubles?',
            'Distance covered in 5 hours downstream?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Downstream = Boat + Stream',
            'Upstream = Boat - Stream',
            'Solve simultaneous equations'
        ],
        timeTarget: 90,
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Given:**
- Downstream: 20 km in 2 hours → Speed = 10 km/hr
- Upstream: 10 km in 2 hours → Speed = 5 km/hr

**Formulas:**
- Downstream speed = Boat speed + Stream speed
- Upstream speed = Boat speed - Stream speed

**Let:**
- Boat speed in still water = B km/hr
- Stream speed = S km/hr

**Equations:**
- B + S = 10 ... (1)
- B - S = 5  ... (2)

**Solution:**
Adding equations (1) and (2):
2B = 15
**B = 7.5 km/hr** (Boat speed in still water)

Substituting in (1):
7.5 + S = 10
**S = 2.5 km/hr** (Stream speed)

**Verification:**
- Downstream: 7.5 + 2.5 = 10 km/hr → 2 hours for 20 km ✓
- Upstream: 7.5 - 2.5 = 5 km/hr → 2 hours for 10 km ✓`
        }
    },
    {
        id: 'infosys-002',
        category: 'Puzzle',
        company: 'infosys',
        difficulty: 'beginner',
        question: 'You have 8 balls, one of which is heavier than the others. Using a balance scale, how can you find the heavier ball in just 2 weighings?',
        variations: [
            'What if you have 12 balls and one is different (could be lighter or heavier)?',
            'Minimum weighings for N balls?'
        ],
        idealFramework: 'SCENARIO',
        keyPoints: [
            'Divide into three groups',
            'Process of elimination',
            'Optimal grouping strategy'
        ],
        timeTarget: 90,
        modelAnswer: {
            structure: 'SCENARIO',
            answer: `**Solution:**

**Step 1: Divide into 3 groups**
- Group A: 3 balls
- Group B: 3 balls  
- Group C: 2 balls (set aside)

**Step 2: First weighing - Compare Group A vs Group B**

**Case 1: A > B (A is heavier side)**
- Heavy ball is in A
- Take 2 balls from A, weigh against each other
- If one is heavier → that's the answer
- If equal → third ball from A is the answer

**Case 2: A = B (Both equal)**
- Heavy ball is in C
- Weigh the 2 balls in C against each other
- Heavier one is the answer

**Case 3: A < B (B is heavier side)**
- Heavy ball is in B
- Same as Case 1 but with B

**Why 2 weighings are enough:**
- First weighing divides 8 into groups of 3, 3, 2
- Second weighing always deals with ≤3 balls
- For 3 balls: compare 2, third is either answer or found

**General Formula:**
For n balls, minimum weighings = ⌈log₃(n)⌉
For 8 balls: ⌈log₃(8)⌉ = ⌈1.89⌉ = 2 weighings`
        }
    },
    {
        id: 'infosys-003',
        category: 'Technical',
        company: 'infosys',
        difficulty: 'beginner',
        question: 'Explain the difference between a stack and a queue with real-world examples.',
        variations: [
            'Implement a queue using two stacks',
            'Where would you use each in an application?',
            'What is a priority queue?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'LIFO vs FIFO',
            'Push/Pop vs Enqueue/Dequeue',
            'Real-world analogies'
        ],
        timeTarget: 90,
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `| Feature | Stack | Queue |
|---------|-------|-------|
| Principle | LIFO (Last In, First Out) | FIFO (First In, First Out) |
| Operations | push(), pop(), peek() | enqueue(), dequeue(), front() |
| End used | One end (top) | Two ends (front and rear) |

**Stack - Like a stack of plates:**
- Add plate on top
- Remove plate from top
- Last plate added is first removed

**Queue - Like a line at a ticket counter:**
- Join at the back
- Served from the front
- First person in line is served first

**Real-world applications:**

**Stack:**
- Browser back button (page history)
- Undo functionality in editors
- Function call stack in programming
- Expression evaluation

**Queue:**
- Print job queue
- Customer service calls
- CPU task scheduling
- Breadth-first search

**Code Example - Java:**
\`\`\`java
// Stack
Stack<Integer> stack = new Stack<>();
stack.push(1);    // [1]
stack.push(2);    // [1, 2]
stack.pop();      // Returns 2, now [1]

// Queue
Queue<Integer> queue = new LinkedList<>();
queue.offer(1);   // [1]
queue.offer(2);   // [1, 2]
queue.poll();     // Returns 1, now [2]
\`\`\`

**Key Insight:** Use stack when you need to process most recent first. Use queue when order of arrival matters.`
        }
    },
    {
        id: 'infosys-004',
        category: 'Programming',
        company: 'infosys',
        difficulty: 'beginner',
        question: 'Write a program to check if a number is prime.',
        variations: [
            'Optimize for large numbers',
            'Find all primes up to N',
            'What is the Sieve of Eratosthenes?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Check divisibility up to sqrt(n)',
            'Handle edge cases (0, 1, 2)',
            'Optimization techniques'
        ],
        timeTarget: 60,
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Basic Approach:**
\`\`\`java
public static boolean isPrime(int n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    
    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}
\`\`\`

**Why √n is sufficient:**
If n = a × b, one of a or b must be ≤ √n.
So if no divisor found up to √n, n is prime.

**Optimizations:**
1. Check 2 and 3 separately
2. Skip even numbers (i += 2)
3. All primes > 3 are of form 6k ± 1

**Time Complexity:** O(√n)

**For finding all primes up to N - Sieve of Eratosthenes:**
\`\`\`java
public static boolean[] sieve(int n) {
    boolean[] isPrime = new boolean[n + 1];
    Arrays.fill(isPrime, true);
    isPrime[0] = isPrime[1] = false;
    
    for (int i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (int j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    return isPrime;
}
\`\`\`
Time: O(n log log n), Space: O(n)`
        }
    }
];

export const wiproQuestions = [
    {
        id: 'wipro-001',
        category: 'Technical',
        company: 'wipro',
        difficulty: 'beginner',
        question: 'Explain the OSI model and its layers.',
        variations: [
            'Which layer does HTTP work on?',
            'Difference between TCP and UDP?',
            'What happens when you type a URL?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            '7 layers and their functions',
            'Data encapsulation',
            'Common protocols at each layer'
        ],
        timeTarget: 120,
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**OSI Model - 7 Layers (from top to bottom):**

| Layer | Name | Function | Protocols |
|-------|------|----------|-----------|
| 7 | Application | User interface | HTTP, FTP, SMTP |
| 6 | Presentation | Data format, encryption | SSL, JPEG |
| 5 | Session | Connection management | NetBIOS, RPC |
| 4 | Transport | End-to-end delivery | TCP, UDP |
| 3 | Network | Routing, IP addressing | IP, ICMP, Router |
| 2 | Data Link | MAC addressing, frames | Ethernet, Switch |
| 1 | Physical | Bits, cables, signals | Hub, cables |

**Memory trick:** "All People Seem To Need Data Processing"
(Application, Presentation, Session, Transport, Network, Data Link, Physical)

**Data flow example (sending email):**
1. **Application:** Email composed (SMTP)
2. **Presentation:** Message encrypted
3. **Session:** Connection established
4. **Transport:** Data segmented, port added (TCP)
5. **Network:** IP address added, routing
6. **Data Link:** MAC address, frame created
7. **Physical:** Converted to electrical signals

**Common Interview Follow-ups:**
- HTTP operates at Application Layer (7)
- TCP/UDP at Transport Layer (4)
- IP at Network Layer (3)
- Switches at Data Link (2), Routers at Network (3)`
        }
    },
    {
        id: 'wipro-002',
        category: 'Technical',
        company: 'wipro',
        difficulty: 'beginner',
        question: 'What is the difference between a process and a thread?',
        variations: [
            'How do threads communicate?',
            'What is a context switch?',
            'When would you use multithreading?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Memory space: separate vs shared',
            'Creation overhead',
            'Communication mechanisms'
        ],
        timeTarget: 90,
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `| Feature | Process | Thread |
|---------|---------|--------|
| Definition | Independent program execution | Lightweight unit within a process |
| Memory | Separate memory space | Shares memory with other threads |
| Creation | Heavy, more resources | Lightweight, faster |
| Communication | IPC (pipes, sockets) | Direct shared memory |
| Isolation | Crash doesn't affect others | Can crash entire process |
| Context Switch | Expensive | Less expensive |

**Analogy:**
- **Process** = A browser window (separate memory, resources)
- **Thread** = Tabs within that window (share browser resources)

**Example:**
\`\`\`
Process: Chrome Browser
├── Thread 1: UI rendering
├── Thread 2: Network requests
├── Thread 3: JavaScript execution
└── Thread 4: Plugin handling
\`\`\`

**When to use threads:**
- Parallel tasks within same application
- I/O-bound operations (file reading while processing)
- Better responsiveness (UI + background tasks)

**When to use processes:**
- Complete isolation needed
- Different applications
- Security requirements

**Key Point:** Threads share heap memory but have separate stacks.`
        }
    },
    {
        id: 'wipro-003',
        category: 'HR',
        company: 'wipro',
        difficulty: 'beginner',
        question: 'Describe a challenge you faced and how you overcame it.',
        variations: [
            'What did you learn from this?',
            'How did it change your approach?',
            'Would you do anything differently?'
        ],
        idealFramework: 'STAR',
        keyPoints: [
            'Specific situation',
            'Your actions (not team\'s)',
            'Measurable result',
            'Learning'
        ],
        timeTarget: 120,
        modelAnswer: {
            structure: 'STAR',
            answer: `**Situation:**
During my final year project, our team's database crashed two weeks before the deadline, and we lost three weeks of data.

**Task:**
As the team lead, I needed to recover what we could and ensure we met our deadline.

**Action:**
1. **Stayed calm:** Called an emergency meeting to assess the situation
2. **Found partial backups:** Discovered weekly backups on team member's laptop
3. **Divided work:** Split remaining work among team members based on strengths
4. **Extended hours:** Created a 12-day intensive schedule
5. **Implemented safeguards:** Set up automated daily backups to prevent recurrence
6. **Communicated:** Kept our professor informed about the situation

**Result:**
- Recovered 70% of lost data from backups
- Completed project 1 day before deadline
- Received appreciation for crisis management
- Implemented backup system now used by juniors

**Learning:**
I learned that:
1. Prevention is better than cure (regular backups)
2. Staying calm helps in crisis
3. Clear communication with stakeholders is crucial
4. Teamwork multiplies individual effort

This experience made me more proactive about data management in all future projects.`
        }
    }
];

// Combine all service company questions
export const serviceCompanyQuestions = [
    ...tcsQuestions,
    ...infosysQuestions,
    ...wiproQuestions
];

// Get questions by company
export const getServiceQuestionsByCompany = (companyId) => {
    switch (companyId) {
        case 'tcs': return tcsQuestions;
        case 'infosys': return infosysQuestions;
        case 'wipro': return wiproQuestions;
        default: return serviceCompanyQuestions;
    }
};

// Get questions by category
export const getServiceQuestionsByCategory = (category) => {
    return serviceCompanyQuestions.filter(q =>
        q.category.toLowerCase().includes(category.toLowerCase())
    );
};

export default serviceCompanyQuestions;
