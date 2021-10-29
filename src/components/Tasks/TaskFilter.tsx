import React, { useContext } from 'react';
import styles from './TaskFilter.module.scss';
import { ThemeContext } from '../context/theme-context';
import { TaskContext } from '../context/task-context';

const TaskFilter = () => {
  const themeContext = useContext(ThemeContext);
  const taskContext = useContext(TaskContext);

  const setFilterHandler = (e: React.MouseEvent<HTMLButtonElement>) => {

    taskContext.filterTasks(e.currentTarget.value)
  }

  return (
    <section className={styles[`${themeContext.theme}`]}>
      <div>
        <button value="all" onClick={setFilterHandler}>All</button>
        <button value="active" onClick={setFilterHandler}>Active</button>
        <button value="completed" onClick={setFilterHandler}>Completed</button>
      </div>
    </section>
  )
}

export default TaskFilter

