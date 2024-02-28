import React, { createElement } from "react";
import Local from "./Local";
import Resultados from "./Resultados";

import '../estilos/Memorial.css'

function Memorial() {

    let mtz = []

    function adicionarLocal() {

        mtz.push(<Local />)
        mtz.push(<Local />)
        mtz.push(<Local />)

        return mtz

    }

    return (
        <div id="corpo" className="container-fluid">
            {/* Cabeçalho do Memorial de Cálculo */}
            <div className="row p-4">
                <div className="col-12">
                    <h3>
                        <input id="tituloLocal" type="text" placeholder="Digite aqui o seu título - Ex: Cálculo do Pavimento Térreo"></input>
                    </h3>
                    <h4>
                        <input id="descConsumidor" type="text" placeholder="Informe o consumidor - Ex: TIPO C / Atendido a 4 fios / 3F e 1N / Tensão 127 / 220V"></input>
                    </h4>


                    {adicionarLocal()}

                    {/* Botão para Adicionar um Novo Local */}
                    <label className="lblAdicionarLocal">Adicionar Local</label>
                    <button type="button" onClick={() => { adicionarLocal() }} className="adicionalLocal">+</button>


                    {/* Tabela de Resultados */}
                    <Resultados />

                </div>
            </div>
        </div>
    )
}

export default Memorial