import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Briefcase, Clock, ArrowRight, Building2, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function Careers() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  
  const jobListings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Join our engineering team to build and maintain the core platform that connects patients with healthcare providers.",
      requirements: [
        "5+ years of experience in full stack development",
        "Proficiency in React, Node.js, and SQL databases",
        "Experience with healthcare systems is a plus"
      ]
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Design intuitive and accessible user interfaces for our telemedicine platform to enhance the healthcare experience.",
      requirements: [
        "3+ years of experience in UI/UX design",
        "Proficiency in Figma, Sketch, or similar tools",
        "Healthcare or medical industry experience preferred"
      ]
    },
    {
      id: 3,
      title: "Product Manager",
      department: "Product",
      location: "Boston, MA",
      type: "Full-time",
      description: "Lead the development of new features and products that improve the healthcare experience for both patients and providers.",
      requirements: [
        "4+ years of experience in product management",
        "Experience with healthcare products or services",
        "Strong analytical and communication skills"
      ]
    },
    {
      id: 4,
      title: "Healthcare Compliance Specialist",
      department: "Legal",
      location: "New York, NY",
      type: "Full-time",
      description: "Ensure our platform complies with healthcare regulations including HIPAA and manage privacy and security policies.",
      requirements: [
        "5+ years of experience in healthcare compliance",
        "Knowledge of HIPAA, GDPR, and other healthcare regulations",
        "Experience with telehealth compliance issues"
      ]
    },
    {
      id: 5,
      title: "Customer Success Manager",
      department: "Customer Support",
      location: "Remote",
      type: "Full-time",
      description: "Work with healthcare providers to ensure they're getting the most out of the MediLink platform and resolving any issues.",
      requirements: [
        "3+ years of experience in customer success or account management",
        "Experience in SaaS or healthcare technology",
        "Strong problem-solving and communication skills"
      ]
    },
    {
      id: 6,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Drive patient and provider acquisition through digital marketing channels and analyze campaign performance.",
      requirements: [
        "3+ years of experience in digital marketing",
        "Experience with healthcare or medical marketing",
        "Proficiency in marketing analytics and social media platforms"
      ]
    },
  ];
  
  const departments = Array.from(new Set(jobListings.map(job => job.department)));
  const locations = Array.from(new Set(jobListings.map(job => job.location)));
  
  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = searchQuery === "" || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDepartment = selectedDepartment === null || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === null || job.location === selectedLocation;
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const handleApply = (jobId: number, jobTitle: string) => {
    toast({
      title: "Application Started",
      description: `You're applying for ${jobTitle}. Please fill out the contact form.`,
    });
    navigate("/contact", { state: { jobId, jobTitle } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-medilink-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">Join the MediLink Team</h1>
              <p className="text-xl opacity-90 mb-8">
                Help us transform healthcare through technology and make a meaningful impact on patients' lives.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-white text-medilink-primary hover:bg-gray-100">
                  View Open Positions
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-medilink-primary/80">
                  Meet Our Team
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-medilink-dark mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do at MediLink.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="h-10 w-10 text-medilink-primary mb-4" />,
                  title: "Patient-Centered",
                  description: "We put patients at the center of everything we build and every decision we make."
                },
                {
                  icon: <Building2 className="h-10 w-10 text-medilink-primary mb-4" />,
                  title: "Innovation",
                  description: "We continuously seek new and better ways to solve healthcare challenges."
                },
                {
                  icon: <Shield className="h-10 w-10 text-medilink-primary mb-4" />,
                  title: "Trust & Privacy",
                  description: "We maintain the highest standards of security, privacy, and ethical conduct."
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-medilink-dark mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-medilink-dark mb-4">Open Positions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our mission to make healthcare more accessible through technology.
              </p>
            </div>
            
            <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search positions..."
                  className="pl-10 pr-4 py-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              
              <div>
                <select 
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  value={selectedDepartment || ""}
                  onChange={(e) => setSelectedDepartment(e.target.value || null)}
                >
                  <option value="">All Departments</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <select 
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  value={selectedLocation || ""}
                  onChange={(e) => setSelectedLocation(e.target.value || null)}
                >
                  <option value="">All Locations</option>
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {filteredJobs.length > 0 ? (
              <div className="space-y-6">
                {filteredJobs.map((job) => (
                  <div key={job.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-medilink-dark">{job.title}</h3>
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                          <div className="flex items-center text-gray-600">
                            <Briefcase size={16} className="mr-1" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin size={16} className="mr-1" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock size={16} className="mr-1" />
                            <span>{job.type}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-medilink-accent text-medilink-primary border-none">
                        New
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    
                    <h4 className="font-medium text-medilink-dark mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 mb-6 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="text-gray-600">{req}</li>
                      ))}
                    </ul>
                    
                    <Button 
                      className="medilink-btn-primary mt-2 flex items-center gap-2"
                      onClick={() => handleApply(job.id, job.title)}
                    >
                      Apply Now <ArrowRight size={16} />
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No positions found</h3>
                <p className="text-gray-600 mb-6">We couldn't find any positions matching your search criteria.</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedDepartment(null);
                    setSelectedLocation(null);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
        
        <section className="py-16 bg-medilink-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-medilink-dark mb-4">Don't See the Right Position?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
            </p>
            <Link to="/contact">
              <Button size="lg" className="medilink-btn-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-50 border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} MediLink. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
