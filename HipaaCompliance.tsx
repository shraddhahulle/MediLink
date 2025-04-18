
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter 
} from "@/components/ui/dialog";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { Shield, ShieldCheck, Download, FileText, Mail, Phone, User, Info, HelpCircle } from "lucide-react";

export default function HipaaCompliance() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [isDownloadingReport, setIsDownloadingReport] = useState(false);
  const { toast } = useToast();

  const handleDownloadReport = () => {
    setIsDownloadingReport(true);
    toast({
      title: "Downloading Report",
      description: "Preparing HIPAA compliance documentation for download",
    });
    
    // Simulate download
    setTimeout(() => {
      setIsDownloadingReport(false);
      toast({
        title: "Download Complete",
        description: "HIPAA compliance documentation has been downloaded",
      });
      
      // Create a fake download link
      const link = document.createElement("a");
      link.href = "#";
      link.download = "MediLink_HIPAA_Compliance_Report.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 2000);
  };

  const handleContactPrivacyOfficer = () => {
    setIsContactDialogOpen(true);
  };

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    setIsContactDialogOpen(false);
    toast({
      title: "Message Sent",
      description: "Your message has been sent to our Privacy Officer",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-medilink-dark mb-2">HIPAA Compliance</h1>
            <p className="text-gray-600">
              Our commitment to protecting your medical information
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-b border-gray-200">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="flex h-16 items-center px-4 md:px-6 justify-start overflow-x-auto gap-4 md:gap-6">
                  <TabsTrigger value="overview" className="flex items-center gap-2 py-3">
                    <Info size={18} />
                    <span>Overview</span>
                  </TabsTrigger>
                  <TabsTrigger value="safeguards" className="flex items-center gap-2 py-3">
                    <Shield size={18} />
                    <span>Safeguards</span>
                  </TabsTrigger>
                  <TabsTrigger value="rights" className="flex items-center gap-2 py-3">
                    <User size={18} />
                    <span>Patient Rights</span>
                  </TabsTrigger>
                  <TabsTrigger value="faq" className="flex items-center gap-2 py-3">
                    <HelpCircle size={18} />
                    <span>FAQ</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="p-6">
              <TabsContent value="overview" className="mt-0">
                <section>
                  <div className="mb-8 p-6 bg-medilink-accent/10 rounded-lg flex items-start gap-4">
                    <div className="p-3 bg-medilink-primary rounded-full flex-shrink-0">
                      <ShieldCheck className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-medilink-dark mb-2">HIPAA Compliant Healthcare Platform</h2>
                      <p className="text-gray-700">
                        MediLink is fully HIPAA compliant, ensuring the highest level of protection for your sensitive health information.
                        Our platform meets all security and privacy requirements established by the Health Insurance Portability and Accountability Act.
                      </p>
                    </div>
                  </div>

                  <section className="mb-8">
                    <h2 className="text-xl font-bold text-medilink-dark mb-3">What is HIPAA?</h2>
                    <p className="text-gray-700 mb-3">
                      The Health Insurance Portability and Accountability Act (HIPAA) is a federal law that protects 
                      sensitive patient health information from being disclosed without the patient's consent or knowledge.
                    </p>
                    <p className="text-gray-700">
                      HIPAA regulations establish standards for the electronic exchange, privacy, and security of health 
                      information, ensuring that healthcare providers, health plans, healthcare clearinghouses, and business 
                      associates maintain appropriate safeguards to protect the privacy of personal health information.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-xl font-bold text-medilink-dark mb-3">Our HIPAA Compliance Commitment</h2>
                    <p className="text-gray-700 mb-3">
                      At MediLink, we are committed to maintaining the highest standards of HIPAA compliance to protect 
                      your personal health information. Our platform is designed with security and privacy as top priorities.
                    </p>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-medilink-primary flex items-center justify-center text-white">
                          <span className="text-sm font-bold">1</span>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-lg font-medium text-medilink-dark">Privacy Measures</h3>
                          <p className="text-gray-700">We implement comprehensive privacy protocols to ensure your health information is protected.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-medilink-primary flex items-center justify-center text-white">
                          <span className="text-sm font-bold">2</span>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-lg font-medium text-medilink-dark">Data Security</h3>
                          <p className="text-gray-700">Your data is encrypted both in transit and at rest using industry-standard encryption methods.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-medilink-primary flex items-center justify-center text-white">
                          <span className="text-sm font-bold">3</span>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-lg font-medium text-medilink-dark">Access Controls</h3>
                          <p className="text-gray-700">We implement strict access controls and authentication mechanisms to prevent unauthorized access.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-medilink-primary flex items-center justify-center text-white">
                          <span className="text-sm font-bold">4</span>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-lg font-medium text-medilink-dark">Regular Audits</h3>
                          <p className="text-gray-700">We conduct regular security audits and assessments to identify and address potential vulnerabilities.</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-xl font-bold text-medilink-dark mb-3">HIPAA Compliance Certification</h2>
                    <p className="text-gray-700 mb-3">
                      Our platform undergoes regular independent assessments to ensure we meet or exceed all HIPAA requirements. 
                      We maintain current HIPAA compliance certifications and continue to update our practices as regulations evolve.
                    </p>
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="text-gray-700 italic">
                        "MediLink has successfully completed a comprehensive HIPAA compliance assessment and 
                        demonstrates an ongoing commitment to protecting patient health information in accordance 
                        with federal regulations."
                      </p>
                      <p className="text-gray-500 mt-2 text-sm">— Healthcare Compliance Associates, 2024</p>
                    </div>
                  </section>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button 
                      className="medilink-btn-primary flex items-center gap-2"
                      onClick={handleDownloadReport}
                      disabled={isDownloadingReport}
                    >
                      <Download size={18} />
                      {isDownloadingReport ? "Downloading..." : "Download Compliance Report"}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="medilink-btn-outline flex items-center gap-2" 
                      onClick={handleContactPrivacyOfficer}
                    >
                      <Mail size={18} />
                      Contact Privacy Officer
                    </Button>
                  </div>
                </section>
              </TabsContent>

              <TabsContent value="safeguards" className="mt-0">
                <section>
                  <h2 className="text-xl font-bold text-medilink-dark mb-4">Security Safeguards</h2>
                  
                  <div className="space-y-6">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="text-lg font-medium text-medilink-dark mb-2">Technical Safeguards</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>End-to-end encryption for all data transmission</li>
                        <li>Multi-factor authentication for account access</li>
                        <li>Automatic session timeouts after periods of inactivity</li>
                        <li>Secure cloud infrastructure with regular security patches</li>
                        <li>Intrusion detection and prevention systems</li>
                        <li>Regular vulnerability scanning and penetration testing</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="text-lg font-medium text-medilink-dark mb-2">Administrative Safeguards</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Staff training on HIPAA regulations and best practices</li>
                        <li>Designated Privacy and Security Officers</li>
                        <li>Written policies and procedures for handling PHI</li>
                        <li>Regular risk assessments and management</li>
                        <li>Business Associate Agreements with all vendors</li>
                        <li>Incident response plan for potential data breaches</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="text-lg font-medium text-medilink-dark mb-2">Physical Safeguards</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Secure data centers with restricted access</li>
                        <li>24/7 monitoring of server environments</li>
                        <li>Disaster recovery and business continuity plans</li>
                        <li>Secure disposal of physical media containing PHI</li>
                        <li>Environmental controls to protect server infrastructure</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-medilink-accent/10 rounded-lg">
                    <h3 className="text-lg font-medium text-medilink-dark mb-2">Our Security Certifications</h3>
                    <p className="text-gray-700 mb-4">
                      In addition to HIPAA compliance, MediLink maintains the following industry certifications:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-medilink-primary" />
                        <span>SOC 2 Type II Certified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-medilink-primary" />
                        <span>ISO 27001 Compliant</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-medilink-primary" />
                        <span>HITRUST CSF Certified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-medilink-primary" />
                        <span>NIST Cybersecurity Framework</span>
                      </div>
                    </div>
                  </div>
                </section>
              </TabsContent>

              <TabsContent value="rights" className="mt-0">
                <section>
                  <h2 className="text-xl font-bold text-medilink-dark mb-4">Your Rights Under HIPAA</h2>
                  <p className="text-gray-700 mb-6">
                    As a patient, HIPAA provides you with important rights regarding your health information. 
                    At MediLink, we make it easy for you to exercise these rights through our platform.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="text-lg font-medium text-medilink-dark mb-2">Right to Access Your Records</h3>
                      <p className="text-gray-700 mb-2">
                        You have the right to access and obtain copies of your health information.
                      </p>
                      <p className="text-gray-700">
                        <strong>How to exercise this right:</strong> Visit your Health Records section in your MediLink account 
                        to view and download your medical records at any time.
                      </p>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="text-lg font-medium text-medilink-dark mb-2">Right to Request Corrections</h3>
                      <p className="text-gray-700 mb-2">
                        You have the right to request corrections to your health information if you believe there are errors.
                      </p>
                      <p className="text-gray-700">
                        <strong>How to exercise this right:</strong> From your Health Records section, you can flag any record 
                        for correction and provide the correct information.
                      </p>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="text-lg font-medium text-medilink-dark mb-2">Right to Know Who Has Accessed Your Information</h3>
                      <p className="text-gray-700 mb-2">
                        You have the right to know who has accessed your health information.
                      </p>
                      <p className="text-gray-700">
                        <strong>How to exercise this right:</strong> Check the "Access Log" feature in your account settings 
                        to see a record of all access to your information.
                      </p>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="text-lg font-medium text-medilink-dark mb-2">Right to Request Limits on Access</h3>
                      <p className="text-gray-700 mb-2">
                        You have the right to request limits on who can access your information.
                      </p>
                      <p className="text-gray-700">
                        <strong>How to exercise this right:</strong> Use the "Privacy Settings" in your account to set custom 
                        access controls for your health information.
                      </p>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="text-lg font-medium text-medilink-dark mb-2">Right to Be Notified of Data Breaches</h3>
                      <p className="text-gray-700 mb-2">
                        You have the right to be notified if there is a breach of your unsecured protected health information.
                      </p>
                      <p className="text-gray-700">
                        <strong>Our commitment:</strong> MediLink will promptly notify you of any breach affecting your 
                        personal health information through multiple channels including email, SMS, and in-app notifications.
                      </p>
                    </div>
                  </div>
                </section>
              </TabsContent>

              <TabsContent value="faq" className="mt-0">
                <section>
                  <h2 className="text-xl font-bold text-medilink-dark mb-4">Frequently Asked Questions</h2>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="item-1" className="border p-2 rounded-md">
                      <AccordionTrigger className="text-left font-medium hover:no-underline py-3 px-2">
                        What types of health information does HIPAA protect?
                      </AccordionTrigger>
                      <AccordionContent className="px-2 pb-4 pt-2">
                        <p className="text-gray-700">
                          HIPAA protects all "individually identifiable health information" that is held or transmitted by a covered entity or 
                          its business associate. This includes information that relates to:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mt-2 text-gray-700">
                          <li>An individual's past, present, or future physical or mental health condition</li>
                          <li>The provision of health care to the individual</li>
                          <li>The past, present, or future payment for the provision of health care</li>
                          <li>Common identifiers like name, address, birth date, and Social Security Number</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2" className="border p-2 rounded-md">
                      <AccordionTrigger className="text-left font-medium hover:no-underline py-3 px-2">
                        How does MediLink ensure my video consultations are HIPAA compliant?
                      </AccordionTrigger>
                      <AccordionContent className="px-2 pb-4 pt-2">
                        <p className="text-gray-700">
                          All MediLink video consultations use end-to-end encryption to ensure that only you and your healthcare provider can access 
                          the content of your consultation. Our video platform does not store recordings of consultations unless explicitly requested 
                          for medical documentation purposes, with your consent. We also implement strict access controls, secure transmission protocols, 
                          and regular security audits to maintain HIPAA compliance for all telehealth services.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3" className="border p-2 rounded-md">
                      <AccordionTrigger className="text-left font-medium hover:no-underline py-3 px-2">
                        Can I share my health records with another healthcare provider?
                      </AccordionTrigger>
                      <AccordionContent className="px-2 pb-4 pt-2">
                        <p className="text-gray-700">
                          Yes, you can securely share your health records with other healthcare providers through MediLink. In your Health Records section, 
                          you can generate a secure sharing link or directly send records to another provider who uses the MediLink platform. You control 
                          exactly which records are shared and for how long the access is granted. This ensures your information is transferred in a 
                          HIPAA-compliant manner while giving you full control over your health information.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4" className="border p-2 rounded-md">
                      <AccordionTrigger className="text-left font-medium hover:no-underline py-3 px-2">
                        What happens if there is a data breach?
                      </AccordionTrigger>
                      <AccordionContent className="px-2 pb-4 pt-2">
                        <p className="text-gray-700">
                          In the unlikely event of a data breach, MediLink follows a strict incident response plan in accordance with HIPAA requirements:
                        </p>
                        <ol className="list-decimal pl-5 space-y-1 mt-2 text-gray-700">
                          <li>We will conduct an immediate investigation to understand the scope and impact</li>
                          <li>We will notify affected users without unreasonable delay (within 60 days at maximum)</li>
                          <li>Notifications will include details about what information was involved, steps to protect yourself, and remediation actions</li>
                          <li>We will implement additional security measures to prevent similar incidents</li>
                          <li>We will report the breach to the Department of Health and Human Services as required by law</li>
                        </ol>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-5" className="border p-2 rounded-md">
                      <AccordionTrigger className="text-left font-medium hover:no-underline py-3 px-2">
                        How long does MediLink retain my health information?
                      </AccordionTrigger>
                      <AccordionContent className="px-2 pb-4 pt-2">
                        <p className="text-gray-700">
                          MediLink retains your health information in accordance with applicable state and federal regulations. Typically, 
                          medical records are retained for a minimum of 6-10 years, depending on state requirements. You can access your retention 
                          policy in your account settings, which provides specific details based on your location and the types of records stored. 
                          You also have the option to request deletion of certain records after the mandatory retention period has passed.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </section>
              </TabsContent>
            </div>
          </div>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-medilink-dark mb-3">Contact Our Privacy Officer</h2>
            <p className="text-gray-700 mb-3">
              If you have questions about our HIPAA compliance practices or concerns about how your 
              health information is being handled, please contact our Privacy Officer:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-medilink-primary" />
                  <span className="text-gray-700"><strong>Email:</strong> privacy@medilink.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-medilink-primary" />
                  <span className="text-gray-700"><strong>Phone:</strong> (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-medilink-primary" />
                  <span className="text-gray-700"><strong>Mail:</strong> MediLink Privacy Office, 123 Health St, Medical City, MC 12345</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Contact Privacy Officer Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Contact Privacy Officer</DialogTitle>
            <DialogDescription>
              Send a message directly to our Privacy Officer with your HIPAA-related questions or concerns.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmitContact} className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Your Name
              </label>
              <input
                id="name"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="HIPAA Question"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 rounded-md p-2 min-h-[100px]"
                placeholder="Your message here..."
                required
              />
            </div>
            
            <DialogFooter className="mt-6">
              <Button type="button" variant="outline" onClick={() => setIsContactDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="medilink-btn-primary">
                Send Message
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
