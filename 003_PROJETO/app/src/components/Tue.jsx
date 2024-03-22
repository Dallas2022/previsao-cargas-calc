
// Código elaborado por: Nelson Braga
// Cargo: Desenvolvedor Fullstack
// Data: 22/03/2024

import React, { useState, useEffect } from "react";
import { useContext } from "react";
import Contexto from "../providers/Contexto";

// Este arquivo renderiza as demais linhas dos dados de tomada de uso específico
// a partir da segunda linha do card

function Tue(props) {

    // Valores dinâmicos para interação com a coleção de dados
    const [Aparelho, setAparelho] = useState(() => {
        return ""
    })

    const [PotUnitW, setPotUnitW] = useState(() => {
        return 0
    })

    // Coleção de dados para serem enviados para calcular no contexto público
    // Ordem dos dados - Id, Aparelho, Pot. Unit. (W) e Id do Local
    const valores = [props.id, Aparelho, PotUnitW, props.idPai]

    //Utilização dos recursos do contexto público
    const publico = useContext(Contexto)

    // A coleção é atualizada cada vez que um valor for alterado
    useEffect(() => {
                
        publico.setMtzPotTotTUE(publico.mtzPotTotTUE.filter(el => el[0] !== props.id))       
        publico.setMtzPotTotTUE(mtz => [...mtz, valores])
        publico.setControleRender(!publico.controleRender)

    }, valores)
    
    
    return (
        <>
            {/* Dados de entrada fornecidos pelo usuário */}
            <div className="row align-items-center divLinhaCima pt-1 pb-2">
                <div className="col-lg-4 col-sm-12">
                    <h5>
                        <input type="text" className="dadosLocal" onChange={e => setAparelho(e.target.value)} placeholder="Aparelho" />
                    </h5>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <h5>
                        <input type="number" className="dadosLocal" onChange={e => setPotUnitW(e.target.value)} placeholder="Pot. Unit. (W)" />
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

export default Tue