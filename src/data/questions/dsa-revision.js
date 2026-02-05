// DSA Revision Questions - Top Problems for Last Minute Preparation
// Organized by topic with hints, solutions, and time complexity

export const dsaRevisionQuestions = {
    arraysAndStrings: {
        id: 'arrays',
        name: 'Arrays & Strings',
        icon: '📊',
        description: 'Top 20 must-solve array and string problems',
        problems: [
            {
                id: 'dsa-arr-001',
                name: 'Two Sum',
                difficulty: 'Easy',
                companies: ['Google', 'Amazon', 'Meta', 'Microsoft'],
                pattern: 'Hash Map',
                question: 'Given an array of integers and a target, return indices of two numbers that add up to target.',
                hints: [
                    'Use a hash map to store complements',
                    'One pass solution is possible',
                    'Think about what you need to look up'
                ],
                approach: `
1. Create a hash map to store number -> index
2. For each number, calculate complement (target - num)
3. Check if complement exists in map
4. If yes, return both indices
5. If no, add current number to map

Time: O(n), Space: O(n)`,
                code: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}`,
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                category: 'arraysAndStrings'
            },
            {
                id: 'dsa-arr-002',
                name: 'Best Time to Buy and Sell Stock',
                difficulty: 'Easy',
                companies: ['Amazon', 'Meta', 'Microsoft', 'Apple'],
                pattern: 'Single Pass',
                question: 'Find the maximum profit from buying and selling stock once.',
                hints: [
                    'Track minimum price seen so far',
                    'Calculate profit at each step',
                    'Keep track of maximum profit'
                ],
                approach: `
1. Initialize minPrice to infinity, maxProfit to 0
2. For each price:
   - Update minPrice if current < minPrice
   - Calculate profit = current - minPrice
   - Update maxProfit if profit > maxProfit
3. Return maxProfit

Time: O(n), Space: O(1)`,
                code: `function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    
    return maxProfit;
}`,
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                category: 'arraysAndStrings'
            },
            {
                id: 'dsa-arr-003',
                name: 'Container With Most Water',
                difficulty: 'Medium',
                companies: ['Google', 'Amazon', 'Meta'],
                pattern: 'Two Pointers',
                question: 'Find two lines that together with x-axis forms a container that holds the most water.',
                hints: [
                    'Use two pointers from both ends',
                    'Move the pointer with smaller height',
                    'Width decreases, so height must increase for better result'
                ],
                approach: `
1. Use left and right pointers at both ends
2. Calculate area = min(height[left], height[right]) * (right - left)
3. Move pointer with smaller height inward
4. Track maximum area

Time: O(n), Space: O(1)`,
                code: `function maxArea(height) {
    let left = 0, right = height.length - 1;
    let maxArea = 0;
    
    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, area);
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
}`,
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                category: 'arraysAndStrings'
            },
            {
                id: 'dsa-arr-004',
                name: 'Maximum Subarray',
                difficulty: 'Medium',
                companies: ['Amazon', 'Microsoft', 'Google', 'Apple'],
                pattern: 'Kadane\'s Algorithm',
                question: 'Find the contiguous subarray with the largest sum.',
                hints: [
                    'Use Kadane\'s algorithm',
                    'At each position, decide: extend previous or start new',
                    'Track current sum and max sum'
                ],
                approach: `
Kadane's Algorithm:
1. currentSum = nums[0], maxSum = nums[0]
2. For each element from index 1:
   - currentSum = max(num, currentSum + num)
   - maxSum = max(maxSum, currentSum)
3. Return maxSum

Time: O(n), Space: O(1)`,
                code: `function maxSubArray(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}`,
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                category: 'arraysAndStrings'
            },
            {
                id: 'dsa-arr-005',
                name: 'Longest Substring Without Repeating',
                difficulty: 'Medium',
                companies: ['Amazon', 'Google', 'Meta', 'Microsoft'],
                pattern: 'Sliding Window',
                question: 'Find length of longest substring without repeating characters.',
                hints: [
                    'Use sliding window with set/map',
                    'Expand right, shrink left on duplicate',
                    'Track last seen index of each character'
                ],
                approach: `
1. Use set to track characters in current window
2. Two pointers: left and right
3. Expand right, add to set
4. If duplicate found, shrink from left
5. Track max length

Time: O(n), Space: O(min(m,n))`,
                code: `function lengthOfLongestSubstring(s) {
    const seen = new Set();
    let left = 0, maxLen = 0;
    
    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }
        seen.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    
    return maxLen;
}`,
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(min(m,n))',
                category: 'arraysAndStrings'
            },
            {
                id: 'dsa-arr-006',
                name: 'Product of Array Except Self',
                difficulty: 'Medium',
                companies: ['Amazon', 'Meta', 'Apple', 'Microsoft'],
                pattern: 'Prefix/Suffix',
                question: 'Return array where each element is product of all elements except itself.',
                hints: [
                    'Use prefix products',
                    'Use suffix products',
                    'Can combine into single array'
                ],
                approach: `
