import React, { useState } from 'react'
import Formulario from './Formulario'
import Anotacao from './Anotacao'
import Botoes from './Userfect'

const Exibir = () => {
  const [anotacoes, setAnotacoes] = useState([])

  const handleEnviarAnotacao = (novaAnotacoes) => {
    setAnotacoes([...anotacoes, novaAnotacoes])
  }

  return (
    <div>
      <Formulario onSubmit={handleEnviarAnotacao} />
      {anotacoes.map((anotacao, index) => (
        <Anotacao key={index} nome={anotacao.nome} email={anotacao.email} />
      ))}
      <Botoes />
    </div>
  )
}

export default Exibir
