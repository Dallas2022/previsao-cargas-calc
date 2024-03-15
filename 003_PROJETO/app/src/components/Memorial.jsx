import React, {useState} from "react";
import {v4 as uuidLocal} from 'uuid'

import Local from "./Local";
import Resultados from "./Resultados";

import '../estilos/Memorial.css'


function Memorial() {
     
    const [mtz, setMtz] = useState(() => {
        return []
    })

    function adicionarLocal() {
        setMtz(mtz => [...mtz, uuidLocal()])
    }

    function removerLocal(id) {
        let mtzTemp = mtz.filter(el => el !== id )
        setMtz(mtzTemp)
    }

    let tamanhoMargem = "0%"
    mtz.length > 0 ? tamanhoMargem = "0%" : tamanhoMargem = "25%"

    return (
        <div className="container-fluid" style={{marginBottom: tamanhoMargem}} >
            {/* Cabeçalho do Memorial de Cálculo */}
            <div className="row p-4">
                <div className="col-12">
                    <h3>
                        <input id="tituloLocal" type="text" placeholder="Digite aqui o seu título - Ex: Cálculo do Pavimento Térreo"></input>
                    </h3>
                    <h4>
                        <input id="descConsumidor" type="text" placeholder="Informe o consumidor - Ex: TIPO C / Atendido a 4 fios / 3F e 1N / Tensão 127 / 220V"></input>
                    </h4>

                    {/* Locais Inseridos de Forma Dinâmica*/}
                    {mtz.map(el => {return <Local key={el} id={el} fnc_remover={removerLocal}></Local>})}
                    

                    {/* Botão para Adicionar um Novo Local */}
                    <label className="lblAdicionarLocal">Adicionar Local</label>
                    <button type="button" onClick={() => { adicionarLocal() }} className="adicionalLocal">+</button>
                </div>
            </div>

            {/* Tabela de Resultados - Mostra se Existir Pelo Menos uma Tabela */}            
            { mtz.length > 0 ? <Resultados /> : null }             

        </div>
    )
}

export default Memorial