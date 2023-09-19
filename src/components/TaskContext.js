import React, { createContext, useState } from 'react'

const ContextTask = createContext({})

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])

  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const removeTask = (task) => {
    console.log(task)
  }

  return (
    <ContextTask.Provider value={{ tasks, setTasks, addTask, removeTask }}>
      {children}
    </ContextTask.Provider>
  )
}

export { ContextTask, TaskProvider }
