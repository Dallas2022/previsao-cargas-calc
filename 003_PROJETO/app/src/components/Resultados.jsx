import React from "react";

import '../estilos/Resultados.css'

function Resultados() {
    return (
        <div>
            <div className=" row divResultados pt-2 pb-2">
                {/* Tabela Gerada com os Resultados dos Valores Calculados */}

                {/* Título da Tabela*/}
                <div className="col-12 align-self-center divRiscoInferior">
                    <h2 className="text-center">Resultados do Cálculo</h2>
                </div>

                {/* Rótulos Indicativos das Grandezas */}
                <div className="col-6">
                    <label className="lblResultados">Área Total do Dimensionamento :</label>
                    <label className="lblResultados">Potência Total do Sistema de Iluminação :</label>
                    <label className="lblResultados">Potência Total das Tomadas de Uso Geral :</label>
                    <label className="lblResultados">Potência Total das Tomadas de Uso Específico :</label>
                </div>

                {/* Resultados do Cálculo */}
                <div className="col-6">
                    <input className="resultados" type="text" readOnly value="Valor em m²"></input>
                    <input className="resultados" type="text" readOnly value="Valor em Watts"></input>
                    <input className="resultados" type="text" readOnly value="Valor em Watts"></input>
                    <input className="resultados" type="text" readOnly value="Valor em Watts"></input>
                </div>

                {/* Linha do Cálculo Final */}
                <div className="col-12 align-self-center divRiscoSuperior mt-2">
                    <div className=" row pt-2 pb-2 mt-2">
                        <div className="col-6">
                            <label className="lblResultados">Potência Total (Somatória das Potências) :</label>
                        </div>
                        <div className="col-6">
                            <input className="resultados" type="text" readOnly value="Valor em Watts"></input>
                        </div>
                    </div>
                </div>

            </div>

            {/* Botão de Geração de Memorial em PDF */}
            <div className="row text-center">
                <div className="col-12 align-self-center">
                    <button type="button" className="gerarPDF">GERAR MEMORIAL EM PDF</button>                    
                </div>
            </div>
        </div>

    )
}

export default Resultados