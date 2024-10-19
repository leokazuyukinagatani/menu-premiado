import { Card, CardContent } from "./ui/card";
import { CarouselItem } from "./ui/carousel";

interface CarouselCardItemProps {
  src: string;
  alt: string;
}
export function CarouselCardItem({ src, alt }: CarouselCardItemProps) {
  return (
    <CarouselItem>
      <Card>
        <CardContent className="flex items-center justify-center p-4 overflow-hidden">
          <img src={src} alt={alt} className="w-auto h-full object-cover" />
        </CardContent>
      </Card>
    </CarouselItem>
  );
}
