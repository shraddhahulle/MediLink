
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Calendar, Clock, MapPin, Video, MessageSquare, FileText, X } from "lucide-react";

// Mock appointment data - would be fetched based on ID in a real app
const mockAppointment = {
  id: "apt-1",
  doctorName: "Dr. Sarah Johnson",
  doctorSpecialty: "Cardiology",
  doctorQualification: "MD, FACC",
  doctorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
  date: "Today",
  time: "2:30 PM",
  duration: 30,
  status: "upcoming",
  reasonForVisit: "Annual heart checkup and medication review",
  location: "Video Consultation",
  patientNotes: "I've been experiencing occasional chest pain after exercise.",
  doctorNotes: "",
  prescriptions: [],
  paymentStatus: "Paid",
  paymentAmount: "$120",
};

export default function Appointment() {
  const { id } = useParams<{ id: string }>();
  const [appointment] = useState(mockAppointment);
  const [activeTab, setActiveTab] = useState("details");
  
  const isUpcoming = appointment.status === "upcoming";
  
  const getStatusBadge = (status: string) => {
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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Appointment Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex justify-between items-start mb-6">
              <Link to="/dashboard" className="text-medilink-primary hover:underline flex items-center text-sm">
                ← Back to Dashboard
              </Link>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(appointment.status)}`}>
                {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
              </span>
            </div>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-6 md:mb-0">
                <img 
                  src={appointment.doctorImage} 
                  alt={appointment.doctorName} 
                  className="h-32 w-32 rounded-full object-cover border-4 border-medilink-accent"
                />
              </div>
              
              <div className="md:w-3/4">
                <h1 className="text-2xl font-bold text-medilink-dark mb-2">
                  Appointment with {appointment.doctorName}
                </h1>
                <p className="text-medilink-primary font-medium">
                  {appointment.doctorSpecialty} · {appointment.doctorQualification}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-medilink-primary mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="font-medium">{appointment.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-medilink-primary mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Time</p>
                      <p className="font-medium">{appointment.time} ({appointment.duration} min)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-medilink-primary mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">{appointment.location}</p>
                    </div>
                  </div>
                </div>
                
                {isUpcoming && (
                  <div className="flex flex-wrap gap-3 mt-6">
                    <Link to={`/appointment/${id}/join`}>
                      <Button className="medilink-btn-primary flex items-center">
                        <Video className="h-4 w-4 mr-2" />
                        Join Video Call
                      </Button>
                    </Link>
                    <Link to={`/appointment/${id}/reschedule`}>
                      <Button variant="outline" className="medilink-btn-outline flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Reschedule
                      </Button>
                    </Link>
                    <Link to={`/appointment/${id}/cancel`}>
                      <Button 
                        variant="outline" 
                        className="border-medilink-alert text-medilink-alert hover:bg-red-50 flex items-center"
                      >
                        <X className="h-4 w-4 mr-2" />
                        Cancel Appointment
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Appointment Content */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-b border-gray-200">
              <div className="flex">
                {[
                  { id: "details", label: "Details", icon: FileText },
                  { id: "messages", label: "Messages", icon: MessageSquare },
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      className={`px-6 py-3 text-sm font-medium flex items-center ${
                        activeTab === tab.id
                          ? "border-b-2 border-medilink-primary text-medilink-primary"
                          : "text-gray-500 hover:text-medilink-primary hover:border-medilink-primary/30 hover:border-b-2"
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-6">
              {activeTab === "details" && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-medilink-dark mb-3">
                      Reason for Visit
                    </h3>
                    <p className="text-gray-700 bg-gray-50 p-4 rounded-md">
                      {appointment.reasonForVisit}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-medilink-dark mb-3">
                      Patient Notes
                    </h3>
                    <p className="text-gray-700 bg-gray-50 p-4 rounded-md">
                      {appointment.patientNotes || "No additional notes provided."}
                    </p>
                  </div>

                  {appointment.status === "completed" && (
                    <>
                      <div>
                        <h3 className="text-lg font-semibold text-medilink-dark mb-3">
                          Doctor's Notes
                        </h3>
                        <p className="text-gray-700 bg-gray-50 p-4 rounded-md">
                          {appointment.doctorNotes || "No notes available yet."}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-medilink-dark mb-3">
                          Prescriptions
                        </h3>
                        {appointment.prescriptions && appointment.prescriptions.length > 0 ? (
                          <ul className="divide-y divide-gray-200 border border-gray-200 rounded-md">
                            {appointment.prescriptions.map((prescription: any, index: number) => (
                              <li key={index} className="p-4 flex justify-between items-center">
                                <div>
                                  <p className="font-medium">{prescription.name}</p>
                                  <p className="text-sm text-gray-500">{prescription.dosage}</p>
                                </div>
                                <Button variant="outline" size="sm">
                                  View Details
                                </Button>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-700 bg-gray-50 p-4 rounded-md">
                            No prescriptions issued for this appointment.
                          </p>
                        )}
                      </div>
                    </>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold text-medilink-dark mb-3">
                      Payment Information
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Status:</span>
                        <span className="font-medium">{appointment.paymentStatus}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Amount:</span>
                        <span className="font-medium">{appointment.paymentAmount}</span>
                      </div>
                    </div>
                  </div>

                  {isUpcoming && (
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-semibold text-medilink-dark mb-3">
                        Appointment Instructions
                      </h3>
                      <div className="bg-medilink-accent p-4 rounded-md">
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Please join the video call 5 minutes before the scheduled time.</li>
                          <li>Ensure you have a stable internet connection and your device's camera and microphone are working.</li>
                          <li>Find a quiet, well-lit place for your consultation.</li>
                          <li>Have any relevant medical documents or test results ready to share with your doctor.</li>
                          <li>If you need to cancel or reschedule, please do so at least 24 hours in advance.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "messages" && (
                <div className="text-center py-12">
                  <MessageSquare className="h-12 w-12 text-medilink-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-medilink-dark mb-2">
                    No messages yet
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Your conversation with Dr. Sarah Johnson will appear here after your first message.
                  </p>
                  <Button className="medilink-btn-primary">
                    Start Conversation
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} MediLink. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
