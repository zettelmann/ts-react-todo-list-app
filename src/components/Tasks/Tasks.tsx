import React from 'react'
import styles from './Tasks.module.scss';
import TaskFilter from './TaskFilter'
import TaskInput from './TaskInput'
import TaskList from './TaskList'


const Tasks = () => {
  return (
    <main className={styles.tasks}>
      <TaskInput />
      <TaskList />
      <TaskFilter />
      <p>Drag and drop to reorder list</p>
    </main>
  )
}

export default Tasks;
 