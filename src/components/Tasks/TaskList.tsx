import React from 'react'
import styles from './TaskList.module.scss';
import TaskItem from './TaskItem'
import TaskClear from './TaskClear'


const DUMMY = [
 'Complete online JavaScript course',
 'Jog around the park 3x',
 '10 minutes meditation',
 'Read for 1 hour',
 'Pick up groceries',
 'Todo App on Frontend Mentor'
]

const TaskList = () => {
  
  return (
    <div className={styles.container}>
    <ul>{DUMMY.map(item => (
          <TaskItem 
            key={Math.random().toString()}
            text={item}
          />
        ))}
    </ul>
    <TaskClear />

  </div>
  )
}

export default TaskList
