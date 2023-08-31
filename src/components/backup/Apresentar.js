import React from 'react'

function Apresentar( props,{ children }) {
  
	return (
		<section>
      
			{children.map((item)=>{
				return item
			})}
      
			<p>
        Estou empolgado em compartilhar um pouco mais sobre mim. Minha jornada
        profissional tem sido incrivelmente gratificante, e estou ansioso para
        trocar experiências e conhecimentos com outras pessoas.
			</p>

			<p>
        Além da minha profissão, tenho interesse em Jogos e Animes, e estou
        sempre em busca de aprender coisas novas. Adoro desafios e estou aberto
        a novas oportunidades e conexões. Mal posso esperar para conhecer mais
        pessoas e explorar as possibilidades que o futuro reserva.
			</p>
      
		</section>
	)}

export default Apresentar
