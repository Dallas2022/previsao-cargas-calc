import { createContext, useState, useEffect } from "react";

const Contexto = createContext()

export function ContextoProvider({ children }) {

    const [controleRender, setControleRender] = useState(() => {
        return false
    })

    const [mtzPotTotIlum, setMtzPotTotIlum] = useState(() => {
        return []
    })

    const [mtzResultadoIlumPotTotW, setMtzResultadoIlumPotTotW] = useState(() => {
        return []
    })

    const [somatoriaIlumPotTotW, setSomatoriaIlumPotTotW] = useState(() => {
        return 0
    })


    useEffect(() => {

        setMtzResultadoIlumPotTotW([])
        let somatoria = 0
        
        mtzPotTotIlum.forEach(el => {
            somatoria = somatoria + el[1] * el[2] + el[3] * 60
        });

        setSomatoriaIlumPotTotW(somatoria)

    }, [controleRender])




return (
    <>
        <Contexto.Provider value={{
            mtzPotTotIlum, setMtzPotTotIlum,
            somatoriaIlumPotTotW,
            controleRender, setControleRender
        }}>
            {children}
        </Contexto.Provider>
    </>
)

}

export default Contexto