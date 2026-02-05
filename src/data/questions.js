// Question Bank Index - Combines all categories

import { behavioralQuestions } from './questions/behavioral';
import { programmingQuestions } from './questions/programming';
import { oopQuestions } from './questions/oop';
import { dataStructuresQuestions } from './questions/dataStructures';
import { databaseQuestions } from './questions/databases';
import { scenarioQuestions } from './questions/scenarios';

export const allQuestions = [
    ...behavioralQuestions,
    ...programmingQuestions,
    ...oopQuestions,
    ...dataStructuresQuestions,
    ...databaseQuestions,
    ...scenarioQuestions
];

export const categories = [
    {
        id: 'behavioral',
        name: 'Behavioral & Professionalism',
        shortName: 'Behavioral',
        icon: '💼',
        description: 'Questions about teamwork, conflict resolution, and professional growth',
        questions: behavioralQuestions
    },
    {
        id: 'programming',
        name: 'Core Programming',
        shortName: 'Programming',
        icon: '💻',
        description: 'Fundamental programming concepts and practices',
        questions: programmingQuestions
    },
    {
        id: 'oop',
        name: 'Object-Oriented Programming',
        shortName: 'OOP',
        icon: '🧱',
        description: 'OOP principles, design patterns, and best practices',
        questions: oopQuestions
    },
    {
        id: 'dataStructures',
        name: 'Data Structures & Logic',
        shortName: 'Data Structures',
        icon: '📊',
        description: 'Arrays, linked lists, trees, and algorithmic thinking',
        questions: dataStructuresQuestions
    },
    {
        id: 'databases',
        name: 'Databases & Backend',
        shortName: 'Databases',
        icon: '🗄️',
        description: 'SQL, NoSQL, APIs, and backend fundamentals',
        questions: databaseQuestions
    },
    {
        id: 'scenarios',
        name: 'Scenario-Based',
        shortName: 'Scenarios',
        icon: '🎯',
        description: 'Real-world engineering judgment and problem-solving',
        questions: scenarioQuestions
    }
];

export const getQuestionsByCategory = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.questions : [];
};

export const getRandomQuestion = (categoryId = null) => {
    const pool = categoryId ? getQuestionsByCategory(categoryId) : allQuestions;
    return pool[Math.floor(Math.random() * pool.length)];
};

export const getQuestionById = (id) => {
    return allQuestions.find(q => q.id === id);
};

export { behavioralQuestions, programmingQuestions, oopQuestions, dataStructuresQuestions, databaseQuestions, scenarioQuestions };
