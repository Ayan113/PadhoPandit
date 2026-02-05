// Day-by-Day Roadmaps for Interview Preparation
// FAANG (90 days), Service (30 days), Last Minute (7 days)

export const roadmaps = {
    faang: {
        id: 'faang',
        name: 'FAANG Interview Roadmap',
        description: 'Complete 90-day preparation for top tech companies',
        duration: 90,
        difficulty: 'Advanced',
        targetCompanies: ['Google', 'Amazon', 'Meta', 'Apple', 'Microsoft', 'Netflix'],
        icon: '🚀',
        weeks: [
            {
                week: 1,
                title: 'Foundation - Arrays & Strings',
                focus: 'Build strong fundamentals',
                days: [
                    { day: 1, topic: 'Two Pointers Technique', tasks: ['Understand concept', 'Solve 3 easy problems'], resources: ['Two Sum', 'Valid Palindrome', 'Remove Duplicates'] },
                    { day: 2, topic: 'Sliding Window', tasks: ['Learn pattern', 'Practice 3 problems'], resources: ['Max Subarray', 'Longest Substring', 'Minimum Window'] },
                    { day: 3, topic: 'Prefix Sum', tasks: ['Master technique', 'Solve 3 problems'], resources: ['Range Sum Query', 'Subarray Sum', 'Product of Array'] },
                    { day: 4, topic: 'String Manipulation', tasks: ['String methods', 'Pattern matching'], resources: ['String Reversal', 'Anagrams', 'Palindrome'] },
                    { day: 5, topic: 'Matrix Traversal', tasks: ['2D array patterns', 'Practice'], resources: ['Spiral Matrix', 'Rotate Image', 'Set Matrix Zeroes'] },
                    { day: 6, topic: 'Practice Day', tasks: ['Solve 5 mixed problems', 'Review concepts'], resources: ['LeetCode Easy/Medium'] },
                    { day: 7, topic: 'Review & Rest', tasks: ['Review week', 'Revise notes'], resources: [] }
                ]
            },
            {
                week: 2,
                title: 'Hashing & Sorting',
                focus: 'Optimize with hash maps',
                days: [
                    { day: 8, topic: 'Hash Map Basics', tasks: ['Frequency counting', '3 problems'], resources: ['Two Sum', 'Contains Duplicate', 'Valid Anagram'] },
                    { day: 9, topic: 'Hash Set Applications', tasks: ['Set operations', 'Practice'], resources: ['Intersection', 'Happy Number', 'Longest Consecutive'] },
                    { day: 10, topic: 'Sorting Algorithms', tasks: ['Quick Sort, Merge Sort', 'Implement'], resources: ['Sort an Array', 'Sort Colors'] },
                    { day: 11, topic: 'Custom Sorting', tasks: ['Comparators', 'Complex sorting'], resources: ['Largest Number', 'Meeting Rooms', 'Merge Intervals'] },
                    { day: 12, topic: 'Binary Search Basics', tasks: ['Search patterns', 'Practice'], resources: ['Binary Search', 'Search Insert', 'First Bad Version'] },
                    { day: 13, topic: 'Binary Search Advanced', tasks: ['Rotated arrays', 'Complex cases'], resources: ['Search Rotated Array', 'Find Peak', 'Median of Arrays'] },
                    { day: 14, topic: 'Weekly Review', tasks: ['Mock problems', 'Self assessment'], resources: [] }
                ]
            },
            {
                week: 3,
                title: 'Linked Lists & Stacks',
                focus: 'Pointer manipulation mastery',
                days: [
                    { day: 15, topic: 'Linked List Basics', tasks: ['Traversal, Insert, Delete'], resources: ['Reverse List', 'Delete Node', 'Middle of List'] },
                    { day: 16, topic: 'Fast & Slow Pointers', tasks: ['Cycle detection', 'Practice'], resources: ['Cycle Detection', 'Find Start of Cycle', 'Happy Number'] },
                    { day: 17, topic: 'Merge & Sort Lists', tasks: ['Merge techniques'], resources: ['Merge Two Lists', 'Merge K Lists', 'Sort List'] },
                    { day: 18, topic: 'Stack Fundamentals', tasks: ['LIFO operations', 'Applications'], resources: ['Valid Parentheses', 'Min Stack', 'Daily Temperatures'] },
                    { day: 19, topic: 'Monotonic Stack', tasks: ['Next greater element'], resources: ['Next Greater', 'Largest Rectangle', 'Trapping Rain Water'] },
                    { day: 20, topic: 'Queue & Deque', tasks: ['FIFO, Double-ended'], resources: ['Sliding Window Max', 'Design Circular Queue'] },
                    { day: 21, topic: 'Weekly Practice', tasks: ['5 problems mix', 'Review'], resources: [] }
                ]
            },
            {
                week: 4,
                title: 'Trees - Part 1',
                focus: 'Binary tree fundamentals',
                days: [
                    { day: 22, topic: 'Tree Traversals', tasks: ['Inorder, Preorder, Postorder'], resources: ['All traversals iteratively & recursively'] },
                    { day: 23, topic: 'BFS on Trees', tasks: ['Level order', 'Applications'], resources: ['Level Order', 'Zigzag', 'Right Side View'] },
                    { day: 24, topic: 'DFS on Trees', tasks: ['Path problems'], resources: ['Max Depth', 'Path Sum', 'Diameter of Tree'] },
                    { day: 25, topic: 'BST Operations', tasks: ['Search, Insert, Delete'], resources: ['Validate BST', 'Kth Smallest', 'BST Iterator'] },
                    { day: 26, topic: 'Tree Construction', tasks: ['Build from traversals'], resources: ['Construct from Preorder/Inorder', 'Serialize Tree'] },
                    { day: 27, topic: 'LCA & Ancestors', tasks: ['Common ancestor problems'], resources: ['LCA', 'All Ancestors', 'Distance Between Nodes'] },
                    { day: 28, topic: 'Weekly Review', tasks: ['Tree problems marathon'], resources: [] }
                ]
            },
            {
                week: 5,
                title: 'Trees - Part 2 & Heaps',
                focus: 'Advanced tree patterns',
                days: [
                    { day: 29, topic: 'Balanced Trees', tasks: ['AVL concepts', 'Red-Black'], resources: ['Balanced BST', 'Convert Sorted Array'] },
                    { day: 30, topic: 'Tries', tasks: ['Prefix trees', 'Implementation'], resources: ['Implement Trie', 'Word Search II', 'Auto-complete'] },
                    { day: 31, topic: 'Heap Basics', tasks: ['Min/Max heap', 'Heapify'], resources: ['Kth Largest', 'Last Stone Weight'] },
                    { day: 32, topic: 'Priority Queue', tasks: ['Applications', 'Practice'], resources: ['Top K Frequent', 'Merge K Lists', 'Task Scheduler'] },
                    { day: 33, topic: 'Two Heaps Pattern', tasks: ['Median stream'], resources: ['Find Median', 'Sliding Window Median'] },
                    { day: 34, topic: 'Heap Applications', tasks: ['Scheduling problems'], resources: ['Meeting Rooms II', 'Reorganize String'] },
                    { day: 35, topic: 'Weekly Practice', tasks: ['Mixed problems'], resources: [] }
                ]
            },
            {
                week: 6,
                title: 'Graphs - Part 1',
                focus: 'Graph traversal fundamentals',
                days: [
                    { day: 36, topic: 'Graph Representations', tasks: ['Adjacency list/matrix'], resources: ['Build graph', 'Graph theory'] },
                    { day: 37, topic: 'BFS on Graphs', tasks: ['Shortest path unweighted'], resources: ['Number of Islands', 'Rotting Oranges', 'Word Ladder'] },
                    { day: 38, topic: 'DFS on Graphs', tasks: ['Connected components'], resources: ['Clone Graph', 'Pacific Atlantic', 'Number of Provinces'] },
                    { day: 39, topic: 'Cycle Detection', tasks: ['Directed, Undirected'], resources: ['Course Schedule', 'Detect Cycle in Graph'] },
                    { day: 40, topic: 'Topological Sort', tasks: ['DAG ordering'], resources: ['Course Schedule II', 'Alien Dictionary'] },
                    { day: 41, topic: 'Union Find', tasks: ['Disjoint set union'], resources: ['Number of Islands II', 'Redundant Connection'] },
                    { day: 42, topic: 'Weekly Review', tasks: ['Graph marathon'], resources: [] }
                ]
            },
            {
                week: 7,
                title: 'Graphs - Part 2',
                focus: 'Advanced graph algorithms',
                days: [
                    { day: 43, topic: 'Dijkstra\'s Algorithm', tasks: ['Weighted shortest path'], resources: ['Network Delay', 'Cheapest Flights'] },
                    { day: 44, topic: 'Bellman-Ford', tasks: ['Negative weights'], resources: ['Negative Weight Cycle Detection'] },
                    { day: 45, topic: 'Floyd-Warshall', tasks: ['All pairs shortest'], resources: ['All pairs problems'] },
                    { day: 46, topic: 'MST - Kruskal\'s', tasks: ['Minimum spanning tree'], resources: ['Min Cost to Connect', 'MST problems'] },
                    { day: 47, topic: 'MST - Prim\'s', tasks: ['Alternative approach'], resources: ['Compare with Kruskal'] },
                    { day: 48, topic: 'Advanced BFS', tasks: ['Multi-source, 0-1 BFS'], resources: ['Nearest Exit', 'Minimum Knight Moves'] },
                    { day: 49, topic: 'Weekly Practice', tasks: ['Graph problems'], resources: [] }
                ]
            },
            {
                week: 8,
                title: 'Dynamic Programming - Part 1',
                focus: 'DP fundamentals',
                days: [
                    { day: 50, topic: 'DP Introduction', tasks: ['Memoization vs Tabulation'], resources: ['Fibonacci', 'Climbing Stairs'] },
                    { day: 51, topic: '1D DP', tasks: ['Linear problems'], resources: ['House Robber', 'Coin Change', 'Longest Increasing'] },
                    { day: 52, topic: '2D DP Basics', tasks: ['Grid problems'], resources: ['Unique Paths', 'Minimum Path Sum'] },
                    { day: 53, topic: 'Knapsack Pattern', tasks: ['0/1 Knapsack'], resources: ['Target Sum', 'Partition Equal Sum'] },
                    { day: 54, topic: 'Unbounded Knapsack', tasks: ['Unlimited items'], resources: ['Coin Change', 'Perfect Squares'] },
                    { day: 55, topic: 'LCS Pattern', tasks: ['Longest common subsequence'], resources: ['LCS', 'Edit Distance'] },
                    { day: 56, topic: 'Weekly Review', tasks: ['DP problems practice'], resources: [] }
                ]
            },
            {
                week: 9,
                title: 'Dynamic Programming - Part 2',
                focus: 'Advanced DP patterns',
                days: [
                    { day: 57, topic: 'LIS Pattern', tasks: ['Longest increasing subsequence'], resources: ['LIS', 'Russian Doll Envelopes'] },
                    { day: 58, topic: 'String DP', tasks: ['Palindromes, Matching'], resources: ['Longest Palindrome', 'Wildcard Matching'] },
                    { day: 59, topic: 'Interval DP', tasks: ['Range-based problems'], resources: ['Burst Balloons', 'Matrix Chain'] },
                    { day: 60, topic: 'State Machine DP', tasks: ['Multiple states'], resources: ['Best Time to Buy Stock', 'Stock with Cooldown'] },
                    { day: 61, topic: 'Bitmask DP', tasks: ['Subset enumeration'], resources: ['Traveling Salesman', 'Parallel Courses'] },
                    { day: 62, topic: 'DP on Trees', tasks: ['Tree DP patterns'], resources: ['House Robber III', 'Binary Tree Cameras'] },
                    { day: 63, topic: 'Weekly Practice', tasks: ['DP marathon'], resources: [] }
                ]
            },
            {
                week: 10,
                title: 'Recursion & Backtracking',
                focus: 'Exhaustive search patterns',
                days: [
                    { day: 64, topic: 'Recursion Deep Dive', tasks: ['Call stack, Base cases'], resources: ['Recursion fundamentals'] },
                    { day: 65, topic: 'Subsets Problem', tasks: ['Power set generation'], resources: ['Subsets', 'Subsets II'] },
                    { day: 66, topic: 'Permutations', tasks: ['All arrangements'], resources: ['Permutations', 'Permutations II'] },
                    { day: 67, topic: 'Combinations', tasks: ['Selection problems'], resources: ['Combinations', 'Combination Sum'] },
                    { day: 68, topic: 'Constraint Backtracking', tasks: ['N-Queens, Sudoku'], resources: ['N-Queens', 'Sudoku Solver'] },
                    { day: 69, topic: 'Word Problems', tasks: ['Letter combinations'], resources: ['Word Search', 'Letter Combinations'] },
                    { day: 70, topic: 'Weekly Review', tasks: ['Backtracking practice'], resources: [] }
                ]
            },
            {
                week: 11,
                title: 'System Design Basics',
                focus: 'Design fundamentals',
                days: [
                    { day: 71, topic: 'System Design Intro', tasks: ['Scalability concepts'], resources: ['Scale basics', 'CAP theorem'] },
                    { day: 72, topic: 'Load Balancing', tasks: ['Distribution strategies'], resources: ['LB algorithms', 'Health checks'] },
                    { day: 73, topic: 'Caching', tasks: ['Cache strategies'], resources: ['Redis', 'Memcached', 'CDN'] },
                    { day: 74, topic: 'Databases', tasks: ['SQL vs NoSQL, Sharding'], resources: ['DB design', 'Partitioning'] },
                    { day: 75, topic: 'Message Queues', tasks: ['Async processing'], resources: ['Kafka', 'RabbitMQ'] },
                    { day: 76, topic: 'API Design', tasks: ['REST, Rate limiting'], resources: ['API best practices'] },
                    { day: 77, topic: 'Weekly Review', tasks: ['Design a simple system'], resources: [] }
                ]
            },
            {
                week: 12,
                title: 'System Design Practice',
                focus: 'Real-world designs',
                days: [
                    { day: 78, topic: 'Design URL Shortener', tasks: ['TinyURL design'], resources: ['Complete design walkthrough'] },
                    { day: 79, topic: 'Design Twitter', tasks: ['Social media feed'], resources: ['Timeline, Follow system'] },
                    { day: 80, topic: 'Design Chat System', tasks: ['Real-time messaging'], resources: ['WhatsApp/Messenger design'] },
                    { day: 81, topic: 'Design Search', tasks: ['Search engine'], resources: ['Inverted index', 'Ranking'] },
                    { day: 82, topic: 'Design Video Platform', tasks: ['YouTube design'], resources: ['Upload, Stream, Recommendations'] },
                    { day: 83, topic: 'Design E-commerce', tasks: ['Amazon/Flipkart'], resources: ['Cart, Orders, Payments'] },
                    { day: 84, topic: 'Weekly Review', tasks: ['Mock design interview'], resources: [] }
                ]
            },
            {
                week: 13,
                title: 'Final Preparation',
                focus: 'Mock interviews & polish',
                days: [
                    { day: 85, topic: 'Behavioral Prep', tasks: ['STAR stories ready'], resources: ['Top 15 behavioral questions'] },
                    { day: 86, topic: 'Mock Interview 1', tasks: ['Full coding interview'], resources: ['Peer or self mock'] },
                    { day: 87, topic: 'Weak Areas', tasks: ['Revise weak topics'], resources: ['Personal weak areas'] },
                    { day: 88, topic: 'Mock Interview 2', tasks: ['System design mock'], resources: ['Practice explaining'] },
                    { day: 89, topic: 'Quick Revision', tasks: ['All patterns review'], resources: ['Cheat sheets'] },
                    { day: 90, topic: 'Final Review', tasks: ['Rest, Review, Confidence'], resources: ['Prepare for interview day'] }
                ]
            }
        ]
    },

    service: {
        id: 'service',
        name: 'Service Company Roadmap',
        description: '30-day preparation for IT service companies',
        duration: 30,
        difficulty: 'Beginner to Intermediate',
        targetCompanies: ['TCS', 'Infosys', 'Wipro', 'Cognizant', 'Accenture', 'HCL'],
        icon: '🏢',
        weeks: [
            {
                week: 1,
                title: 'Aptitude & Reasoning',
                focus: 'Quantitative and logical skills',
                days: [
                    { day: 1, topic: 'Number System', tasks: ['Divisibility, Remainders', 'Practice 20 questions'], resources: ['IndiaBix', 'PrepInsta'] },
                    { day: 2, topic: 'Percentages & Profit/Loss', tasks: ['Formulas, Problems'], resources: ['Practice sets'] },
                    { day: 3, topic: 'Time & Work, Speed', tasks: ['Work rate problems'], resources: ['Practice sets'] },
                    { day: 4, topic: 'Logical Reasoning', tasks: ['Syllogisms, Blood Relations'], resources: ['Practice sets'] },
                    { day: 5, topic: 'Puzzles & Seating', tasks: ['Arrangement problems'], resources: ['Practice sets'] },
                    { day: 6, topic: 'Data Interpretation', tasks: ['Charts, Tables'], resources: ['Practice sets'] },
                    { day: 7, topic: 'Aptitude Revision', tasks: ['Mixed practice'], resources: ['Full mock test'] }
                ]
            },
            {
                week: 2,
                title: 'Programming Basics',
                focus: 'Core programming concepts',
                days: [
                    { day: 8, topic: 'C/C++/Java Basics', tasks: ['Syntax, Data types'], resources: ['Choose one language'] },
                    { day: 9, topic: 'Control Structures', tasks: ['If-else, Loops, Switch'], resources: ['10 programs'] },
                    { day: 10, topic: 'Arrays', tasks: ['1D and 2D arrays'], resources: ['15 programs'] },
                    { day: 11, topic: 'Strings', tasks: ['String manipulation'], resources: ['15 programs'] },
                    { day: 12, topic: 'Functions', tasks: ['Functions, Recursion'], resources: ['10 programs'] },
                    { day: 13, topic: 'OOP Concepts', tasks: ['Class, Object, Inheritance'], resources: ['Theory + examples'] },
                    { day: 14, topic: 'Coding Practice', tasks: ['Pattern programs', 'Star patterns'], resources: ['20 patterns'] }
                ]
            },
            {
                week: 3,
                title: 'Database & OS',
                focus: 'Technical fundamentals',
                days: [
                    { day: 15, topic: 'SQL Basics', tasks: ['SELECT, WHERE, ORDER BY'], resources: ['Practice queries'] },
                    { day: 16, topic: 'SQL Joins', tasks: ['INNER, LEFT, RIGHT joins'], resources: ['Join queries'] },
                    { day: 17, topic: 'SQL Advanced', tasks: ['GROUP BY, Subqueries'], resources: ['Complex queries'] },
                    { day: 18, topic: 'DBMS Theory', tasks: ['Normalization, Keys'], resources: ['Theory + MCQs'] },
                    { day: 19, topic: 'Operating System', tasks: ['Process, Thread, Memory'], resources: ['Key concepts'] },
                    { day: 20, topic: 'Networking Basics', tasks: ['OSI model, Protocols'], resources: ['Key concepts'] },
                    { day: 21, topic: 'Technical Revision', tasks: ['All technical topics'], resources: ['MCQ practice'] }
                ]
            },
            {
                week: 4,
                title: 'HR & Mock Interviews',
                focus: 'Communication and confidence',
                days: [
                    { day: 22, topic: 'Tell Me About Yourself', tasks: ['Craft perfect intro'], resources: ['Practice delivery'] },
                    { day: 23, topic: 'HR Questions Prep', tasks: ['Strengths, Weaknesses'], resources: ['Top 20 HR questions'] },
                    { day: 24, topic: 'Project Discussion', tasks: ['Prepare project walkthrough'], resources: ['Practice explaining'] },
                    { day: 25, topic: 'Company Research', tasks: ['Know your target companies'], resources: ['Company websites'] },
                    { day: 26, topic: 'Mock Technical', tasks: ['Full technical round'], resources: ['Peer mock'] },
                    { day: 27, topic: 'Mock HR', tasks: ['Full HR round'], resources: ['Peer mock'] },
                    { day: 28, topic: 'Group Discussion', tasks: ['GD practice if applicable'], resources: ['Current topics'] },
                    { day: 29, topic: 'Final Revision', tasks: ['All weak areas'], resources: ['Quick notes'] },
                    { day: 30, topic: 'Interview Day Prep', tasks: ['Relax, Review, Rest'], resources: ['Confidence boost'] }
                ]
            }
        ]
    },

    lastMinute: {
        id: 'lastMinute',
        name: 'Last Minute Revision',
        description: '7-day intensive revision for interviews',
        duration: 7,
        difficulty: 'All Levels',
        targetCompanies: ['Any Company'],
        icon: '⚡',
        weeks: [
            {
                week: 1,
                title: 'Intensive Revision',
                focus: 'Cover all critical topics',
                days: [
                    {
                        day: 1,
                        topic: 'Arrays & Strings',
                        tasks: ['Two pointers', 'Sliding window', 'Top 15 problems'],
                        resources: ['Two Sum', 'Best Time to Buy Stock', 'Valid Palindrome', 'Longest Substring', 'Container With Water']
                    },
                    {
                        day: 2,
                        topic: 'Linked Lists & Stacks',
                        tasks: ['Reversal', 'Cycle detection', 'Top 10 problems'],
                        resources: ['Reverse List', 'Detect Cycle', 'Valid Parentheses', 'Min Stack']
                    },
                    {
                        day: 3,
                        topic: 'Trees & Heaps',
                        tasks: ['Traversals', 'BST operations', 'Top 12 problems'],
                        resources: ['Inorder', 'Level Order', 'Validate BST', 'LCA', 'Kth Largest']
                    },
                    {
                        day: 4,
                        topic: 'Graphs',
                        tasks: ['BFS', 'DFS', 'Top 10 problems'],
                        resources: ['Number of Islands', 'Clone Graph', 'Course Schedule', 'Word Ladder']
                    },
                    {
                        day: 5,
                        topic: 'Dynamic Programming',
                        tasks: ['Classic DP patterns', 'Top 10 problems'],
                        resources: ['Climbing Stairs', 'House Robber', 'Coin Change', 'LCS', 'LIS']
                    },
                    {
                        day: 6,
                        topic: 'System Design + Behavioral',
                        tasks: ['2 system designs', '5 STAR stories'],
                        resources: ['URL Shortener', 'Chat System', 'Top behavioral']
                    },
                    {
                        day: 7,
                        topic: 'Final Review',
                        tasks: ['All patterns', 'Mock interview', 'Rest'],
                        resources: ['Cheat sheets', 'Confidence preparation']
                    }
                ]
            }
        ]
    }
};

