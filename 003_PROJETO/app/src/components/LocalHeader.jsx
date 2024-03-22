
// Código elaborado por: Nelson Braga
// Cargo: Desenvolvedor Fullstack
// Data: 22/03/2024

import React from "react";

// Este arquivo é responsável por renderizar os campos referentes
// ao local que o usuário irá realizar os cálculos

function LocalHeader(props) {
    return (
        <>
            {/* Linha do Nome do Local com Botão de Remover */}
            <div className="row align-items-center">

                {/* Identificação do local */}
                <div className="col-lg-9 col-sm-12">
                    <h5>
                        <input type="text" className="dadosLocal" placeholder={props.placeholderNome} />
                    </h5>
                </div>

                {/* Botão para remoção do local */}
                <div className="col-lg-3 col-sm-12">
                    <label className="lblRemoverLocal">Remover Local</label>
                    <button type="button" onClick={() => { props.fnc_remover(props.id) }} className="removerLocal">-</button>
                </div>
            </div>
        </>
    )
}

export default LocalHeader