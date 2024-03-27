
// Código elaborado por: Nelson Braga
// Cargo: Desenvolvedor Fullstack
// Data: 22/03/2024

import React, {useState, useEffect} from "react";
import { useContext } from "react";
import Contexto from "../providers/Contexto";

// Este arquivo é responsável pelas informações referentes à
// dimensão do local no qual estão sendo realizados os cálculos
// para o projeto de elétrica

function Dimensoes(props) {

    // Verifica se o dispositivo é mobile ou não
    const [largura, setLargura] = useState(window.innerWidth);

    const [campo, setCampo] = useState(() => {
        return "Informe as Dimensões"
    })

    // Define o texto dos placeholders com base na dimensão da tela
    useEffect(() => {

        const handleResize = () => {
            setLargura(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    useEffect(() => {

        if (largura < 768) {

            setCampo("Dimensões")

        } else {

            setCampo("Informe as Dimensões")

        }

    }, [largura])


    // Valores dinâmicos para interação com a coleção de dados
    const [AreaTotal, setAreaTotal] = useState(() => {
        return 0
    })

    const [Perimetro, setPerimetro] = useState(() => {
        return 0
    })


    // Coleção de dados para serem enviados para calcular no contexto público
    // Ordem dos dados - Id, AreaTotal e Perimetro
    const valores = [props.idLocal, AreaTotal, Perimetro]

    //Utilização dos recursos contexto público
    const publico = useContext(Contexto)

    // A coleção é atualizada cada vez que um valor for alterado
    useEffect(() => {
                
        publico.setMtzAreaTotal(publico.mtzAreaTotal.filter(el => el[0] !== props.idLocal))       
        publico.setMtzAreaTotal(mtz => [...mtz, valores])
        publico.setControleRender(!publico.controleRender)

    }, valores)    


    return (
        <>
            {/* Linha das dimensões */}
            <div className="row align-items-center divLinhaCima pt-1 pb-2">
                <div className="col-lg-4 col-sm-12">
                    <h4 className="lblDadoEntrada">{campo} :</h4>
                </div>
                
                {/* Entrada do valor da área quadrada */}
                <div className="col-lg-4 col-sm-12">
                    <h5>
                        <input type="number" className="dadosLocal" onChange={e => setAreaTotal(e.target.value)} placeholder="Área em m2" />
                    </h5>
                </div>

                {/* Entrada do valor do perímetro */}
                <div className="col-lg-4 col-sm-12">
                    <h5>
                        <input type="number" className="dadosLocal" onChange={e => setPerimetro(e.target.value)} placeholder="Perímetro em m" />
                    </h5>
                </div>
            </div>
        </>
    )
}

export default Dimensoes