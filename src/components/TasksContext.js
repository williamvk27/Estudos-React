import React, { useContext } from 'react'
import { TaskManagerContext } from './TaskManager'

const TaskContent = () => {
  const { tasks } = useContext(TaskManagerContext)

  return (
    <div className="tw-bg-slate-300">
      {tasks.map((task, index) => (
        <div
          className="tw-border-[2px] tw-border-yellow-500 tw-bg-slate-800 tw-mb-1 tw-mt-2 tw-text-white"
          key={index}
        >
          <p>Nome: {task.name}</p>
          <p>Descrição: {task.description}</p>
        </div>
      ))}
    </div>
  )
}

export default TaskContent
