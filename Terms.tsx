
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";

export default function Terms() {
  const handleDownload = () => {
    // In a real app, this would download the actual terms document
    alert("Downloading Terms of Service document");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-medilink-dark">Terms of Service</h1>
            <Button 
              variant="outline" 
              onClick={handleDownload}
              className="flex items-center gap-2"
            >
              <Download size={16} />
              Download PDF
            </Button>
          </div>
          
          <Separator className="mb-8" />
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Last Updated: April 1, 2025
            </p>
            
            <h2 className="text-xl font-semibold text-medilink-dark mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing or using MediLink's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
            
            <h2 className="text-xl font-semibold text-medilink-dark mt-8 mb-4">2. Description of Service</h2>
            <p className="mb-4">
              MediLink provides a platform connecting patients with healthcare providers through secure video consultations and related services. We do not provide medical services directly but facilitate connections between users and licensed healthcare professionals.
            </p>
            
            <h2 className="text-xl font-semibold text-medilink-dark mt-8 mb-4">3. User Registration</h2>
            <p className="mb-4">
              To use certain features of our service, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
            </p>
            
            <h2 className="text-xl font-semibold text-medilink-dark mt-8 mb-4">4. Privacy</h2>
            <p className="mb-4">
              Your privacy is important to us. Our <Link to="/privacy" className="text-medilink-primary hover:underline">Privacy Policy</Link> explains how we collect, use, and protect your information. By using our service, you agree to our data practices as described in our Privacy Policy.
            </p>
            
            <h2 className="text-xl font-semibold text-medilink-dark mt-8 mb-4">5. User Conduct</h2>
            <p className="mb-4">
              You agree not to use the service for any unlawful purpose or in any way that could damage, disable, overburden, or impair the service. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available through the service.
            </p>
            
            <h2 className="text-xl font-semibold text-medilink-dark mt-8 mb-4">6. Medical Disclaimer</h2>
            <p className="mb-4">
              MediLink is not a healthcare provider. Content and information provided through our service is for informational purposes only and is not intended as medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions regarding a medical condition.
            </p>
            
            <h2 className="text-xl font-semibold text-medilink-dark mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, MediLink shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, the service.
            </p>
            
            <h2 className="text-xl font-semibold text-medilink-dark mt-8 mb-4">8. Changes to Terms</h2>
            <p className="mb-4">
              We may modify these Terms of Service at any time. When we make changes, we will update the "Last Updated" date at the top of the terms and notify you through the service or by other means. Your continued use of the service after such changes constitutes your acceptance of the new terms.
            </p>
            
            <h2 className="text-xl font-semibold text-medilink-dark mt-8 mb-4">9. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at <a href="mailto:legal@medilink.com" className="text-medilink-primary hover:underline">legal@medilink.com</a> or visit our <Link to="/contact" className="text-medilink-primary hover:underline">Contact page</Link>.
            </p>
          </div>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-medilink-dark mb-4">Have Questions About Our Terms?</h3>
            <p className="mb-4">Our support team is ready to assist with any questions you might have about our Terms of Service.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button className="medilink-btn-primary">Contact Support</Button>
              </Link>
              <Link to="/hipaa-compliance">
                <Button variant="outline" className="flex items-center gap-2">
                  <FileText size={16} />
                  HIPAA Compliance
                </Button>
              </Link>
            </div>
          </div>
        </div>
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
