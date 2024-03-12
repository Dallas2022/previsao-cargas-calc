import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

import IluminacaoLinhaHeader from "./IluminacaoLinhaHeader";
import TugLinhaHeader from "./TugLinhaHeader";
import TueLinhaHeader from "./TueLinhaHeader";
import Dimensoes from './Dimensoes'
import Iluminacao from "./Iluminacao";
import Tug from './Tug'
import Tue from './Tue'

import '../estilos/Local.css'

function Local(props) {

    const [mtzIlum, setMtzIlum] = useState(() => {
        return []
    })

    const [mtzTug, setMtzTug] = useState(() => {
        return []
    })

    const [mtzTue, setMtzTue] = useState(() => {
        return []
    })


    function inserirLinhaIlum() {
        setMtzIlum(mtzIlum => [...mtzIlum, uuid()])
    }

    function removerLinhaIlum(id) {
        let mtzTemp = mtzIlum.filter(el => el !== id)
        setMtzIlum(mtzTemp)
    }


    function inserirLinhaTug() {
        setMtzTug(mtzTug => [...mtzTug, uuid()])
    }

    function removerLinhaTug(id) {
        let mtzTemp = mtzTug.filter(el => el !== id)
        setMtzTug(mtzTemp)
    }


    function inserirLinhaTue() {
        setMtzTue(mtzTue => [...mtzTue, uuid()])
    }

    function removerLinhaTue(id) {
        let mtzTemp = mtzTue.filter(el => el !== id)
        setMtzTue(mtzTemp)
    }


    return (
        <>
            <div className="container divQuadroLocal">

                {/* Linha do Nome do Local */}
                <div className="row align-items-center">
                    <div className="col-lg-9 col-sm-12">
                        <h5>
                            <input type="text" className="dadosLocal" placeholder="Nome do Local ou Dependência – Ex: Sala de Espera" />
                        </h5>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <label className="lblRemoverLocal">Remover Local</label>
                        <button type="button" onClick={() => { props.fnc_remover(props.id) }} className="removerLocal">-</button>
                    </div>
                </div>

                {/* Linha das Dimensões */}
                <Dimensoes></Dimensoes>

                {/* Linhas da Iluminação

                Linha Inical dos Valores de Iluminação - Esta linha não usa o botão de exclusão */}
                <IluminacaoLinhaHeader fnc_inserir={inserirLinhaIlum}></IluminacaoLinhaHeader>

                {/* Linhas de Entrada - Componentes Adicionados Dinamicamente */}
                {mtzIlum.map(el => { return <Iluminacao key={el} id={el} fnc_remover={removerLinhaIlum} /> })}



                {/* Linha das TUG's - Tomadas de Uso Geral

                Linha Inical dos Valores de TUG - Esta linha não usa o botão de exclusão */}
                <TugLinhaHeader fnc_inserir={inserirLinhaTug}></TugLinhaHeader>

                {/* Linhas de Entrada - Componentes Adicionados Dinamicamente */}
                {mtzTug.map(el => { return <Tug key={el} id={el} fnc_remover={removerLinhaTug} ></Tug> })}



                {/* Linha das TUE's - Tomadas de Uso Específico

                Linha Inical dos Valores de TUG - Esta linha não usa o botão de exclusão */}
                <TueLinhaHeader fnc_inserir={inserirLinhaTue}></TueLinhaHeader>

                {/* Linhas de Entrada - Componentes Adicionados Dinamicamente */}
                {mtzTue.map(el => { return <Tue key={el} id={el} fnc_remover={removerLinhaTue}></Tue> })}

            </div>
        </>
    )
}

export default Local