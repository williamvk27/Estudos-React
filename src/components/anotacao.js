import React from 'react'


const Anotacao = ({nome,email}) =>{
    return (
        <div>
            <div className='tw-border-2 tw-border-slate-950 tw-bg-slate-400 tw-mt-2'>
                <h2 className='tw-text-amber-300'>{nome}</h2>
            </div>

            <div className='tw-border-2 tw-border-slate-950 tw-bg-slate-400 tw-mt-2'>
                <p className='tw-text-amber-300'>{email}</p>
            </div>
        </div>
      )
    
}

export default Anotacao