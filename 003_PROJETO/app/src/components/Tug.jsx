import React from "react";

function Tug(props) {
    return (
        <>
            <div id={props.id} className="row align-items-center divLinhaCima pt-1 pb-2">
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
                <div className="col-lg-4 col-sm-12">
                    <button type="button" onClick={() => {props.fnc_remover(props.id)}} className="removerLinha">-</button>
                    <button type="button" onClick={() => { props.fnc_inserir(props.id) }} className="adicionaIluminacao ms-3">+</button>
                </div>
            </div>

        </>
    )
}

export default Tug