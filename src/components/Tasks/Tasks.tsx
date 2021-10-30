import React, { useContext } from "react";
import styles from "./Tasks.module.scss";
import TaskFilter from "./TaskFilter";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { TaskContext } from "../context/task-context";

const Tasks: React.FC = () => {
  const taskContext = useContext(TaskContext);

  return (
    <main className={styles.tasks}>
      <TaskInput />

      {taskContext.tasks.length > 0 && (
        <>
          <TaskList />
          <TaskFilter />
          <p>Drag and drop to reorder list</p>
        </>
      )}
      {taskContext.tasks.length === 0 && (
        <section className={styles.welcome}>
          <h2>Features</h2>
          <h3>Create a simple to-do list</h3>
          <p> Keep your list organized with the ability to mark task as complete, delete them from the list, filter them, drag and drop them to reorder tasks on the list or toggle between light and dark mode. </p>
        </section>
      )}
    </main>
  );
};

export default Tasks;

