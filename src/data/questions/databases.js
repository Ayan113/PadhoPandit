// Database & Backend Fundamentals Questions for PadhoPandit Interview Prep
// Includes model answers optimized for AI-proctored interviews

export const databaseQuestions = [
    {
        id: 'db-001',
        category: 'Databases & Backend',
        difficulty: 'beginner',
        question: 'What is the difference between SQL and NoSQL databases? When would you use each?',
        variations: [
            'Compare relational and non-relational databases.',
            'What are the pros and cons of SQL vs NoSQL?',
            'How do you choose between SQL and NoSQL for a project?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'SQL: structured, tables, relationships, ACID',
            'NoSQL: flexible schema, document/key-value/graph',
            'SQL for complex queries and transactions',
            'NoSQL for scalability and unstructured data',
            'Use case dependent'
        ],
        timeTarget: 90,
        hints: [
            'Mention schema differences',
            'Discuss scaling approaches',
            'Give use case examples'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**SQL (Relational) Databases:**
- **Structured schema** with predefined tables and columns
- Data organized in **rows and columns** with relationships
- Uses **SQL** for queries (SELECT, JOIN, etc.)
- **ACID compliant** — strong consistency and transactions
- Examples: **MySQL, PostgreSQL, Oracle, SQL Server**

**NoSQL (Non-Relational) Databases:**
- **Flexible/dynamic schema** — can store varied structures
- Multiple types: **document** (MongoDB), **key-value** (Redis), **columnar** (Cassandra), **graph** (Neo4j)
- **Horizontally scalable** — easy to distribute across servers
- Often **eventually consistent** for performance
- Examples: **MongoDB, Redis, Cassandra, DynamoDB**

**When to use each:**

| Use SQL when... | Use NoSQL when... |
|-----------------|-------------------|
| Data is highly structured | Schema changes frequently |
| Complex queries with JOINs | Simple read/write operations |
| ACID transactions required | Need horizontal scaling |
| Financial/accounting systems | Real-time analytics, IoT |
| Strong consistency needed | Flexibility is priority |

**Practical example:**
- **E-commerce orders:** SQL — need transactions and relations
- **User activity logs:** NoSQL — high volume, flexible structure
- **Social network posts:** NoSQL — varied content types, scale needed`,
            keyTakeaways: [
                'Clear comparison of both',
                'Provides specific examples',
                'Decision table included',
                'Practical use cases'
            ]
        }
    },
    {
        id: 'db-002',
        category: 'Databases & Backend',
        difficulty: 'beginner',
        question: 'What is a primary key and why is it important?',
        variations: [
            'Explain the concept of a primary key.',
            'What role do primary keys play in databases?',
            'How do primary keys ensure data integrity?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Unique identifier for each row',
            'Cannot be NULL',
            'Ensures uniqueness',
            'Used for relationships (foreign keys)',
            'Indexed for fast lookups'
        ],
        timeTarget: 60,
        hints: [
            'Use a simple table example',
            'Mention foreign key relationships',
            'Explain why uniqueness matters'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `A **primary key** is a column (or combination of columns) that **uniquely identifies each row** in a database table.

**Key characteristics:**
1. **Unique** — no two rows can have the same primary key value
2. **Not NULL** — every row must have a value
3. **Immutable** — should not change once set (best practice)
4. **Single per table** — only one primary key per table

**Example:**
\`\`\`sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,  -- Primary key
    name VARCHAR(100),
    email VARCHAR(100)
);
\`\`\`

**Why it's important:**

1. **Data integrity:** Prevents duplicate records
2. **Relationships:** Other tables reference it via foreign keys
   \`\`\`sql
   -- Orders table references employees
   FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
   \`\`\`
3. **Performance:** Primary keys are automatically indexed for fast lookups
4. **Identification:** Provides a reliable way to find any specific record

**Types of primary keys:**
- **Natural key:** Real-world identifier (SSN, email)
- **Surrogate key:** System-generated (auto-increment ID, UUID)

Most systems prefer **surrogate keys** (like auto-increment IDs) because they're simple and never change.`,
            keyTakeaways: [
                'Clear definition',
                'Lists key characteristics',
                'Shows SQL example',
                'Explains practical importance'
            ]
        }
    },
    {
        id: 'db-003',
        category: 'Databases & Backend',
        difficulty: 'intermediate',
        question: 'What is normalization? What are its benefits?',
        variations: [
            'Explain database normalization.',
            'Why do we normalize databases?',
            'What are the normal forms?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Process of organizing data to reduce redundancy',
            'Normal forms (1NF, 2NF, 3NF)',
            'Reduces data duplication',
            'Ensures data integrity',
            'Trade-off with query complexity'
        ],
        timeTarget: 90,
        hints: [
            'Explain the purpose first',
            'Give examples of each normal form',
            'Mention trade-offs with denormalization'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Normalization** is the process of organizing database tables to **reduce data redundancy and improve data integrity**.

**The Normal Forms:**

**1st Normal Form (1NF):**
- Each column contains **atomic (single) values**
- Each row is unique
- No repeating groups

*Bad:* \`colors: "red, blue, green"\`
*Good:* Separate rows for each color

**2nd Normal Form (2NF):**
- Meets 1NF
- All non-key columns depend on the **entire** primary key
- Eliminates partial dependencies

**3rd Normal Form (3NF):**
- Meets 2NF
- No **transitive dependencies** — non-key columns don't depend on other non-key columns

**Example transformation:**
\`\`\`
Before (denormalized):
Orders: [order_id, customer_name, customer_email, product, price]

After (3NF):
Customers: [customer_id, name, email]
Orders: [order_id, customer_id, product_id]
Products: [product_id, name, price]
\`\`\`

**Benefits:**
- **Less redundancy** — data stored once
- **Data integrity** — update in one place
- **Smaller storage** — no duplicate data
- **Easier maintenance** — changes don't propagate

**Trade-off:** Normalized databases require more JOINs, which can slow queries. Sometimes **denormalization** is used for read-heavy systems.`,
            keyTakeaways: [
                'Explains the normal forms',
                'Provides before/after example',
                'Lists clear benefits',
                'Acknowledges trade-offs'
            ]
        }
    },
    {
        id: 'db-004',
        category: 'Databases & Backend',
        difficulty: 'beginner',
        question: 'What is a REST API? What are the key principles?',
        variations: [
            'Explain RESTful API design.',
            'What makes an API RESTful?',
            'Describe the principles of REST.'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Representational State Transfer',
            'Stateless communication',
            'Standard HTTP methods (GET, POST, PUT, DELETE)',
            'Resource-based URLs',
            'JSON as common format'
        ],
        timeTarget: 90,
        hints: [
            'Explain what REST stands for',
            'Cover the main HTTP methods',
            'Give URL examples'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**REST** (Representational State Transfer) is an architectural style for designing networked applications. A **REST API** follows specific principles for web service design.

**Key principles of REST:**

**1. Stateless**
Each request contains all information needed. Server doesn't store client state between requests.

**2. Resource-based**
Everything is a resource identified by URLs:
\`\`\`
/users          → All users
/users/123      → User with ID 123
/users/123/orders → Orders for user 123
\`\`\`

**3. Standard HTTP Methods**
| Method | Purpose | Example |
|--------|---------|---------|
| GET | Retrieve data | GET /users |
| POST | Create new resource | POST /users |
| PUT | Update entire resource | PUT /users/123 |
| PATCH | Partial update | PATCH /users/123 |
| DELETE | Remove resource | DELETE /users/123 |

**4. Standard HTTP Status Codes**
- 200 OK, 201 Created, 204 No Content
- 400 Bad Request, 401 Unauthorized, 404 Not Found
- 500 Internal Server Error

**5. JSON as common format**
\`\`\`json
{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com"
}
\`\`\`

**Why REST is popular:**
- Simple and well-understood
- Works with any programming language
- Cacheable responses for performance
- Scalable and maintainable`,
            keyTakeaways: [
                'Explains all key principles',
                'Shows HTTP methods table',
                'Includes URL examples',
                'Mentions practical benefits'
            ]
        }
    },
    {
        id: 'db-005',
        category: 'Databases & Backend',
        difficulty: 'intermediate',
        question: 'What is the difference between authentication and authorization?',
        variations: [
            'Explain authentication vs authorization.',
            'How are authentication and authorization different?',
            'What role does each play in security?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Authentication: verify identity (who are you?)',
            'Authorization: verify permissions (what can you do?)',
            'Authentication comes first',
            'Common mechanisms for each',
            'Both essential for security'
        ],
        timeTarget: 60,
        hints: [
            'Use simple definitions',
            'Give real-world examples',
            'Mention common mechanisms'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Authentication** and **Authorization** are two related but distinct security concepts:

**Authentication (AuthN) — "Who are you?"**
Verifies the **identity** of a user or system.

*Example:* Logging in with username/password proves you are who you claim to be.

**Common methods:**
- Username/password
- Multi-factor authentication (MFA)
- OAuth/SSO (social login)
- API keys
- Biometrics

**Authorization (AuthZ) — "What can you do?"**
Determines what **actions or resources** an authenticated user can access.

*Example:* After logging in, an admin can delete users, but a regular user cannot.

**Common methods:**
- Role-Based Access Control (RBAC)
- Access Control Lists (ACLs)
- Permissions/scopes
- Policy-based (ABAC)

**Key differences:**

| Authentication | Authorization |
|----------------|---------------|
| Verifies identity | Verifies permissions |
| Happens first | Happens after authentication |
| "Can I enter the building?" | "Which rooms can I access?" |
| Credentials needed | Roles/permissions checked |

**Real-world analogy:**
- **Authentication:** Showing your ID at the airport security checkpoint
- **Authorization:** Your boarding pass determines which gate you can access

Both are essential — authentication without authorization would let anyone do anything after logging in.`,
            keyTakeaways: [
                'Clear distinction',
                'Lists common methods',
                'Includes comparison table',
                'Uses relatable analogy'
            ]
        }
    },
    {
        id: 'db-006',
        category: 'Databases & Backend',
        difficulty: 'intermediate',
        question: 'What is indexing in databases? Why is it useful?',
        variations: [
            'Explain database indexes.',
            'How do indexes improve query performance?',
            'When should you use indexes?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Data structure for faster lookups',
            'Like book index for quick reference',
            'Trade-off: faster reads, slower writes',
            'Types: B-tree, hash, composite',
            'Not always beneficial'
        ],
        timeTarget: 90,
        hints: [
            'Use the book index analogy',
            'Explain the speed improvement',
            'Mention trade-offs'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `A **database index** is a data structure that **speeds up data retrieval** operations on a table at the cost of additional storage and slower writes.

**Analogy:** Like an index at the back of a book — instead of scanning every page to find "polymorphism," you look it up in the index and jump directly to page 127.

**How it works:**
- Index stores a sorted reference to row locations
- Instead of scanning all rows (O(n)), the database does a quick lookup (O(log n))

**Example:**
\`\`\`sql
-- Without index: scans all rows
SELECT * FROM users WHERE email = 'john@example.com';

-- Create index
CREATE INDEX idx_email ON users(email);

-- With index: direct lookup
SELECT * FROM users WHERE email = 'john@example.com';  -- Much faster!
\`\`\`

**Types of indexes:**
- **B-tree:** Default, good for range queries and equality
- **Hash:** Fast for exact matches only
- **Composite:** Multiple columns (email, created_at)
- **Full-text:** For text searching

**Trade-offs:**
| Advantage | Disadvantage |
|-----------|--------------|
| Faster SELECT queries | Slower INSERT/UPDATE/DELETE |
| Efficient sorting | Uses additional storage |
| Better WHERE clauses | Maintenance overhead |

**When to index:**
- Columns used in WHERE, JOIN, ORDER BY
- High-cardinality columns (many unique values)
- Frequently queried columns

**When NOT to index:**
- Small tables
- Columns rarely used in queries
- Low-cardinality columns (few unique values)`,
            keyTakeaways: [
                'Clear book analogy',
                'Shows SQL example',
                'Covers index types',
                'Discusses trade-offs'
            ]
        }
    },
    {
        id: 'db-007',
        category: 'Databases & Backend',
        difficulty: 'intermediate',
        question: 'What is ACID in databases? Why is it important?',
        variations: [
            'Explain the ACID properties.',
            'Why are ACID transactions important?',
            'What does each letter in ACID stand for?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Atomicity: all or nothing',
            'Consistency: valid state to valid state',
            'Isolation: concurrent transactions independent',
            'Durability: committed data persists',
            'Critical for financial systems'
        ],
        timeTarget: 90,
        hints: [
            'Explain each property with an example',
            'Use banking as a use case',
            'Mention when ACID matters'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**ACID** is a set of properties that guarantee reliable database transactions.

**A — Atomicity (All or Nothing)**
A transaction is **indivisible** — either all operations succeed, or none do.

*Example:* Bank transfer: debit $100 from Account A AND credit $100 to Account B. If one fails, both are rolled back.

**C — Consistency**
A transaction brings the database from one **valid state to another**. All rules and constraints are maintained.

*Example:* If account balance can't be negative, a withdrawal that would cause negative balance is rejected.

**I — Isolation**
Concurrent transactions execute as if they were **running alone**. One transaction's partial changes aren't visible to others.

*Example:* Two people booking the same last seat — isolation prevents both from succeeding.

**D — Durability**
Once a transaction is **committed**, changes are **permanent** even if the system crashes.

*Example:* After "Payment Successful" appears, the payment remains even if server restarts.

**Why ACID matters:**
\`\`\`
Without ACID:
1. Debit $100 from Account A  ✓
2. System crashes
3. Credit $100 to Account B  ✗
Result: $100 disappeared!

With ACID:
Both steps succeed, or both are rolled back.
\`\`\`

**Applications:** Banking, e-commerce, any system where data integrity is critical. NoSQL often sacrifices some ACID guarantees for performance.`,
            keyTakeaways: [
                'Explains each property',
                'Uses banking examples',
                'Shows consequences without ACID',
                'Relevant for enterprise systems'
            ]
        }
    },
    {
        id: 'db-008',
        category: 'Databases & Backend',
        difficulty: 'beginner',
        question: 'What is the difference between GET and POST HTTP methods?',
        variations: [
            'When would you use GET vs POST?',
            'Explain the difference between GET and POST requests.',
            'What are the characteristics of GET and POST methods?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'GET: retrieve data, idempotent',
            'POST: submit data, not idempotent',
            'GET: data in URL',
            'POST: data in body',
            'Security and caching differences'
        ],
        timeTarget: 60,
        hints: [
            'Compare purpose and data location',
            'Mention security implications',
            'Give practical examples'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**GET** and **POST** are the two most common HTTP methods with distinct purposes:

**GET — Retrieve Data**
- **Purpose:** Request data from a server
- **Data location:** In the URL (query string)
- **Idempotent:** Multiple identical requests have the same effect
- **Cached:** Browsers and proxies can cache responses
- **Bookmarkable:** URLs can be saved and shared

\`\`\`
GET /users?id=123
GET /search?q=javascript
\`\`\`

**POST — Submit Data**
- **Purpose:** Send data to create or update a resource
- **Data location:** In the request body
- **Not idempotent:** Multiple submissions may create duplicates
- **Not cached:** Each request is processed
- **Not bookmarkable:** Data isn't in the URL

\`\`\`
POST /users
Body: { "name": "John", "email": "john@email.com" }
\`\`\`

**Comparison:**

| Feature | GET | POST |
|---------|-----|------|
| Purpose | Retrieve | Create/Update |
| Data in | URL | Body |
| Data visible | Yes | No |
| Data size | Limited (~2KB) | Unlimited |
| Idempotent | Yes | No |
| Cacheable | Yes | No |

**Security note:** GET exposes data in browser history, logs, and URLs. Never use GET for sensitive data like passwords — always use POST with HTTPS.`,
            keyTakeaways: [
                'Clear purpose distinction',
                'Shows request examples',
                'Comparison table',
                'Security consideration'
            ]
        }
    }
];

export default databaseQuestions;
