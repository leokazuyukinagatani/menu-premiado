import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Award, CheckCircle } from "lucide-react";
import { useState } from "react";

export const UserProfile = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white text-black rounded-lg shadow-lg p-6 w-full max-w-sm">
        <div className="flex items-center mb-4">
          <button
            className="text-red-600"
            onClick={() => (window.location.href = "/")}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="ml-4 text-xl font-bold">Perfil do Usuário</h2>
        </div>

        <div className="flex flex-col space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Nome:</label>
            <p className="text-lg">Lucas Garavaglia</p>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">
              Telefone:
            </label>
            <p className="text-lg">(45) 99908-7584</p>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Email:</label>
            <p className="text-lg">lucas.toledo@gmail.com</p>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">
              Data de Nascimento:
            </label>
            <p className="text-lg">15/08/1990</p>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-6 h-6 text-yellow-500" />
            <span className="font-bold">Ranking: Ouro</span>
          </div>
        </div>

        <button
          className="mt-6 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
          onClick={() => (window.location.href = "/")}
        >
          Retornar à Home
        </button>
      </div>
    </div>
  );
};
