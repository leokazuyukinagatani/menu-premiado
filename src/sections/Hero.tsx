import { Button } from "@/components/ui/button";
import {
    Carousel,
    type CarouselApi,
    CarouselContent
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { ChefHat, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CarouselCardItem } from "@/components/CarouselCardItem";
import {   
    Card,
    CardContent,
    CardHeader,
    CardTitle,} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { StarFilledIcon } from "@radix-ui/react-icons";

export function Hero() {
    const [email, setEmail] = useState("");
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    const images = [
        "https://picsum.photos/id/237/400/300",
        "https://picsum.photos/id/238/400/300",
        "https://picsum.photos/id/239/400/300",
    ];

    const items = [
    {
        src: "/images/catedral.jpg", // Imagem 1
        alt: "Catedral",
    },
    {
        src: "/images/aguadoce.jpg", // Imagem 2
        alt: "AguaDoce",
    },
    {
        src: "/images/bom-pastel.jpg", // Imagem 3
        alt: "Bom Pastel",
    }
    ];

    const howToUseSteps = [
        { title: "Faça Check-in para pontuar", description: "Ganhe pontos ao realizar seu check-in." },
        { title: "Conclua seu pré-cadastro", description: "Preencha suas informações para começar." },
        { title: "Conheça os checkpoints do roteiro", description: "Explore os pontos importantes do seu roteiro." },
        { title: "Conclua sua jornada para mais vantagens", description: "Finalize sua experiência e aproveite!" },
    ];

    function handleClickRoteiro() {
        navigate("/road-map");
    }

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <section className="relative pt-28 pb-10 lg:pt-60 lg:pb-40">
            <div className="flex flex-col lg:flex-row items-center justify-between px-4">
                <div className="lg:w-1/2 w-full mb-8 lg:mb-0 text-left">
                    <h2 className="text-3xl lg:text-5xl font-bold text-red-700 mb-4">
                        GastronoCity
                    </h2>
                    <p className="text-lg lg:text-xl text-red-700 mb-6">
                        Você e sua família aproveitando o melhor da culinária local com um gostinho de quero mais!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            className="bg-red-700 hover:bg-red-600 text-white h-auto rounded-14 w-full sm:w-[45%] text-lg truncate"
                            onClick={handleClickRoteiro}
                        >
                            Meu Roteiro
                        </Button>
                        <Button
                            className="h-auto rounded-14 w-full sm:w-[45%] text-lg border-red-600 text-red-600 hover:bg-red-50 truncate"
                            onClick={() => navigate("/minhas-conquistas")}
                        >
                            Minhas conquistas
                        </Button>
                    </div>
                    <div className="flex space-x-8 mt-4">
                        <div className="flex items-center">
                            <ChefHat className="w-6 h-6 text-red-600 mr-2" />
                            <span className="text-red-800">20+ Pratos</span>
                        </div>
                        <div className="flex items-center">
                            <MapPin className="w-6 h-6 text-red-600 mr-2" />
                            <span className="text-red-800">17 Locais únicos</span>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full">
                    <div className="relative">
                        <Carousel setApi={setApi} plugins={[Autoplay({ delay: 2000 })]}>
                            <CarouselContent>
                                {items.map((item, index) => (
                                    <CarouselCardItem
                                        key={index}
                                        src={item.src}
                                        alt={item.alt}
                                        // className="w-full h-auto object-cover"
                                    />
                                ))}
                            </CarouselContent>
                        </Carousel>
                        <div className="absolute lg:-bottom-6 lg:-left-6 md:bottom-2 md:left-2 bg-white p-4 rounded-lg shadow-md">
                            <div className="flex items-center mb-2">
                                <StarFilledIcon className="w-5 h-5 text-yellow-400" />
                                <StarFilledIcon className="w-5 h-5 text-yellow-400" />
                                <StarFilledIcon className="w-5 h-5 text-yellow-400" />
                                <StarFilledIcon className="w-5 h-5 text-yellow-400" />
                                <StarFilledIcon className="w-5 h-5 text-yellow-400" />
                            </div>
                            <p className="text-sm text-gray-600">
                                "Uma jornada culinária inesquecível"
                            </p>
                            <p className="text-xs text-gray-500 mt-1">- Pedro P.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="mt-16">
                <h3 className="text-2xl font-semibold text-red-800 mb-6 text-center">
                    Tours Recomendados
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((tour) => (
                        <a href="/road-map" key={tour}>
                            <div
                                key={tour}
                                className="bg-yellow-50 rounded-lg shadow-md overflow-hidden"
                            >
                                <img
                                    src={
                                        "/images/logo_gastrono_city_mostarda.png?height=200&width=400"
                                    }
                                    alt={`Tour ${tour}`}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h4 className="text-xl font-semibold text-red-800 mb-2">
                                        Gourmet Adventure Tour {tour}
                                    </h4>
                                    <p className="text-red-700 mb-4">
                                        Explore the finest restaurants and
                                        hidden gems in the city.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-red-600 font-semibold">
                                            $99 per person
                                        </span>
                                        <div className="flex items-center">
                                            <Users className="w-5 h-5 text-red-600 mr-1" />
                                            <span className="text-sm text-red-700">
                                                2-8 people
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div> */}
            <section className="py-12 bg-yellow-50">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-semibold text-red-800 mb-8 text-center">
                    Como usar
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {howToUseSteps.map((step, index) => (
                        <Card key={index} className="bg-white border-2 border-red-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="bg-red-100 py-4">
                            <CardTitle className="text-red-800 text-base sm:text-lg md:text-xl flex items-center flex-wrap">
                            <span className="bg-red-600 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base">
                                {index + 1}
                            </span>
                            <span className="flex-grow">{step.title}</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-4">
                            <p className="text-red-700 text-sm sm:text-base">{step.description}</p>
                        </CardContent>
                        </Card>
                    ))}
                    </div>
                </div>
            </section>

            <div className="mt-16 bg-yellow-100 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-semibold text-red-800 mb-4">
                    Junte-se a comunidade GastronoCity
                </h3>
                <p className="text-red-700 mb-6">
                    Subscreva a nossa newsletter para ofertas exclusivas, novos anúncios turísticos e dicas de comida local!
                </p>
                <div className="flex max-w-md mx-auto">
                    <Input
                        type="email"
                        placeholder="Entre com seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-grow mr-2"
                    />
                    <Button className="bg-red-700 hover:bg-red-500 text-white">
                        Inscreva-se
                    </Button>
                </div>
            </div>
        </section>
    );
}
