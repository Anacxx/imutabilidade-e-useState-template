import React from 'react'
import { Garagem } from './Componentes/Garagem'
import { GlobalStyled } from './GlobalStyled'
import { useState } from 'react'
export default function App() {
  const [nome, setNome] = useState("Labenu")
  
  const [automovel, setAutomovel] = useState({
    modelo: "Fusca",
    cor: "Preto",
    ano: 1970,
    flex: true,
    adicionadoPor: "Ana"
  })
  const carro1 = {
    modelo: "celta",
    cor: "Branco",
    ano: 1990,
    flex: true,
    adicionadoPor: "Ana C"
  }
  const carro2 = {
    modelo: "onibus",
    cor: "rosa",
    ano: 2000,
    flex: true,
    adicionadoPor: "Anaa C"
  }
  return (
    <div className="App">
      <GlobalStyled />

      <Garagem 
      nome={nome} 
      carro={automovel} 
      setNome={setNome}
      setAutomovel = {setAutomovel}
      carro1 = {carro1}
      carro2 = {carro2}
      />
    </div>
  )
}
