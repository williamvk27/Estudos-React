import React, { useState } from 'react'
import TaskManager from './components/TaskManager'
import TaskForm from './components/TaskForm'
import Task from './components/Task'
import TaskPage from './components/TaskPage'

function App() {
  const [task, setTask] = useState([])
  const addTask = (newTask) => {
    setTask([...task, newTask])
  }

  return (
    <div>
      <TaskPage>
        <TaskManager>
          <TaskForm addTask={addTask} />
          {task.map((task, index) => (
            <Task key={index} name={task.name} description={task.description} />
          ))}
        </TaskManager>
      </TaskPage>
    </div>
  )
}

export default App
