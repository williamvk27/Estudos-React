import React from 'react'

const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <div
          key={index}
          className="tw-border-[1px] tw-border-yellow-500 tw-bg-white tw-mb-1 tw-mt-2 tw-text-black"
        >
          <h3 className="tw-font-bold">Tarefa : {task.name}</h3>
          <p>Descrição : {task.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Tasks
