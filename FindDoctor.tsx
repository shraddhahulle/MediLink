import { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import DoctorCard from "@/components/DoctorCard";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Mock doctor data
const mockDoctors = [
  {
    id: "dr-1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    rating: 4.9,
    reviewCount: 124,
    experience: 12,
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
    available: true,
  },
  {
    id: "dr-2",
    name: "Dr. Michael Chen",
    specialty: "Dermatology",
    rating: 4.7,
    reviewCount: 98,
    experience: 8,
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
    available: true,
  },
  {
    id: "dr-3",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    rating: 4.8,
    reviewCount: 156,
    experience: 10,
    imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2187&auto=format&fit=crop",
    available: false,
    nextAvailable: "Tomorrow, 10:00 AM",
  },
  {
    id: "dr-4",
    name: "Dr. David Wilson",
    specialty: "Neurology",
    rating: 4.6,
    reviewCount: 87,
    experience: 15,
    imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop",
    available: true,
  },
  {
    id: "dr-5",
    name: "Dr. Jessica Patel",
    specialty: "Psychiatry",
    rating: 4.9,
    reviewCount: 112,
    experience: 9,
    imageUrl: "https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?q=80&w=2787&auto=format&fit=crop",
    available: true,
  },
  {
    id: "dr-6",
    name: "Dr. Robert Kim",
    specialty: "Orthopedics",
    rating: 4.7,
    reviewCount: 145,
    experience: 14,
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2064&auto=format&fit=crop",
    available: false,
    nextAvailable: "Nov 25, 2:30 PM",
  },
];

interface SearchQuery {
  searchText: string;
  specialty: string;
  location: string;
  date: string;
}

export default function FindDoctor() {
  const [doctors, setDoctors] = useState(mockDoctors);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState<SearchQuery | null>(null);
  const { toast } = useToast();

  const handleSearch = (query: SearchQuery) => {
    setIsSearching(true);
    setSearchQuery(query);
    
    // Show toast message
    toast({
      title: "Searching Doctors",
      description: `Looking for available doctors${query.searchText ? ` matching "${query.searchText}"` : ''}`,
    });
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      let filtered = [...mockDoctors];
      
      // Filter by search text (name or specialty)
      if (query.searchText) {
        const searchTextLower = query.searchText.toLowerCase();
        filtered = filtered.filter(
          doctor =>
            doctor.name.toLowerCase().includes(searchTextLower) ||
            doctor.specialty.toLowerCase().includes(searchTextLower)
        );
      }
      
      // Filter by specialty
      if (query.specialty) {
        filtered = filtered.filter(
          doctor => doctor.specialty.toLowerCase() === query.specialty.toLowerCase()
        );
      }
      
      setDoctors(filtered);
      setIsSearching(false);
      
      // Show results toast
      toast({
        title: "Search Complete",
        description: `Found ${filtered.length} doctor${filtered.length === 1 ? '' : 's'} matching your criteria`,
      });
    }, 800);
  };

  const handleFindDoctorNow = () => {
    toast({
      title: "Find a Doctor",
      description: "Showing all available doctors",
    });
    
    setSearchQuery(null);
    setDoctors(mockDoctors);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-medilink-dark mb-2">Find a Doctor</h1>
            <p className="text-gray-600">
              Connect with top healthcare professionals for virtual consultations
            </p>
          </div>

          {/* Search Filters */}
          <div className="mb-8">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Doctor Listing */}
          <div className="space-y-6">
            {isSearching ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-medilink-primary"></div>
              </div>
            ) : doctors.length > 0 ? (
              <>
                {searchQuery && (
                  <div className="mb-4 text-sm text-gray-500">
                    {doctors.length} {doctors.length === 1 ? 'doctor' : 'doctors'} found
                    {searchQuery.searchText && ` for "${searchQuery.searchText}"`}
                    {searchQuery.specialty && ` in ${searchQuery.specialty}`}
                    {searchQuery.location && ` near ${searchQuery.location}`}
                    {searchQuery.date && ` on ${searchQuery.date}`}
                  </div>
                )}
                
                {doctors.map((doctor) => (
                  <DoctorCard key={doctor.id} {...doctor} />
                ))}
              </>
            ) : (
              <div className="text-center py-12">
                <div className="text-medilink-primary text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-medilink-dark mb-2">No doctors found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search filters to find available doctors
                </p>
                <Button 
                  className="medilink-btn-primary"
                  onClick={handleFindDoctorNow}
                >
                  Find a Doctor Now
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} MediLink. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <button 
                className="text-gray-500 hover:text-medilink-primary text-sm"
                onClick={() => toast({
                  title: "Terms of Service",
                  description: "Viewing our terms of service",
                })}
              >
                Terms of Service
              </button>
              <button 
                className="text-gray-500 hover:text-medilink-primary text-sm"
                onClick={() => toast({
                  title: "Privacy Policy",
                  description: "Viewing our privacy policy",
                })}
              >
                Privacy Policy
              </button>
              <button 
                className="text-gray-500 hover:text-medilink-primary text-sm" 
                onClick={() => toast({
                  title: "Contact Us",
                  description: "Get in touch with our support team",
                })}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
