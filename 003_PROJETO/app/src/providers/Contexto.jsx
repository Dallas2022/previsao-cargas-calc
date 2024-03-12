import { createContext, useState } from "react";

const Contexto = createContext()

export function ContextoProvider({children}) {

    const [mtzPotTotIlum, setMtzPotTotIlum] = useState(() => {
        return []
    })

    return(
        <>
            <Contexto.Provider value={{mtzPotTotIlum, setMtzPotTotIlum}}>
                {children}
            </Contexto.Provider>
        </>
    )

}

export default Contexto