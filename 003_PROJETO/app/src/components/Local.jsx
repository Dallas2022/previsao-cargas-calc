
// Código elaborado por: Nelson Braga
// Cargo: Desenvolvedor Fullstack
// Data: 22/03/2024

import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import { useContext } from "react";
import Contexto from "../providers/Contexto";

import IluminacaoLinhaHeader from "./IluminacaoLinhaHeader";
import TugLinhaHeader from "./TugLinhaHeader";
import TueLinhaHeader from "./TueLinhaHeader";
import LocalHeader from "./LocalHeader";
import Dimensoes from './Dimensoes'
import Iluminacao from "./Iluminacao";
import Tug from './Tug'
import Tue from './Tue'

import '../estilos/Local.css'

// Este arquivo é responsável por renderizar todos os elementos
// e subelementos contidos na tabela de um local. Neste arquivo 
// é onde cria-se o card do local para o usuário

function Local(props) {

    //Utilização dos recursos contexto público
    const publico = useContext(Contexto)

    // State para os dados de iluminação
    const [mtzIlum, setMtzIlum] = useState(() => {
        return []
    })

    // State para os dados das tomadas de uso geral
    const [mtzTug, setMtzTug] = useState(() => {
        return []
    })

    // State para os dados das tomadas de uso específico
    const [mtzTue, setMtzTue] = useState(() => {
        return []
    })

    // Insere novas linhas para o sistema de iluminação    
    function inserirLinhaIlum() {
        setMtzIlum(mtzIlum => [...mtzIlum, uuid()])
    }

    // Remove linhas para o sistema de iluminação
    function removerLinhaIlum(id) {

        // Lógica para subtrair os dados de um local excluído da tabela de resultados
        publico.setMtzPotTotIlum(publico.mtzPotTotIlum.filter(el => el[0] !== id))
        publico.setControleRender(!publico.controleRender)

        // Lógica para remover o bloco da interface gráfica da linha de iluminação
        let mtzTemp = mtzIlum.filter(el => el !== id)
        setMtzIlum(mtzTemp)
    }


    // Insere novas linhas para as tomadas de uso geral
    function inserirLinhaTug() {
        setMtzTug(mtzTug => [...mtzTug, uuid()])
    }

    // Remove linhas para as tomadas de uso geral
    function removerLinhaTug(id) {

        // Lógica para subtrair os dados de um local excluído da tabela de resultados
        publico.setMtzPotTotTUG(publico.mtzPotTotTUG.filter(el => el[0] !== id))
        publico.setControleRender(!publico.controleRender)

        // Lógica para remover o bloco da interface gráfica da linha de TUG        
        let mtzTemp = mtzTug.filter(el => el !== id)
        setMtzTug(mtzTemp)
    }


    // Insere novas linhas para as tomadas de uso específico
    function inserirLinhaTue() {
        setMtzTue(mtzTue => [...mtzTue, uuid()])
    }

    function removerLinhaTue(id) {

        // Lógica para subtrair os dados de um local excluído da tabela de resultados
        publico.setMtzPotTotTUE(publico.mtzPotTotTUE.filter(el => el[0] !== id))
        publico.setControleRender(!publico.controleRender)

        // Lógica para remover o bloco da interface gráfica da linha de TUE
        let mtzTemp = mtzTue.filter(el => el !== id)
        setMtzTue(mtzTemp)
        
    }


    return (
        <>
            <div className="container divQuadroLocal">

                {/* Linha do nome do local com botão de remover */}
                <LocalHeader {...props}></LocalHeader>

                {/* Linha das dimensões */}
                <Dimensoes idLocal={props.id}></Dimensoes>


                {/* Linhas da iluminação

                Linha inicial dos valores de iluminação - Esta linha não usa o botão de exclusão */}
                <IluminacaoLinhaHeader idLocal={props.id} fnc_inserir={inserirLinhaIlum}></IluminacaoLinhaHeader>

                {/* Linhas de entrada - Componentes adicionados dinamicamente */}
                {mtzIlum.map(el => { return <Iluminacao key={el} id={el} idPai={props.id} fnc_remover={removerLinhaIlum} fnc_inserir={inserirLinhaIlum} /> })}



                {/* Linha das TUG's - Tomadas de uso geral

                Linha inicial dos valores de TUG - Esta linha não usa o botão de exclusão */}
                <TugLinhaHeader idLocal={props.id} fnc_inserir={inserirLinhaTug}></TugLinhaHeader>

                {/* Linhas de entrada - Componentes adicionados dinamicamente */}
                {mtzTug.map(el => { return <Tug key={el} id={el} idPai={props.id} fnc_remover={removerLinhaTug} fnc_inserir={inserirLinhaTug}></Tug> })}



                {/* Linha das TUE's - Tomadas de Uso Específico

                Linha inicial dos valores de TUG - Esta linha não usa o botão de exclusão */}
                <TueLinhaHeader idLocal={props.id} fnc_inserir={inserirLinhaTue}></TueLinhaHeader>

                {/* Linhas de entrada - Componentes adicionados dinamicamente */}
                {mtzTue.map(el => { return <Tue key={el} id={el} idPai={props.id} fnc_remover={removerLinhaTue} fnc_inserir={inserirLinhaTue}></Tue> })}

            </div>
        </>
    )
}

export default Local