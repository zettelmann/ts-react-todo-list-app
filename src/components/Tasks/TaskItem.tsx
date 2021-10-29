import React, { useContext } from 'react';
import styles from './TaskItem.module.scss';
import { ThemeContext } from '../context/theme-context';

interface TaskItemObj {
  text: string; 
  completed: boolean;
  onRemoveTask: () => void;
  onCompleteTask: () => void;
}

const TaskItem: React.FC<TaskItemObj> = props => {
  const themeContext = useContext(ThemeContext)

  return (
    <li 
      className={styles[`${themeContext.theme}`]}
      onClick={props.onCompleteTask}
    >
      <div className={props.completed ? `${styles.completed}` : ''} />
      <h2 className={props.completed ? `${styles.completed}` : ''}>{props.text}</h2>
      <button onClick={props.onRemoveTask} />
    </li>
  )
}

export default TaskItem;


 