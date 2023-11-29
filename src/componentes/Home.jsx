import axios from "axios"
import { useEffect, useState } from "react"
import { Produtos } from "./Produtos"

const Home =() => {
    const[produtos,setProdutos]=useState([])
    const getProdutos = async () => {
        const resposta = await axios.get("https://fakestoreapi.com/products") 
        const dados = resposta.data
        setProdutos(dados)
    }
    useEffect(()=>{
        getProdutos()
    },[])
    return(
        <section>
           {
            produtos.map((produto,index)=><Produtos key={index}  id={produto.id} descricao={produto.description} imagem={produto.image} preco={produto.price} titulo={produto.title}/>)
           } 
        </section>
    )
}
export default Home