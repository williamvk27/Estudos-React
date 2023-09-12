import React, { useState } from 'react'
import TaskManager from './components/TaskManager'
import TaskPage from './components/TaskPage'
import TaskContent from './components/TasksContext'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  return (
    <div>
      <TaskPage>
        <TaskManager tasks={tasks} addTask={addTask}>
          <TaskContent />
        </TaskManager>
      </TaskPage>
    </div>
  )
}

export default App
