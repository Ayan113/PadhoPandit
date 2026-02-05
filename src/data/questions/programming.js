// Core Programming Fundamentals Questions for PadhoPandit Interview Prep
// Includes model answers optimized for AI-proctored interviews

export const programmingQuestions = [
    {
        id: 'prog-001',
        category: 'Core Programming',
        difficulty: 'beginner',
        question: 'What is the difference between a compiled language and an interpreted language? Can you give examples of each?',
        variations: [
            'Explain compiled vs interpreted languages with examples.',
            'How do compiled and interpreted languages differ in execution?',
            'What are the trade-offs between compiled and interpreted languages?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Compilation converts to machine code before execution',
            'Interpretation executes line by line at runtime',
            'Performance vs flexibility trade-offs',
            'Examples: Java/C++ (compiled), Python/JavaScript (interpreted)',
            'Just-in-time compilation as middle ground'
        ],
        timeTarget: 60,
        hints: [
            'Start with simple definitions',
            'Give clear examples for each',
            'Mention real-world implications (performance, debugging)'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Compiled languages** convert the entire source code into machine code before execution. The compiler produces an executable file that runs directly on the hardware. Examples include **C, C++, and Go**. Compiled code typically runs faster because the translation happens beforehand.

**Interpreted languages** execute code line by line at runtime through an interpreter. The code is read and executed directly without a separate compilation step. Examples include **Python, JavaScript, and Ruby**. This makes development faster and debugging easier, but execution is generally slower.

**Key trade-offs:**
- **Performance:** Compiled languages are faster for CPU-intensive tasks
- **Portability:** Interpreted languages run on any platform with the interpreter
- **Development speed:** Interpreted languages allow quicker iteration

**Modern hybrid approach:** Languages like Java use both—code compiles to bytecode, then the JVM interprets or JIT-compiles it at runtime. This balances performance with portability.`,
            keyTakeaways: [
                'Clear definitions of both',
                'Provides specific examples',
                'Explains practical trade-offs',
                'Mentions modern hybrid approaches'
            ]
        }
    },
    {
        id: 'prog-002',
        category: 'Core Programming',
        difficulty: 'beginner',
        question: 'Explain the difference between pass by value and pass by reference.',
        variations: [
            'How does pass by value differ from pass by reference?',
            'What happens to function arguments in pass by value vs pass by reference?',
            'When would you use pass by reference over pass by value?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Pass by value creates a copy of the data',
            'Pass by reference passes memory address',
            'Changes inside function affect original (reference only)',
            'Memory and performance considerations',
            'Language-specific behaviors'
        ],
        timeTarget: 60,
        hints: [
            'Use a simple variable example',
            'Explain what happens in memory',
            'Mention when each is preferred'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Pass by Value** means the function receives a **copy** of the original data. Any modifications inside the function do not affect the original variable.

**Pass by Reference** means the function receives the **memory address** of the original data. Changes made inside the function directly modify the original variable.

**Example:**
\`\`\`
// Pass by value (copy)
void modify(int x) { x = 10; }  // Original unchanged

// Pass by reference (address)
void modify(int &x) { x = 10; }  // Original is changed
\`\`\`

**When to use each:**
- **Pass by value:** When you need to protect the original data, or for small primitive types
- **Pass by reference:** When you want to modify the original, or for large objects to avoid copying overhead

**Language variations:** Java passes object references by value (confusing but important). Python passes object references, so mutable objects can be modified.`,
            keyTakeaways: [
                'Clear distinction between copy vs address',
                'Includes a code example',
                'Explains when to use each',
                'Mentions language-specific behavior'
            ]
        }
    },
    {
        id: 'prog-003',
        category: 'Core Programming',
        difficulty: 'beginner',
        question: 'What is recursion? When would you use it and what should you be careful about?',
        variations: [
            'Explain recursion with a simple example.',
            'What are the pros and cons of using recursion?',
            'How does recursion work, and when is it useful?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Function calling itself',
            'Base case to stop recursion',
            'Stack overflow risk',
            'Use cases: tree traversal, factorial, Fibonacci',
            'Tail recursion optimization'
        ],
        timeTarget: 60,
        hints: [
            'Give a simple example like factorial',
            'Emphasize base case importance',
            'Mention stack overflow risk'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Recursion** is when a function calls itself to solve a problem by breaking it into smaller subproblems.

**Two essential components:**
1. **Base case:** The stopping condition that returns a result without recursion
2. **Recursive case:** The function calls itself with a smaller input

**Example - Factorial:**
\`\`\`python
def factorial(n):
    if n <= 1:        # Base case
        return 1
    return n * factorial(n - 1)  # Recursive case
\`\`\`

**When to use recursion:**
- Tree and graph traversals
- Problems with natural recursive structure (factorial, Fibonacci)
- Divide-and-conquer algorithms
- When the solution is cleaner than iteration

**What to be careful about:**
1. **Stack overflow:** Deep recursion can exhaust memory
2. **Base case:** Missing it causes infinite recursion
3. **Performance:** Redundant calculations (use memoization to fix)
4. **Readability vs efficiency trade-off**`,
            keyTakeaways: [
                'Explains the concept clearly',
                'Includes code example',
                'Lists appropriate use cases',
                'Covers common pitfalls'
            ]
        }
    },
    {
        id: 'prog-004',
        category: 'Core Programming',
        difficulty: 'beginner',
        question: 'What is the purpose of version control systems like Git? Why are they important?',
        variations: [
            'Why do developers use Git?',
            'Explain the benefits of version control.',
            'How does Git help in software development?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Track changes over time',
            'Collaboration among team members',
            'Branching for parallel development',
            'History and rollback capability',
            'Code review and quality control'
        ],
        timeTarget: 60,
        hints: [
            'Focus on practical benefits',
            'Mention collaboration aspects',
            'Reference common Git workflows'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Version control systems** like Git track changes to code over time and enable collaboration among developers.

**Key purposes:**

1. **History tracking:** Every change is recorded with who made it and why. You can view any past version of your code.

2. **Collaboration:** Multiple developers can work on the same codebase simultaneously without overwriting each other's work.

3. **Branching and merging:** Developers can create branches to work on features independently, then merge them when ready.

4. **Rollback capability:** If a change introduces bugs, you can easily revert to a previous working version.

5. **Code review:** Pull requests allow team members to review changes before merging, improving code quality.

**Why it's essential:**
- Prevents "it works on my machine" problems
- Provides backup and disaster recovery
- Creates an audit trail for compliance
- Enables continuous integration/deployment pipelines

In professional development, version control isn't optional—it's fundamental to how teams build software together.`,
            keyTakeaways: [
                'Covers multiple benefits',
                'Explains branching concept',
                'Mentions collaboration',
                'Emphasizes professional importance'
            ]
        }
    },
    {
        id: 'prog-005',
        category: 'Core Programming',
        difficulty: 'intermediate',
        question: 'What is the difference between a stack and a heap in memory management?',
        variations: [
            'Explain stack vs heap memory allocation.',
            'How are stack and heap memory different?',
            'When is data stored on the stack vs the heap?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Stack: automatic, LIFO, fast, limited size',
            'Heap: manual/dynamic, flexible, slower',
            'Stack for function calls and local variables',
            'Heap for dynamic allocation',
            'Memory leaks with heap'
        ],
        timeTarget: 90,
        hints: [
            'Explain the structure of each',
            'Give examples of what goes where',
            'Mention memory leak risks'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Stack Memory:**
- Uses **LIFO** (Last In, First Out) structure
- **Automatically managed** by the compiler
- Stores local variables, function parameters, and return addresses
- Very **fast** allocation and deallocation
- **Limited size** (typically a few MB)
- Memory is freed when function returns

**Heap Memory:**
- **Dynamically allocated** at runtime
- **Manually managed** (or via garbage collection)
- Stores objects and data with unknown size at compile time
- **Slower** allocation due to complexity
- **Much larger** available space
- Must be explicitly freed (or causes memory leaks)

**What goes where:**
\`\`\`java
void example() {
    int x = 10;        // Stack: local primitive
    int[] arr = new int[100];  // Stack: reference, Heap: actual array
    String s = new String("Hi");  // Stack: reference, Heap: String object
}
\`\`\`

**Key risks:** Heap memory not properly freed causes **memory leaks**. Stack overflow occurs with deep recursion or large local arrays.`,
            keyTakeaways: [
                'Clear comparison of both',
                'Includes code example',
                'Explains what goes where',
                'Mentions common issues'
            ]
        }
    },
    {
        id: 'prog-006',
        category: 'Core Programming',
        difficulty: 'beginner',
        question: 'What is an API? Can you explain how APIs work in simple terms?',
        variations: [
            'Explain what an API is and why it\'s useful.',
            'How would you describe an API to someone non-technical?',
            'What role do APIs play in software development?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Interface for communication between systems',
            'Contract defining inputs/outputs',
            'REST APIs as common example',
            'Request/response model',
            'Abstraction of complex functionality'
        ],
        timeTarget: 60,
        hints: [
            'Use a real-world analogy (restaurant menu)',
            'Keep it simple and practical',
            'Mention common use cases'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**API** stands for Application Programming Interface. It's a **contract that defines how two software systems communicate** with each other.

**Simple analogy:** Think of a restaurant. You don't go into the kitchen to cook—you use the menu (API) to order. The waiter takes your request, the kitchen processes it, and returns your food. You don't need to know how the kitchen works.

**How APIs work:**
1. **Request:** Your application sends a request with specific parameters
2. **Processing:** The API server processes the request
3. **Response:** The server sends back data in a standard format (usually JSON)

**Example:** When you check the weather on your phone, the app calls a weather API:
- Request: "GET weather for New York"
- Response: { "temperature": 72, "condition": "sunny" }

**Why APIs matter:**
- Enable integration between different systems
- Hide complex implementation details
- Allow reuse of functionality (payment processing, maps, authentication)
- Power modern microservices architecture`,
            keyTakeaways: [
                'Uses clear analogy',
                'Explains request/response flow',
                'Gives practical example',
                'Mentions real-world importance'
            ]
        }
    },
    {
        id: 'prog-007',
        category: 'Core Programming',
        difficulty: 'intermediate',
        question: 'What is the difference between synchronous and asynchronous programming?',
        variations: [
            'Explain sync vs async execution.',
            'When would you use asynchronous programming?',
            'How does asynchronous code differ from synchronous code?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Sync: blocking, sequential execution',
            'Async: non-blocking, concurrent execution',
            'Callbacks, Promises, async/await',
            'Use cases: I/O operations, network requests',
            'Improved performance and responsiveness'
        ],
        timeTarget: 90,
        hints: [
            'Use a practical example (API calls)',
            'Explain why async improves performance',
            'Mention common async patterns'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Synchronous programming** executes code **sequentially**—each operation must complete before the next one starts. It's **blocking**: the program waits for each task to finish.

**Asynchronous programming** allows operations to run **concurrently**. The program can start a task and continue to other work while waiting for it to complete. It's **non-blocking**.

**Analogy:** 
- Sync: Waiting in line at a coffee shop, doing nothing until you get your order
- Async: Ordering coffee, sitting down to work, then picking it up when called

**When to use async:**
- Network requests (API calls)
- File I/O operations
- Database queries
- Any operation where waiting wastes time

**Common patterns:**
\`\`\`javascript
// Synchronous - blocks
const data = fetchDataSync();  // Waits here

// Asynchronous with Promises
fetchData().then(data => process(data));

// Async/await (cleaner syntax)
const data = await fetchData();  // Non-blocking wait
\`\`\`

**Benefits:** Async improves performance and user experience by keeping applications responsive during slow operations.`,
            keyTakeaways: [
                'Clear distinction with analogy',
                'Lists appropriate use cases',
                'Shows code examples',
                'Explains practical benefits'
            ]
        }
    },
    {
        id: 'prog-008',
        category: 'Core Programming',
        difficulty: 'beginner',
        question: 'What is debugging and what are some techniques you use to debug code?',
        variations: [
            'How do you approach debugging a problem?',
            'What tools or methods do you use for debugging?',
            'Describe your debugging process.'
        ],
        idealFramework: 'SCENARIO',
        keyPoints: [
            'Systematic problem identification',
            'Using debuggers and breakpoints',
            'Print/log statements',
            'Reading error messages carefully',
            'Isolating the problem'
        ],
        timeTarget: 60,
        hints: [
            'Show a structured approach',
            'Mention specific tools you use',
            'Emphasize patience and systematic thinking'
        ],
        modelAnswer: {
            structure: 'SCENARIO',
            answer: `**Debugging** is the process of identifying, analyzing, and fixing bugs or defects in code.

**My systematic approach:**

1. **Reproduce the bug:** Confirm I can consistently trigger the issue. Understanding the conditions helps narrow the cause.

2. **Read error messages carefully:** Error messages and stack traces often point directly to the problem. I don't skip this step.

3. **Isolate the problem:** I narrow down where the bug occurs using binary search—commenting out code sections or adding checkpoints.

4. **Use debugging tools:**
   - **IDE debuggers:** Set breakpoints to pause execution and inspect variables
   - **Console logs:** Print variable values at key points
   - **Browser DevTools:** For frontend JavaScript debugging

5. **Check recent changes:** If it was working before, I review recent commits to find what changed.

6. **Rubber duck debugging:** Explaining the problem out loud often reveals the issue.

7. **Test the fix:** Verify the fix works and doesn't break anything else.

The key is being **systematic rather than random**—changing one thing at a time and understanding why.`,
            keyTakeaways: [
                'Shows structured methodology',
                'Mentions specific tools',
                'Includes multiple techniques',
                'Emphasizes systematic approach'
            ]
        }
    },
    {
        id: 'prog-009',
        category: 'Core Programming',
        difficulty: 'intermediate',
        question: 'What are the principles of writing clean, maintainable code?',
        variations: [
            'How do you ensure your code is readable and maintainable?',
            'What practices do you follow for code quality?',
            'What makes code "clean"?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Meaningful variable/function names',
            'Single responsibility principle',
            'Comments and documentation',
            'Consistent formatting',
            'DRY principle (Don\'t Repeat Yourself)',
            'Code reviews and testing'
        ],
        timeTarget: 90,
        hints: [
            'Reference Clean Code principles',
            'Give practical examples',
            'Mention the importance for team collaboration'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `Clean code is code that is **easy to read, understand, and maintain** by any developer—including your future self.

**Key principles I follow:**

1. **Meaningful names:** Variables and functions should clearly describe their purpose.
   - Bad: \`int d;\` 
   - Good: \`int daysSinceLastLogin;\`

2. **Single Responsibility Principle:** Each function or class should do one thing well. If a function does too much, break it up.

3. **DRY (Don't Repeat Yourself):** Extract repeated logic into reusable functions. Duplication leads to inconsistent updates.

4. **Keep functions small:** Functions should be short and focused—ideally under 20 lines. This makes them easier to test and understand.

5. **Consistent formatting:** Follow a style guide for indentation, naming conventions, and file organization.

6. **Write self-documenting code:** Code should be clear enough that comments are rarely needed. Use comments for "why," not "what."

7. **Write tests:** Tests serve as documentation and catch regressions.

**Why it matters:** In professional environments, code is read far more than it's written. Clean code reduces bugs, speeds up onboarding, and makes maintenance easier.`,
            keyTakeaways: [
                'Lists specific principles',
                'Includes code examples',
                'Explains practical reasoning',
                'Emphasizes team impact'
            ]
        }
    },
    {
        id: 'prog-010',
        category: 'Core Programming',
        difficulty: 'beginner',
        question: 'What is the difference between a for loop and a while loop? When would you use each?',
        variations: [
            'Explain for loops vs while loops.',
            'When is a for loop better than a while loop?',
            'How do you decide between for and while loops?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'For: known number of iterations',
            'While: unknown iterations, condition-based',
            'Syntax differences',
            'Common use cases for each',
            'Infinite loop risks with while'
        ],
        timeTarget: 60,
        hints: [
            'Give simple examples',
            'Focus on when to use each',
            'Mention edge cases and risks'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**For loops** are best when you know the **number of iterations** in advance. The loop control (initialization, condition, increment) is all in one line.

**While loops** are best when you **don't know** how many iterations you need—you continue until a condition becomes false.

**Examples:**
\`\`\`python
# For loop: iterate exactly 10 times
for i in range(10):
    print(i)

# While loop: iterate until user enters 'quit'
user_input = ""
while user_input != "quit":
    user_input = input("Enter command: ")
\`\`\`

**When to use each:**
- **For loop:** Iterating over arrays, fixed ranges, known iterations
- **While loop:** Reading input until EOF, waiting for events, game loops

**Key considerations:**
- **Infinite loops:** While loops are more prone to infinite loops if the condition never becomes false
- **Readability:** For loops make iteration count obvious
- **Flexibility:** While loops handle complex exit conditions better

In practice, I default to for loops for definite iteration and use while loops when the exit condition is more dynamic.`,
            keyTakeaways: [
                'Clear distinction',
                'Includes code examples',
                'Lists when to use each',
                'Mentions pitfalls'
            ]
        }
    }
];

export default programmingQuestions;
