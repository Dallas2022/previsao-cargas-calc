import React, {useState, useEffect} from "react";
import { useContext } from "react";
import Contexto from "../providers/Contexto";

function TugLinhaHeader(props) {

    // Valores Dinâmicos para Interação com a Coleção de Dados.
    const [NumPontos, setNumPontos] = useState(() => {
        return 0
    })

    const [PotUnitW, setPotUnitW] = useState(() => {
        return 0
    })


    // Valores Dinâmicos para Interação Com o Campo de Dimensões (Perímetro).
    const [PontosPerimetro, setPontosPerimetro] = useState(() => {
        return 0
    })
    

    // Coleção de Dados Para Serem Enviados para Calcular no "Público".
    // Ordem dos Dados - Id, Aparelho e Pot. Unit. (W).
    const valores = [props.idLocal, NumPontos, PotUnitW, props.idLocal]

    //Utilização dos Recursos Contexto Público.
    const publico = useContext(Contexto)

    // A Coleção é Atualizada Cada Vez que Um Valor For Alterado.
    useEffect(() => {
                
        publico.setMtzPotTotTUG(publico.mtzPotTotTUG.filter(el => el[0] !== props.idLocal))       
        publico.setMtzPotTotTUG(mtz => [...mtz, valores])
        publico.setControleRender(!publico.controleRender)

    }, valores)

    // Verifica a Atualização do Perímertro - Calcula o Número Mínimo de Pontos.
    useEffect(() => {

        let perimetro = publico.mtzAreaTotal.filter(el => el[0] === props.idLocal)
        
        if(perimetro.length > 0) {

            // Cálculo do Número de Pontos de TUG Baseado no Perímetro.          
            if(perimetro[0][2] <= 6 && perimetro[0][2] > 0) {
                setPontosPerimetro(1)
            } else {
                let valor = perimetro[0][2] / 5
                setPontosPerimetro(Math.ceil(valor))
            }

        }

    }, [publico.controleRender])
    
    
    return (
        <>
            {/* Linha das TUG's - Tomadas de Uso Geral */}
            <div className="row align-items-center divLinhaCima pt-1 pb-2">
                <div className="col-lg-6 col-sm-6">
                    <label className="lblEntradas">T.U.G :</label>
                    <button type="button" onClick={() => { props.fnc_inserir() }} className="adicionaTug">+</button>
                </div>
                <div className="col-lg-6 col-sm-6">
                    <input type="text" className="dadoSaidaTUG" readOnly value={PontosPerimetro == 1 ? PontosPerimetro + " ponto" : PontosPerimetro + " pontos"} />
                </div>
            </div>

            {/* Linha Inical dos Valores de TUG - Esta linha não usa o botão de exclusão */}
            <div className="row align-items-center divLinhaCima pt-1 pb-2">
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
            </div>
        </>
    )
}

export default TugLinhaHeader