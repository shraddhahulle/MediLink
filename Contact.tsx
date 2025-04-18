
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const navigate = useNavigate();
  const location = useLocation();
  const jobApplication = location.state;
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll respond shortly.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Button
            variant="ghost"
            className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>

          {jobApplication && (
            <div className="mb-8 p-4 bg-medilink-accent rounded-lg">
              <h2 className="text-lg font-semibold text-medilink-primary">
                Applying for: {jobApplication.jobTitle}
              </h2>
              <p className="text-gray-600">
                Please fill out the contact form below to submit your application.
              </p>
            </div>
          )}

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-medilink-dark mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about MediLink? Our team is here to help you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact information */}
            <div className="md:col-span-1 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-medilink-dark mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-medilink-accent rounded-full">
                      <MapPin className="h-5 w-5 text-medilink-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-medium text-medilink-dark">Our Location</h3>
                    <p className="mt-1 text-gray-600">
                      123 Health Avenue<br />
                      Suite 456<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-medilink-accent rounded-full">
                      <Phone className="h-5 w-5 text-medilink-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-medium text-medilink-dark">Phone Number</h3>
                    <p className="mt-1 text-gray-600">
                      +1 (555) 123-4567
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Mon-Fri from 8am to 6pm
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-medilink-accent rounded-full">
                      <Mail className="h-5 w-5 text-medilink-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-medium text-medilink-dark">Email Address</h3>
                    <p className="mt-1 text-gray-600">
                      support@medilink.com
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-medilink-accent rounded-full">
                      <Clock className="h-5 w-5 text-medilink-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-medium text-medilink-dark">Business Hours</h3>
                    <div className="mt-1 text-gray-600">
                      <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-medilink-dark mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide details about your inquiry..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="medilink-btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
          
          {/* Map */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-4">
            <div className="aspect-w-16 aspect-h-9 w-full h-96 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0636491171303!2d-122.39891368473932!3d37.78991141917416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807ded297e89%3A0xcf9345a833904412!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1619718990984!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                allowFullScreen 
                loading="lazy"
                title="MediLink Office Location"
                className="border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
