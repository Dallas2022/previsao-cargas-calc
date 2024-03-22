
// Código elaborado por: Nelson Braga
// Cargo: Desenvolvedor Fullstack
// Data: 22/03/2024

import { createContext, useState, useEffect } from "react";

// Este arquivo de contexto concentra as matrizes que recebem os dados de
// cada tabela criada de forma dinâmica. Aqui também são realizados os
// cálculos e fornecidos os resultados

const Contexto = createContext()

export function ContextoProvider({ children }) {

    // Este state é utilizado para disparar o useEffect quando as matrizes de
    // dados usadas nos componentes são atualizadas
    const [controleRender, setControleRender] = useState(() => {
        return false
    })


    // States utilizados para o cálculo da área total
    const [mtzAreaTotal, setMtzAreaTotal] = useState(() => {
        return []
    })

    const [somatoriaAreaTotal, setSomatoriaAreaTotal] = useState(() => {
        return 0
    })


    // States utilizados para o cálculo da potência total do sistema de iluminação
    const [mtzPotTotIlum, setMtzPotTotIlum] = useState(() => {
        return []
    })

    const [somatoriaIlumPotTotW, setSomatoriaIlumPotTotW] = useState(() => {
        return 0
    })


    // States utilizados para o cálculo da potência total das tomadas de uso geral - TUG
    const [mtzPotTotTUG, setMtzPotTotTUG] = useState(() => {
        return []
    })

    const [somatoriaTUGPotTotW, setSomatoriaTUGPotTotW] = useState(() => {
        return 0
    })


    // States utilizados para o cálculo da potência total das tomadas de uso específico - TUE
    const [mtzPotTotTUE, setMtzPotTotTUE] = useState(() => {
        return []
    })

    const [somatoriaTUEPotTotW, setSomatoriaTUEPotTotW] = useState(() => {
        return 0
    })


    // States utilizados para o cálculo da potência total geral - Somatória das potências
    const [somatoriaPotTotGeralW, setSomatoriaPotTotGeralW] = useState(() => {
        return 0
    })


    // Este "useEffect" é executado toda vez que um dado for alterado pelo usuário
    useEffect(() => {

        // Lógica de cálculo da área total do dimensionamento
        let somatoriaAreaTotal = 0

        mtzAreaTotal.forEach( el => 
            somatoriaAreaTotal = somatoriaAreaTotal + Number(el[1])
        )

        setSomatoriaAreaTotal(somatoriaAreaTotal)


        // Lógica de cálculo da potência total do sistema de iluminação
        let somatoriaIlum = 0
        
        mtzPotTotIlum.forEach(el => {
            somatoriaIlum = somatoriaIlum + Number(el[1] * el[2] + el[3] * 60)
        });

        setSomatoriaIlumPotTotW(somatoriaIlum)


        // Lógica de cálculo da potência total das tomadas de uso geral - TUG
        let somatoriaTUG = 0

        mtzPotTotTUG.forEach(el => {
            somatoriaTUG = somatoriaTUG + Number(el[1] * el[2])
        });
        
        setSomatoriaTUGPotTotW(somatoriaTUG)


        // Lógica de cálculo da potência total das tomadas de uso específico - TUE
        let somatoriaTUE = 0

        mtzPotTotTUE.forEach(el => {
            somatoriaTUE = somatoriaTUE + Number(el[2])
        });
        
        setSomatoriaTUEPotTotW(somatoriaTUE)


        // Lógica de cálculo da potência total geral - Somatória das potências
        setSomatoriaPotTotGeralW(somatoriaIlum + somatoriaTUG + somatoriaTUE)

    }, [controleRender])


return (
    <>
        {/* Recursos disponibilizados de forma pública para realização dos cálculos */}
        <Contexto.Provider value={{
            mtzAreaTotal, setMtzAreaTotal,
            somatoriaAreaTotal,
            mtzPotTotIlum, setMtzPotTotIlum,
            somatoriaIlumPotTotW,
            mtzPotTotTUG, setMtzPotTotTUG,
            somatoriaTUGPotTotW,
            mtzPotTotTUE, setMtzPotTotTUE,
            somatoriaTUEPotTotW,
            somatoriaPotTotGeralW,
            controleRender, setControleRender
        }}>
            {children}
        </Contexto.Provider>
    </>
)

}

export default Contexto