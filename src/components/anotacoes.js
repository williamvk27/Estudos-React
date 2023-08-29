import React from 'react'

const Anotacoes = ({lembrete, anotacao}) =>{

    return(
        <>
            <section  className="tw-flex"> <h1>Lembrete : </h1>  <p>{lembrete}</p> </section>
            <section><h3>Anotacao:</h3> <p>{anotacao}</p></section>
            <br></br>
        </>
    )
    
}

export default Anotacoes