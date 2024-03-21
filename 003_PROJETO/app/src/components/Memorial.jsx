import React, { useEffect, useState } from "react";
import { v4 as uuidLocal } from 'uuid'
import { useContext } from "react";
import Contexto from "../providers/Contexto";

import Local from "./Local";
import Resultados from "./Resultados";

import '../estilos/Memorial.css'


function Memorial() {

    // Verificação se o Dispositivo é Mobile ou Não.
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

    // Definir o Texto do Placeholder Com Base na Dimensão da Tela.
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


    // Utilização dos Recursos Contexto Público.
    const publico = useContext(Contexto)

    const [mtz, setMtz] = useState(() => {
        return []
    })

    function adicionarLocal() {
        setMtz(mtz => [...mtz, uuidLocal()])
    }

    function removerLocal(id) {

        // Lógica Para Subtrair os Dados de Um Local Excluído da Tabela de Resultados.        
        publico.setMtzAreaTotal(publico.mtzAreaTotal.filter(el => el[0] !== id))
        publico.setMtzPotTotIlum(publico.mtzPotTotIlum.filter(el => el[4] !== id))
        publico.setMtzPotTotTUG(publico.mtzPotTotTUG.filter(el => el[3] !== id))
        publico.setMtzPotTotTUE(publico.mtzPotTotTUE.filter(el => el[3] !== id))
        publico.setControleRender(!publico.controleRender)


        // Lógica Para Remover o Bloco da Interface Gráfica do Local.
        let mtzTemp = mtz.filter(el => el !== id)
        setMtz(mtzTemp)
    }

    let tamanhoMargem = "0%"
    mtz.length > 0 ? tamanhoMargem = "0%" : tamanhoMargem = "25%"

    return (
        <div className="container-fluid" style={{ marginBottom: tamanhoMargem }} >

            {/* Cabeçalho do Memorial de Cálculo */}
            <div className="row p-4">
                <div className="col-12">
                    <h3>
                        <input id="tituloLocal" type="text" placeholder={titulo}></input>
                    </h3>
                    <h4>
                        <input id="descConsumidor" type="text" placeholder={consumidor}></input>
                    </h4>

                    {/* Locais Inseridos de Forma Dinâmica*/}
                    {mtz.map(el => { return <Local key={el} id={el} placeholderNome={nomeLocal} fnc_remover={removerLocal}></Local> })}


                    {/* Botão para Adicionar um Novo Local */}
                    <label className="lblAdicionarLocal">Adicione um Local</label>
                    <button type="button" onClick={() => { adicionarLocal() }} className="adicionalLocal">+</button>
                </div>
            </div>

            {/* Tabela de Resultados - Mostra se Existir Pelo Menos uma Tabela */}
            {mtz.length > 0 ? <Resultados /> : null}

        </div>
    )
}

export default Memorial