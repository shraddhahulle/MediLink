
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Download, Lock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function Privacy() {
  const handleDownload = () => {
    // In a real app, this would download the actual privacy policy document
    alert("Downloading Privacy Policy document");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-medilink-dark">Privacy Policy</h1>
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
              Last Updated: April 15, 2025
            </p>
            
            <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-base font-medium text-blue-800 mb-1">Your Privacy is Our Priority</h3>
                  <p className="text-sm text-blue-700">
                    MediLink is committed to protecting your personal and health information. We comply with all applicable privacy laws, including HIPAA for health-related data in the United States.
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="text-xl font-semibold text-medilink-dark mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              MediLink collects several types of information for the purposes of providing and improving our service:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and billing information.</li>
              <li><strong>Health Information:</strong> Medical history, current medications, allergies, and other health-related information you provide.</li>
              <li><strong>Technical Information:</strong> Device information, IP address, browser type, and usage data.</li>
              <li><strong>Communications:</strong> Records of your interactions with healthcare providers through our platform.</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-medilink-dark mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Providing and maintaining our service</li>
              <li>Connecting you with healthcare providers</li>
              <li>Processing payments and transactions</li>
              <li>Sending administrative information and service updates</li>
              <li>Improving and personalizing our service</li>
              <li>Responding to your inquiries and support requests</li>
              <li>Complying with legal obligations</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-medilink-dark mt-8 mb-4">3. Information Sharing and Disclosure</h2>
            <p className="mb-2">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Healthcare Providers:</strong> To facilitate your virtual consultations and care.</li>
              <li><strong>Service Providers:</strong> Third parties that help us operate our business and provide services.</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental regulation.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
            </ul>
            <p className="mb-4">
              We will never sell your personal information to third parties for marketing purposes.
            </p>
            
            <h2 className="text-xl font-semibold text-medilink-dark mt-8 mb-4">4. Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, and regular security assessments.
            </p>
            
            <h2 className="text-xl font-semibold text-medilink-dark mt-8 mb-4">5. Your Rights and Choices</h2>
            <p className="mb-2">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access and obtain a copy of your data</li>
              <li>Rectify inaccurate or incomplete information</li>
              <li>Request deletion of your data</li>
              <li>Restrict or object to processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-medilink-dark mt-8 mb-4">6. Children's Privacy</h2>
            <p className="mb-4">
              Our service is not intended for children under 13 years of age. We do not knowingly collect personally identifiable information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
            
            <h2 className="text-xl font-semibold text-medilink-dark mt-8 mb-4">7. Changes to This Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. You are advised to review this policy periodically for any changes.
            </p>
            
            <h2 className="text-xl font-semibold text-medilink-dark mt-8 mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@medilink.com" className="text-medilink-primary hover:underline">privacy@medilink.com</a> or visit our <Link to="/contact" className="text-medilink-primary hover:underline">Contact page</Link>.
            </p>
          </div>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-medilink-dark mb-4">Data Protection Inquiries</h3>
            <p className="mb-4">For specific questions about your data or to exercise your privacy rights, please reach out to our data protection team.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button className="medilink-btn-primary flex items-center gap-2">
                  <Lock size={16} />
                  Data Protection Request
                </Button>
              </Link>
              <Link to="/hipaa-compliance">
                <Button variant="outline">HIPAA Compliance Info</Button>
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
