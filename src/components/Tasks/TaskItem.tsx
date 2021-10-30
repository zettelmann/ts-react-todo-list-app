import React, { useContext } from 'react';
import styles from './TaskItem.module.scss';
import { ThemeContext } from '../context/theme-context';

interface TaskItemObj {
  provided: any;
  snapshot: any;
  text: string; 
  completed: boolean;
  onRemoveTask: () => void;
  onCompleteTask: () => void;
}

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  background: isDragging ? 'var(--bg-active)' : '',
  borderRadius: isDragging ? '0px' : 'var(--radius)',
  transform: isDragging ? '0px' : '',
  boxShadow: isDragging ? 'var(--shaddow)' : '',

  ...draggableStyle
})


const TaskItem: React.FC<TaskItemObj> = props => {
  const themeContext = useContext(ThemeContext)

  return (
    <li 
      ref={props.provided.innerRef}
      {...props.provided.draggableProps}
      {...props.provided.dragHandleProps}
      style={getItemStyle(props.snapshot.isDragging, props.provided.draggableProps.style)}
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



 