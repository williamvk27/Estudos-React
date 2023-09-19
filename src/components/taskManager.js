import React, { useContext } from 'react'
import Tasks from './Tasks'
import TaskForm from './TaskForm'
import { ContextTask } from './TaskContext'

const TaskManager = () => {
  const { tasks, addTask } = useContext(ContextTask)

  return (
    <section>
      <TaskForm addTask={addTask} />
      <Tasks tasks={tasks} />
    </section>
  )
}

export default TaskManager
