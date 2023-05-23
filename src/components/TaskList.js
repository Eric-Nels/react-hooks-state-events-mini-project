import React from "react";
import Task from "./Task";


function TaskList({ tasks, onDeleteTask }) {
  const handleDeleteTask = (taskId) => {
    onDeleteTask(taskId)
  } 

  return (
    <div className="tasks">
      {tasks.map((task) => (
      <Task key={task.id} task={task} onDelete={handleDeleteTask}/>
      ))}
    </div>
  );
}

export default TaskList;
