
// Código elaborado por: Nelson Braga
// Cargo: Desenvolvedor Fullstack
// Data: 22/03/2024

import React, { useState, useEffect } from "react";
import { useContext } from "react";
import Contexto from "../providers/Contexto";

// Este arquivo renderiza a primeira linha dos dados das tomadas de uso específico

function TueLinhaHeader(props) {

    // Valores dinâmicos para interação com a coleção de dados
    const [Aparelho, setAparelho] = useState(() => {
        return ""
    })

    const [PotUnitW, setPotUnitW] = useState(() => {
        return 0
    })

    // Coleção de dados para serem enviados para calcular no contexto público
    // Ordem dos dados - Id, Aparelho, Pot. Unit. (W) e Id do Local
    const valores = [props.idLocal, Aparelho, PotUnitW, props.idLocal]

    //Utilização dos recursos do contexto público
    const publico = useContext(Contexto)

    // A coleção é atualizada cada vez que um valor for alterado
    useEffect(() => {
                
        publico.setMtzPotTotTUE(publico.mtzPotTotTUE.filter(el => el[0] !== props.idLocal))       
        publico.setMtzPotTotTUE(mtz => [...mtz, valores])
        publico.setControleRender(!publico.controleRender)

    }, valores)


    return (
        <>
            {/* Primeira linha das TUE's - Tomadas de uso específico */}
            <div className="row align-items-center divLinhaCima pt-1 pb-2">
                <div className="col-lg-6 col-sm-6">
                    <label className="lblEntradas">T.U.E :</label>
                    <button type="button" onClick={() => { props.fnc_inserir() }} className="adicionaIluminacao">+</button>
                </div>
            </div>

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
            </div>
        </>
    )
}

export default TueLinhaHeader