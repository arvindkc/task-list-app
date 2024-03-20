import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggleCompletion, onEditTask, onDeleteTask }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          onToggleCompletion={onToggleCompletion}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
