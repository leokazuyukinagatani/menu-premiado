import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface IModalCheckIn {
  name: string;
  setName: (data: string) => void;
  setPhone: (data: string) => void;
  phone: string;
  onClose: () => void;
  onSubmit: () => void;
  showModal: boolean;
}

export function ModalCheckIn({
  onSubmit,
  onClose,
  setPhone,
  setName,
  name,
  phone,
  showModal,
}: IModalCheckIn) {
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 11) {
      setPhone(value);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  useEffect(() => {
    setIsPhoneValid(phone.length === 11);
  }, [phone]);

  useEffect(() => {
    setIsNameValid(name.trim().length > 0);
  }, [name]);

  const handleSubmit = () => {
    if (isPhoneValid && isNameValid) {
      onSubmit();
    }
  };
  if (!showModal) return <></>;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-red-800">Check-in</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="space-y-6">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              className="w-full px-4 py-3 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-red-50 text-red-800 placeholder-red-300"
              placeholder="(11) 98765-4321"
            />
          </div>
          {isPhoneValid && (
            <div className="transition-opacity duration-300 ease-in-out">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="w-full px-4 py-3 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-white text-red-800 placeholder-red-300"
                placeholder="Seu nome completo"
              />
            </div>
          )}
          <button
            onClick={handleSubmit}
            disabled={!isPhoneValid || !isNameValid}
            className={`w-full py-3 px-4 rounded-md text-white font-semibold text-lg ${
              isPhoneValid && isNameValid
                ? "bg-red-800 hover:bg-red-900"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
