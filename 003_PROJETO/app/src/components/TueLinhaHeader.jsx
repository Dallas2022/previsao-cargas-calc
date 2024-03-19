import React, { useState, useEffect } from "react";
import { useContext } from "react";
import Contexto from "../providers/Contexto";

function TueLinhaHeader(props) {

    // Valores Dinâmicos para Interação com a Coleção de Dados.
    const [Aparelho, setAparelho] = useState(() => {
        return ""
    })

    const [PotUnitW, setPotUnitW] = useState(() => {
        return 0
    })


    // Coleção de Dados Para Serem Enviados para Calcular no "Público".
    // Ordem dos Dados - Id, Aparelho e Pot. Unit. (W).
    const valores = [props.idLocal, Aparelho, PotUnitW]

    //Utilização dos Recursos Contexto Público.
    const publico = useContext(Contexto)

    // A Coleção é Atualizada Cada Vez que Um Valor For Alterado.
    useEffect(() => {
                
        publico.setMtzPotTotTUE(publico.mtzPotTotTUE.filter(el => el[0] !== props.idLocal))       
        publico.setMtzPotTotTUE(mtz => [...mtz, valores])
        publico.setControleRender(!publico.controleRender)

    }, valores)


    return (
        <>
            {/* Linha das TUE's - Tomadas de Uso Específico */}
            <div className="row align-items-center divLinhaCima pt-1 pb-2">
                <div className="col-lg-6 col-sm-6">
                    <label className="lblEntradas">T.U.E :</label>
                    <button type="button" onClick={() => { props.fnc_inserir() }} className="adicionaIluminacao">+</button>
                </div>
            </div>


            {/* <h2>ID Header : {props.idLocal}</h2> */}

            {/* Linha Inical dos Valores de TUG - Esta linha não usa o botão de exclusão */}
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