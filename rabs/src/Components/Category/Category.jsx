import React, { useState, useEffect } from 'react';
import './Category.css';

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className="category-container">
      <h1>Categories</h1>
      <ul className="category-list">
        {categories.map(category => (
          <li key={category} className="category-item">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
