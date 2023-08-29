import React from 'react'

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