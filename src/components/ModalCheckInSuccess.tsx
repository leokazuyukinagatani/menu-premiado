import { Star } from "lucide-react";

interface IModalCheckInSuccess {
  name: string;
  onClose: () => void;
}

export function ModalCheckInSuccess({
  name = "Teste",
  onClose = () => {},
}: IModalCheckInSuccess) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-red-800 mb-4">
          PARABÉNS, {name.split(" ")[0].toUpperCase()}!
        </h2>
        <div className="flex justify-center mb-4">
          <Star className="h-16 w-16 text-yellow-400" />
        </div>
        <p className="text-red-700 text-lg mb-6">PONTO GERADO</p>
        <button
          onClick={onClose}
          className="bg-red-800 hover:bg-red-900 text-white px-6 py-3 rounded-md font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          VEJA MAIS
        </button>
      </div>
    </div>
  );
}
