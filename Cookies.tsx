
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Download, Cookie } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Cookies() {
  const handleDownload = () => {
    // In a real app, this would download the actual cookie policy document
    alert("Downloading Cookie Policy document");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-medilink-dark">Cookie Policy</h1>
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
              Last Updated: April 10, 2025
            </p>
            
            <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-start gap-3">
                <Cookie className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-base font-medium text-amber-800 mb-1">About Our Cookies</h3>
                  <p className="text-sm text-amber-700">
                    MediLink uses cookies and similar technologies to provide, protect, and improve our services. This Cookie Policy explains how and why we use these technologies and the choices you have.
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="text-xl font-semibold text-medilink-dark mt-8 mb-4">1. What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files that are stored on your browser or device when you visit a website. They allow the website to recognize your device and remember certain information about your visit, such as your preferences and actions on the site.
            </p>
            
            <h2 className="text-xl font-semibold text-medilink-dark mt-8 mb-4">2. Types of Cookies We Use</h2>
            
            <Accordion type="single" collapsible className="w-full mb-6">
              <AccordionItem value="essential">
                <AccordionTrigger className="text-base font-medium">Essential Cookies</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 mb-2">These cookies are necessary for the website to function properly. They enable basic functions like page navigation, secure areas access, and maintaining user sessions. The website cannot function properly without these cookies.</p>
                  <p className="text-gray-600">Examples: Session cookies, authentication cookies, security cookies.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="performance">
                <AccordionTrigger className="text-base font-medium">Performance and Analytics Cookies</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 mb-2">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They allow us to recognize and count the number of visitors and see how visitors move around our website.</p>
                  <p className="text-gray-600">Examples: Google Analytics cookies, performance metrics cookies.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="functional">
                <AccordionTrigger className="text-base font-medium">Functional Cookies</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 mb-2">These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</p>
                  <p className="text-gray-600">Examples: Language preference cookies, theme preference cookies.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="targeting">
                <AccordionTrigger className="text-base font-medium">Targeting and Advertising Cookies</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 mb-2">These cookies are used to track visitors across websites. They are set to display targeted advertisements based on your interests and online behavior.</p>
                  <p className="text-gray-600">Examples: Social media cookies, third-party advertising cookies.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <h2 className="text-xl font-semibold text-medilink-dark mt-8 mb-4">3. How We Use Cookies</h2>
            <p className="mb-4">
              We use cookies for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Authenticating users and maintaining secure sessions</li>
              <li>Remembering user preferences and settings</li>
              <li>Analyzing website traffic and user behavior</li>
              <li>Improving website performance and user experience</li>
              <li>Facilitating the use of certain features and functionalities</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-medilink-dark mt-8 mb-4">4. Your Cookie Choices</h2>
            <p className="mb-4">
              Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may affect the functionality of our website and prevent you from taking full advantage of all its features.
            </p>
            <p className="mb-4">
              You can generally activate or deactivate the use of cookies through your web browser. To learn how to manage cookies on different browsers, click on the relevant link below:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><a href="#" className="text-medilink-primary hover:underline">Google Chrome</a></li>
              <li><a href="#" className="text-medilink-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="#" className="text-medilink-primary hover:underline">Safari</a></li>
              <li><a href="#" className="text-medilink-primary hover:underline">Microsoft Edge</a></li>
            </ul>
            
            <h2 className="text-xl font-semibold text-medilink-dark mt-8 mb-4">5. Changes to This Cookie Policy</h2>
            <p className="mb-4">
              We may update our Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically for any updates.
            </p>
            
            <h2 className="text-xl font-semibold text-medilink-dark mt-8 mb-4">6. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at <a href="mailto:privacy@medilink.com" className="text-medilink-primary hover:underline">privacy@medilink.com</a> or visit our <Link to="/contact" className="text-medilink-primary hover:underline">Contact page</Link>.
            </p>
          </div>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-medilink-dark mb-4">Cookie Preferences</h3>
            <p className="mb-4">You can manage your cookie preferences at any time through our cookie management tool.</p>
            <Button className="medilink-btn-primary">Manage Cookie Settings</Button>
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
