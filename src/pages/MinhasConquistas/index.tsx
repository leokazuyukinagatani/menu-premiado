import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft,  CheckCircle } from "lucide-react";
import { useState } from "react";

export const MinhasConquistas = () => {
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
        title: "Cupom invalido",
        description: " Por favor, coloque um cupom valido para o check-in.",
        variant: "destructive",
      });
    }
  };

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
        </div>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-red-700 mb-1">
              Current Points
            </p>
            <p className="text-2xl font-bold text-red-800">{loyaltyPoints}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-red-700 mb-1">
              Progresso para recompensa
            </p>
            <Progress
              value={((loyaltyPoints % 100) / 100) * 100}
              className="w-full"
            />
            <p className="text-xs text-red-700 mt-1">
              {100 - (loyaltyPoints % 100)} pontos para proxima recompensa
            </p>
          </div>
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Coloque seu cupom"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <Button
              onClick={handleCheckIn}
              disabled={isCheckedIn}
              className="w-full bg-red-600 hover:bg-red-700 text-white"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              {isCheckedIn ? "Checked In" : "Check In por 10 pontos"}
            </Button>
          </div>
        </div>
      </CardContent>
    </div>
    </div>
  );
};
