import React from "react";

function Dimensoes() {
    return (
        <>
            {/* Linha das Dimensões */}
            <div className="row align-items-center divLinhaCima pt-1 pb-2">
                <div className="col-lg-4 col-sm-12">
                    <h4 className="lblDadoEntrada">Informe as Dimensões :</h4>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <h5>
                        <input type="text" className="dadosLocal" placeholder="Área em m2" />
                    </h5>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <h5>
                        <input type="text" className="dadosLocal" placeholder="Perímetro em m" />
                    </h5>
                </div>
            </div>
        </>
    )
}

export default Dimensoes