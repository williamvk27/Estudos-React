import React, { useState } from 'react'
import TaskManager from './components/TaskManager'
import Task from './components/Task'
import Botao from './components/backup/Botao'
function App() {
  const [tarefas, setTarefas] = useState([])
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')

  const adicionarTarefa = () => {
    if (nome && descricao) {
      const novaTarefa = { nome: nome, descricao: descricao }
      setTarefas([...tarefas, novaTarefa])
      setNome('')
      setDescricao('')
    }
  }

  return (
    <div className="tw-bg-slate-300">
      <TaskManager>
        {tarefas.map((tarefa, index) => (
          <Task key={index} nome={tarefa.nome} descricao={tarefa.descricao} />
        ))}

        <div>
          <input
            className="tw-text-red-900"
            type="text"
            placeholder="Nome da Tarefa"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="tw-border-yellow-300 tw-mt-2">
          <input
            type="text"
            placeholder="Descrição da Tarefa"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>

        <div className="tw-mt-2">
          <span className="tw-border-2 tw-bg-gray-500">
            <Botao onClick={adicionarTarefa} name={'Add tarefa'} />
          </span>
        </div>
      </TaskManager>
    </div>
  )
}

export default App
