import React from 'react'

const TaskPage = ({ children }) => {
  return (
    <div>
      <header className="tw-bg-blue-500 tw-text-white tw-py-4 tw-text-center">
        <h1 className="tw-text-2xl">Pagina de Tarefas</h1>
      </header>
      <section>{children}</section>
    </div>
  )
}

export default TaskPage
