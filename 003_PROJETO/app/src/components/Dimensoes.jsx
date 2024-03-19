import React, {useState, useEffect} from "react";
import { useContext } from "react";
import Contexto from "../providers/Contexto";

function Dimensoes(props) {

    // Valores Dinâmicos para Interação com a Coleção de Dados.
    const [AreaTotal, setAreaTotal] = useState(() => {
        return 0
    })


    // Coleção de Dados Para Serem Enviados para Calcular no "Público".
    // Ordem dos Dados - Id, AreaTotal.
    const valores = [props.idLocal, AreaTotal]

    //Utilização dos Recursos Contexto Público.
    const publico = useContext(Contexto)

    // A Coleção é Atualizada Cada Vez que Um Valor For Alterado.
    useEffect(() => {
                
        publico.setMtzAreaTotal(publico.mtzAreaTotal.filter(el => el[0] !== props.idLocal))       
        publico.setMtzAreaTotal(mtz => [...mtz, valores])
        publico.setControleRender(!publico.controleRender)

    }, valores)    


    return (
        <>
            {/* Linha das Dimensões */}
            <div className="row align-items-center divLinhaCima pt-1 pb-2">
                <div className="col-lg-4 col-sm-12">
                    <h4 className="lblDadoEntrada">Informe as Dimensões :</h4>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <h5>
                        <input type="number" className="dadosLocal" onChange={e => setAreaTotal(e.target.value)} placeholder="Área em m2" />
                    </h5>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <h5>
                        <input type="number" className="dadosLocal" placeholder="Perímetro em m" />
                    </h5>
                </div>
            </div>
        </>
    )
}

export default Dimensoes