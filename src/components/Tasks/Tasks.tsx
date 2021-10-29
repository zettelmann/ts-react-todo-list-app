import React from 'react'
import styles from './Tasks.module.scss';
import TaskFilter from './TaskFilter'
import TaskInput from './TaskInput'
import TaskList from './TaskList'
import TaskContextProvider from '../context/task-context';

const Tasks = () => {
  return (
    <main className={styles.tasks}>
      <TaskContextProvider>
        <TaskInput />
        <TaskList />
        <TaskFilter />
      </TaskContextProvider>
      <p>Drag and drop to reorder list</p>
    </main>
  )
}

export default Tasks;
 