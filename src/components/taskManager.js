import React, { createContext } from 'react'
import TaskForm from './TaskForm'
import TaskContent from './TasksContext'

export const TaskManagerContext = createContext()

const TaskManager = ({ tasks, addTask }) => {
  return (
    <TaskManagerContext.Provider value={{ tasks }}>
      <TaskForm addTask={addTask} />
      <TaskContent />
    </TaskManagerContext.Provider>
  )
}

export default TaskManager
