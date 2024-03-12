import React from "react";

function TugLinhaHeader(props) {
    return (
        <>
            {/* Linha das TUG's - Tomadas de Uso Geral */}
            <div className="row align-items-center divLinhaCima pt-1 pb-2">
                <div className="col-lg-6 col-sm-6">
                    <label className="lblEntradas">T.U.G :</label>
                    <button type="button" onClick={() => { props.fnc_inserir() }} className="adicionaTug">+</button>
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
        </>
    )
}

export default TugLinhaHeader