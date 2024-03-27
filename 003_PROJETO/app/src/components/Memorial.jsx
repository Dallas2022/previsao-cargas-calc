
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

import logoPBM from "../imagens/LOGO_PBM.png"
import logoWhatsapp from "../imagens/logoWhatsapp.png"

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
        return "Informe o consumidor - Ex: Trifásico / 3F e 1N / Tensão 127 / 220V"
    })

    const [nomeLocal, setNomeLocal] = useState(() => {
        return "Nome do Local ou Dependência – Ex: Sala de Espera"
    })

    const [espacoBtnZap, setEspacoBtnZap] = useState(() => {
        return "fixed-bottom right-100 p-3"
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
            setEspacoBtnZap("fixed-bottom right-100 p-2")

        } else {

            setTitulo("Digite aqui o seu título - Ex: Cálculo do Pavimento Térreo")
            setConsumidor("Informe o consumidor - Ex: Trifásico / 3F e 1N / Tensão 127 / 220V")
            setNomeLocal("Nome do Local ou Dependência – Ex: Sala de Espera")
            setEspacoBtnZap("fixed-bottom right-100 p-3")
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

            {/* Cabeçalho com informações da PBM */}
            <div className="row pt-4 ps-4 pe-4 align-items-center">
                <div className="col-sm-12 col-md-4 text-center">
                    <img src={logoPBM} alt="Logo da Power By My" className="logotipo" />
                </div>
                <div className="col-sm-12 col-md-4 text-center">
                    <p>CNPJ: 44.275.627/0001-20</p>
                </div>

                <div className="col-sm-12 col-md-4 text-center">
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg>
                        <span>&nbsp;contato@powerbymy.com</span>
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                        </svg>
                        <span>&nbsp;(11) 99950-4410</span>
                    </p>
                </div>
            </div>

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

            {/* Botão com link para Whatsapp da PBM */}
            <div id="whatsappButton" className={espacoBtnZap} style={{ zIndex: "99", left: "initial"}}>
                <a href="https://wa.me/5511999504410?text=Olá Iuri, acessei o site da Power By My e tenho interesse em seus serviços." target="_blank">
                    <img id="whatsappImg" src={logoWhatsapp} alt="Botão do Whatsapp" />
                </a>
            </div>

        </div>
    )
}

export default Memorial