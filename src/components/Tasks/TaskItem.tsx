import React, { useContext } from 'react';
import styles from './TaskItem.module.scss';
import { ThemeContext } from '../context/theme-context';

const TaskItem: React.FC<{ 
  text: string; 
  completed: boolean;
  onRemoveTask: () => void;
  onCompleteTask: () => void;
}> = props => {
  const themeContext = useContext(ThemeContext)

  console.log(props.completed);

  return (
    <li 
      className={styles[`${themeContext.theme}`]}
      onClick={props.onCompleteTask}
    >
      <div className={props.completed ? `${styles.completed}` : ''}>
        <div />
      </div>
      <h2 className={props.completed ? `${styles.completed}` : ''}>{props.text}</h2>
      <button onClick={props.onRemoveTask} />
    </li>
  )
}

export default TaskItem;


 