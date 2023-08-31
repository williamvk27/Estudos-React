import React, { useState } from 'react'


const Formulario = ({onSubmit}) =>{
	const [nome,setNome] = useState('')
	const [email,setEmail] = useState('')

	const handleSubmit = (e) =>{
		e.preventDefault()
		onSubmit({nome,email})
		setNome('')
		setEmail('')
	}

	return(
		<div className="tw-bg-slate-500">
			<input className="tw-mt-2" type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="digite seu nome" />
			<br/>
			<input className="tw-mt-2" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="digite email"/>
			<br/>
			<button className="tw-mt-2 tw-px-3 tw-py-1 tw-text-white tw-font-sans tw-bg-lime-800 hover:tw-bg-allports-600 tw-border-lime-800 focus:tw-outline-none  focus:tw-border-2 focus:tw-border-lime-800  active:tw-bg-blue-700" onClick={handleSubmit}>Enviar</button>
		</div>
	)
}

export default Formulario