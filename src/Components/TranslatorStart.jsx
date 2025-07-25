
import React from 'react'

const TranslatorStart = () => {
  return (
   <div className='w-full h-full flex flex-col justify-center items-center p-12'>
    <div className='w-full h-64 bg-gradient-to-l from-[#b6f492] to-[#338b93] rounded-t-full rounded-bl-full flex flex-col justify-center text-gray-700 pr-6'>
        <span className='font-shojumaru text-6xl text-center'>Hello</span>
        <span className='text-3xl text-center'>नमस्ते</span>
        <span className='text-4xl text-right font-medium'>こんにちは</span>
        <span className='text-2xl text-right font-russo'>Hola</span>
    </div>
    <div className='w-full text-right space-y-5 mt-12 mb-26'>
        <h1 className='font-righteous text-4xl text-white uppercase'>Translator App</h1>
        <button className='w-32 h-10 bg-gradient-to-r from-[#b6f492] to-[#338b93] font-righteous rounded-full font-bold text-lg uppercase text-gray-700 tracking-widest  transition-transform duration-100 active:translate-y-[2px] cursor-pointer'>Start</button>
    </div>
   </div>
  )
}

export default TranslatorStart