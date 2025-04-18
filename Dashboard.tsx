
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import AppointmentCard from "@/components/AppointmentCard";
import { Calendar, Clock, Video, Bell, FileText, Settings, UserCircle } from "lucide-react";

// Mock appointment data
const mockAppointments = [
  {
    id: "apt-1",
    doctorName: "Dr. Sarah Johnson",
    doctorSpecialty: "Cardiology",
    doctorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
    date: "Today",
    time: "2:30 PM",
    duration: 30,
    status: "upcoming" as const,
    reasonForVisit: "Annual heart checkup and medication review",
  },
  {
    id: "apt-2",
    doctorName: "Dr. Michael Chen",
    doctorSpecialty: "Dermatology",
    doctorImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
    date: "Nov 25, 2025",
    time: "10:00 AM",
    duration: 20,
    status: "upcoming" as const,
    reasonForVisit: "Skin rash examination",
  },
  {
    id: "apt-3",
    doctorName: "Dr. Emily Rodriguez",
    doctorSpecialty: "Pediatrics",
    doctorImage: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2187&auto=format&fit=crop",
    date: "Nov 15, 2025",
    time: "3:45 PM",
    duration: 45,
    status: "completed" as const,
    reasonForVisit: "Child's routine checkup",
  },
  {
    id: "apt-4",
    doctorName: "Dr. Jessica Patel",
    doctorSpecialty: "Psychiatry",
    doctorImage: "https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?q=80&w=2787&auto=format&fit=crop",
    date: "Nov 10, 2025",
    time: "1:15 PM",
    duration: 60,
    status: "cancelled" as const,
    reasonForVisit: "Follow-up session",
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [userProfile] = useState({
    name: "Alex Thompson",
    email: "alex.thompson@example.com",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop",
  });

  const filteredAppointments = mockAppointments.filter(
    (appointment) => {
      if (activeTab === "upcoming") return appointment.status === "upcoming";
      if (activeTab === "completed") return appointment.status === "completed";
      if (activeTab === "cancelled") return appointment.status === "cancelled";
      return true; // "all" tab
    }
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Dashboard Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center">
                <img
                  src={userProfile.avatar}
                  alt={userProfile.name}
                  className="h-16 w-16 rounded-full object-cover border-2 border-medilink-accent mr-4"
                />
                <div>
                  <h1 className="text-2xl font-bold text-medilink-dark">Welcome, {userProfile.name}</h1>
                  <p className="text-gray-600">{userProfile.email}</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline" className="flex items-center" size="sm">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
                <Button variant="outline" className="flex items-center" size="sm">
                  <UserCircle className="h-4 w-4 mr-2" />
                  My Profile
                </Button>
                <Button variant="outline" className="flex items-center" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>
          </div>

          {/* Dashboard Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Link to="/find-doctor" className="medilink-card flex flex-col items-center justify-center py-6 text-center hover:border-medilink-primary transition-colors">
              <Video className="h-8 w-8 text-medilink-primary mb-4" />
              <h3 className="font-semibold text-medilink-dark mb-1">New Consultation</h3>
              <p className="text-sm text-gray-600">Book a new appointment</p>
            </Link>
            <Link to="/health-records" className="medilink-card flex flex-col items-center justify-center py-6 text-center hover:border-medilink-primary transition-colors">
              <FileText className="h-8 w-8 text-medilink-primary mb-4" />
              <h3 className="font-semibold text-medilink-dark mb-1">Health Records</h3>
              <p className="text-sm text-gray-600">View your medical history</p>
            </Link>
            <Link to="/prescriptions" className="medilink-card flex flex-col items-center justify-center py-6 text-center hover:border-medilink-primary transition-colors">
              <FileText className="h-8 w-8 text-medilink-primary mb-4" />
              <h3 className="font-semibold text-medilink-dark mb-1">Prescriptions</h3>
              <p className="text-sm text-gray-600">Access your medications</p>
            </Link>
            <Link to="/calendar" className="medilink-card flex flex-col items-center justify-center py-6 text-center hover:border-medilink-primary transition-colors">
              <Calendar className="h-8 w-8 text-medilink-primary mb-4" />
              <h3 className="font-semibold text-medilink-dark mb-1">Calendar</h3>
              <p className="text-sm text-gray-600">View all appointments</p>
            </Link>
          </div>

          {/* Upcoming Appointment Alert */}
          {filteredAppointments.some(
            (apt) => apt.status === "upcoming" && apt.date === "Today"
          ) && (
            <div className="bg-medilink-accent border-l-4 border-medilink-primary rounded-md p-4 mb-8 flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-medilink-primary mr-3" />
                <div>
                  <h3 className="font-semibold text-medilink-dark">
                    You have an appointment today
                  </h3>
                  <p className="text-sm text-gray-600">
                    Don't forget your appointment with Dr. Sarah Johnson at 2:30 PM
                  </p>
                </div>
              </div>
              <Link to="/appointment/apt-1/join">
                <Button className="medilink-btn-primary">
                  Join Now
                </Button>
              </Link>
            </div>
          )}

          {/* Appointments Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-medilink-dark">
                    My Appointments
                  </h2>
                  <p className="text-gray-600">Manage your upcoming and past consultations</p>
                </div>
                <Link to="/find-doctor">
                  <Button className="medilink-btn-primary">
                    Book New Appointment
                  </Button>
                </Link>
              </div>
            </div>

            <div className="border-b border-gray-200">
              <div className="flex">
                {["All", "Upcoming", "Completed", "Cancelled"].map((tab) => {
                  const tabValue = tab.toLowerCase();
                  return (
                    <button
                      key={tab}
                      className={`px-6 py-3 text-sm font-medium ${
                        activeTab === tabValue
                          ? "border-b-2 border-medilink-primary text-medilink-primary"
                          : "text-gray-500 hover:text-medilink-primary hover:border-medilink-primary/30 hover:border-b-2"
                      }`}
                      onClick={() => setActiveTab(tabValue)}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                {filteredAppointments.length > 0 ? (
                  filteredAppointments.map((appointment) => (
                    <AppointmentCard key={appointment.id} {...appointment} />
                  ))
                ) : (
                  <div className="text-center py-12">
                    <div className="text-medilink-primary text-5xl mb-4">📅</div>
                    <h3 className="text-xl font-semibold text-medilink-dark mb-2">
                      No {activeTab} appointments
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {activeTab === "upcoming"
                        ? "You don't have any upcoming appointments scheduled."
                        : activeTab === "completed"
                        ? "You don't have any completed appointments yet."
                        : activeTab === "cancelled"
                        ? "You don't have any cancelled appointments."
                        : "You don't have any appointments yet."}
                    </p>
                    {activeTab === "upcoming" && (
                      <Link to="/find-doctor">
                        <Button className="medilink-btn-primary">
                          Book an Appointment
                        </Button>
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Health Insights */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-medilink-dark">
                Health Insights
              </h2>
              <p className="text-gray-600">Recent activity and recommendations</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-medilink-dark mb-3">
                    Recent Prescriptions
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Amoxicillin 500mg</p>
                        <p className="text-sm text-gray-500">Prescribed on Nov 15</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </li>
                    <li className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Loratadine 10mg</p>
                        <p className="text-sm text-gray-500">Prescribed on Nov 10</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-medilink-dark mb-3">
                    Health Reminders
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Annual Physical Checkup</p>
                        <p className="text-sm text-gray-500">Due in 2 months</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Schedule
                      </Button>
                    </li>
                    <li className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Flu Vaccination</p>
                        <p className="text-sm text-gray-500">Recommended</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Schedule
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
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
