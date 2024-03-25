
// Código elaborado por: Nelson Braga
// Cargo: Desenvolvedor Fullstack
// Data: 22/03/2024

import React from "react";
import { useContext } from "react";
import Contexto from "../providers/Contexto";

// Este arquivo renderiza a tabela com os resultados dos cálculos

import '../estilos/Resultados.css'

function Resultados() {

    //Utilização dos recursos do contexto público
    const publico = useContext(Contexto)

    return (
        <>
            {/* Tabela gerada com os resultados dos valores calculados */}
            <div className="container divQuadro">
                <div className="row pt-2 pb-2">

                    {/* Título da tabela*/}
                    <div className="col-12 align-self-center">
                        <h2 className="text-center">Resultados do Cálculo</h2>
                    </div>
                </div>

                {/* Resultados gerados pelos cálculos */}
                <div className="row divLinhaAcima pt-2">
                    <div className="col-lg-6 col-sm-12">
                        <label className="lblResultados">Área Total do Dimensionamento :</label>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <input className="resultados" type="text" readOnly value={publico.somatoriaAreaTotal + " m²"}></input>
                    </div>
                </div>

                {/* Potência total do sistema de iluminação */}
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <label className="lblResultados">Potência Total do Sistema de Iluminação :</label>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <input className="resultados" type="text" readOnly value={publico.somatoriaIlumPotTotW == 1 ? publico.somatoriaIlumPotTotW + " Watt" : publico.somatoriaIlumPotTotW + " Watts"}></input>
                    </div>
                </div>

                {/* Potência total das tomadas de uso geral - TUG */}
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <label className="lblResultados">Potência Total das Tomadas de Uso Geral :</label>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <input className="resultados" type="text" readOnly value={publico.somatoriaTUGPotTotW == 1 ? publico.somatoriaTUGPotTotW + " Watt" : publico.somatoriaTUGPotTotW + " Watts"}></input>
                    </div>
                </div>

                {/* Potência total das tomadas de uso específico - TUE */}
                <div className="row divLinhaAbaixo pb-2">
                    <div className="col-lg-6 col-sm-12">
                        <label className="lblResultados">Potência Total das Tomadas de Uso Específico :</label>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <input className="resultados" type="text" readOnly value={publico.somatoriaTUEPotTotW == 1 ? publico.somatoriaTUEPotTotW + " Watt" : publico.somatoriaTUEPotTotW + " Watts"}></input>
                    </div>
                </div>

                {/* Potência total do dimensionamento */}
                <div className="row pt-2 pb-2 ">
                    <div className="col-lg-6 col-sm-12">
                        <label className="lblResultados">Potência Total (Somatória das Potências) :</label>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <input className="resultados" type="text" readOnly value={publico.somatoriaPotTotGeralW == 1 ? publico.somatoriaPotTotGeralW + " Watt" : publico.somatoriaPotTotGeralW + " Watts"}></input>
                    </div>
                </div>
            </div>

            {/* Botão para imprimir */}
            <div className="row text-center pb-5">
                <div className="col-12 align-self-center">
                    <button type="button" onClick={() => { window.print() }} className="gerarPDF">IMPRIMIR</button>
                </div>
            </div>

            {/* Informações sobre outros serviços */}
            <div className="row text-center pb-5">
                <div className="col-12 align-self-center">
                    <p>Caso deseje calcular demanda, corrente elétrica e cabeamento; entre em contato conosco !</p>
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

        </>
    )
}

export default Resultados