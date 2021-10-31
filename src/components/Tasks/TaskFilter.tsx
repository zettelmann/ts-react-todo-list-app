import React, { useContext } from 'react';
import styles from './TaskFilter.module.scss';
import { ThemeContext } from '../context/theme-context';
import { TaskContext } from '../context/task-context';

const TaskFilter: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const { filterTasks, filteredValue } = useContext(TaskContext);

  const setFilterHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    filterTasks(e.currentTarget.value)
  }

  return (
    <section className={styles[`${themeContext.theme}`]}>
      <div>
        <button 
          id="all" aria-label="all"
          value="all" 
          onClick={setFilterHandler}
          className={filteredValue === 'all' ? `${styles.selected}` : ''}
        >All</button>
        <button 
          id="active" aria-label="active"
          value="active"
          onClick={setFilterHandler}
          className={filteredValue === 'active' ? `${styles.selected}` : ''}
        >Active</button>
        <button 
          id="completed" aria-label="completed"
          value="completed" 
          onClick={setFilterHandler}
          className={filteredValue === 'completed' ? `${styles.selected}` : ''}
        >Completed</button>
      </div>
    </section>
  )
}

export default TaskFilter

