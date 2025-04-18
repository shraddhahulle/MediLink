
import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Video } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from auth context in a real app
  const location = useLocation();
  const navigate = useNavigate();
  const servicesRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  // Close services dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Login functionality simulation
  const handleLogin = () => {
    toast({
      title: "Login Required",
      description: "Please sign in to access your account",
    });
  };

  // Sign up functionality
  const handleSignUp = () => {
    navigate("/create-account");
    toast({
      title: "Create an Account",
      description: "Registration form will be displayed",
    });
  };

  // Hide navbar on video consultation page
  if (location.pathname.includes("/video-consultation")) {
    return null;
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-medilink-primary">Medi<span className="text-medilink-secondary">Link</span></span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className={`text-gray-700 hover:text-medilink-primary transition-colors ${location.pathname === '/' ? 'text-medilink-primary' : ''}`}>
              Home
            </Link>
            <Link to="/find-doctor" className={`text-gray-700 hover:text-medilink-primary transition-colors ${location.pathname === '/find-doctor' ? 'text-medilink-primary' : ''}`}>
              Find Doctors
            </Link>
            <div className="relative group" ref={servicesRef}>
              <button 
                className={`flex items-center text-gray-700 hover:text-medilink-primary transition-colors ${isServicesOpen || location.pathname === '/health-records' || location.pathname === '/prescriptions' ? 'text-medilink-primary' : ''}`}
                onClick={toggleServices}
              >
                Services <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute z-10 left-0 transform -translate-x-1/4 mt-2 w-48 bg-white rounded-md shadow-lg ${isServicesOpen ? 'block' : 'hidden group-hover:block'}`}>
                <div className="py-1">
                  <Link 
                    to="/video-consultation" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-medilink-accent"
                    onClick={() => {
                      setIsServicesOpen(false);
                      toast({
                        title: "Video Consultation",
                        description: "Connecting to our virtual consulting room",
                      });
                    }}
                  >
                    Video Consultation
                  </Link>
                  <Link 
                    to="/health-records" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-medilink-accent"
                    onClick={() => {
                      setIsServicesOpen(false);
                      toast({
                        title: "Health Records",
                        description: "Access your secure health documents",
                      });
                    }}
                  >
                    Health Records
                  </Link>
                  <Link 
                    to="/prescriptions" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-medilink-accent"
                    onClick={() => {
                      setIsServicesOpen(false);
                      toast({
                        title: "Prescriptions",
                        description: "View and manage your prescriptions",
                      });
                    }}
                  >
                    Prescriptions
                  </Link>
                </div>
              </div>
            </div>
            <Link 
              to="/about" 
              className={`text-gray-700 hover:text-medilink-primary transition-colors ${location.pathname === '/about' ? 'text-medilink-primary' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-700 hover:text-medilink-primary transition-colors ${location.pathname === '/contact' ? 'text-medilink-primary' : ''}`}
            >
              Contact
            </Link>

            {isLoggedIn ? (
              <div className="flex space-x-2">
                <Link to="/dashboard">
                  <Button className="medilink-btn-primary">Dashboard</Button>
                </Link>
                <Link to="/video-consultation">
                  <Button variant="outline" className="medilink-btn-outline flex items-center gap-2">
                    <Video size={16} />
                    Start Call
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  className="medilink-btn-outline"
                  onClick={handleLogin}
                >
                  Login
                </Button>
                <Button 
                  className="medilink-btn-primary"
                  onClick={handleSignUp}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-medilink-primary"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-medilink-accent rounded-md"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/find-doctor"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-medilink-accent rounded-md"
              onClick={toggleMenu}
            >
              Find Doctors
            </Link>
            <Link
              to="/video-consultation"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-medilink-accent rounded-md"
              onClick={() => {
                toggleMenu();
                toast({
                  title: "Video Consultation",
                  description: "Connecting to our virtual consulting room",
                });
              }}
            >
              Video Consultation
            </Link>
            <Link
              to="/health-records"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-medilink-accent rounded-md"
              onClick={() => {
                toggleMenu();
                toast({
                  title: "Health Records",
                  description: "Access your secure health documents",
                });
              }}
            >
              Health Records
            </Link>
            <Link
              to="/prescriptions"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-medilink-accent rounded-md"
              onClick={() => {
                toggleMenu();
                toast({
                  title: "Prescriptions",
                  description: "View and manage your prescriptions",
                });
              }}
            >
              Prescriptions
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-medilink-accent rounded-md"
              onClick={() => {
                toggleMenu();
              }}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-medilink-accent rounded-md"
              onClick={() => {
                toggleMenu();
              }}
            >
              Contact
            </Link>

            {isLoggedIn ? (
              <div className="space-y-2 pt-2">
                <Link
                  to="/dashboard"
                  className="block w-full px-3 py-2 text-base font-medium text-white bg-medilink-primary rounded-md"
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
                <Link
                  to="/video-consultation"
                  className="block w-full px-3 py-2 text-base font-medium flex items-center justify-center gap-2 border border-medilink-primary text-medilink-primary rounded-md"
                  onClick={toggleMenu}
                >
                  <Video size={16} />
                  Start Call
                </Link>
              </div>
            ) : (
              <div className="space-y-2 pt-2">
                <Button
                  variant="outline"
                  className="w-full medilink-btn-outline"
                  onClick={() => {
                    toggleMenu();
                    handleLogin();
                  }}
                >
                  Login
                </Button>
                <Button
                  className="w-full medilink-btn-primary"
                  onClick={() => {
                    toggleMenu();
                    handleSignUp();
                  }}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
