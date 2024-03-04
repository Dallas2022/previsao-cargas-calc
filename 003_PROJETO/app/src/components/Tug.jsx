import React from "react";

function Tug() {
    return (
        <>
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
                <div className="col-lg-4 col-sm-12">
                    <button type="button" className="removerLinha">-</button>
                </div>
            </div>

        </>
    )
}

export default Tug