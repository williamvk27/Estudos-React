import React from 'react'

const Task = ({ name, description }) => {
  return (
    <div className="tw-border-[1px] tw-border-yellow-500 tw-bg-slate-500 tw-mb-1 tw-mt-2 tw-text-white">
      <h3 className="tw-font-bold">Tarefa : {name}</h3>
      <p>Descrição : {description}</p>
    </div>
  )
}

export default Task
