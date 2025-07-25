'use client'
import TranslatorApp from "@/Components/TranslatorApp";
import TranslatorStart from "@/Components/TranslatorStart";
import { useState } from "react";


export default function Home() {
  const [showTranslatorApp, setShowTranslatorApp] = useState(false);
  return (
    <div className="w-full h-screen bg-gradient-to-l from-[#b6f492] to-[#338b93] flex justify-center items-center">
     <div className="w-[90%] max-w-lg bg-[#2d2d2d] rounded-xl shadow-2xl shadow-gray-800 flex flex-col">
      {
        showTranslatorApp ? (<TranslatorApp onClose={()=> setShowTranslatorApp(false)}/>) : (<TranslatorStart onStart={()=> setShowTranslatorApp(true)}/>)
      }
    
     </div>
    </div>
  );
}
