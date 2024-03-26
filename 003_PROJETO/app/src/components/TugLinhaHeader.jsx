
// Código elaborado por: Nelson Braga
// Cargo: Desenvolvedor Fullstack
// Data: 22/03/2024

import React, {useState, useEffect} from "react";
import { useContext } from "react";
import Contexto from "../providers/Contexto";

// Este arquivo renderiza a primeira linha dos dados das tomadas de uso geral

function TugLinhaHeader(props) {

    // Valores dinâmicos para interação com a coleção de dados
    const [NumPontos, setNumPontos] = useState(() => {
        return 0
    })

    const [PotUnitW, setPotUnitW] = useState(() => {
        return 0
    })


    // Valores dinâmicos para interação com o campo de dimensões (Perímetro)
    const [PontosPerimetro, setPontosPerimetro] = useState(() => {
        return 0
    })
    

    // Coleção de dados para serem enviados para calcular no contexto público
    // Ordem dos dados - Id, Aparelho, Pot. Unit. (W) e Id do Local
    const valores = [props.idLocal, NumPontos, PotUnitW, props.idLocal]

    //Utilização dos recursos do contexto público
    const publico = useContext(Contexto)

    // A coleção é atualizada cada vez que um valor for alterado
    useEffect(() => {
                
        publico.setMtzPotTotTUG(publico.mtzPotTotTUG.filter(el => el[0] !== props.idLocal))       
        publico.setMtzPotTotTUG(mtz => [...mtz, valores])
        publico.setControleRender(!publico.controleRender)

    }, valores)

    // Verifica a atualização do perímertro - Calcula o número mínimo de pontos
    useEffect(() => {

        let perimetro = publico.mtzAreaTotal.filter(el => el[0] === props.idLocal)
        
        if(perimetro.length > 0) {

            // Cálculo do número de pontos de TUG baseado no perímetro
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
            {/* Primeira linha das TUG's - Tomadas de uso geral */}
            <div className="row align-items-center divLinhaCima pt-1 pb-2">
                <div className="col-lg-6 col-sm-6">
                    <label className="lblEntradas">T.U.G :</label>
                    <button type="button" onClick={() => { props.fnc_inserir() }} className="adicionaTug">+</button>
                </div>
                <div className="col-lg-6 col-sm-6">
                    <input type="text" className="dadoSaidaTUG" readOnly value={PontosPerimetro == 1 ? "Nº Mín. NBR 5410 : " + PontosPerimetro + " ponto" : "Nº Mín. NBR 5410 : " + PontosPerimetro + " pontos"} />
                </div>
            </div>

            {/* Dados de entrada fornecidos pelo usuário */}
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