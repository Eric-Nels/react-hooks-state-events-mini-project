import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit, setInputText, inputText, handleInputChange, setNewTaskCategory, newTaskCategory }) {

  const handleCategoryChange = (e) => {
    setNewTaskCategory(e.target.value);
  }

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={inputText} onChange={handleInputChange}/>
      </label>
      <label>
        Category
        <select name="category" value= {newTaskCategory} onChange={handleCategoryChange}>
          {categories
            .filter((category) => category !== "All")
            .map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;


