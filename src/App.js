import React from 'react'
import TaskPage from './components/TaskPage'
import { TaskProvider } from './components/TaskContext'
import TaskSearch from './components/TaskSearch'
import TaskManager from './components/TaskManager'

function App() {
  return (
    <TaskPage>
      <TaskProvider>
        <TaskManager />
        <TaskSearch />
      </TaskProvider>
    </TaskPage>
  )
}
export default App
