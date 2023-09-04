import React, { useState } from 'react'

const TaskForm = ({ addTask }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const handleAddTask = () => {
    if (name && description) {
      const newTask = { name: name, description: description }
      addTask(newTask)
      setName('')
      setDescription('')
    }
  }

  return (
    <div>
      <div className="tw-mt-2">
        <input
          type="text"
          placeholder="Nome da Tarefa"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="tw-bg-slate-100 tw-text-black tw-border-solid tw-border-2 tw-border-gray-300 tw-p-2"
        />
        <input
          type="text"
          placeholder="Descrição da Tarefa"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="tw-bg-slate-100 tw-text-black tw-border-solid tw-border-2 tw-border-gray-300 tw-p-2 tw-ml-2"
        />
        <button
          className="tw-bg-slate-600 tw-text-white tw-p-2 tw-rounded-md tw-ml-2"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
    </div>
  )
}

export default TaskForm
