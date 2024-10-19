import { MedalIcon } from "lucide-react";
import { useNavigate } from "react-router-dom"; // para redirecionamento de página

export function Header() {
  const navigate = useNavigate();

  // Função para redirecionar para a página de perfil
  function handleProfileClick() {
    navigate("/profile");
  }

  return (
    <header className="relative z-50 w-full py-10 bg-s6">
    <div className="flex items-center justify-between px-4"> {/* Adicione padding se necessário */}
        <img
            className="w-24 sm:w-40 md:w-32 lg:w-36"
            src="/images/logo_gastrono_city_md.svg"
            alt="logo"
        />
        <a className="cursor-pointer" onClick={handleProfileClick}>
            <MedalIcon className="w-24 h-16 text-yellow-500" />
        </a>
    </div>
</header>

  );
}
