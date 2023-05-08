import React from 'react'
import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'

export function Garagem({ nome, carro, setNome,setAutomovel, carro1, carro2}) {
  function mudaNome(){
    if(nome === "Labenu"){
      setNome("Faruqi")
    }else{
      setNome("Labenu")
    }
  }
  function mudaCarro(novoCarro){
    setAutomovel(novoCarro)
  }
  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={mudaNome}>Muda nome</Botao>
      <Botao onClick={() => mudaCarro(carro1)}>Muda para carro 1</Botao>
      <Botao onClick={() => mudaCarro(carro2)}>Muda para carro 2</Botao>
      <Estacionamento>
        <Carro
          modelo= {carro.modelo}
          cor= {carro.cor}
          ano= {carro.ano}
          adicionadoPor= {carro.adicionadoPor}
          flex = {carro.flex}
        />
      </Estacionamento>
    </GaragemContainer>
  )
}
