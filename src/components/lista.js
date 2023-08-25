import React from "react";
/* 
criado o component ListaNomes que recebe por promps Children
no return, ele retorna
lista nao ordenada <ul> 
usamos o metodo de manipular array map! 
mapeamos o children para cada nome no array childre, retornamos name e no segundo parametro pegamos o index posicionamento
    retornando do mapa para cada name um <li> com a variavel names que tem o valor  do nome que vem do children
usamos o metodo key e passamos e valor de index

*/
const ListaNomes = ({children}) => {

    return (
        <ul>
            {children.map((names,index)=>{
            return(
            <li className="tw-text-blue-500" key={index}>{names}</li>
            )})}
        </ul>
    )

}

export default ListaNomes