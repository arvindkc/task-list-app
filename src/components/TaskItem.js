import React, { useState } from "react";

function TaskItem({
  task,
  index,
  onToggleCompletion,
  onEditTask,
  onDeleteTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleTaskCompletion = () => {
    onToggleCompletion(index);
  };

  const handleTaskEdit = () => {
    setIsEditing(true);
  };

  const handleTaskEditSubmit = () => {
    onEditTask(index, editedText);
    setIsEditing(false);
  };

  const handleTaskDelete = () => {
    onDeleteTask(index);
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleTaskCompletion}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleTaskEditSubmit}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleTaskEditSubmit();
            }
          }}
          autoFocus
        />
      ) : (
        <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.text}
        </p>
      )}
      <div>
        <button onClick={handleTaskEdit}>Edit</button>
        <button onClick={handleTaskDelete}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
