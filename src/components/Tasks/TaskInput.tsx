import React, { useRef, useContext } from 'react';
import styles from './TaskInput.module.scss';
import { ThemeContext } from '../context/theme-context';
import TaskContextProvider, { TaskContext } from '../context/task-context';

const TaskInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const themeContext = useContext(ThemeContext);
  const taskContext = useContext(TaskContext)

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const inputTask = inputRef.current!.value;

    if(inputTask.trim().length === 0) return;

    taskContext.addTask(inputTask);
  }

  return (
    <form 
      className={styles[`${themeContext.theme}`]}
      onSubmit={submitHandler}
   >
      <input 
        type="text" 
        ref={inputRef}
      />
    </form>

  )
}

export default TaskInput
