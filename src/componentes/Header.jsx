import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./index.css"

function Header() {
  return (
    <header class="text-white body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        
          <span class="ml-3 text-xl">LuxeStyles</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-900"></a>
          <a class="mr-5 hover:text-gray-900"></a>
          <a class="mr-5 hover:text-gray-900"></a>
          <a class="mr-5 hover:text-gray-900"></a>
        </nav>
        <button class="inline-flex items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-400 rounded text-base mt-4 md:mt-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."> Meu carrinho
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}
export default Header
