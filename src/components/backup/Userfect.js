
import React, { useState, useEffect } from 'react'

const Botoes = () =>{

	const [resourceType, setResourceType] = useState('posts')

	useEffect(()=>{
		console.log('resoucer type changed')
	},[resourceType]) 

	const changeResourceType = (resourceType) =>{
		setResourceType(resourceType)
	}

	return(
		<div>
			<h1 className="tw-font-extrabold tw-text-lg tw-text-red-800">{resourceType}</h1>

			<button className="tw-mt-2 tw-px-3 tw-py-1 tw-text-white tw-font-sans tw-bg-lime-800 hover:tw-bg-allports-600 tw-border-lime-800 focus:tw-outline-none  focus:tw-border-2 focus:tw-border-lime-800  active:tw-bg-blue-700" onClick={()=> changeResourceType('post')}>Post
			</button>

			<button  className="tw-mt-2 tw-ml-2 tw-px-3 tw-py-1 tw-text-white tw-font-sans tw-bg-red-600 hover:tw-bg-allports-600 tw-border-lime-800 focus:tw-outline-none" onClick={()=> changeResourceType('comments')}>Comments</button>

			<button  className="tw-mt-2 tw-ml-2 tw-px-3 tw-py-1 tw-text-white tw-font-sans tw-bg-indigo-950 hover:tw-bg-allports-600 tw-border-lime-800 focus:tw-outline-none  focus:tw-border-2 focus:tw-border-lime-800  active:tw-bg-blue-700" onClick={()=> changeResourceType('todos')}>Todos</button>
		</div>
	)

}

export default Botoes

