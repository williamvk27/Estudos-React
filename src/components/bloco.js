import React from "react";
/* 
criado o componente Bloco, que recebe por props children = filho!
no retunr ele retorna  o filho = children
*/

const Bloco = ({children}) =>{ 

    return <div>{children}</div>

}

export default Bloco