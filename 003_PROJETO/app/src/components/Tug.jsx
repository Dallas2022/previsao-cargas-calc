import React, {useState, useEffect} from "react";
import { useContext } from "react";
import Contexto from "../providers/Contexto";

function Tug(props) {

    // Valores Dinâmicos para Interação com a Coleção de Dados.
    const [NumPontos, setNumPontos] = useState(() => {
        return 0
    })

    const [PotUnitW, setPotUnitW] = useState(() => {
        return 0
    })
   

    // Coleção de Dados Para Serem Enviados para Calcular no "Público".
    // Ordem dos Dados - Id, Aparelho e Pot. Unit. (W).
    const valores = [props.id, NumPontos, PotUnitW, props.idPai]

    //Utilização dos Recursos Contexto Público.
    const publico = useContext(Contexto)

    // A Coleção é Atualizada Cada Vez que Um Valor For Alterado.
    useEffect(() => {
                
        publico.setMtzPotTotTUG(publico.mtzPotTotTUG.filter(el => el[0] !== props.id))       
        publico.setMtzPotTotTUG(mtz => [...mtz, valores])
        publico.setControleRender(!publico.controleRender)

    }, valores)
    
    
    return (
        <>
            <div id={props.id} className="row align-items-center divLinhaCima pt-1 pb-2">
                <div className="col-lg-4 col-sm-12">
                    <h5>
                        <input type="number" className="dadosLocal" onChange={e => setNumPontos(e.target.value)} placeholder="Nº de Pontos" />
                    </h5>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <h5>
                        <input type="number" className="dadosLocal" onChange={e => setPotUnitW(e.target.value)} placeholder="Pot. Unit. (W)" />
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