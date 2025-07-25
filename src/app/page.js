
import TranslatorStart from "@/Components/TranslatorStart";


export default function Home() {
  return (
    <div className="w-full h-screen bg-gradient-to-l from-[#b6f492] to-[#338b93] flex justify-center items-center">
     <div className="w-[90%] max-w-lg bg-[#2d2d2d] rounded-xl shadow-2xl shadow-gray-800 flex flex-col">
     <TranslatorStart/>
     </div>
    </div>
  );
}
