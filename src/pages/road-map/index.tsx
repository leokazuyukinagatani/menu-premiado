import  { useState } from 'react'
import { MapPin } from "lucide-react"

export function RoadMap() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showTooltipRest, setShowTooltipRest] = useState(false);

  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md border-8 border-red-800 rounded-3xl p-6 md:p-8 relative">
        <div className="absolute top-4 left-4 md:top-6 md:left-6">
        <img
            src={`/images/logo_gastrono_city_sm.svg`}
            alt="Check In Icon"
            className="h-20 w-50 md:h-20 md:w-50 text-red-800"
          />
        </div>
        <div className="text-center mt-16 md:mt-20">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-red-800">Meu Roteiro Gastronômico</h1>
          <p className="text-red-700 mb-8 text-sm md:text-base">
            Sua próxima aventura gastronômica está a um clique: quais delícias ainda não cruzaram seu caminho?
          </p>
          <div className="relative mt-10">
            <img src="/images/map_toledo_city_bg.svg" alt="Mapa" className="w-full h-auto rounded-lg" />
            {/* Água Doce Cachaçaria */}
            <div
              onMouseEnter={() => setShowTooltipRest(true)}
              onMouseLeave={() => setShowTooltipRest(false)}
              >
            {showTooltipRest && (
              <div className="absolute bottom-60 left-40 mb-2 px-3 py-2 bg-gray-200 text-gray-800 text-xs rounded shadow-lg">
                Água Doce Cachaçaria<br/>
                Rua Panambi, 44 - La Salle
                <div className="absolute top-full left-1/2 border-4 border-transparent border-t-gray-800"></div>
              </div>
            )}
            <img
              src="/images/map_pin_done.svg"
              alt="Água Doce Cachaçaria"
              className="absolute h-16 w-12 hover:h-18 hover:w-14"
              style={{ top: '30%', left: '50%' }} // ajuste conforme necessário
            />
            </div>
            {/* Restaurante Pantanal */}
            <img
              src="/images/map_pin_default.svg"
              alt="Restaurante Pantanal"
              className="absolute h-16 w-12 hover:h-18 hover:w-14"
              style={{ top: '50%', left: '60%' }} // ajuste conforme necessário
            />
          </div>
          <div className="relative inline-block">
            <button
              className="bg-red-800 hover:bg-red-900 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <MapPin className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Que tal um combo gastronômico?
            </button>
            {showTooltip && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded shadow-lg">
                Que tal um combo gastronômico?
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}