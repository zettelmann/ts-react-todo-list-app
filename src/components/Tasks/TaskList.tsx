import React, { useContext } from 'react'
import styles from './TaskList.module.scss';
import TaskItem from './TaskItem'
import TaskClear from './TaskClear'

import { TaskContext } from '../context/task-context';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';


const TaskList = () => {
  const taskContext = useContext(TaskContext);
  let filteredTaskList = taskContext.tasks;

  if(taskContext.filteredValue === 'all') {
    filteredTaskList = taskContext.tasks;
  }
  if(taskContext.filteredValue === 'active') {
    filteredTaskList = taskContext.tasks.filter(task => !task.completed);
  }
  if(taskContext.filteredValue === 'completed') {
    filteredTaskList = taskContext.tasks.filter(task => task.completed)
  }
  
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if(!destination) return;

    const tasks = Array.from(taskContext.tasks);
    const [newOrder] = tasks.splice(source.index, 1);
    tasks.splice(destination.index, 0, newOrder)

    taskContext.setTasksDnD(tasks)
  }

  return (
    <div className={`${styles.container}`}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <ul className="tasks" {...provided.droppableProps} ref={provided.innerRef}>
              {filteredTaskList.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided, snapshot) => (
                      <TaskItem 
                        provided={provided}
                        snapshot={snapshot}
                        text={task.text}
                        completed={task.completed}
                        onRemoveTask={taskContext.removeTask.bind(null, task.id)}
                        onCompleteTask={taskContext.completeTask.bind(null, task.id)}
                      />
                    )}
                  </Draggable>
                  ))}
            </ul>
          )}
          </Droppable>
        </DragDropContext>
    <TaskClear />
  </div>
  )
}

export default TaskList

