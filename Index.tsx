
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import { Calendar, Video, File, Clock, Shield, MessageSquare } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />

        {/* Features Section */}
        <section className="medilink-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-medilink-dark">
                Why Choose MediLink?
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Our platform is designed to make healthcare accessible, efficient, and personal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={Video}
                title="Video Consultations"
                description="Connect with healthcare providers through secure, high-quality video calls from anywhere."
              />
              <FeatureCard
                icon={Calendar}
                title="Easy Scheduling"
                description="Book, reschedule, or cancel appointments with just a few clicks, 24/7."
              />
              <FeatureCard
                icon={File}
                title="Digital Health Records"
                description="Access and share your medical records securely with authorized healthcare providers."
              />
              <FeatureCard
                icon={Clock}
                title="Instant Availability"
                description="See doctors' real-time availability and get same-day appointments when needed."
              />
              <FeatureCard
                icon={Shield}
                title="Privacy & Security"
                description="Your data is protected with bank-level encryption and strict privacy controls."
              />
              <FeatureCard
                icon={MessageSquare}
                title="Follow-up Care"
                description="Receive post-consultation care instructions and message your doctor with questions."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="medilink-section bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-medilink-dark">
                How MediLink Works
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Get the care you need in three simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="relative">
                <div className="medilink-card flex flex-col items-center text-center h-full">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-medilink-primary text-white text-xl font-bold mb-6">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-medilink-dark mb-3">
                    Find Your Doctor
                  </h3>
                  <p className="text-gray-600">
                    Search for specialists by symptom, specialty, or doctor name and review their qualifications.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="#E5DEFF" />
                    <path d="M16 20H24M24 20L20 16M24 20L20 24" stroke="#6E59A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <div className="medilink-card flex flex-col items-center text-center h-full">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-medilink-primary text-white text-xl font-bold mb-6">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-medilink-dark mb-3">
                    Book Appointment
                  </h3>
                  <p className="text-gray-600">
                    Select a convenient time slot from the doctor's calendar and confirm your appointment.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="#E5DEFF" />
                    <path d="M16 20H24M24 20L20 16M24 20L20 24" stroke="#6E59A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div>
                <div className="medilink-card flex flex-col items-center text-center h-full">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-medilink-primary text-white text-xl font-bold mb-6">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-medilink-dark mb-3">
                    Connect Virtually
                  </h3>
                  <p className="text-gray-600">
                    Join your secure video consultation at the scheduled time and receive personalized care.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/find-doctor">
                <Button size="lg" className="medilink-btn-primary">
                  Find a Doctor Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="medilink-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-medilink-dark">
                What Our Patients Say
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Real experiences from people like you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "MediLink made it so easy to get care for my son's rash while we were traveling. We connected with a dermatologist within an hour!",
                  author: "Maria T.",
                  role: "Parent",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop",
                },
                {
                  quote:
                    "As someone with a chronic condition, being able to see my specialist from home has been life-changing. No more taking time off work for appointments.",
                  author: "James W.",
                  role: "Patient",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop",
                },
                {
                  quote:
                    "The quality of care I've received through MediLink has been outstanding. The platform is intuitive and the doctors are top-notch professionals.",
                  author: "Sarah K.",
                  role: "Healthcare Worker",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop",
                },
              ].map((testimonial, index) => (
                <div key={index} className="medilink-card">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-500 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-gray-600 flex-grow mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center mt-auto">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="h-12 w-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <p className="font-semibold text-medilink-dark">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-medilink-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Modern Healthcare?</h2>
                <p className="text-lg opacity-90 mb-8">
                  Join thousands of patients who've simplified their healthcare journey with MediLink.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link to="/register">
                    <Button size="lg" className="w-full sm:w-auto bg-white text-medilink-primary hover:bg-gray-100">
                      Create Free Account
                    </Button>
                  </Link>
                  <Link to="/find-doctor">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-medilink-primary/80">
                      Browse Doctors
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex justify-end">
                <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold">2000+</div>
                      <div className="text-sm opacity-80">Doctors</div>
                    </div>
                    <div className="h-12 w-px bg-white/30"></div>
                    <div className="text-center">
                      <div className="text-4xl font-bold">50+</div>
                      <div className="text-sm opacity-80">Specialties</div>
                    </div>
                    <div className="h-12 w-px bg-white/30"></div>
                    <div className="text-center">
                      <div className="text-4xl font-bold">24/7</div>
                      <div className="text-sm opacity-80">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="text-2xl font-bold text-medilink-primary mb-4">
                Medi<span className="text-medilink-secondary">Link</span>
              </div>
              <p className="text-gray-600 mb-4">
                Connecting patients and doctors for better healthcare outcomes.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-medilink-primary">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-medilink-primary">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-medilink-primary">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-medilink-primary">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="col-span-1">
              <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/video-consultation" className="text-gray-600 hover:text-medilink-primary">Video Consultation</Link>
                </li>
                <li>
                  <Link to="/find-doctor" className="text-gray-600 hover:text-medilink-primary">Find Doctors</Link>
                </li>
                <li>
                  <Link to="/health-records" className="text-gray-600 hover:text-medilink-primary">Health Records</Link>
                </li>
                <li>
                  <Link to="/prescriptions" className="text-gray-600 hover:text-medilink-primary">Prescriptions</Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-medilink-primary">About Us</Link>
                </li>
                <li>
                  <Link to="/careers" className="text-gray-600 hover:text-medilink-primary">Careers</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-medilink-primary">Contact</Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-600 hover:text-medilink-primary">Blog</Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/terms" className="text-gray-600 hover:text-medilink-primary">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-600 hover:text-medilink-primary">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-gray-600 hover:text-medilink-primary">Cookie Policy</Link>
                </li>
                <li>
                  <Link to="/hipaa-compliance" className="text-gray-600 hover:text-medilink-primary">HIPAA Compliance</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} MediLink. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
