import React, { useState } from 'react'
import axios from 'axios'

const ApiSearchBank = () => {
  const [searchBank, setSearchBank] = useState('')
  const [errorBank, setErrorBank] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = async () => {
    try {
      if (searchBank.trim() === '') {
        setErrorBank('Por favor, preencha o campo para pesquisar o banco')
        setSearchResults([])
        return
      }

      const bankUrl = `https://brasilapi.com.br/api/banks/v1/${searchBank}`
      const response = await axios.get(bankUrl)

      if (response.data) {
        setSearchResults([response.data])
        setErrorBank('')
      } else {
        setSearchResults([])
        setErrorBank('Nenhum banco encontrado')
      }
    } catch (error) {
      setErrorBank('Nenhum banco encontrado')
    }
  }

  return (
    <div>
      <header className="tw-bg-black tw-text-center tw-text-yellow-400">
        <h1>Pesquisa de Bancos na API</h1>
      </header>
      <section>
        <input
          className="tw-bg-slate-100 tw-text-black tw-border-solid tw-border-2 tw-border-gray-300 tw-p-2"
          type="text"
          placeholder="Digite o nome do banco"
          value={searchBank}
          onChange={(e) => setSearchBank(e.target.value)}
        />
        <button
          className="tw-bg-slate-600 tw-text-white tw-p-2 tw-rounded-md tw-ml-2"
          onClick={handleSearch}
        >
          Pesquisar
        </button>
        <ul>
          {searchResults.map((bank, index) => (
            <li key={index}>{bank.fullName}</li>
          ))}
        </ul>
        {errorBank && <p>{errorBank}</p>}
      </section>
    </div>
  )
}

export default ApiSearchBank
