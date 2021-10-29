import React, { useContext } from 'react';
import styles from './TaskFilter.module.scss';
import { ThemeContext } from '../context/theme-context';

const TaskFilter = () => {
  const themeContext = useContext(ThemeContext)
  return (
    <section className={styles[`${themeContext.theme}`]}>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </section>
  )
}

export default TaskFilter
