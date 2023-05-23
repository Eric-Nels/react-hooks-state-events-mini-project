import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { v4 as uuidv4} from 'uuid'

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [inputText, setInputText] = useState("")
  const [newTaskCategory, setNewTaskCategory] = useState("Food")

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  }

  let filteredTasks = selectedCategory === "All" ? tasks : tasks.filter(task => task.category === selectedCategory);

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const onTaskFormSubmit = (event) => {
    event.preventDefault()
    const newTask = {
      id: uuidv4(),
      text: inputText, 
      category: newTaskCategory
    };
    setTasks([...filteredTasks, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onFilterChange={handleFilterChange} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} inputText={inputText} setInputText={setInputText} handleInputChange={handleInputChange} newTaskCategory={newTaskCategory} setNewTaskCategory={setNewTaskCategory} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
