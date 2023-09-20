import React, { useState, useRef } from 'react'
import axios from 'axios'

function ApiSearchPokemon() {
  const [searchTerm, setSearchTerm] = useState('')
  const [erroPokemon, setErroPokemon] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const inputRef = useRef()

  const handleSearch = async () => {
    try {
      // Construa a URL da API com base no termo de pesquisa
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`

      const response = await axios.get(apiUrl)

      // Verifique se a resposta da API contém dados
      if (response.data) {
        setSearchResults([response.data])
        setErroPokemon('') // Limpe a mensagem de erro se a pesquisa for bem-sucedida
      } else {
        setSearchResults([])
        setErroPokemon('') // Limpe a mensagem de erro se a pesquisa for bem-sucedida
      }
    } catch (error) {
      setErroPokemon(`Erro Pokemon não encontrado`)
    }
    inputRef.current.focus()
  }

  return (
    <div className="tw-bg-blue-950 tw-p-4">
      <h1 className="tw-text-4xl tw-font-bold tw-text-yellow-500 tw-mb-4">
        Exemplo de Pesquisa de Pokémon
      </h1>
      <input
        ref={inputRef}
        className="tw-bg-white tw-text-gray-800 tw-rounded-md tw-p-2 tw-mb-2 tw-w-[210px]"
        type="text"
        placeholder="Digite o nome do Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="tw-bg-red-500 tw-text-white tw-py-2 tw-ml-2 tw-px-4 tw-rounded-md"
        onClick={handleSearch}
      >
        Pesquisar
      </button>
      <ul>
        {searchResults.map((pokemon, index) => (
          <li className="tw-text-yellow-400" key={index}>
            {pokemon.name}
          </li>
        ))}
      </ul>
      {erroPokemon && (
        <h1 className="tw-text-white tw-font-extrabold tw-mt-4">
          {erroPokemon}
        </h1>
      )}
    </div>
  )
}

export default ApiSearchPokemon
