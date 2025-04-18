
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video, FileText, X } from "lucide-react";

type AppointmentStatus = "upcoming" | "completed" | "cancelled";

interface AppointmentCardProps {
  id: string;
  doctorName: string;
  doctorSpecialty: string;
  doctorImage: string;
  date: string;
  time: string;
  duration: number;
  status: AppointmentStatus;
  reasonForVisit?: string;
}

export default function AppointmentCard({
  id,
  doctorName,
  doctorSpecialty,
  doctorImage,
  date,
  time,
  duration,
  status,
  reasonForVisit,
}: AppointmentCardProps) {
  const getStatusColor = (status: AppointmentStatus) => {
    switch (status) {
      case "upcoming":
        return "bg-medilink-accent text-medilink-primary";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const isUpcoming = status === "upcoming";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <img
              src={doctorImage}
              alt={doctorName}
              className="h-12 w-12 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="font-semibold text-medilink-dark">{doctorName}</h3>
              <p className="text-sm text-gray-600">{doctorSpecialty}</p>
            </div>
          </div>

          <div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                status
              )}`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </div>
        </div>

        <div className="mb-4 bg-gray-50 p-3 rounded-md">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 text-medilink-primary mr-2" />
              <span className="text-sm">{date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-medilink-primary mr-2" />
              <span className="text-sm">
                {time} ({duration} min)
              </span>
            </div>
          </div>
        </div>

        {reasonForVisit && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-1">Reason for visit:</h4>
            <p className="text-sm text-gray-600">{reasonForVisit}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-4">
          <Link to={`/appointment/${id}`} className="flex-1">
            <Button variant="outline" className="w-full flex items-center justify-center">
              <FileText className="h-4 w-4 mr-2" />
              Details
            </Button>
          </Link>

          {isUpcoming && (
            <>
              <Link to={`/appointment/${id}/join`} className="flex-1">
                <Button className="w-full medilink-btn-primary flex items-center justify-center">
                  <Video className="h-4 w-4 mr-2" />
                  Join Call
                </Button>
              </Link>
              
              <Link to={`/appointment/${id}/cancel`} className="flex-1">
                <Button 
                  variant="outline" 
                  className="w-full border-medilink-alert text-medilink-alert hover:bg-red-50 flex items-center justify-center"
                >
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
