// CategoryNav Component - Question category navigation

import { categories } from '../data/questions';

const CategoryNav = ({ selectedCategory, onCategoryChange }) => {
    return (
        <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '1rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                Question Categories
            </h4>
            <div className="category-pills">
                <button
                    className={`category-pill ${selectedCategory === null ? 'active' : ''}`}
                    onClick={() => onCategoryChange(null)}
                >
                    All Categories
                </button>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={`category-pill ${selectedCategory === category.id ? 'active' : ''}`}
                        onClick={() => onCategoryChange(category.id)}
                    >
                        <span style={{ marginRight: '0.25rem' }}>{category.icon}</span>
                        {category.shortName}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryNav;
