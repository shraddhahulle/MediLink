
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Pill, Clock, Check, AlertCircle, Plus, RefreshCw, X, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from "@/components/ui/drawer";

// Mock prescriptions data
const mockPrescriptions = [
  {
    id: "rx-1",
    name: "Amoxicillin",
    dosage: "500mg",
    frequency: "3 times daily",
    doctor: "Dr. Sarah Johnson",
    issuedDate: "2023-12-10",
    expiryDate: "2024-01-10",
    status: "active",
    refillsLeft: 2,
    instructions: "Take with food. Complete the full course even if you feel better.",
  },
  {
    id: "rx-2",
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    doctor: "Dr. Michael Chen",
    issuedDate: "2023-11-15",
    expiryDate: "2024-02-15",
    status: "active",
    refillsLeft: 3,
    instructions: "Take in the morning with or without food.",
  },
  {
    id: "rx-3",
    name: "Atorvastatin",
    dosage: "20mg",
    frequency: "Once daily",
    doctor: "Dr. Robert Kim",
    issuedDate: "2023-10-05",
    expiryDate: "2023-12-01",
    status: "expired",
    refillsLeft: 0,
    instructions: "Take in the evening.",
  },
  {
    id: "rx-4",
    name: "Albuterol Inhaler",
    dosage: "2 puffs",
    frequency: "As needed",
    doctor: "Dr. Jessica Patel",
    issuedDate: "2023-11-20",
    expiryDate: "2024-05-20",
    status: "active",
    refillsLeft: 1,
    instructions: "Use as directed for shortness of breath or wheezing.",
  },
];