1. Calculate prefix products (product of all elements before i)
2. Calculate suffix products (product of all elements after i)
3. answer[i] = prefix[i] * suffix[i]
4. Can optimize to O(1) space by doing in-place

Time: O(n), Space: O(1) extra`,
                code: `function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);
    
    // Prefix products
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }
    
    // Suffix products
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }
    
    return result;
}`,
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                category: 'arraysAndStrings'
            },
            {
                id: 'dsa-arr-007',
                name: 'Valid Palindrome',
                difficulty: 'Easy',
                companies: ['Meta', 'Microsoft', 'Amazon'],
                pattern: 'Two Pointers',
                question: 'Check if string is palindrome considering only alphanumeric characters.',
                hints: [
                    'Use two pointers from both ends',
                    'Skip non-alphanumeric characters',
                    'Compare case-insensitively'
                ],
                approach: `
1. Left pointer at start, right at end
2. Skip non-alphanumeric from both sides
3. Compare characters (case-insensitive)
4. If mismatch, return false
5. Continue until pointers meet

Time: O(n), Space: O(1)`,
                code: `function isPalindrome(s) {
    let left = 0, right = s.length - 1;
    
    while (left < right) {
        while (left < right && !isAlphaNum(s[left])) left++;
        while (left < right && !isAlphaNum(s[right])) right--;
        
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

function isAlphaNum(c) {
    return /[a-zA-Z0-9]/.test(c);
}`,
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                category: 'arraysAndStrings'
            },
            {
                id: 'dsa-arr-008',
                name: '3Sum',
                difficulty: 'Medium',
                companies: ['Amazon', 'Meta', 'Google', 'Microsoft'],
                pattern: 'Two Pointers + Sorting',
                question: 'Find all unique triplets that sum to zero.',
                hints: [
                    'Sort the array first',
                    'Fix one element, use two pointers for rest',
                    'Skip duplicates carefully'
                ],
                approach: `
1. Sort array
2. For each element i:
   - Skip if duplicate
   - Use two pointers (left = i+1, right = end)
   - Find pairs that sum to -nums[i]
   - Skip duplicates in inner loop too

Time: O(n²), Space: O(1)`,
                code: `function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1, right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return result;
}`,
                timeComplexity: 'O(n²)',
                spaceComplexity: 'O(1)',
                category: 'arraysAndStrings'
            }
        ]
    },

    linkedLists: {
        id: 'linkedlists',
        name: 'Linked Lists',
        icon: '🔗',
        description: 'Top 15 linked list problems',
        problems: [
            {
                id: 'dsa-ll-001',
                name: 'Reverse Linked List',
                difficulty: 'Easy',
                companies: ['Amazon', 'Microsoft', 'Meta', 'Apple'],
                pattern: 'Iterative/Recursive',
                question: 'Reverse a singly linked list.',
                hints: [
                    'Track three pointers: prev, current, next',
                    'Update links one by one',
                    'Return new head (prev)'
                ],
                approach: `
Iterative:
1. prev = null, current = head
2. While current:
   - Save next = current.next
   - Reverse link: current.next = prev
   - Move forward: prev = current, current = next
3. Return prev

Time: O(n), Space: O(1)`,
                code: `function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
}`,
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                category: 'linkedLists'
            },
            {
                id: 'dsa-ll-002',
                name: 'Detect Cycle',
                difficulty: 'Easy',
                companies: ['Amazon', 'Microsoft', 'Google'],
                pattern: 'Fast & Slow Pointers',
                question: 'Determine if linked list has a cycle.',
                hints: [
                    'Use Floyd\'s tortoise and hare',
                    'Fast moves 2 steps, slow moves 1',
                    'If they meet, cycle exists'
                ],
                approach: `
