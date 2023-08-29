import React from "react"

const Contador = ({onClick,number}) => {
    return(
        <button onClick={onClick}>Add Number</button>
    )
}
// <Contador onClick={AddNumber} number={number} />  {number}  para chamar no APP
export default Contador