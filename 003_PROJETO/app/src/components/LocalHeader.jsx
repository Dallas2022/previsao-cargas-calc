import React from "react";

function LocalHeader(props) {
    return (
        <>
            {/* Linha do Nome do Local com Botão de Remover */}
            <div className="row align-items-center">
                <div className="col-lg-9 col-sm-12">
                    <h5>
                        <input type="text" className="dadosLocal" placeholder="Nome do Local ou Dependência – Ex: Sala de Espera" />
                    </h5>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <label className="lblRemoverLocal">Remover Local</label>
                    <button type="button" onClick={() => { props.fnc_remover(props.id) }} className="removerLocal">-</button>
                </div>
            </div>
        </>
    )
}

export default LocalHeader