Floyd's Cycle Detection:
1. slow = fast = head
2. While fast and fast.next:
   - slow = slow.next
   - fast = fast.next.next
   - If slow === fast, return true
3. Return false

Time: O(n), Space: O(1)`,
                code: `function hasCycle(head) {
    if (!head || !head.next) return false;
    
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) return true;
    }
    
    return false;
}`,
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                category: 'linkedLists'
            },
            {
                id: 'dsa-ll-003',
                name: 'Merge Two Sorted Lists',
                difficulty: 'Easy',
                companies: ['Amazon', 'Microsoft', 'Google', 'Meta'],
                pattern: 'Two Pointers',
                question: 'Merge two sorted linked lists into one sorted list.',
                hints: [
                    'Use dummy node to simplify',
                    'Compare heads of both lists',
                    'Append remaining list at end'
                ],
                approach: `
1. Create dummy node
2. While both lists have nodes:
   - Compare values
   - Append smaller to result
   - Move that pointer forward
3. Append remaining list
4. Return dummy.next

Time: O(n+m), Space: O(1)`,
                code: `function mergeTwoLists(list1, list2) {
    const dummy = new ListNode(-1);
    let current = dummy;
    
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    current.next = list1 || list2;
    return dummy.next;
}`,
                timeComplexity: 'O(n+m)',
                spaceComplexity: 'O(1)',
                category: 'linkedLists'
            },
            {
                id: 'dsa-ll-004',
                name: 'Middle of Linked List',
                difficulty: 'Easy',
                companies: ['Amazon', 'Meta'],
                pattern: 'Fast & Slow Pointers',
                question: 'Return the middle node of the linked list.',
                hints: [
                    'Fast pointer moves 2x speed',
                    'When fast reaches end, slow is at middle',
                    'Handle even/odd length'
                ],
                approach: `
1. slow = fast = head
2. While fast and fast.next:
   - slow = slow.next
   - fast = fast.next.next
3. Return slow

Time: O(n), Space: O(1)`,
                code: `function middleNode(head) {
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}`,
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                category: 'linkedLists'
            },
            {
                id: 'dsa-ll-005',
                name: 'LRU Cache',
                difficulty: 'Medium',
                companies: ['Amazon', 'Google', 'Meta', 'Microsoft'],
                pattern: 'Hash Map + Doubly Linked List',
                question: 'Design a data structure for Least Recently Used (LRU) cache.',
                hints: [
                    'Use hash map for O(1) access',
                    'Use doubly linked list for O(1) removal',
                    'Head = most recent, Tail = least recent'
                ],
                approach: `
1. Hash map: key -> node
2. Doubly linked list: ordered by recency
3. get(key): 
   - If exists, move to head, return value
   - Else return -1
4. put(key, value):
   - If exists, update and move to head
   - Else, create node, add to head
   - If over capacity, remove from tail

