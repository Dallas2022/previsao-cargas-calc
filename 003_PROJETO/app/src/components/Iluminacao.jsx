import React, { useState, useEffect } from "react";
import { useContext } from "react";
import Contexto from "../providers/Contexto";

function Iluminacao(props) {

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
    const valores = [props.id, NumPontos, PotUnitW, NumArandelas60W]

    //Utilização dos Recursos Contexto Público.
    const publico = useContext(Contexto)

    const [teste, setTeste] = useState(() => {
        return []
    })


    // A Coleção é Atualizada Cada Vez que Um Valor For Alterado.
    useEffect(() => {

        setTeste(publico.mtzPotTotIlum.filter(el => el[0] !== props.id))
        
        publico.setMtzPotTotIlum(publico.mtzPotTotIlum.filter(el => el[0] !== props.id))
        publico.setMtzPotTotIlum(mtz => [...mtz, valores])
        publico.setControleRender(!publico.controleRender)
        
    }, valores)

    
    return (
        <>
            {/* Linha Inical dos Valores de Iluminação - Esta linha não usa o botão de exclusão */}
            {/* <h3>{valores[0]}</h3>
            <h3>{valores[1]}</h3>
            <h3>{valores[2]}</h3>
            <h3>{valores[3]}</h3> */}
            {/* MATRIZ PUBLICA */}
            {/* {publico.mtzPotTotIlum.map(elem => {
                return <div>
                    <h5>M GLOB : {elem}</h5>
                </div>
            })} */}
                        <hr></hr>
            {/* <h2>ID : {props.id}</h2>
            <hr></hr> */}
            {/* <h5>MATRIZ GLOBAL : {publico.mtzPotTotIlum}</h5>
            <h5>TAMANHO MATRIZ GLOBAL = {publico.mtzPotTotIlum.length}</h5>
            <h5>TEMP = {teste}</h5>
            <h5>TAMANHO TEMP = {teste.length}</h5> */}
            

            

            <div id={props.id} className="row align-items-center divLinhaCima pt-1 pb-2">
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
                <div className="col-lg-3 col-sm-12">
                    <button type="button" onClick={() => { props.fnc_remover(props.id) }} className="removerLinha">-</button>
                    <button type="button" onClick={() => { props.fnc_inserir(props.id) }} className="adicionaIluminacao ms-3">+</button>
                </div>
            </div>
        </>
    )
}

export default Iluminacao