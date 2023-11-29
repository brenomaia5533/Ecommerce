import { createContext, useState } from "react";

export const Context = createContext({})

export const ContextProvider = ({children}) => {
   const [indexProduto, setIndexProduto] = useState(null)
   
    const [actualScreen, setActualScreen] = useState(0)
    const values = {
        actualScreen, setActualScreen, indexProduto, setIndexProduto
   }
    return (
        <Context.Provider value={values}> 
            {children}
        </Context.Provider>
    )
}