Time: O(1) for both operations`,
                code: `class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = { key: null, val: null };
        this.tail = { key: null, val: null };
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    
    get(key) {
        if (!this.cache.has(key)) return -1;
        const node = this.cache.get(key);
        this.moveToHead(node);
        return node.val;
    }
    
    put(key, value) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            node.val = value;
            this.moveToHead(node);
        } else {
            const node = { key, val: value };
            this.cache.set(key, node);
            this.addToHead(node);
            
            if (this.cache.size > this.capacity) {
                const lru = this.tail.prev;
                this.removeNode(lru);
                this.cache.delete(lru.key);
            }
        }
    }
    
    addToHead(node) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
    }
    
    removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    
    moveToHead(node) {
        this.removeNode(node);
        this.addToHead(node);
    }
}`,
                timeComplexity: 'O(1)',
                spaceComplexity: 'O(capacity)',
                category: 'linkedLists'
            }
        ]
    },

    treesAndGraphs: {
        id: 'trees',
        name: 'Trees & Graphs',
        icon: '🌳',
        description: 'Top 20 tree and graph problems',
        problems: [
            {
                id: 'dsa-tree-001',
                name: 'Maximum Depth of Binary Tree',
                difficulty: 'Easy',
                companies: ['Amazon', 'Google', 'Meta'],
                pattern: 'DFS',
                question: 'Find the maximum depth of a binary tree.',
                hints: [
                    'Use recursion (DFS)',
                    'Max depth = 1 + max(left depth, right depth)',
                    'Base case: null node returns 0'
                ],
                approach: `
Recursive DFS:
1. Base: if null, return 0
2. Recursively get left depth and right depth
3. Return 1 + max(left, right)

Time: O(n), Space: O(h)`,
                code: `function maxDepth(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}`,
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(h)',
                category: 'treesAndGraphs'
            },
            {
                id: 'dsa-tree-002',
                name: 'Validate BST',
                difficulty: 'Medium',
                companies: ['Amazon', 'Meta', 'Microsoft'],
                pattern: 'DFS with Range',
                question: 'Determine if a binary tree is a valid BST.',
                hints: [
                    'Each node has valid range',
                    'Left child: (min, parent val)',
                    'Right child: (parent val, max)'
                ],
                approach: `
1. Helper function with min and max bounds
2. Root starts with (-∞, +∞)
3. Left subtree: (min, node.val)
4. Right subtree: (node.val, max)
5. Return false if value out of bounds

Time: O(n), Space: O(h)`,
                code: `function isValidBST(root) {
    return validate(root, -Infinity, Infinity);
}

function validate(node, min, max) {
    if (!node) return true;
    
    if (node.val <= min || node.val >= max) {
        return false;
    }
    
    return validate(node.left, min, node.val) && 
           validate(node.right, node.val, max);
}`,
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(h)',
                category: 'treesAndGraphs'
            },
            {
                id: 'dsa-tree-003',
                name: 'Level Order Traversal',
                difficulty: 'Medium',
                companies: ['Amazon', 'Meta', 'Microsoft', 'Google'],
                pattern: 'BFS',
                question: 'Return level order traversal of binary tree.',
                hints: [
                    'Use queue for BFS',
                    'Process level by level',
                    'Track level size before processing'
                ],
                approach: `
1. Initialize queue with root
2. While queue not empty:
   - Get current level size
   - Process that many nodes
   - Add children to queue
3. Collect each level's values

Time: O(n), Space: O(n)`,
                code: `function levelOrder(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length) {
        const level = [];
        const levelSize = queue.length;
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            level.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(level);
    }
    
    return result;
}`,
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                category: 'treesAndGraphs'
            },
            {
                id: 'dsa-tree-004',
                name: 'Number of Islands',
                difficulty: 'Medium',
                companies: ['Amazon', 'Google', 'Meta', 'Microsoft'],
                pattern: 'DFS/BFS on Grid',
                question: 'Count the number of islands in a 2D grid.',
                hints: [
                    'Treat grid as implicit graph',
                    'DFS/BFS from each unvisited land',
                    'Mark visited to avoid recount'
                ],
                approach: `
1. For each cell in grid:
   - If it's land ('1') and unvisited
   - Increment count
   - DFS/BFS to mark all connected land
2. Return count

