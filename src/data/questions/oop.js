// Object-Oriented Programming Questions for PadhoPandit Interview Prep
// Includes model answers optimized for AI-proctored interviews

export const oopQuestions = [
    {
        id: 'oop-001',
        category: 'Object-Oriented Programming',
        difficulty: 'beginner',
        question: 'What are the four main pillars of Object-Oriented Programming? Can you briefly explain each?',
        variations: [
            'Explain the core concepts of OOP.',
            'What are the fundamental principles of object-oriented design?',
            'Describe the four pillars of OOP with examples.'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Encapsulation: bundling data and methods, access control',
            'Abstraction: hiding complexity, showing essentials',
            'Inheritance: code reuse, parent-child relationships',
            'Polymorphism: same interface, different implementations'
        ],
        timeTarget: 90,
        hints: [
            'Use simple real-world analogies',
            'Give a brief example for each pillar',
            'Keep explanations concise but complete'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `The four pillars of OOP are:

**1. Encapsulation**
Bundling data and methods that operate on that data within a single unit (class), and restricting direct access to some components.
*Example:* A BankAccount class hides the balance variable and exposes deposit() and withdraw() methods.

**2. Abstraction**
Hiding complex implementation details and showing only the essential features.
*Example:* When you drive a car, you use the steering wheel and pedals—you don't need to know how the engine works internally.

**3. Inheritance**
A mechanism where a child class inherits properties and methods from a parent class, enabling code reuse.
*Example:* A Dog class inherits from an Animal class, gaining its eat() and sleep() methods while adding its own bark() method.

**4. Polymorphism**
The ability of different classes to respond to the same method call in different ways.
*Example:* Both Dog and Cat classes have a makeSound() method, but Dog returns "Bark" while Cat returns "Meow".

These pillars work together to create modular, reusable, and maintainable code.`,
            keyTakeaways: [
                'Covers all four pillars',
                'Includes examples for each',
                'Uses clear analogies',
                'Concise but complete'
            ]
        }
    },
    {
        id: 'oop-002',
        category: 'Object-Oriented Programming',
        difficulty: 'beginner',
        question: 'What is the difference between a class and an object?',
        variations: [
            'Explain class vs object with an example.',
            'How are classes and objects related?',
            'What is a class and what is an instance?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Class is a blueprint/template',
            'Object is an instance of a class',
            'Class defines properties and methods',
            'Objects have actual data values',
            'Multiple objects from one class'
        ],
        timeTarget: 60,
        hints: [
            'Use an analogy (blueprint vs house)',
            'Show how one class creates many objects',
            'Mention constructors'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**A class** is a **blueprint or template** that defines the structure and behavior of objects. It specifies what properties (attributes) and methods (functions) objects of that type will have.

**An object** is an **instance of a class**—a concrete realization with actual values stored in its properties.

**Analogy:** A class is like an architectural blueprint for a house. The blueprint defines rooms, dimensions, and features. An object is an actual house built from that blueprint—you can build many houses from the same blueprint.

**Code example:**
\`\`\`java
// Class definition (blueprint)
class Car {
    String color;
    int speed;
    void drive() { ... }
}

// Objects (instances)
Car myCar = new Car();      // Object 1
myCar.color = "Red";

Car yourCar = new Car();    // Object 2
yourCar.color = "Blue";
\`\`\`

**Key point:** One class can create unlimited objects, each with its own state but sharing the same structure and behavior.`,
            keyTakeaways: [
                'Clear blueprint analogy',
                'Includes code example',
                'Shows multiple instances',
                'Explains the relationship'
            ]
        }
    },
    {
        id: 'oop-003',
        category: 'Object-Oriented Programming',
        difficulty: 'beginner',
        question: 'What is encapsulation and why is it important?',
        variations: [
            'Explain the concept of encapsulation in OOP.',
            'How does encapsulation improve code quality?',
            'What are the benefits of encapsulation?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Bundling data with methods',
            'Access modifiers (public, private, protected)',
            'Data hiding and protection',
            'Controlled access through getters/setters',
            'Reduces coupling, improves maintainability'
        ],
        timeTarget: 60,
        hints: [
            'Explain the protective aspect',
            'Mention access modifiers',
            'Give a practical example'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Encapsulation** is the practice of **bundling data (attributes) and methods (functions)** that operate on that data into a single unit (class), while **restricting direct access** to some of the object's components.

**How it works:**
- Make data properties **private** (hidden from outside)
- Provide **public methods** (getters/setters) to access and modify them
- This controls how data is accessed and modified

**Example:**
\`\`\`java
class BankAccount {
    private double balance;  // Hidden from outside
    
    public void deposit(double amount) {
        if (amount > 0) balance += amount;  // Validation
    }
    
    public double getBalance() {
        return balance;  // Controlled read access
    }
}
\`\`\`

**Why it's important:**
1. **Data protection:** Prevents invalid or unauthorized changes
2. **Flexibility:** Internal implementation can change without affecting external code
3. **Maintainability:** Bugs are easier to find—data only changes through known methods
4. **Reduced coupling:** Components are less dependent on each other's internals

Encapsulation is fundamental for building robust, maintainable software.`,
            keyTakeaways: [
                'Explains concept clearly',
                'Includes code example',
                'Lists concrete benefits',
                'Shows access modifiers'
            ]
        }
    },
    {
        id: 'oop-004',
        category: 'Object-Oriented Programming',
        difficulty: 'intermediate',
        question: 'What is the difference between an abstract class and an interface?',
        variations: [
            'When would you use an abstract class vs an interface?',
            'Compare abstract classes and interfaces.',
            'Explain abstract class vs interface with use cases.'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Abstract class can have implementation',
            'Interface defines only contract',
            'Single inheritance vs multiple interfaces',
            'Abstract class for shared base behavior',
            'Interface for capability definition'
        ],
        timeTarget: 90,
        hints: [
            'Focus on key differences',
            'Mention when to use each',
            'Use relatable examples (Animal vs Flyable)'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Abstract Class:**
- Can contain **both implemented and abstract methods**
- Can have **instance variables** with state
- A class can extend **only one** abstract class (single inheritance)
- Represents an **"is-a"** relationship
- Used when classes share common behavior

**Interface:**
- Contains only **method signatures** (contracts) — no implementation (until Java 8 default methods)
- Cannot have instance variables (only constants)
- A class can implement **multiple interfaces**
- Represents a **"can-do"** capability
- Used to define a capability that multiple unrelated classes can have

**When to use each:**

| Use Abstract Class | Use Interface |
|-------------------|---------------|
| Classes share common code | Define a capability across unrelated classes |
| You need instance variables | You need multiple inheritance of type |
| Related classes with IS-A relationship | Unrelated classes sharing behavior |

**Example:**
\`\`\`java
abstract class Animal {
    void breathe() { ... }  // Shared implementation
    abstract void makeSound();
}

interface Flyable {
    void fly();  // Contract only
}

class Bird extends Animal implements Flyable { ... }
\`\`\``,
            keyTakeaways: [
                'Clear comparison table',
                'Explains inheritance difference',
                'Includes code example',
                'Shows when to use each'
            ]
        }
    },
    {
        id: 'oop-005',
        category: 'Object-Oriented Programming',
        difficulty: 'intermediate',
        question: 'What is polymorphism? Can you explain with an example?',
        variations: [
            'How does polymorphism work in OOP?',
            'What are the types of polymorphism?',
            'Give an example of polymorphism in action.'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Same interface, different implementations',
            'Method overriding (runtime polymorphism)',
            'Method overloading (compile-time polymorphism)',
            'Enables flexible, extensible code',
            'Allows treating objects uniformly'
        ],
        timeTarget: 90,
        hints: [
            'Use a clear example (shapes, animals)',
            'Distinguish between types of polymorphism',
            'Show practical benefits'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Polymorphism** means "many forms." It allows objects of different classes to be treated through a **common interface**, with each class providing its own implementation.

**Two types of polymorphism:**

**1. Compile-time (Method Overloading)**
Same method name with different parameters in the same class.
\`\`\`java
class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
}
\`\`\`

**2. Runtime (Method Overriding)**
Subclass provides a specific implementation of a parent class method.
\`\`\`java
class Animal {
    void makeSound() { System.out.println("Some sound"); }
}

class Dog extends Animal {
    @Override
    void makeSound() { System.out.println("Bark"); }
}

class Cat extends Animal {
    @Override
    void makeSound() { System.out.println("Meow"); }
}

// Polymorphism in action
Animal myPet = new Dog();
myPet.makeSound();  // Outputs: "Bark"
\`\`\`

**Why it's powerful:**
- Write flexible code that works with parent types
- Add new types without changing existing code
- Enables the Open-Closed principle
- Foundation for many design patterns`,
            keyTakeaways: [
                'Explains both types',
                'Clear code examples',
                'Shows polymorphism in action',
                'Explains practical benefits'
            ]
        }
    },
    {
        id: 'oop-006',
        category: 'Object-Oriented Programming',
        difficulty: 'beginner',
        question: 'What is inheritance and what are its advantages?',
        variations: [
            'Explain inheritance in OOP with an example.',
            'Why do we use inheritance in programming?',
            'What are the benefits and drawbacks of inheritance?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Parent-child class relationship',
            'Code reuse and extension',
            'IS-A relationship',
            'Override and extend parent behavior',
            'Potential issues with deep hierarchy'
        ],
        timeTarget: 60,
        hints: [
            'Use a simple hierarchy example',
            'Mention code reuse benefits',
            'Acknowledge potential downsides'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Inheritance** is a mechanism where a **child class (subclass) acquires properties and methods** from a **parent class (superclass)**. It represents an "IS-A" relationship.

**Example:**
\`\`\`java
class Vehicle {
    void start() { System.out.println("Starting..."); }
    void stop() { System.out.println("Stopping..."); }
}

class Car extends Vehicle {
    void honk() { System.out.println("Beep!"); }
}

// Car inherits start() and stop() from Vehicle
Car myCar = new Car();
myCar.start();  // Inherited
myCar.honk();   // Car-specific
\`\`\`

**Advantages:**
1. **Code reuse:** Write once in parent, use in all children
2. **Extensibility:** Add new features in child classes without modifying parent
3. **Maintainability:** Bug fixes in parent apply to all children
4. **Logical hierarchy:** Models real-world relationships naturally

**Potential drawbacks:**
- Deep hierarchies become hard to maintain
- Tight coupling between parent and child
- Changes to parent can break children

**Best practice:** Keep inheritance hierarchies shallow and favor composition when relationships are complex.`,
            keyTakeaways: [
                'Clear definition with IS-A',
                'Practical code example',
                'Lists advantages honestly',
                'Acknowledges drawbacks'
            ]
        }
    },
    {
        id: 'oop-007',
        category: 'Object-Oriented Programming',
        difficulty: 'intermediate',
        question: 'What is the difference between composition and inheritance? When would you prefer one over the other?',
        variations: [
            'Explain composition vs inheritance.',
            'Why is composition sometimes preferred over inheritance?',
            'When should you use composition instead of inheritance?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Inheritance: IS-A relationship',
            'Composition: HAS-A relationship',
            'Composition offers more flexibility',
            'Favoring composition over inheritance',
            'Composition better for changing behavior'
        ],
        timeTarget: 90,
        hints: [
            'Explain both concepts clearly',
            'Give examples of each',
            'Mention the "favor composition" principle'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `**Inheritance (IS-A):** Child class extends parent class, inheriting its behavior.
\`\`\`java
class Dog extends Animal { }  // Dog IS-A Animal
\`\`\`

**Composition (HAS-A):** Class contains instances of other classes as components.
\`\`\`java
class Car {
    private Engine engine;  // Car HAS-A Engine
    private Wheel[] wheels;
}
\`\`\`

**Key differences:**

| Inheritance | Composition |
|-------------|-------------|
| IS-A relationship | HAS-A relationship |
| Tight coupling | Loose coupling |
| Static (compile-time) | Dynamic (can change at runtime) |
| One parent only (single inheritance) | Can have multiple components |

**Why "favor composition over inheritance":**
1. **Flexibility:** Can change components at runtime
2. **Loose coupling:** Less dependent on parent implementation
3. **Easier testing:** Can mock individual components
4. **Avoids fragile base class problem**

**When to use each:**
- **Inheritance:** True IS-A relationship, you want to reuse implementation
- **Composition:** HAS-A relationship, you need flexibility, or IS-A doesn't fit naturally

**Rule of thumb:** If you're unsure, composition is usually safer.`,
            keyTakeaways: [
                'Clear comparison',
                'Code examples for both',
                'Explains when to use each',
                'Follows best practices guidance'
            ]
        }
    },
    {
        id: 'oop-008',
        category: 'Object-Oriented Programming',
        difficulty: 'beginner',
        question: 'What is a constructor and what is its purpose?',
        variations: [
            'Explain what constructors do.',
            'Why do we need constructors in a class?',
            'What happens when a constructor is called?'
        ],
        idealFramework: 'TECHNICAL',
        keyPoints: [
            'Special method for object initialization',
            'Called automatically when object is created',
            'Sets initial state of object',
            'Can have parameters for customization',
            'Default vs parameterized constructors'
        ],
        timeTarget: 60,
        hints: [
            'Explain the purpose simply',
            'Mention initialization of properties',
            'Distinguish constructor types'
        ],
        modelAnswer: {
            structure: 'TECHNICAL',
            answer: `A **constructor** is a special method that is **automatically called when an object is created**. Its purpose is to **initialize the object's state**.

**Key characteristics:**
- Same name as the class
- No return type (not even void)
- Called automatically with the \`new\` keyword
- Can be overloaded (multiple constructors with different parameters)

**Types of constructors:**

**1. Default constructor:** No parameters, sets default values
\`\`\`java
class Car {
    String color;
    
    Car() {
        color = "White";  // Default value
    }
}
\`\`\`

**2. Parameterized constructor:** Accepts arguments to customize initialization
\`\`\`java
class Car {
    String color;
    
    Car(String c) {
        color = c;  // Custom value
    }
}

Car redCar = new Car("Red");
\`\`\`

**Why constructors matter:**
- Ensure objects start in a valid state
- Enforce required data at creation time
- Simplify object setup (vs. setting properties one by one)
- Enable dependency injection for testing`,
            keyTakeaways: [
                'Clear definition of purpose',
                'Shows both constructor types',
                'Includes code examples',
                'Explains practical importance'
            ]
        }
    }
];

export default oopQuestions;
