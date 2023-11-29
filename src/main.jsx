import './componentes/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './Css/tailwind.config.js'
import './componentes/Home.jsx'
import './componentes/Produtos.jsx'
import Header from './componentes/Header.jsx'
import Footer from './componentes/Footer.jsx'
import './componentes/Oproduto.jsx'
import './componentes/Produto_simples.jsx'
import { ContextProvider } from './Context'
import Router from './componentes/Router.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
        <Header/>
        <Router/>
        <Footer/>
       
  </ContextProvider>
)