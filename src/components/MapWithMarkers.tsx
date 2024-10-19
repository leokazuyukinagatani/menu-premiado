import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface MapWithMakersProps {
    center: [number, number];
    zoom: number;
    itineraryPoints: { name: string; lat: number; lng: number }[];
}
interface CustomMakerProps {
    point: { name: string; lat: number; lng: number };
}
export function MapWithMarkers({ center, zoom, itineraryPoints }:  MapWithMakersProps) {
    return (
        <MapContainer
            center={center}
            zoom={zoom}
            style={{ height: '100%', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/1/1/1.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {itineraryPoints.map((point, index) => (
                <CustomMarker key={index} point={point} />
            ))}
        </MapContainer>
    );
}
const CustomMarker = ({ point }: CustomMakerProps) => {
    return (
        <Marker position={[point.lat, point.lng]}>
            <Popup>{point.name}</Popup>
        </Marker>
    );
};