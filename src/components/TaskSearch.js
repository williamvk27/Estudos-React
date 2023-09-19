import React, { useContext, useState } from 'react'
import { ContextTask } from './TaskContext'

const TaskSearch = () => {
  const { tasks, setTasks } = useContext(ContextTask)
  const [valueInput, setValueInput] = useState('')
  const [result, setResult] = useState('')

  const searchResult = () => {
    if (valueInput.trim() === '') {
      return
    }

    const taskFound = tasks.find((task) => task.name.includes(valueInput))

    if (taskFound) {
      setResult(taskFound.name)
    } else {
      setResult('Tarefa não encontrada')
    }
  }

  const removeTask = (taskNameRemove) => {
    const updatedTasks = tasks.filter((task) => task.name !== taskNameRemove)
    setTasks(updatedTasks)
    setResult('')
  }

  return (
    <div>
      <input
        className="tw-bg-slate-100 tw-text-black tw-border-solid tw-border-2 tw-border-gray-300 tw-p-2 tw-mt-3"
        type="text"
        placeholder="Digite uma tarefa"
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
      />
      <button
        className="tw-bg-slate-600 tw-text-white tw-p-2 tw-rounded-md tw-ml-2"
        onClick={searchResult}
      >
        Procurar
      </button>
      <div>Resultado: {result}</div>
      {result && result !== 'Tarefa não encontrada' && (
        <div>
          <button
            className="tw-bg-slate-600 tw-text-white tw-p-2 tw-rounded-md"
            onClick={() => removeTask(result)}
          >
            Remover Tarefa
          </button>
        </div>
      )}
    </div>
  )
}

export default TaskSearch
