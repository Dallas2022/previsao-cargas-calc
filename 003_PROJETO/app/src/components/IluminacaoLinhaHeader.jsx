import React, { useState, useEffect } from "react";
import { useContext } from "react";
import Contexto from "../providers/Contexto";

function IluminacaoLinhaHeader(props) {

    // Valores Dinâmicos para Interação com a Coleção de Dados.
    const [NumPontos, setNumPontos] = useState(() => {
        return 0
    })

    const [PotUnitW, setPotUnitW] = useState(() => {
        return 0
    })

    const [NumArandelas60W, setNumArandelas60W] = useState(() => {
        return 0
    })

    // Coleção de Dados Para Serem Enviados para Calcular no "Público".
    // Ordem dos Dados - Id, Nº de Pontos, Pot. Unit. (W) e Nº de Arandelas (60W).
    const valores = [props.idLocal, NumPontos, PotUnitW, NumArandelas60W]

    //Utilização dos Recursos Contexto Público.
    const publico = useContext(Contexto)

    // A Coleção é Atualizada Cada Vez que Um Valor For Alterado.
    useEffect(() => {
                
        publico.setMtzPotTotIlum(publico.mtzPotTotIlum.filter(el => el[0] !== props.idLocal))       
        publico.setMtzPotTotIlum(mtz => [...mtz, valores])
        publico.setControleRender(!publico.controleRender)

    }, valores)


    return (
        <>
            {/* Linha da Iluminação */}
            <div className="row align-items-center divLinhaCima pt-1 pb-2">
                <div className="col-lg-12 col-sm-6">
                    <label className="lblEntradas">Iluminação :</label>
                    <button type="button" onClick={() => { props.fnc_inserir() }} className="adicionaIluminacao">+</button>
                </div>
            </div>

            {/* Linha Inical dos Valores de Iluminação - Esta linha não usa o botão de exclusão */}
            {/* <h3>{valores[0]}</h3>
            <h3>{valores[1]}</h3>
            <h3>{valores[2]}</h3>
            <h3>{valores[3]}</h3> */}
            {/* MATRIZ PUBLICA */}
            {/* {publico.mtzPotTotIlum.map(el => {
                return (
                    <div>
                        <h5>M GLOB : {el}</h5>
                    </div>
                )
            })} */}
            {/* <h2>ID Header : {props.idLocal}</h2> */}



            <div className="row align-items-center divLinhaCima pt-1 pb-2">
                <div className="col-lg-3 col-sm-12">
                    <h5>
                        <input type="number" className="dadosLocal" onChange={e => setNumPontos(e.target.value)} placeholder="Nº de Pontos" />
                    </h5>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <h5>
                        <input type="number" className="dadosLocal" onChange={e => setPotUnitW(e.target.value)} placeholder="Pot. Unit. (W)" />
                    </h5>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <h5>
                        <input type="number" className="dadosLocal" onChange={e => setNumArandelas60W(e.target.value)} placeholder="Nº de Arandelas (60W)" />
                    </h5>
                </div>
            </div>
        </>
    )
}

export default IluminacaoLinhaHeader