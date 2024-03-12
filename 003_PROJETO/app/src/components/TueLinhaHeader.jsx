import React from "react";

function TueLinhaHeader(props) {
    return (
        <>
            {/* Linha das TUE's - Tomadas de Uso Específico */}
            <div className="row align-items-center divLinhaCima pt-1 pb-2">
                <div className="col-lg-6 col-sm-6">
                    <label className="lblEntradas">T.U.E :</label>
                    <button type="button" onClick={() => { props.fnc_inserir() }} className="adicionaIluminacao">+</button>
                </div>
            </div>

            {/* Linha Inical dos Valores de TUG - Esta linha não usa o botão de exclusão */}
            <div className="row align-items-center divLinhaCima pt-1 pb-2">
                <div className="col-lg-4 col-sm-12">
                    <h5>
                        <input type="text" className="dadosLocal" placeholder="Aparelho" />
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

export default TueLinhaHeader