// Get roadmap by ID
export const getRoadmapById = (id) => {
    return roadmaps[id] || null;
};

// Get day's content
export const getDayContent = (roadmapId, dayNumber) => {
    const roadmap = getRoadmapById(roadmapId);
    if (!roadmap) return null;

    for (const week of roadmap.weeks) {
        const day = week.days.find(d => d.day === dayNumber);
        if (day) {
            return {
                ...day,
                weekTitle: week.title,
                weekFocus: week.focus
            };
        }
    }
    return null;
};

// Get current week
export const getCurrentWeek = (roadmapId, currentDay) => {
    const roadmap = getRoadmapById(roadmapId);
    if (!roadmap) return null;

    for (const week of roadmap.weeks) {
        const daysInWeek = week.days.map(d => d.day);
        if (currentDay >= Math.min(...daysInWeek) && currentDay <= Math.max(...daysInWeek)) {
            return week;
        }
    }
    return null;
};

// Get progress stats
export const getProgressStats = (roadmapId, completedDays) => {
    const roadmap = getRoadmapById(roadmapId);
    if (!roadmap) return null;

    const totalDays = roadmap.duration;
    const completed = completedDays.length;
    const percentage = Math.round((completed / totalDays) * 100);

    return {
        total: totalDays,
        completed,
        remaining: totalDays - completed,
        percentage,
        onTrack: completed >= Math.floor((new Date().getTime() - new Date().setHours(0, 0, 0, 0)) / (1000 * 60 * 60 * 24))
    };
};

export default roadmaps;
