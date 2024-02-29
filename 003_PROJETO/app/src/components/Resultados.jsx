import React from "react";

import '../estilos/Resultados.css'

function Resultados() {
    return (
        <>
            <div className="container divQuadro">
                <div className="row pt-2 pb-2">
                    {/* Tabela Gerada com os Resultados dos Valores Calculados */}

                    {/* Título da Tabela*/}
                    <div className="col-12 align-self-center">
                        <h2 className="text-center">Resultados do Cálculo</h2>
                    </div>
                </div>

                {/* Resultados Gerados pelo Cálculo */}
                <div className="row divLinhaAcima pt-2">
                    <div className="col-lg-6 col-sm-12">
                        <label className="lblResultados">Área Total do Dimensionamento :</label>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <input className="resultados" type="text" readOnly value="Valor em m²"></input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <label className="lblResultados">Potência Total do Sistema de Iluminação :</label>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <input className="resultados" type="text" readOnly value="Valor em Watts"></input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <label className="lblResultados">Potência Total das Tomadas de Uso Geral :</label>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <input className="resultados" type="text" readOnly value="Valor em Watts"></input>
                    </div>
                </div>

                <div className="row divLinhaAbaixo pb-2">
                    <div className="col-lg-6 col-sm-12">
                        <label className="lblResultados">Potência Total das Tomadas de Uso Específico :</label>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <input className="resultados" type="text" readOnly value="Valor em Watts"></input>
                    </div>
                </div>

                {/* Potência Total do Dimensionamento */}
                <div className="row pt-2 pb-2 ">
                    <div className="col-lg-6 col-sm-12">
                        <label className="lblResultados">Potência Total (Somatória das Potências) :</label>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <input className="resultados" type="text" readOnly value="Valor em Watts"></input>
                    </div>
                </div>
            </div>

            {/* Botão de Geração de Memorial em PDF */}
            <div className="row text-center pb-5">
                <div className="col-12 align-self-center">
                    <button type="button" className="gerarPDF">GERAR MEMORIAL EM PDF</button>
                </div>
            </div>

        </>
    )
}

export default Resultados