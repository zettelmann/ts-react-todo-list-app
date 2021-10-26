import React from 'react';
import styles from './TaskFilter.module.scss';

const TaskFilter = () => {
  return (
    <div className={styles.container}>
      <div className="card">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  )
}

export default TaskFilter
