import { useContext } from "react"
import { Context } from "../Context"

export function Card({imagem,descricao,categoria,preco,id,titulo}) {
    const { setIndexProduto, setActualScreen } = useContext(Context)
    const handleAction = () =>{
        setActualScreen(1)
        setIndexProduto(id)
    }
    return(
    
        <div className=" p-10 md:w-1/4 inline-block transition-transform transform hover:scale-105 ">

            <div className="h-full border-2 border-blue-100 border-opacity-60 rounded-2xl overflow-hidden ">
                
                <img className="h-[400px] md:h-[400px] w-full object-scale-down object-center" src={imagem} alt="blog"/>
                
                <div className="p-6 ">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 ">{categoria}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{titulo}</h1>
                    <p className="leading-relaxed mb-3 h-[100px] overflow-auto esconderScroll">{descricao}.</p>
                    <div className="flex items-center flex-wrap">
                        <button onClick={handleAction} className="text-blue-300 hover:text-blue-500 transition-transform transform hover:scale-105 cursor-pointer flex  md:mb-2 lg:mb-0 ">
                            Comprar | R$ {preco}
                        
                        </button>
                        
                        
                       
                       
                    </div>
                </div>
            </div>   
            </div>
              
    )
}
    