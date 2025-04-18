
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Video, Users } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-white to-medilink-accent min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-medilink-dark">
                Healthcare at Your Fingertips
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-xl">
                Connect with certified doctors via secure video consultations. Book appointments, manage records, and receive care—all from the comfort of your home.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/find-doctor">
                <Button size="lg" className="medilink-btn-primary w-full sm:w-auto">
                  Find a Doctor
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline" className="medilink-btn-outline w-full sm:w-auto">
                  Create Account
                </Button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 pt-4">
              <div className="flex items-center">
                <div className="bg-white p-2 rounded-full shadow-md">
                  <Video className="h-6 w-6 text-medilink-primary" />
                </div>
                <span className="ml-3 text-gray-700">Secure video consultations</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white p-2 rounded-full shadow-md">
                  <Calendar className="h-6 w-6 text-medilink-primary" />
                </div>
                <span className="ml-3 text-gray-700">Easy appointment booking</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white p-2 rounded-full shadow-md">
                  <Users className="h-6 w-6 text-medilink-primary" />
                </div>
                <span className="ml-3 text-gray-700">Verified specialists</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=987&auto=format&fit=crop" 
                alt="Doctor with patient during video consultation"
                className="rounded-lg shadow-xl w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-medilink-primary rounded-lg opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-medilink-secondary rounded-lg opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
