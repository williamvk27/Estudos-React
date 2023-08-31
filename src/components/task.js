import React from 'react'

const Task = ({ nome, descricao }) => {
  return (
    <div className="tw-border-[1px] tw-border-yellow-500 tw-bg-slate-500 tw-mb-1">
      <h3>Tarefa : {nome}</h3>
      <p>Descrição : {descricao}</p>
    </div>
  )
}

export default Task
