import React, { useContext } from 'react'
import { Context } from '../Context'
import ListaProdutos from './Home'
import ProductScreen from './Produto_simples'
import Finalizado from './Finalizado'

const Router = () => {
  const { indexProduto, actualScreen } = useContext(Context)
    return (
        <>
            {
                actualScreen == 0 ? <ListaProdutos/> 
                :actualScreen == 1 ?  <ProductScreen idProduto={indexProduto}/> 
                :actualScreen == 2 ? <Finalizado/>
                :<div>
                    lamento
                </div>
            }
        </>
  )
}

export default Router