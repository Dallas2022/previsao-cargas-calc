import React from "react";

function IluminacaoLinhaHeader(props) {
    return (
        <>
            {/* Linha da Iluminação */}
            <div className="row align-items-center divLinhaCima pt-1 pb-2">
                <div className="col-lg-12 col-sm-6">
                    <label className="lblEntradas">Iluminação :</label>
                    <button type="button" onClick={() => { props.fnc_inserir() }} className="adicionaIluminacao">+</button>
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
        </>
    )
}

export default IluminacaoLinhaHeader