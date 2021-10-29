import React, { useContext } from "react";
import styles from "./TaskClear.module.scss";
import { ThemeContext } from "../context/theme-context";
import { TaskContext } from "../context/task-context";

const TaskClear = () => {
  const themeContext = useContext(ThemeContext);
  const taskContext = useContext(TaskContext)

  const taskLeft = taskContext.tasks.filter(task => !task.completed)

  return (
    <section className={styles[`${themeContext.theme}`]}>
      <div>
        <h3>{taskLeft.length} items left</h3>
        <button onClick={taskContext.clearTasks}>Clear Completed</button>
      </div>
    </section>
  );
};

export default TaskClear;

