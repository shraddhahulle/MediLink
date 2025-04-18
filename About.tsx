
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Heart, Shield, Star, Users } from "lucide-react";

export default function About() {
  const { toast } = useToast();

  const handleContactClick = () => {
    toast({
      title: "Contact Us",
      description: "Redirecting to contact page",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-white py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-medilink-dark mb-6">
                About MediLink
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're on a mission to make healthcare more accessible, convenient, and personalized for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Our mission */}
        <section className="py-16 bg-medilink-accent/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-medilink-dark mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  At MediLink, we believe that everyone deserves access to high-quality healthcare, regardless of where they live or their circumstances. Our platform connects patients with trusted healthcare providers through secure video consultations, making it easier than ever to get the care you need.
                </p>
                <p className="text-gray-600 mb-6">
                  We're committed to breaking down barriers to healthcare access, reducing wait times, and improving patient outcomes through innovative technology and a patient-centered approach.
                </p>
                <Button 
                  className="medilink-btn-primary flex items-center gap-2"
                  onClick={handleContactClick}
                >
                  Get in Touch <ArrowRight size={16} />
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1631815576829-ff2c6c2929c0?q=80&w=2532&auto=format&fit=crop"
                  alt="Medical team" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg w-64 hidden md:block">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  </div>
                  <p className="text-gray-600 text-sm italic">
                    "MediLink has revolutionized how I access healthcare. Quick appointments with specialists from the comfort of my home!"
                  </p>
                  <p className="text-right text-sm font-medium mt-2">— Sarah T.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core values */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-medilink-dark mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do at MediLink
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="mx-auto w-12 h-12 bg-medilink-accent rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-medilink-primary" />
                </div>
                <h3 className="text-xl font-semibold text-medilink-dark mb-3">Patient-Centered Care</h3>
                <p className="text-gray-600">
                  We put patients first in everything we do, focusing on creating experiences that are compassionate, respectful, and responsive to individual needs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="mx-auto w-12 h-12 bg-medilink-accent rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-medilink-primary" />
                </div>
                <h3 className="text-xl font-semibold text-medilink-dark mb-3">Trust & Security</h3>
                <p className="text-gray-600">
                  We maintain the highest standards of privacy and data security, ensuring that all interactions and information on our platform are protected.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="mx-auto w-12 h-12 bg-medilink-accent rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-medilink-primary" />
                </div>
                <h3 className="text-xl font-semibold text-medilink-dark mb-3">Accessibility</h3>
                <p className="text-gray-600">
                  We're committed to making healthcare accessible to everyone, breaking down geographical, financial, and logistical barriers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-medilink-dark mb-4">Our Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the experts behind MediLink
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop"
                  alt="CEO portrait" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-medilink-dark">Dr. James Wilson</h3>
                  <p className="text-medilink-primary">CEO & Co-Founder</p>
                  <p className="text-gray-600 mt-3">
                    Former Chief of Medicine with 15+ years experience in healthcare innovation and technology.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop"
                  alt="CTO portrait" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-medilink-dark">Dr. Sophia Chen</h3>
                  <p className="text-medilink-primary">CTO & Co-Founder</p>
                  <p className="text-gray-600 mt-3">
                    Healthcare technology expert with a background in telehealth systems and AI applications in medicine.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
                  alt="CMO portrait" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-medilink-dark">Dr. Olivia Martinez</h3>
                  <p className="text-medilink-primary">Chief Medical Officer</p>
                  <p className="text-gray-600 mt-3">
                    Board-certified physician focused on improving patient experience and clinical outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-medilink-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Join the Healthcare Revolution</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Experience the future of healthcare with MediLink. Sign up today and connect with top specialists from the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-medilink-primary hover:bg-gray-100"
                onClick={() => {
                  toast({
                    title: "Create Account",
                    description: "Directing to sign up page",
                  });
                }}
              >
                Create Free Account
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10"
                onClick={handleContactClick}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
