import React from "react";

function Tue(props) {
    return (
        <>
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
                <div className="col-lg-3 col-sm-12">
                    <button type="button" onClick={() => { props.fnc_remover(props.id) }} className="removerLinha">-</button>
                </div>
            </div>
        </>
    )
}

export default Tue