import React, { useState} from "react";

function CategoryFilter({categories, onFilterChange}) {

  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button 
        key={category} 
        className={selectedCategory === category ? 'selected' : ""} 
        onClick={() => handleCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  ); 
}

export default CategoryFilter;


