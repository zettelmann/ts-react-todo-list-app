import React from 'react';
import styles from './TaskItem.module.scss';

const TaskItem: React.FC<{ text: string }> = props => {
  return (
    <li className={styles.item}>
      <div />
      <h2>{props.text}</h2>
      <button />
    </li>
  )
}

export default TaskItem;


 