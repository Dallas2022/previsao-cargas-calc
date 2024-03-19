import { createContext, useState, useEffect } from "react";

const Contexto = createContext()

export function ContextoProvider({ children }) {

    // Este State é Utilizado Para Disparar o useEffect Quando as Matrizes de Dados 
    // Usadas nos Componentes São Atualizizadas.
    const [controleRender, setControleRender] = useState(() => {
        return false
    })


    // States Utilizados para o Cálculo da Área Total.
    const [mtzAreaTotal, setMtzAreaTotal] = useState(() => {
        return []
    })

    const [somatoriaAreaTotal, setSomatoriaAreaTotal] = useState(() => {
        return 0
    })


    // States Utilizados para o Cálculo da Potência Total do Sistema de Iluminação.
    const [mtzPotTotIlum, setMtzPotTotIlum] = useState(() => {
        return []
    })

    const [somatoriaIlumPotTotW, setSomatoriaIlumPotTotW] = useState(() => {
        return 0
    })


    // States Utilizados para o Cálculo da Potência Total das Tomadas de Uso Geral - TUG.
    const [mtzPotTotTUG, setMtzPotTotTUG] = useState(() => {
        return []
    })

    const [somatoriaTUGPotTotW, setSomatoriaTUGPotTotW] = useState(() => {
        return 0
    })


    // States Utilizados para o Cálculo da Potência Total das Tomadas de Uso Específico - TUE.
    const [mtzPotTotTUE, setMtzPotTotTUE] = useState(() => {
        return []
    })

    const [somatoriaTUEPotTotW, setSomatoriaTUEPotTotW] = useState(() => {
        return 0
    })


    // States Utilizados para o Cálculo da Potência Total Geral - Somatória das Potências.
    const [somatoriaPotTotGeralW, setSomatoriaPotTotGeralW] = useState(() => {
        return 0
    })


    useEffect(() => {

        // Lógica de Cálculo da Área Total do Dimensionamento.
        let somatoriaAreaTotal = 0

        mtzAreaTotal.forEach( el => 
            somatoriaAreaTotal = somatoriaAreaTotal + Number(el[1])
        )

        setSomatoriaAreaTotal(somatoriaAreaTotal)


        // Lógica de Cálculo da Potência Total do Sistema de Iluminação.
        let somatoriaIlum = 0
        
        mtzPotTotIlum.forEach(el => {
            somatoriaIlum = somatoriaIlum + Number(el[1] * el[2] + el[3] * 60)
        });

        setSomatoriaIlumPotTotW(somatoriaIlum)


        // Lógica de Cálculo da Potência Total das Tomadas de Uso Geral - TUG.
        let somatoriaTUG = 0

        mtzPotTotTUG.forEach(el => {
            somatoriaTUG = somatoriaTUG + Number(el[1] * el[2])
        });
        
        setSomatoriaTUGPotTotW(somatoriaTUG)


        // Lógica de Cálculo da Potência Total das Tomadas de Uso Específico - TUE.
        let somatoriaTUE = 0

        mtzPotTotTUE.forEach(el => {
            somatoriaTUE = somatoriaTUE + Number(el[2])
        });
        
        setSomatoriaTUEPotTotW(somatoriaTUE)


        // Lógica de Cálculo da Potência Total Geral - Somatória das Potências.
        setSomatoriaPotTotGeralW(somatoriaIlum + somatoriaTUG + somatoriaTUE)

    }, [controleRender])


return (
    <>
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