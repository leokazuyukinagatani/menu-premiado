import { useState } from 'react';
import { MapPin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function RoadMap() {
  const [showTooltip, setShowTooltip] = useState(false);
  const navigation = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md border-8 border-red-800 rounded-3xl p-6 md:p-8 relative overflow-hidden">
        <a href="#" className="absolute top-4 left-4 md:top-6 md:left-6 z-10" onClick={() => {
          navigation("/");
        }}>
          <ArrowLeft className="h-8 w-8 md:h-10 md:w-10 text-red-800 hover:text-red-900 transition-colors" />
          <span className="sr-only">Voltar</span>
        </a>
        
        <div className="relative">
          <div
            className="w-full h-auto rounded-2xl mb-4 bg-gray"
          />
          <div className="text-center mt-4">
            <div className="relative inline-block">
              <button
                className="bg-red-800 hover:bg-red-900 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <MapPin className="mr-2 h-4 w-4 md:h-5 md:w-5 hidden-on-small" />
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
    </div>
  );
}
