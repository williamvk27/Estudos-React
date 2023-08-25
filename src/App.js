import React from 'react';
import TaskMennager from './components/taskMennager'; // importando TASKMENNEGER para utilização no APP
import Task from './components/task'; // importando TASK para utilização no APP


function AppTask() {
  
 //Definindo um array de objetos representando tarefas, cada objeto contém nome e descrição
  const tarefas = [
    {
     nome: 'componente com children',
    descricao: 'criar componente PAI que recebe um Children e imprime suas propriedades'
    },
    {
      nome: 'HOOK USESTATE',
      descricao: 'Aprender utilizar o hook useState'
    },
    {
     nome: 'Requisição API',
     descricao: 'Concluir uma requisição a uma API e mostrar os dados na tela'
    }
  ]
 return (
   <div>

     <TaskMennager> {/* utilizando o componente TASKMENNAGER */} 
       {/* /* Usando o método map para percorrer o array de tarefas e renderizar o componente Task para cada tarefa */}
      {/* por paramentro passamos tarefa que irá receber as propiedades de TAREFAS , segundo parametro passando o INDEX, que irá receber o posiciomento da TAREFA que vem do ARRAY TAREFAS  */}

      {tarefas.map((tarefa, index) => ( // utilizando o metodo ARRAY para pecorrer o OBJETO tarefas, que é um ARRAY de OBJETOS
      <Task key={index} nome={tarefa.nome} descricao={tarefa.descricao} />
       // ao imprimir um ARRAY no React temos que setar um KEY para ele utilizamos o metodo key={ recebendo seu index(posicionamento no array )}. utilizando o componente TASK utilizando os parametros nome e pegando o valor de nome pelo metodo de '.' acessando tarefa.(entrei em tarefa) dentro de tarefa.nome, peguei nome na descricao msm paso a paso 
      ))}
      </TaskMennager> {/* utilizando o componente TASKMENNAGER  (fechamento do componenete)*/}  
  </div>
); 
}

export default AppTask