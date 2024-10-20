import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Calendar,
    Clock,
    MapPin,
    Users,
    Utensils,
    CheckCircle,
    Gift,
    Ticket,
    ArrowLeft,
} from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useToast } from "@/hooks/use-toast";

// Fix for default marker icon in react-leaflet
L.Icon.Default.prototype._getIconUrl = undefined;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png",
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const itineraryPoints = [
    { name: "Central Plaza (Meeting Point)", lat: 40.7128, lng: -74.006 },
    { name: "Trendy Bistro", lat: 40.7138, lng: -74.007 },
    { name: "Historic Food District", lat: 40.7148, lng: -74.008 },
    { name: "Traditional Family Restaurant", lat: 40.7158, lng: -74.009 },
    { name: "Local Market", lat: 40.7168, lng: -74.01 },
    { name: "Award-winning Patisserie", lat: 40.7178, lng: -74.011 },
    { name: "Rooftop Bar", lat: 40.7188, lng: -74.012 },
];

export function TourDetails() {
    const [guests, setGuests] = useState(2);
    const [isCheckedIn, setIsCheckedIn] = useState(false);
    const [loyaltyPoints, setLoyaltyPoints] = useState(50); // Assuming the user starts with 50 points
    const [couponCode, setCouponCode] = useState("");
    const [bookingCode, setBookingCode] = useState("");
    const { toast } = useToast();

    const handleCheckIn = () => {
        // In a real application, this would be validated against a backend
        const isValidCoupon = couponCode === bookingCode && couponCode !== "";

        if (!isCheckedIn && isValidCoupon) {
            setIsCheckedIn(true);
            setLoyaltyPoints((prevPoints) => prevPoints + 10);
            toast({
                title: "Check-in successful!",
                description: "You've earned 10 loyalty points.",
            });
        } else if (isCheckedIn) {
            toast({
                title: "Already checked in",
                description: "You can only check in once per tour.",
                variant: "destructive",
            });
        } else {
            toast({
                title: "Invalid coupon code",
                description: "Please enter a valid coupon code to check in.",
                variant: "destructive",
            });
        }
    };

    const handleBooking = () => {
        const pointsEarned = guests * 20; // 20 points per guest
        setLoyaltyPoints((prevPoints) => prevPoints + pointsEarned);
        // Generate a random 6-character alphanumeric code
        const newBookingCode = Math.random()
            .toString(36)
            .substring(2, 8)
            .toUpperCase();
        setBookingCode(newBookingCode);
        toast({
            title: "Booking confirmed!",
            description: `You've earned ${pointsEarned} loyalty points for this booking. Your unique coupon code is ${newBookingCode}`,
        });
    };

    return (
        <main className="container mx-auto px-4 py-8">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    
                    <a href="/">
                        <ArrowLeft className="w-6 h-6 text-red-600"/>
                    </a>
                    <h2 className="text-3xl font-bold text-red-800 mb-4">
                        Gourmet Adventure Tour
                    </h2>

                    <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                        <h3 className="text-xl font-semibold text-red-800 mb-4">
                            Tour Highlights
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <Utensils className="w-5 h-5 text-red-700 mr-2" />
                                <span>5 unique restaurant experiences</span>
                            </li>
                            <li className="flex items-center">
                                <MapPin className="w-5 h-5 text-red-700 mr-2" />
                                <span>
                                    Guided walk through historic food districts
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Users className="w-5 h-5 text-red-700 mr-2" />
                                <span>Meet local chefs and food artisans</span>
                            </li>
                            <li className="flex items-center">
                                <Clock className="w-5 h-5 text-red-700 mr-2" />
                                <span>4-hour immersive experience</span>
                            </li>
                        </ul>
                    </div>

                    <Accordion type="single" collapsible className="mb-6">
                        <AccordionItem value="description">
                            <AccordionTrigger className="text-red-800">
                                Tour Description
                            </AccordionTrigger>
                            <AccordionContent>
                                Embark on a culinary journey through the heart
                                of our city. This Gourmet Adventure Tour will
                                take you to five distinct restaurants, each
                                offering a unique taste of local cuisine. You'll
                                start with appetizers at a trendy bistro, move
                                on to a traditional family-owned eatery for the
                                main course, indulge in artisanal cheeses at a
                                local market, savor desserts at an award-winning
                                patisserie, and conclude with craft cocktails at
                                a rooftop bar. Along the way, you'll meet
                                passionate chefs, learn about the city's
                                culinary history, and discover hidden gems off
                                the beaten path.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="itinerary">
                            <AccordionTrigger className="text-red-800">
                                Itinerary
                            </AccordionTrigger>
                            <AccordionContent>
                                <ol className="list-decimal list-inside space-y-2 mb-4">
                                    <li>
                                        Meet your guide at the central plaza
                                    </li>
                                    <li>
                                        Visit a trendy bistro for appetizers
                                    </li>
                                    <li>Explore the historic food district</li>
                                    <li>
                                        Main course at a traditional
                                        family-owned restaurant
                                    </li>
                                    <li>Cheese tasting at a local market</li>
                                    <li>
                                        Dessert experience at an award-winning
                                        patisserie
                                    </li>
                                    <li>
                                        Conclude with craft cocktails at a
                                        rooftop bar
                                    </li>
                                </ol>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="inclusions">
                            <AccordionTrigger className="text-red-800">
                                What's Included
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Professional food guide</li>
                                    <li>Food tastings at 5 locations</li>
                                    <li>1 craft cocktail</li>
                                    <li>
                                        City map with restaurant recommendations
                                    </li>
                                    <li>
                                        Small group experience (max 8 people)
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="lg:col-span-1">
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle className="text-red-800">
                                Your Loyalty Status
                            </CardTitle>
                            <CardDescription>
                                Earn points with every booking and check-in
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm font-medium text-red-700 mb-1">
                                        Current Points
                                    </p>
                                    <p className="text-2xl font-bold text-red-800">
                                        {loyaltyPoints}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-red-700 mb-1">
                                        Progress to Next Reward
                                    </p>
                                    <Progress
                                        value={
                                            ((loyaltyPoints % 100) / 100) * 100
                                        }
                                        className="w-full"
                                    />
                                    <p className="text-xs text-red-700 mt-1">
                                        {100 - (loyaltyPoints % 100)} points to
                                        next reward
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        type="text"
                                        placeholder="Enter your coupon code"
                                        value={couponCode}
                                        onChange={(e) =>
                                            setCouponCode(e.target.value)
                                        }
                                    />
                                    <Button
                                        onClick={handleCheckIn}
                                        disabled={isCheckedIn}
                                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                                    >
                                        <CheckCircle className="w-4 h-4 mr-2" />
                                        {isCheckedIn
                                            ? "Checked In"
                                            : "Check In for 10 Points"}
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {bookingCode && (
                        <Card className="mt-6">
                            <CardHeader>
                                <CardTitle className="text-red-800">
                                    Your Booking
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <span className="text-red-700">
                                        Coupon Code:
                                    </span>
                                    <span className="font-bold text-red-800">
                                        {bookingCode}
                                    </span>
                                </div>
                                <p className="text-sm text-red-700 mt-2">
                                    Use this code to check in on the day of your
                                    tour.
                                </p>
                            </CardContent>
                        </Card>
                    )}

                    <Card className="mt-6">
                        <CardHeader>
                            <CardTitle className="text-red-800">
                                Tour Details
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <Calendar className="w-5 h-5 text-red-700 mr-2" />
                                    <span>Available daily</span>
                                </li>
                                <li className="flex items-center">
                                    <Clock className="w-5 h-5 text-red-700 mr-2" />
                                    <span>Duration: 4 hours</span>
                                </li>
                                <li className="flex items-center">
                                    <Users className="w-5 h-5 text-red-700 mr-2" />
                                    <span>Group size: 2-8 people</span>
                                </li>
                                <li className="flex items-center">
                                    <MapPin className="w-5 h-5 text-red-700 mr-2" />
                                    <span>Meeting point: Central Plaza</span>
                                </li>
                                <li className="flex items-center">
                                    <Gift className="w-5 h-5 text-red-700 mr-2" />
                                    <span>Earn 20 points per guest</span>
                                </li>
                                <li className="flex items-center">
                                    <Ticket className="w-5 h-5 text-red-700 mr-2" />
                                    <span>
                                        Check-in with unique coupon code
                                    </span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}
