// Data Structures & Logic Questions for PadhoPandit Interview Prep
// Includes model answers optimized for AI-proctored interviews

export const dataStructuresQuestions = [
    {
        id: 'ds-001',
        category: 'Data Structures & Logic',
        difficulty: 'beginner',
        question: 'What is the difference between an Array and a Linked List?',
        variations: [
            'Compare arrays and linked lists.',
            'When would you choose a linked list over an array?',
            'What are the advantages of arrays vs linked lists?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Array: contiguous memory, fixed size, O(1) access',
            'Linked List: non-contiguous, dynamic size, O(n) access',
            'Array better for random access',
            'Linked List better for insertions/deletions',
            'Memory allocation differences'
        ],
        timeTarget: 60,
        hints: [
            'Compare access patterns',
            'Discuss memory layout',
            'Mention use cases for each'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Array:**
- Stored in **contiguous memory** locations
- **Fixed size** (in most languages)
- **O(1) random access** — can jump directly to any index
- **O(n) insertion/deletion** — elements must shift
- Better **cache performance** due to memory locality

**Linked List:**
- Stored in **scattered memory** locations, connected by pointers
- **Dynamic size** — grows and shrinks easily
- **O(n) access** — must traverse from head to reach an element
- **O(1) insertion/deletion** — once position is found, just update pointers
- Uses more memory (stores pointers alongside data)

**Comparison table:**
| Operation | Array | Linked List |
|-----------|-------|-------------|
| Access by index | O(1) | O(n) |
| Insert at beginning | O(n) | O(1) |
| Insert at end | O(1)* | O(n) or O(1)** |
| Search | O(n) | O(n) |

*If space available, **if tail pointer maintained

**When to use each:**
- **Array:** Frequent access by index, known size, cache-friendly operations
- **Linked List:** Frequent insertions/deletions, unknown size, queue implementations`,
            keyTakeaways: [
                'Covers memory layout difference',
                'Includes Big O comparison',
                'Provides clear use cases',
                'Shows practical trade-offs'
            ]
        }
    },
    {
        id: 'ds-002',
        category: 'Data Structures & Logic',
        difficulty: 'beginner',
        question: 'What is a HashMap (or Dictionary)? When would you use it?',
        variations: [
            'Explain how a hash map works.',
            'What are the advantages of using a HashMap?',
            'When is a HashMap the right choice?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Key-value pair storage',
            'O(1) average lookup time',
            'Hash function converts key to index',
            'Collision handling',
            'Use for fast lookups, caching'
        ],
        timeTarget: 60,
        hints: [
            'Explain the key-value concept',
            'Mention the speed advantage',
            'Give practical use cases'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `A **HashMap** (or Dictionary/Hash Table) is a data structure that stores **key-value pairs** and provides **O(1) average time** for lookups, insertions, and deletions.

**How it works:**
1. A **hash function** converts the key into an array index
2. The value is stored at that index
3. To retrieve: hash the key → go directly to that index → get the value

**Example:**
\`\`\`python
# Store user emails by username
users = {}
users["john"] = "john@email.com"   # O(1) insert
users["jane"] = "jane@email.com"

email = users["john"]  # O(1) lookup
\`\`\`

**Collision handling:** When two keys hash to the same index:
- **Chaining:** Store a linked list at each index
- **Open addressing:** Find next available slot

**When to use HashMap:**
- Need fast lookups by key (O(1) vs O(n) for arrays)
- Counting occurrences (word frequency)
- Caching/memoization
- Removing duplicates
- Implementing sets

**Limitations:**
- No ordering (use LinkedHashMap if needed)
- Extra memory overhead
- Worst case O(n) if many collisions`,
            keyTakeaways: [
                'Explains mechanism clearly',
                'Includes code example',
                'Lists practical use cases',
                'Mentions collision handling'
            ]
        }
    },
    {
        id: 'ds-003',
        category: 'Data Structures & Logic',
        difficulty: 'beginner',
        question: 'What is the difference between a Stack and a Queue?',
        variations: [
            'Explain stack vs queue with examples.',
            'When would you use a stack vs a queue?',
            'Describe LIFO and FIFO data structures.'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Stack: LIFO (Last In, First Out)',
            'Queue: FIFO (First In, First Out)',
            'Stack: push/pop operations',
            'Queue: enqueue/dequeue operations',
            'Use cases: function calls (stack), task scheduling (queue)'
        ],
        timeTarget: 60,
        hints: [
            'Use real-world analogies (stack of plates, line at counter)',
            'Mention specific use cases',
            'Keep it simple and clear'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Stack — LIFO (Last In, First Out)**
The last element added is the first one removed.
*Analogy:* Stack of plates — you take from the top.

**Operations:**
- \`push(item)\` — add to top
- \`pop()\` — remove from top
- \`peek()\` — view top without removing

**Queue — FIFO (First In, First Out)**
The first element added is the first one removed.
*Analogy:* Line at a store — first person in line is served first.

**Operations:**
- \`enqueue(item)\` — add to back
- \`dequeue()\` — remove from front
- \`peek()\` — view front without removing

**Comparison:**
| Feature | Stack | Queue |
|---------|-------|-------|
| Order | LIFO | FIFO |
| Add | Push (top) | Enqueue (back) |
| Remove | Pop (top) | Dequeue (front) |

**Common use cases:**

**Stack:**
- Function call management (call stack)
- Undo/redo operations
- Expression evaluation
- Backtracking algorithms

**Queue:**
- Task scheduling (print queue)
- BFS graph traversal
- Message queues
- Request handling`,
            keyTakeaways: [
                'Clear LIFO vs FIFO distinction',
                'Uses analogies',
                'Lists operations',
                'Provides use cases'
            ]
        }
    },
    {
        id: 'ds-004',
        category: 'Data Structures & Logic',
        difficulty: 'intermediate',
        question: 'What is Big O notation? Why is it important?',
        variations: [
            'Explain time complexity and Big O.',
            'What does O(n) mean?',
            'How do you analyze algorithm efficiency?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Describes algorithm efficiency',
            'Measures how time/space scales with input',
            'Common complexities: O(1), O(n), O(log n), O(n²)',
            'Worst-case scenario focus',
            'Helps compare algorithms'
        ],
        timeTarget: 90,
        hints: [
            'Give simple examples for each complexity',
            'Explain why it matters for large inputs',
            'Focus on practical implications'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Big O notation** describes **how an algorithm's time or space requirements grow** as the input size increases. It focuses on the **worst-case scenario** and ignores constants.

**Common complexities (fastest to slowest):**

| Big O | Name | Example |
|-------|------|---------|
| O(1) | Constant | Array access by index |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Loop through array |
| O(n log n) | Linearithmic | Merge sort, Quick sort |
| O(n²) | Quadratic | Nested loops |
| O(2ⁿ) | Exponential | Recursive Fibonacci |

**How to analyze:**
\`\`\`python
# O(1) — constant
def get_first(arr):
    return arr[0]

# O(n) — linear
def find_max(arr):
    for item in arr:  # n iterations
        ...

# O(n²) — quadratic
def bubble_sort(arr):
    for i in range(n):       # n
        for j in range(n):   # × n = n²
            ...
\`\`\`

**Why it matters:**
- O(n²) with 1,000 items = 1,000,000 operations
- O(n²) with 1,000,000 items = 1,000,000,000,000 operations

Big O helps choose the right algorithm. A difference of one level can mean seconds vs. hours on large datasets.`,
            keyTakeaways: [
                'Clear definition',
                'Comparison chart included',
                'Code examples',
                'Practical importance explained'
            ]
        }
    },
    {
        id: 'ds-005',
        category: 'Data Structures & Logic',
        difficulty: 'intermediate',
        question: 'What is a Binary Search Tree? What are its advantages?',
        variations: [
            'Explain how a BST works.',
            'What makes binary search trees efficient?',
            'When would you use a binary search tree?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Hierarchical data structure',
            'Left child < parent < right child',
            'O(log n) search, insert, delete (balanced)',
            'In-order traversal gives sorted order',
            'Balancing importance'
        ],
        timeTarget: 90,
        hints: [
            'Draw/describe the structure',
            'Explain the ordering property',
            'Mention balanced vs unbalanced'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `A **Binary Search Tree (BST)** is a hierarchical data structure where each node has at most two children, and nodes are organized following a specific ordering rule.

**The BST property:**
- **Left subtree** contains only nodes with values **less than** the node
- **Right subtree** contains only nodes with values **greater than** the node
- This property applies recursively to all subtrees

**Visual example:**
\`\`\`
        8
       / \\
      3   10
     / \\    \\
    1   6    14
\`\`\`

**Time complexity (balanced tree):**
- Search: O(log n)
- Insert: O(log n)
- Delete: O(log n)

**Advantages:**
1. **Fast search** — binary search principle, eliminate half at each step
2. **Sorted data** — in-order traversal gives elements in sorted order
3. **Dynamic** — efficiently supports insertions and deletions
4. **Range queries** — easy to find all values in a range

**Important caveat:**
If the tree becomes unbalanced (e.g., inserting sorted data), performance degrades to O(n). Self-balancing trees (AVL, Red-Black) solve this.

**Use cases:** Databases, priority queues, sorted data that changes frequently.`,
            keyTakeaways: [
                'Explains ordering property',
                'Includes visual example',
                'Covers time complexity',
                'Mentions balancing importance'
            ]
        }
    },
    {
        id: 'ds-006',
        category: 'Data Structures & Logic',
        difficulty: 'beginner',
        question: 'How would you find a duplicate in an array of numbers?',
        variations: [
            'What approaches can you use to detect duplicates?',
            'How would you check if an array has any repeated elements?',
            'Describe different ways to find duplicates.'
        ],
        idealFramework: 'SCENARIO',
        keyPoints: [
            'Brute force: nested loops O(n²)',
            'Sort then scan: O(n log n)',
            'Hash set: O(n) time, O(n) space',
            'Trade-offs between approaches',
            'Choose based on constraints'
        ],
        timeTarget: 60,
        hints: [
            'Present multiple approaches',
            'Discuss time vs space trade-offs',
            'Explain your preferred method'
        ],
        modelAnswer: {
            structure: 'SCENARIO',
            answer: `There are several approaches to find duplicates, each with different trade-offs:

**Approach 1: Brute Force — O(n²) time, O(1) space**
\`\`\`python
for i in range(len(arr)):
    for j in range(i + 1, len(arr)):
        if arr[i] == arr[j]:
            return arr[i]
\`\`\`
*Simple but slow for large arrays.*

**Approach 2: Sort First — O(n log n) time, O(1) space**
\`\`\`python
arr.sort()
for i in range(1, len(arr)):
    if arr[i] == arr[i-1]:
        return arr[i]
\`\`\`
*Modifies original array, but no extra space.*

**Approach 3: Hash Set — O(n) time, O(n) space** ⭐ Recommended
\`\`\`python
seen = set()
for num in arr:
    if num in seen:
        return num
    seen.add(num)
\`\`\`
*Fastest, trades memory for speed.*

**How I'd choose:**
- **Memory constrained:** Use sorting approach
- **Speed is priority:** Use hash set
- **Can't modify array:** Use hash set
- **Small array:** Brute force is fine

For most interview scenarios, I would use the **hash set approach** because it's optimal for time and clearly expresses intent.`,
            keyTakeaways: [
                'Shows multiple approaches',
                'Includes code for each',
                'Analyzes trade-offs',
                'Makes a recommendation'
            ]
        }
    },
    {
        id: 'ds-007',
        category: 'Data Structures & Logic',
        difficulty: 'beginner',
        question: 'What is the difference between linear search and binary search?',
        variations: [
            'Compare linear search vs binary search.',
            'When can you use binary search?',
            'Why is binary search faster than linear search?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Linear: O(n), works on any array',
            'Binary: O(log n), requires sorted array',
            'Binary divides search space in half',
            'Linear is simpler to implement',
            'Trade-offs based on data characteristics'
        ],
        timeTarget: 60,
        hints: [
            'Explain the prerequisites for each',
            'Show why binary is faster',
            'Mention when linear is still appropriate'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Linear Search — O(n)**
- Checks **each element one by one** from start to end
- Works on **any array** (sorted or unsorted)
- Simple to implement

\`\`\`python
def linear_search(arr, target):
    for i, item in enumerate(arr):
        if item == target:
            return i
    return -1
\`\`\`

**Binary Search — O(log n)**
- **Requires sorted array**
- Repeatedly **divides search space in half**
- Much faster for large datasets

\`\`\`python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
\`\`\`

**Performance comparison:**
| Array Size | Linear Search | Binary Search |
|------------|---------------|---------------|
| 1,000 | 1,000 ops | ~10 ops |
| 1,000,000 | 1,000,000 ops | ~20 ops |

**When to use each:**
- **Linear:** Unsorted array, small datasets, one-time search
- **Binary:** Sorted array, large datasets, frequent searches`,
            keyTakeaways: [
                'Code examples for both',
                'Clear prerequisite (sorted)',
                'Performance comparison',
                'Practical guidance'
            ]
        }
    },
    {
        id: 'ds-008',
        category: 'Data Structures & Logic',
        difficulty: 'intermediate',
        question: 'How would you reverse a string? What are different approaches?',
        variations: [
            'What methods can you use to reverse a string?',
            'Describe ways to reverse a string in your preferred language.',
            'Walk through reversing a string step by step.'
        ],
        idealFramework: 'SCENARIO',
        keyPoints: [
            'Two-pointer approach',
            'Using built-in methods',
            'Using a stack',
            'Recursion approach',
            'In-place vs creating new string'
        ],
        timeTarget: 60,
        hints: [
            'Show your thought process',
            'Mention multiple approaches',
            'Consider edge cases'
        ],
        modelAnswer: {
            structure: 'SCENARIO',
            answer: `Here are several approaches to reverse a string:

**Approach 1: Built-in (Pythonic) — O(n)**
\`\`\`python
def reverse_string(s):
    return s[::-1]
\`\`\`
*Simple and readable, but creates new string.*

**Approach 2: Two Pointers (In-place for char array) — O(n)**
\`\`\`python
def reverse_string(chars):
    left, right = 0, len(chars) - 1
    while left < right:
        chars[left], chars[right] = chars[right], chars[left]
        left += 1
        right -= 1
\`\`\`
*Optimal for in-place reversal, O(1) extra space.*

**Approach 3: Stack — O(n) time, O(n) space**
\`\`\`python
def reverse_string(s):
    stack = list(s)
    result = ""
    while stack:
        result += stack.pop()
    return result
\`\`\`
*Demonstrates stack LIFO property.*

**Approach 4: Recursion — O(n)**
\`\`\`python
def reverse_string(s):
    if len(s) <= 1:
        return s
    return reverse_string(s[1:]) + s[0]
\`\`\`
*Elegant but uses O(n) stack space.*

**Edge cases to consider:**
- Empty string → return ""
- Single character → return as is
- Strings with spaces and special characters

**My recommendation:** Use built-in for production code; use two-pointer in interviews to show understanding.`,
            keyTakeaways: [
                'Multiple approaches shown',
                'Code for each method',
                'Considers edge cases',
                'Makes practical recommendation'
            ]
        }
    }
];

export default dataStructuresQuestions;