Time: O(m*n), Space: O(m*n)`,
                code: `function numIslands(grid) {
    if (!grid.length) return 0;
    
    let count = 0;
    const rows = grid.length;
    const cols = grid[0].length;
    
    function dfs(r, c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') {
            return;
        }
        
        grid[r][c] = '0'; // Mark visited
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                count++;
                dfs(r, c);
            }
        }
    }
    
    return count;
}`,
                timeComplexity: 'O(m*n)',
                spaceComplexity: 'O(m*n)',
                category: 'treesAndGraphs'
            },
            {
                id: 'dsa-tree-005',
                name: 'Lowest Common Ancestor',
                difficulty: 'Medium',
                companies: ['Amazon', 'Meta', 'Google', 'Microsoft'],
                pattern: 'DFS',
                question: 'Find the lowest common ancestor of two nodes in a binary tree.',
                hints: [
                    'If current node is p or q, return it',
                    'Search in left and right subtrees',
                    'If both sides return non-null, current is LCA'
                ],
                approach: `
1. Base: if null or node is p or q, return node
2. Recurse left and right
3. If both return non-null -> current is LCA
4. Else return whichever is non-null

Time: O(n), Space: O(h)`,
                code: `function lowestCommonAncestor(root, p, q) {
    if (!root || root === p || root === q) {
        return root;
    }
    
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    
    if (left && right) return root;
    return left || right;
}`,
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(h)',
                category: 'treesAndGraphs'
            },
            {
                id: 'dsa-tree-006',
                name: 'Course Schedule',
                difficulty: 'Medium',
                companies: ['Amazon', 'Google', 'Meta'],
                pattern: 'Topological Sort / Cycle Detection',
                question: 'Determine if you can finish all courses given prerequisites.',
                hints: [
                    'Model as directed graph',
                    'Need to detect cycle',
                    'Use DFS with visit states or BFS (Kahn\'s)'
                ],
                approach: `
Detect Cycle using DFS:
1. Build adjacency list
2. Track visit states: 0=unvisited, 1=visiting, 2=visited
3. DFS from each unvisited node
4. If we see a "visiting" node, cycle exists

Time: O(V+E), Space: O(V+E)`,
                code: `function canFinish(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);
    const state = new Array(numCourses).fill(0);
    
    for (const [course, prereq] of prerequisites) {
        graph[prereq].push(course);
    }
    
    function hasCycle(node) {
        if (state[node] === 1) return true;  // Cycle
        if (state[node] === 2) return false; // Already processed
        
        state[node] = 1; // Visiting
        
        for (const neighbor of graph[node]) {
            if (hasCycle(neighbor)) return true;
        }
        
        state[node] = 2; // Visited
        return false;
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (hasCycle(i)) return false;
    }
    
    return true;
}`,
                timeComplexity: 'O(V+E)',
                spaceComplexity: 'O(V+E)',
                category: 'treesAndGraphs'
            }
        ]
    },

    dynamicProgramming: {
        id: 'dp',
        name: 'Dynamic Programming',
        icon: '📈',
        description: 'Top 15 DP problems',
        problems: [
            {
                id: 'dsa-dp-001',
                name: 'Climbing Stairs',
                difficulty: 'Easy',
                companies: ['Amazon', 'Google', 'Apple'],
                pattern: 'Fibonacci',
                question: 'How many distinct ways to climb n stairs (1 or 2 steps at a time)?',
                hints: [
                    'Similar to Fibonacci',
                    'dp[i] = dp[i-1] + dp[i-2]',
                    'Can optimize to O(1) space'
                ],
                approach: `
1. dp[i] = ways to reach step i
2. dp[i] = dp[i-1] + dp[i-2]
3. Base: dp[1] = 1, dp[2] = 2

Time: O(n), Space: O(1)`,
                code: `function climbStairs(n) {
    if (n <= 2) return n;
    
    let prev2 = 1, prev1 = 2;
    
    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}`,
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                category: 'dynamicProgramming'
            },
            {
                id: 'dsa-dp-002',
                name: 'House Robber',
                difficulty: 'Medium',
                companies: ['Amazon', 'Google', 'Microsoft'],
                pattern: 'Linear DP',
                question: 'Rob houses without robbing adjacent ones. Maximize total.',
                hints: [
                    'At each house: rob or skip',
                    'dp[i] = max(dp[i-1], dp[i-2] + nums[i])',
                    'Can optimize to O(1) space'
                ],
                approach: `
