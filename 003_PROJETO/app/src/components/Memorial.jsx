
// Código elaborado por: Nelson Braga
// Cargo: Desenvolvedor Fullstack
// Data: 22/03/2024

import React, { useEffect, useState } from "react";
import { v4 as uuidLocal } from 'uuid'
import { useContext } from "react";
import Contexto from "../providers/Contexto";

import Local from "./Local";
import Resultados from "./Resultados";

import '../estilos/Memorial.css'

// Este arquivo é chamado pela tela inicial do sistema. Ele renderiza a tela
// na qual será possível o usuário montar seu memorial de acordo com as tabelas
// e dados que necessitar

function Memorial() {

    // Verifica se o dispositivo é mobile ou não
    const [largura, setLargura] = useState(window.innerWidth);

    const [titulo, setTitulo] = useState(() => {
        return "Digite aqui o seu título - Ex: Cálculo do Pavimento Térreo"
    })

    const [consumidor, setConsumidor] = useState(() => {
        return "Informe o consumidor - Ex: TIPO C / Atendido a 4 fios / 3F e 1N / Tensão 127 / 220V"
    })

    const [nomeLocal, setNomeLocal] = useState(() => {
        return "Nome do Local ou Dependência – Ex: Sala de Espera"
    })

    // Define o texto dos placeholders com base na dimensão da tela
    useEffect(() => {

        const handleResize = () => {
            setLargura(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    useEffect(() => {

        if (largura < 768) {

            setTitulo("Título")
            setConsumidor("Consumidor")
            setNomeLocal("Local")   

        } else {

            setTitulo("Digite aqui o seu título - Ex: Cálculo do Pavimento Térreo")
            setConsumidor("Informe o consumidor - Ex: TIPO C / Atendido a 4 fios / 3F e 1N / Tensão 127 / 220V")
            setNomeLocal("Nome do Local ou Dependência – Ex: Sala de Espera")

        }

    }, [largura])


    // Utilização dos recursos contexto público
    const publico = useContext(Contexto)

    const [mtz, setMtz] = useState(() => {
        return []
    })

    function adicionarLocal() {
        setMtz(mtz => [...mtz, uuidLocal()])
    }

    function removerLocal(id) {

        // Lógica para subtrair os dados de um local excluído da tabela de resultados
        publico.setMtzAreaTotal(publico.mtzAreaTotal.filter(el => el[0] !== id))
        publico.setMtzPotTotIlum(publico.mtzPotTotIlum.filter(el => el[4] !== id))
        publico.setMtzPotTotTUG(publico.mtzPotTotTUG.filter(el => el[3] !== id))
        publico.setMtzPotTotTUE(publico.mtzPotTotTUE.filter(el => el[3] !== id))
        publico.setControleRender(!publico.controleRender)


        // Lógica para remover o bloco da interface gráfica do local
        let mtzTemp = mtz.filter(el => el !== id)
        setMtz(mtzTemp)
    }

    // Ajuste da margem inferior
    let tamanhoMargem = "0%"
    mtz.length > 0 ? tamanhoMargem = "0%" : tamanhoMargem = "25%"

    return (
        <div className="container-fluid" style={{ marginBottom: tamanhoMargem }} >

            {/* Cabeçalho do memorial de cálculo */}
            <div className="row p-4">
                <div className="col-12">
                    <h3>
                        <input id="tituloLocal" type="text" placeholder={titulo}></input>
                    </h3>
                    <h4>
                        <input id="descConsumidor" type="text" placeholder={consumidor}></input>
                    </h4>

                    {/* Locais inseridos de forma dinâmica*/}
                    {mtz.map(el => { return <Local key={el} id={el} placeholderNome={nomeLocal} fnc_remover={removerLocal}></Local> })}


                    {/* Botão para adicionar um novo local */}
                    <label className="lblAdicionarLocal">Adicione um Local</label>
                    <button type="button" onClick={() => { adicionarLocal() }} className="adicionalLocal">+</button>
                </div>
            </div>

            {/* Tabela de resultados - Mostra se existir pelo menos uma tabela */}
            {mtz.length > 0 ? <Resultados /> : null}


            {/* Botão com link para o sitye da PBM */}
            <div className="row text-center pb-5">
                <div className="col-12 align-self-center">
                    <a className="link" href="https://powerbymy.com/">IR PARA O SITE</a>
                </div>
            </div>

        </div>
    )
}

export default Memorial