
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

        </>
    )
}

export default Resultados