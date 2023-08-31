import React from 'react'

const Form = ({children,onChange,name,password}) => {
	return(
		<div>
			<label htmlFor="Digite seu nome">Nome:</label>
			<input id="name" onChange={onChange} value={name}/>
			<label htmlFor="password">Senha:</label>
			<input id="password" type="password" value={password} onChange={onChange} />
			{children}
		</div>
	)
}

export default Form