1. dp[i] = max money robbing houses 0 to i
2. dp[i] = max(skip house i, rob house i)
   = max(dp[i-1], dp[i-2] + nums[i])
3. Return dp[n-1]

Time: O(n), Space: O(1)`,
                code: `function rob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    let prev2 = 0, prev1 = 0;
    
    for (const num of nums) {
        const current = Math.max(prev1, prev2 + num);
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}`,
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                category: 'dynamicProgramming'
            },
            {
                id: 'dsa-dp-003',
                name: 'Coin Change',
                difficulty: 'Medium',
                companies: ['Amazon', 'Google', 'Meta', 'Microsoft'],
                pattern: 'Unbounded Knapsack',
                question: 'Find minimum coins to make up amount. Return -1 if impossible.',
                hints: [
                    'dp[i] = min coins for amount i',
                    'Try each coin, take minimum',
                    'Initialize with infinity'
                ],
                approach: `
1. dp[i] = min coins for amount i
2. For each amount from 1 to target:
   - For each coin:
     - dp[amount] = min(dp[amount], dp[amount-coin] + 1)
3. Return dp[amount] or -1

Time: O(amount * coins), Space: O(amount)`,
                code: `function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount];
}`,
                timeComplexity: 'O(amount * coins)',
                spaceComplexity: 'O(amount)',
                category: 'dynamicProgramming'
            },
            {
                id: 'dsa-dp-004',
                name: 'Longest Increasing Subsequence',
                difficulty: 'Medium',
                companies: ['Amazon', 'Google', 'Microsoft'],
                pattern: 'LIS Pattern',
                question: 'Find length of longest strictly increasing subsequence.',
                hints: [
                    'O(n²): dp[i] = LIS ending at i',
                    'O(n log n): Binary search approach',
                    'Patience sorting analogy'
                ],
                approach: `
O(n²) approach:
1. dp[i] = LIS ending at index i
2. For each i, check all j < i
3. If nums[i] > nums[j], dp[i] = max(dp[i], dp[j] + 1)

Time: O(n²), Space: O(n)`,
                code: `function lengthOfLIS(nums) {
    const dp = new Array(nums.length).fill(1);
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    return Math.max(...dp);
}

// O(n log n) solution
function lengthOfLIS_optimized(nums) {
    const tails = [];
    
    for (const num of nums) {
        let left = 0, right = tails.length;
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        tails[left] = num;
    }
    
    return tails.length;
}`,
                timeComplexity: 'O(n log n)',
                spaceComplexity: 'O(n)',
                category: 'dynamicProgramming'
            },
            {
                id: 'dsa-dp-005',
                name: 'Longest Common Subsequence',
                difficulty: 'Medium',
                companies: ['Amazon', 'Google', 'Microsoft'],
                pattern: 'LCS Pattern',
                question: 'Find length of longest common subsequence of two strings.',
                hints: [
                    '2D DP table',
                    'If chars match: dp[i][j] = dp[i-1][j-1] + 1',
                    'Else: max of skipping either char'
                ],
                approach: `
1. dp[i][j] = LCS of text1[0..i-1] and text2[0..j-1]
2. If text1[i-1] == text2[j-1]:
   dp[i][j] = dp[i-1][j-1] + 1
3. Else:
   dp[i][j] = max(dp[i-1][j], dp[i][j-1])

Time: O(m*n), Space: O(m*n)`,
                code: `function longestCommonSubsequence(text1, text2) {
    const m = text1.length, n = text2.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    return dp[m][n];
}`,
                timeComplexity: 'O(m*n)',
                spaceComplexity: 'O(m*n)',
                category: 'dynamicProgramming'
            }
        ]
    },

    stacksAndQueues: {
        id: 'stacks',
        name: 'Stacks & Queues',
        icon: '📚',
        description: 'Top 10 stack and queue problems',
        problems: [
            {
                id: 'dsa-stk-001',
                name: 'Valid Parentheses',
                difficulty: 'Easy',
                companies: ['Amazon', 'Google', 'Meta', 'Microsoft'],
                pattern: 'Stack',
                question: 'Check if string has valid matching parentheses.',
                hints: [
                    'Push opening brackets to stack',
                    'Pop and match for closing',
                    'Stack empty at end means valid'
                ],
                approach: `
