import React, { useContext } from 'react'
import styles from './TaskList.module.scss';
import TaskItem from './TaskItem'
import TaskClear from './TaskClear'

import { TaskContext } from '../context/task-context';

const TaskList = () => {
  const taskContext = useContext(TaskContext);
  let filteredTaskList = taskContext.tasks;

  if(taskContext.filteredValue === 'all') {
    filteredTaskList = taskContext.tasks;
  }
  if(taskContext.filteredValue === 'active') {
    filteredTaskList = taskContext.tasks.filter(task => !task.completed);
  }
  if(taskContext.filteredValue === 'completed') {
    filteredTaskList = taskContext.tasks.filter(task => task.completed)
  }
  
console.log(filteredTaskList);

  return (
    <div className={styles.container}>
    <ul>{filteredTaskList.map(task => (
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

