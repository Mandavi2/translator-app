'use client'
import React, { useState } from 'react'
import { languages } from '@/languagesData'



const TranslatorApp = ({onClose}) => {

  const [selectedLanguageFrom, setSelectedLanguageFrom] = useState('en');
  const [selectedLanguageTo, setSelectedLanguageTo] = useState('fr');
  const [showLanguages, setShowLanguages] = useState(false);
  const [currentLanguageSelection, setCurrentLanguageSelection] = useState(null);

  const handleLanguageClick=(type)=>{
        setCurrentLanguageSelection(type)
        setShowLanguages(true)
  }

  const handleLanguageSelect=(languageCode)=>{
      if( currentLanguageSelection === 'from'){
        setSelectedLanguageFrom(languageCode)
        setShowLanguages(false)
      }else{
        setSelectedLanguageTo(languageCode)
        setShowLanguages(false)
      }
  }

  const handleSwapLanguages =()=>{
    setSelectedLanguageFrom(selectedLanguageTo)
    setSelectedLanguageTo(selectedLanguageFrom)
  }

  return (
    <div className='w-full flex flex-col gap-y-4 justify-center items-center px-8 pt-12 pb-6 relative'>
     <button className='absolute top-4 right-4'>
      <i className=" fa-solid fa-xmark text-xl text-gray-300 cursor-pointer" onClick={onClose}></i>
     </button>
      <div className='w-full min-h-20 flex justify-center items-center px-4 bg-gradient-to-r from-[#b6f492] to-[#338b93] text-gray-700 rounded-lg'>
        <div className='language' onClick={()=>handleLanguageClick("from")}>{languages[selectedLanguageFrom] || "English"}</div>
        <i className="fa-solid fa-arrows-rotate text-2xl mx-8 cursor-pointer" onClick={handleSwapLanguages}></i>
        <div className='language'onClick={()=>handleLanguageClick("to")}
          >{languages[selectedLanguageTo] || "French"}</div>
      </div>
      {
        showLanguages && (<div className='w-[calc(100%-4rem)] h-[calc(100%-9rem)] bg-gradient-to-r from-[#b6f492] to-[#338b93] absolute top-32 left-8 z-10 rounded shadow-lg p-4 overflow-y-scroll scrollbar-hide'>
          <ul>
            { Object.entries(languages).map(([code, name])=>( 
              <li 
              key={code} 
              className='cursor-pointer hover:bg-[#10646b] transition duration-200 p-2 rounded'
              onClick={()=> handleLanguageSelect(code)}
              >
              {name}
              </li> )) }
          </ul>
        </div>)
      }
      <div className='w-full relative'>
        <textarea className='textarea'></textarea>
        <div className='font-russo absolute bottom-2 right-4 text-gray-400'>0/200</div>
      </div>
      <button className='w-12 h-12 bg-gradient-to-r from-[#b6f492] to-[#338b93] rounded-full text-2xl text-gray-600 flex justify-center items-center transition-transform duration-100 active:translate-y-[2px] cursor-pointer'>
        <i className="fa-solid fa-chevron-down"></i>
      </button>
      <div className='w-full'>
        <textarea className='textarea'></textarea>
      </div>
    </div>
  )
}

export default TranslatorApp