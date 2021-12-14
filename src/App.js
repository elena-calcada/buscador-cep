import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import './style.css';

import api from "./services/api";

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  const onchange = (e) => {
    setInput(e.target.value)
  }

  const handleSearch = async () => {
    // 01001000/json/
    if(input === ''){
      alert("Informe um CEP!")
    }
    try{
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput('')
    }catch{
      if(input !== ''){
        alert("Ops... Erro ao buscar o CEP indicado...")
        setInput('')
      }
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      
      <div className="containerInput" >
        <input 
        type="text" 
        placeholder="Digite o CEP..."
        value={input}
        onChange={onchange}
        />
        <button className="buttonSearch"  onClick={handleSearch}>
          <FiSearch size={25} color="#fff"/>
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2> CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>
      )}
      

    </div>
  );
}

export default App;
