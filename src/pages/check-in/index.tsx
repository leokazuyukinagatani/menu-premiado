import { useState } from "react";
import { MapPin } from "lucide-react";
// import { useNavigate } from "react-router-dom";
import { ModalCheckInSuccess } from "@/components/ModalCheckInSuccess";
import { ModalCheckIn } from "@/components/ModalCheckIn";

export function CheckIn() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showCheckInModal, setShowCheckInModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  // const navigation = useNavigate();

  const handleCheckIn = () => {
    setShowCheckInModal(true);
  };

  const handleCloseCheckInModal = () => {
    setShowCheckInModal(false);
    setPhone("");
    setName("");
  };

  const handleSubmitCheckIn = () => {
    setShowCheckInModal(false);
    setTimeout(() => {
      setShowSuccessModal(true);
    }, 300);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setPhone("");
    setName("");
    // navigation("/check-in-success");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-[60vw] h-[80vh] border-8 border-red-800 rounded-3xl p-6 md:p-8 relative bg-white">
        <div className="absolute top-4 left-4 md:top-6 md:left-6">
          <img
            src={`/images/logo_gastrono_city_sm.svg`}
            alt="Check In Icon"
            className="h-100 w-50 md:h-100 md:w-50 text-red-800"
          />
        </div>

        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-red-800 text-center">
            Bem-vindo ao GastronoCity
          </h1>
          <p className="text-red-700 mb-8 text-sm md:text-base text-center">
            Faça check-in e comece sua incrível experiência gastronômica
            enquanto acumula seus pontos!
          </p>

          <div className="relative inline-block">
            <button
              className="bg-red-800 hover:bg-red-900 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onClick={handleCheckIn}
            >
              <MapPin className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Fazer Check-in
            </button>
            {showTooltip && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded shadow-lg">
                Clique para fazer check-in no restaurante
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
              </div>
            )}
          </div>
        </div>
      </div>

      <ModalCheckIn
        onSubmit={() => {
          handleSubmitCheckIn();
        }}
        onClose={() => {
          handleCloseCheckInModal();
        }}
        name={name}
        phone={phone}
        setName={(d: string) => {
          setName(d);
        }}
        setPhone={(d: string) => {
          setPhone(d);
        }}
        showModal={showCheckInModal}
      />

      {showSuccessModal && name.length > 0 && (
        <ModalCheckInSuccess name={name} onClose={handleCloseSuccessModal} />
      )}
    </div>
  );
}
