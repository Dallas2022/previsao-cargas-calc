import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
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
                <div className="row align-items-center divLinhaCima pt-1 pb-2">
                    <div className="col-lg-4 col-sm-12">
                        <h4 className="lblDadoEntrada">Informe as Dimensões :</h4>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <h5>
                            <input type="text" className="dadosLocal" placeholder="Área em m2" />
                        </h5>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <h5>
                            <input type="text" className="dadosLocal" placeholder="Perímetro em m" />
                        </h5>
                    </div>
                </div>


                {/* Linha da Iluminação */}
                <div className="row align-items-center divLinhaCima pt-1 pb-2">
                    <div className="col-lg-12 col-sm-6">
                        <label className="lblEntradas">Iluminação :</label>
                        <button type="button" onClick={() => { inserirLinhaIlum() }} className="adicionaIluminacao">+</button>
                    </div>
                </div>

                {/* Linha Inical dos Valores de Iluminação - Esta linha não usa o botão de exclusão */}
                <div className="row align-items-center divLinhaCima pt-1 pb-2">
                    <div className="col-lg-3 col-sm-12">
                        <h5>
                            <input type="text" className="dadosLocal" placeholder="Nº de Pontos" />
                        </h5>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <h5>
                            <input type="text" className="dadosLocal" placeholder="Pot. Unit. (W)" />
                        </h5>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <h5>
                            <input type="text" className="dadosLocal" placeholder="Nº de Arandelas (60W)" />
                        </h5>
                    </div>
                </div>

                {/* Linhas de Entrada - Componentes Adicionados Dinamicamente */}
                {mtzIlum.map(el => { return <Iluminacao key={el} id={el} fnc_remover={removerLinhaIlum} /> })}


               {/* Linha das TUG's - Tomadas de Uso Geral */}
                <div className="row align-items-center divLinhaCima pt-1 pb-2">
                    <div className="col-lg-6 col-sm-6">
                        <label className="lblEntradas">T.U.G :</label>
                        <button type="button" onClick={() => { inserirLinhaTug() }} className="adicionaTug">+</button>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <input type="text" className="dadoSaidaTUG" readOnly value="Número Mínimo de Pontos : Val_Saída" />
                    </div>
                </div>

                {/* Linha Inical dos Valores de TUG - Esta linha não usa o botão de exclusão */}
                <div className="row align-items-center divLinhaCima pt-1 pb-2">
                    <div className="col-lg-4 col-sm-12">
                        <h5>
                            <input type="text" className="dadosLocal" placeholder="Nº de Pontos" />
                        </h5>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <h5>
                            <input type="text" className="dadosLocal" placeholder="Pot. Unit. (W)" />
                        </h5>
                    </div>
                </div>

                {/* Linhas de Entrada - Componentes Adicionados Dinamicamente */}
                {mtzTug.map(el => {return <Tug key={el} id={el} fnc_remover={removerLinhaTug} ></Tug>})}


                {/* Linha das TUE's - Tomadas de Uso Específico */}
                <div className="row align-items-center divLinhaCima pt-1 pb-2">
                    <div className="col-lg-6 col-sm-6">
                        <label className="lblEntradas">T.U.E :</label>
                        <button type="button" onClick={() => { inserirLinhaTue() }} className="adicionaIluminacao">+</button>
                    </div>
                </div>

                {/* Linha Inical dos Valores de TUG - Esta linha não usa o botão de exclusão */}
                <div className="row align-items-center divLinhaCima pt-1 pb-2">
                    <div className="col-lg-4 col-sm-12">
                        <h5>
                            <input type="text" className="dadosLocal" placeholder="Aparelho" />
                        </h5>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <h5>
                            <input type="text" className="dadosLocal" placeholder="Pot. Unit. (W)" />
                        </h5>
                    </div>
                </div>

                {/* Linhas de Entrada - Componentes Adicionados Dinamicamente */}
                {mtzTue.map(el => {return <Tue key={el} id={el} fnc_remover={removerLinhaTue}></Tue>})}

            </div>
        </>
    )
}

export default Local