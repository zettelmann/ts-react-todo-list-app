import React, { useContext } from 'react'
import styles from './TaskList.module.scss';
import TaskItem from './TaskItem'
import TaskClear from './TaskClear'

import { TaskContext } from '../context/task-context';

const DUMMY = [
 'Complete online JavaScript course',
 'Jog around the park 3x',
 '10 minutes meditation',
 'Read for 1 hour',
 'Pick up groceries',
 'Todo App on Frontend Mentor'
]

const TaskList = () => {
  const taskContext = useContext(TaskContext);
  
  return (
    <div className={styles.container}>
    <ul>{taskContext.tasks.map(task => (
          <TaskItem 
            key={task.id}
            text={task.text}
            completed={task.completed}
            onRemoveTask={taskContext.removeTask.bind(null, task.id)}
            onCompleteTask={taskContext.completeTask.bind(null, task.id)}
          />
        ))}
    </ul>
    <TaskClear />

  </div>
  )
}

export default TaskList

