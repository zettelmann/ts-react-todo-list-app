import React, { useState } from "react";
import Task from '../model/task-model';

type TaskObj = {
  tasks: Task[];
  filteredValue: string,
  addTask: (taskInput: string) => void;
  removeTask: (id: string) => void;
  completeTask: (id: string) => void;
  clearTasks: () => void;
  filterTasks: (filterValue: string) => void

};

export const TaskContext = React.createContext<TaskObj>({
  tasks: [],
  filteredValue: 'all',
  addTask: () => {},
  removeTask: () => {},
  completeTask: () => {},
  clearTasks: () => {},
  filterTasks: () => {}

});

const TaskContextProvider: React.FC = props => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [filter, setFilter] = useState<string>('all');


  const addTaskHandler = (taskInput: string) => {
    const newTask = new Task(taskInput);

    setTaskList(prevTaskList => [newTask, ...prevTaskList]);
  }

  const removeTaskHandler = (taskId: string) => {
    setTaskList(prevTaskList => prevTaskList.filter(task => task.id !== taskId))
  }

  const completeTaskHandler = (taskId: string) => {
    setTaskList(prevTaskList => prevTaskList.map(task => {
      if(task.id === taskId) return {...task, completed: !task.completed}
      return task;
    }
    ))
  }

  const clearTaskHandler = () => {
    setTaskList([]);
  }

  const setFilterHandler = (filteredValue: string) => {
    setFilter(filteredValue)

/* 
    if(filterValue === "completed") {
      setTaskList(prevTaskList => prevTaskList.filter(task => task.completed))
    }
    if(filterValue === "active") {
      setTaskList(prevTaskList => prevTaskList.filter(task => !task.completed))
    }
     */
  }
  console.log(filter);


  const contextValue = {
    tasks: taskList,
    filteredValue: filter,
    addTask: addTaskHandler,
    removeTask: removeTaskHandler,
    completeTask: completeTaskHandler,
    clearTasks: clearTaskHandler,
    filterTasks: setFilterHandler
  }

  return (
    <TaskContext.Provider value={contextValue}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider;





