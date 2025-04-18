
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DoctorCardProps {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  experience: number;
  imageUrl: string;
  available: boolean;
  nextAvailable?: string;
}

export default function DoctorCard({
  id,
  name,
  specialty,
  rating,
  reviewCount,
  experience,
  imageUrl,
  available,
  nextAvailable,
}: DoctorCardProps) {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleViewProfile = () => {
    // In a real app, you would navigate to the doctor's profile page
    // navigate(`/doctor/${id}`);
    
    toast({
      title: "Doctor Profile",
      description: `Viewing ${name}'s profile information`,
    });
    
    // For demo purposes, show more detailed information in a toast
    setTimeout(() => {
      toast({
        title: `Dr. ${name} - ${specialty}`,
        description: `${experience} years of experience with ${reviewCount} patient reviews.`,
      });
    }, 500);
  };

  const handleBookAppointment = () => {
    // In a real app, navigate to the booking page with the doctor ID
    navigate(`/appointment/${id}`);
    
    toast({
      title: "Appointment Booking",
      description: `Starting appointment booking with ${name}`,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="relative">
            <img
              src={imageUrl}
              alt={`Dr. ${name}`}
              className="h-24 w-24 rounded-full object-cover border-2 border-medilink-accent"
            />
            {available && (
              <span className="absolute bottom-0 right-0 bg-green-500 h-4 w-4 rounded-full border-2 border-white"></span>
            )}
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-medilink-dark">{name}</h3>
            <p className="text-medilink-primary">{specialty}</p>
            
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(rating)
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {rating.toFixed(1)} ({reviewCount} reviews)
                </span>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mt-1">{experience} years experience</p>
          </div>
        </div>
        
        <div className="mt-6 border-t pt-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              {available ? (
                <span className="text-green-600 flex items-center">
                  <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                  Available Today
                </span>
              ) : (
                <span className="text-gray-500 flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Next available: {nextAvailable}
                </span>
              )}
            </div>
            
            <div className="flex space-x-2 w-full sm:w-auto">
              <Button 
                variant="outline" 
                className="flex-1 sm:flex-initial medilink-btn-outline"
                onClick={handleViewProfile}
              >
                View Profile
              </Button>
              <Button 
                className="flex-1 sm:flex-initial medilink-btn-primary"
                onClick={handleBookAppointment}
              >
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