export default function Prescriptions() {
  const [prescriptions, setPrescriptions] = useState(mockPrescriptions);
  const [isRefillDialogOpen, setIsRefillDialogOpen] = useState(false);
  const [isAddPrescriptionDialogOpen, setIsAddPrescriptionDialogOpen] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState<string | null>(null);
  const { toast } = useToast();

  const handleRequestRefill = (id: string, name: string) => {
    setSelectedPrescription(id);
    setIsRefillDialogOpen(true);
  };

  const confirmRefill = () => {
    if (!selectedPrescription) return;
    
    const prescription = prescriptions.find(p => p.id === selectedPrescription);
    if (!prescription) return;
    
    toast({
      title: "Refill Requested",
      description: `Requesting refill for ${prescription.name}`,
    });
    
    setIsRefillDialogOpen(false);
    
    // In a real app, this would send a request to the server
    setTimeout(() => {
      toast({
        title: "Refill Confirmed",
        description: `Your refill request for ${prescription.name} has been sent to your healthcare provider.`,
      });
    }, 1500);
  };

  const handleAddPrescription = () => {
    setIsAddPrescriptionDialogOpen(true);
  };

  const confirmAddPrescription = () => {
    toast({
      title: "Prescription Added",
      description: "Your prescription has been added successfully",
    });
    
    setIsAddPrescriptionDialogOpen(false);
  };

  const getStatusBadge = (status: string) => {
    if (status === "active") {
      return (
        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
          <Check className="mr-1 h-3 w-3" />
          Active
        </span>
      );
    } else if (status === "expired") {
      return (
        <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
          <AlertCircle className="mr-1 h-3 w-3" />
          Expired
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
          <Clock className="mr-1 h-3 w-3" />
          Pending
        </span>
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-medilink-dark mb-2">Prescriptions</h1>
            <p className="text-gray-600">
              Manage and renew your prescriptions online
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-medilink-dark">Your Prescription List</h2>
              <p className="text-gray-600 text-sm">{prescriptions.filter(p => p.status === "active").length} active prescriptions</p>
            </div>
            <Button 
              className="medilink-btn-primary mt-4 sm:mt-0 flex items-center gap-2" 
              onClick={handleAddPrescription}
            >
              <Plus size={16} />
              Add Prescription
            </Button>
          </div>

          <div className="space-y-6">
            {prescriptions.map((prescription) => (
              <div 
                key={prescription.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-medilink-accent rounded-full">
                        <Pill className="h-5 w-5 text-medilink-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-medilink-dark">{prescription.name} {prescription.dosage}</h3>
                        <p className="text-gray-600">{prescription.frequency}</p>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0">
                      {getStatusBadge(prescription.status)}
                    </div>
                  </div>

                  <div className="mt-4 border-t pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Prescribed by</p>
                        <p className="font-medium">{prescription.doctor}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Issue Date</p>
                        <p className="font-medium">{new Date(prescription.issuedDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Expiry Date</p>
                        <p className="font-medium">{new Date(prescription.expiryDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm text-gray-500">Instructions</p>
                    <p className="mt-1">{prescription.instructions}</p>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">
                        Refills remaining: <span className="font-semibold">{prescription.refillsLeft}</span>
                      </p>
                    </div>
                    {prescription.status === "active" && prescription.refillsLeft > 0 && (
                      <Button 
                        variant="outline" 
                        className="medilink-btn-outline flex items-center gap-2"
                        onClick={() => handleRequestRefill(prescription.id, prescription.name)}
                      >
                        <RefreshCw size={16} />
                        Request Refill
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Refill Request Dialog */}
      <Dialog open={isRefillDialogOpen} onOpenChange={setIsRefillDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Request Prescription Refill</DialogTitle>
            <DialogDescription>
              Your refill request will be sent to your healthcare provider for approval.
            </DialogDescription>
          </DialogHeader>
          
          {selectedPrescription && (
            <div className="py-4">
              <div className="bg-gray-50 p-4 rounded-md mb-4">
                <h4 className="font-medium text-medilink-dark mb-2">Prescription Details</h4>
                <p className="text-sm text-gray-700">
                  <strong>Medication:</strong> {prescriptions.find(p => p.id === selectedPrescription)?.name} {prescriptions.find(p => p.id === selectedPrescription)?.dosage}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Doctor:</strong> {prescriptions.find(p => p.id === selectedPrescription)?.doctor}
                </p>
              </div>
              
              <p className="text-sm text-gray-500 mb-4">
                Do you need to add any special instructions for this refill request?
              </p>
              
              <textarea 
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                placeholder="Optional message for your healthcare provider"
                rows={3}
              />
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsRefillDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={confirmRefill} className="medilink-btn-primary">
              Confirm Refill Request
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Prescription Dialog/Drawer */}
      <Dialog open={isAddPrescriptionDialogOpen} onOpenChange={setIsAddPrescriptionDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Prescription</DialogTitle>
            <DialogDescription>
              Manually add a prescription to your records or upload a prescription document.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="flex items-center justify-center gap-4">
              <div 
                className="p-4 border border-gray-200 rounded-md text-center cursor-pointer hover:bg-gray-50 transition-colors flex-1"
                onClick={() => {
                  toast({
                    title: "Manual Entry",
                    description: "You can manually enter your prescription details"
                  });
                }}
              >
                <Pill className="h-8 w-8 mx-auto mb-2 text-medilink-primary" />
                <p className="font-medium">Manual Entry</p>
                <p className="text-xs text-gray-500">Enter prescription details yourself</p>
              </div>
              
              <div 
                className="p-4 border border-gray-200 rounded-md text-center cursor-pointer hover:bg-gray-50 transition-colors flex-1"
                onClick={() => {
                  const input = document.createElement("input");
                  input.type = "file";
                  input.accept = ".pdf,.jpg,.png";
                  input.onchange = (e) => {
                    const file = (e.target as HTMLInputElement).files?.[0];
                    if (file) {
                      toast({
                        title: "File Selected",
                        description: `${file.name} selected for upload`,
                      });
                    }
                  };
                  input.click();
                }}
              >
                <FileText className="h-8 w-8 mx-auto mb-2 text-medilink-primary" />
                <p className="font-medium">Upload Document</p>
                <p className="text-xs text-gray-500">Upload a prescription document</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 italic">
              Note: New prescriptions added manually will be marked as "pending" until verified by our healthcare team.
            </p>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddPrescriptionDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={confirmAddPrescription} className="medilink-btn-primary">
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
