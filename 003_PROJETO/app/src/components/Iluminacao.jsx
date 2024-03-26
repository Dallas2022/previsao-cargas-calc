
// Código elaborado por: Nelson Braga
// Cargo: Desenvolvedor Fullstack
// Data: 22/03/2024

import React, { useState, useEffect } from "react";
import { useContext } from "react";
import Contexto from "../providers/Contexto";

// Este arquivo renderiza as demais linhas dos dados de iluminação a partir
// da segunda linha do card

function Iluminacao(props) {

    // Valores dinâmicos para interação com a coleção de dados
    const [NumPontos, setNumPontos] = useState(() => {
        return 0
    })

    const [PotUnitW, setPotUnitW] = useState(() => {
        return 0
    })

    const [NumArandelas60W, setNumArandelas60W] = useState(() => {
        return 0
    })

    // Coleção de dados para serem enviados para calcular no contexto público
    // Ordem dos dados - Id, Nº de Pontos, Pot. Unit. (W), Nº de Arandelas (60W) e Id do Local
    const valores = [props.id, NumPontos, PotUnitW, NumArandelas60W, props.idPai]

    //Utilização dos recursos do contexto público
    const publico = useContext(Contexto)

    // A coleção é atualizada cada vez que um valor for alterado
    useEffect(() => {

        publico.setMtzPotTotIlum(publico.mtzPotTotIlum.filter(el => el[0] !== props.id))
        publico.setMtzPotTotIlum(mtz => [...mtz, valores])
        publico.setControleRender(!publico.controleRender)
                
    }, valores)

    
    return (
        <>
            {/* Dados de entrada fornecidos pelo usuário */}
            <div id={props.id} className="row align-items-center divLinhaCima pt-1 pb-2">
                <div className="col-lg-3 col-sm-12">
                    <h5>
                        <input type="number" className="dadosLocal" onChange={e => setNumPontos(e.target.value)} placeholder="Nº de Pontos" />
                    </h5>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <h5>
                        <input type="number" className="dadosLocal" onChange={e => setPotUnitW(e.target.value)} placeholder="Pot. Unit. , 100W" />
                    </h5>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <h5>
                        <input type="number" className="dadosLocal" onChange={e => setNumArandelas60W(e.target.value)} placeholder="Nº Arandelas, 60W" />
                    </h5>
                </div>

                {/* Botões para adicionar ou excluir mais linhas */}
                <div className="col-lg-3 col-sm-12">
                    <button type="button" onClick={() => { props.fnc_remover(props.id) }} className="removerLinha">-</button>
                    <button type="button" onClick={() => { props.fnc_inserir(props.id) }} className="adicionaIluminacao ms-3">+</button>
                </div>
            </div>
        </>
    )
}

export default Iluminacao