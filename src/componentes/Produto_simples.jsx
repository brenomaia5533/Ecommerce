import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Context } from '../Context'
const ProductScreen = ({ idProduto }) => {
    const [cep, setCep] = useState('')
    const [dataCep, setDataCep] = useState({
        "cep": null,
        "logradouro": null,
        "complemento": null,
        "bairro": null,
        "localidade": null,
        "uf": null,
        "ibge": null,
        "gia": null,
        "ddd": null,
        "siafi": null
      })
    const { setActualScreen } = useContext(Context)
    const handleActionBackHome = () => setActualScreen(0)
    const handleFinish = () => setActualScreen(2)
    const [produto, setProduto] = useState(false)
    
    const changeValueCep = event => {
        setCep(event.target.value)
    }

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${idProduto}`) 
            .then(r=>setProduto(r.data)) 
            .catch(e=> alert("aiiiiiin, api não carregou :( "))  
    },[])
   
    const GetDadosCep = async cep => {
        const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
        setDataCep(data)
    }

    useEffect(()=>{
            const cepNumbers = cep.replace(/\D/g, "");
        if (cepNumbers != "") {
        let validacep = /^[0-9]{8}$/;
        if (validacep.test(cep)) {
            GetDadosCep(cep)
        }
        }
    },[cep])
    return (
        <div className='w-full h-screen '>
            {
                produto ? <div className='flex justify-between h-full w-full'>
                    <div className=' py-20 px-10 w-full h-full flex  gap-[20px] relative'> 
                        <div className='min-h-[600px] max-h-[700px] min-w-[500px] bg-white  rounded-[20px] shadow-md   '>
                            <img src={produto.image} className='p-8  w-full h-full object-scale-down' />
                        </div>

                        <div className='relative flex flex-col gap-9'>
                            <h2 className='font-bold text-5xl text-ellipsis line-clamp-2'>{produto.title}</h2>
                            <div className='overflow-scroll h-30'>
                            <p className='text-[30px] max-h-[450px] pb-40 overflow-y-auto esconderScroll scroll-pb-30 '>{produto.description}</p>
                            </div>
                            <div className=' bg-white'>
                            <p className='bg-white h-[40%] w-full font-black text-[40px] absolute bottom-0 left-0 '>R${produto.price.toFixed(2)}</p>
                            </div>
                            <button onClick={handleActionBackHome } className='p-2 px-[10px] w-fit bg-blue-500 text-white rounded-[10px] font-semibold hover:scale-105 transition-all hover:bg-green-500 shadow-md absolute bottom-[90px] right-10 '>
                                Ver Outros
                            </button>
                        </div>

                    </div>
                    
                    
                    <div className='w-4/6 h-full shadow-md p-20 flex flex-col gap-7 relative'>

                        <h2 className='font-bold text-4xl text-center mb-10'>
                            Finalizar Pedido
                        </h2>


                        <input onChange={changeValueCep} placeholder='CEP' className='outline-none bg-transparent text-black py-2 px-3 border border-black/20 rounded-[5px] w-[250px] ' />

                            <input value={dataCep?.logradouro } placeholder='RUA' className='outline-none bg-transparent text-black py-2 px-3 border border-black/20 rounded-[5px] w-[250px]' />

                            <input value={dataCep?.bairro} placeholder='BAIRRO' className='outline-none bg-transparent text-black py-2 px-3 border border-black/20 rounded-[5px] w-[250px]' />

                            <input value={dataCep?.localidade} placeholder='LOCALIDADE' className='outline-none bg-transparent text-black py-2 px-3 border border-black/20 rounded-[5px] w-[250px]' />

                            <input value={dataCep?.complemento} placeholder='COMPLEMENTO' className='outline-none bg-transparent text-black py-2 px-3 border border-black/20 rounded-[5px] w-[250px]' />


                            <button onClick={handleFinish} className='py-3 px-[60px]  w-fit bg-blue-500 text-white rounded-[10px] font-semibold hover:scale-105 transition-all hover:bg-green-500 shadow-md absolute bottom-[50px] right-30 '>
                                Comprar
                            </button>
                    </div>
                </div> :null
            }
        </div>
    )
}

export default ProductScreen