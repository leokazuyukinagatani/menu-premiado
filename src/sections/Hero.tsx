import { Button } from "@/components/ui/button";
import {
    Carousel,
    type CarouselApi,
    CarouselContent
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { ChefHat, MapPin, Star, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CarouselCardItem } from "@/components/CarouselCardItem";
import {   
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

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
        navigate("/");
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
        <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <h2 className="text-4xl lg:text-5xl font-bold text-red-700 mb-4">
                        GastronoCity
                    </h2>
                    <p className="text-xl text-red-700 mb-6">
                        Você e sua família aproveitando o melhor da culinária
                        local com um gostinho de quero mais!
                    </p>
                    <div className="flex space-x-4 mb-8">
                        <Button
                            className="bg-red-700 hover:bg-red-600 text-white"
                            onClick={handleClickRoteiro}
                        >
                            Meu Roteiro
                        </Button>
                    </div>
                    <div className="flex space-x-8">
                        <div className="flex items-center">
                            <ChefHat className="w-6 h-6 text-red-600 mr-2" />
                            <span className="text-red-800">20+ Guias</span>
                        </div>
                        <div className="flex items-center">
                            <MapPin className="w-6 h-6 text-red-600 mr-2" />
                            <span className="text-red-800">
                                17+ Locais únicos
                            </span>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="relative">
                        <Carousel
                            setApi={setApi}
                             plugins={[
                                Autoplay({
                                delay: 2000,
                                }),
                            ]}
                        >
                            <CarouselContent>
                                {items.map((item, index) => (
                                    <CarouselCardItem
                                        key={index}
                                        src={item.src}
                                        alt={item.alt}
                                    />
                                ))}
                              
                            </CarouselContent>
                        </Carousel>
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md">
                            <div className="flex items-center mb-2">
                                <Star className="w-5 h-5 text-yellow-400" />
                                <Star className="w-5 h-5 text-yellow-400" />
                                <Star className="w-5 h-5 text-yellow-400" />
                                <Star className="w-5 h-5 text-yellow-400" />
                                <Star className="w-5 h-5 text-yellow-400" />
                            </div>
                            <p className="text-sm text-gray-600">
                                "Uma jornada culinária inesquecível"
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                - Pedro P.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <h3 className="text-2xl font-semibold text-red-800 mb-6 text-center">
                    Tours Recomendados
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((tour) => (
                        <a href="/details" key={tour}>
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
            </div>
        
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
                    Join Our Foodie Community
                </h3>
                <p className="text-red-700 mb-6">
                    Subscribe to our newsletter for exclusive offers, new tour
                    announcements, and local food tips!
                </p>
                <div className="flex max-w-md mx-auto">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-grow mr-2"
                    />
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                        Subscribe
                    </Button>
                </div>
            </div>
        </section>
    );
}