1. Create map of closing -> opening
2. For each char:
   - If opening, push to stack
   - If closing, check if stack top matches
3. Return true if stack empty

Time: O(n), Space: O(n)`,
                code: `function isValid(s) {
    const stack = [];
    const map = { ')': '(', ']': '[', '}': '{' };
    
    for (const char of s) {
        if (char in map) {
            if (stack.pop() !== map[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    
    return stack.length === 0;
}`,
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                category: 'stacksAndQueues'
            },
            {
                id: 'dsa-stk-002',
                name: 'Min Stack',
                difficulty: 'Medium',
                companies: ['Amazon', 'Google', 'Microsoft'],
                pattern: 'Stack Design',
                question: 'Design stack that supports push, pop, top, and getMin in O(1).',
                hints: [
                    'Track minimum at each level',
                    'Store pairs: (value, minSoFar)',
                    'Or use two stacks'
                ],
                approach: `
Store (value, minAtThisLevel) pairs:
1. push(x): push (x, min(x, currentMin))
2. pop(): pop top pair
3. top(): return top value
4. getMin(): return top's min value

Time: O(1) all operations`,
                code: `class MinStack {
    constructor() {
        this.stack = [];
    }
    
    push(val) {
        const min = this.stack.length === 0 ? val : 
                    Math.min(val, this.getMin());
        this.stack.push({ val, min });
    }
    
    pop() {
        this.stack.pop();
    }
    
    top() {
        return this.stack[this.stack.length - 1].val;
    }
    
    getMin() {
        return this.stack[this.stack.length - 1].min;
    }
}`,
                timeComplexity: 'O(1)',
                spaceComplexity: 'O(n)',
                category: 'stacksAndQueues'
            },
            {
                id: 'dsa-stk-003',
                name: 'Daily Temperatures',
                difficulty: 'Medium',
                companies: ['Amazon', 'Google', 'Meta'],
                pattern: 'Monotonic Stack',
                question: 'Find days until warmer temperature for each day.',
                hints: [
                    'Use decreasing monotonic stack',
                    'Stack stores indices',
                    'Pop when current temp > stack top'
                ],
                approach: `
1. Maintain decreasing stack of indices
2. For each day:
   - While stack top temp < current temp:
     - Pop and calculate days
   - Push current index
3. Remaining indices get 0

Time: O(n), Space: O(n)`,
                code: `function dailyTemperatures(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = []; // Store indices
    
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    
    return result;
}`,
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                category: 'stacksAndQueues'
            }
        ]
    }
};

// Get all problems flattened
export const getAllDSAProblems = () => {
    const all = [];
    Object.values(dsaRevisionQuestions).forEach(category => {
        all.push(...category.problems);
    });
    return all;
};

// Get problems by category
export const getDSAProblemsByCategory = (categoryId) => {
    return dsaRevisionQuestions[categoryId]?.problems || [];
};

// Get problem by ID
export const getDSAProblemById = (id) => {
    return getAllDSAProblems().find(p => p.id === id);
};

// Get categories
export const getDSACategories = () => {
    return Object.entries(dsaRevisionQuestions).map(([key, val]) => ({
        id: key,
        name: val.name,
        icon: val.icon,
        description: val.description,
        problemCount: val.problems.length
    }));
};

// Filter by difficulty
export const filterByDifficulty = (difficulty) => {
    return getAllDSAProblems().filter(p => p.difficulty === difficulty);
};

// Filter by company
export const filterByCompany = (company) => {
    return getAllDSAProblems().filter(p =>
        p.companies.some(c => c.toLowerCase().includes(company.toLowerCase()))
    );
};

export default dsaRevisionQuestions;
