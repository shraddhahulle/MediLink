
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: {
    searchText: string;
    specialty: string;
    location: string;
    date: string;
  }) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchText, setSearchText] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ searchText, specialty, location, date });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1">
            <div className="flex items-center bg-gray-50 rounded-md px-3 h-12">
              <Search className="h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search doctors, specialties..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
          
          <div className="col-span-1">
            <div className="flex items-center bg-gray-50 rounded-md px-3 h-12">
              <select
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="w-full border-0 bg-transparent focus:ring-0 text-gray-700"
              >
                <option value="">All Specialties</option>
                <option value="cardiology">Cardiology</option>
                <option value="dermatology">Dermatology</option>
                <option value="neurology">Neurology</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="psychiatry">Psychiatry</option>
                <option value="orthopedics">Orthopedics</option>
              </select>
            </div>
          </div>
          
          <div className="col-span-1">
            <div className="flex items-center bg-gray-50 rounded-md px-3 h-12">
              <MapPin className="h-4 w-4 text-gray-400 mr-2" />
              <Input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
          
          <div className="col-span-1">
            <div className="flex">
              <div className="flex items-center bg-gray-50 rounded-l-md px-3 h-12 flex-1">
                <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button type="submit" className="medilink-btn-primary rounded-l-none">
                Search
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
