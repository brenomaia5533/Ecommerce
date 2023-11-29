import React from 'react'
import Lottie from 'lottie-react'
import loading from '../assets/Loading.json'
const Finalizado = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <Lottie animationData={loading} loop={false}/>
    </div>
  )
}

export default Finalizado