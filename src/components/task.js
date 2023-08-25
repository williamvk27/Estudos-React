import React from "react"

// propiedades  nome  descricao 
const Task = ({ nome, descricao }) => { // criado o componente TASK
    return (
        <div className="tw-border-[1px] tw-border-yellow-500 tw-bg-slate-500 tw-mb-1">
            <h3>Tarefa : {nome}</h3> {/* retornando um TITTULO TAREFA e a props NOME */}
            <p>Descrição : {descricao}</p> {/* retornando um TITTULO TAREFA e a props DESCRIÇÃO */}
            <br></br> {/* Quebrando linha */}
        </div>
    )
}

export default Task // exportando TASK
