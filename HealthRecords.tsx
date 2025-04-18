
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FileText, Plus, Download, Share2, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Define types for different result formats
type BaseResult = {
  name: string;
  value: string;
};

type StatusResult = BaseResult & {
  status: string;
  range?: string;
};

type DateResult = BaseResult & {
  date: string;
};

type RecordResult = StatusResult | DateResult;

// Define type for a health record
type HealthRecord = {
  id: string;
  title: string;
  date: string;
  doctor: string;
  type: string;
  size: string;
  category: string;
  results: RecordResult[];
};

// Mock health records data with category field added
const mockRecords: HealthRecord[] = [
  {
    id: "rec-1",
    title: "Annual Physical Examination",
    date: "2023-12-15",
    doctor: "Dr. Sarah Johnson",
    type: "Examination",
    size: "1.2 MB",
    category: "other",
    results: [
      { name: "Blood Pressure", value: "120/80 mmHg", status: "Normal" },
      { name: "Heart Rate", value: "72 bpm", status: "Normal" },
      { name: "Temperature", value: "98.6°F", status: "Normal" },
      { name: "Weight", value: "160 lbs", status: "Normal" },
      { name: "Height", value: "5'10\"", status: "Normal" },
      { name: "BMI", value: "23", status: "Normal" }
    ]
  },
  {
    id: "rec-2",
    title: "Blood Test Results",
    date: "2023-11-05",
    doctor: "Dr. Michael Chen",
    type: "Lab Results",
    size: "850 KB",
    category: "lab",
    results: [
      { name: "White Blood Cell Count", value: "7.5 x10^9/L", status: "Normal", range: "4.5-11.0 x10^9/L" },
      { name: "Red Blood Cell Count", value: "5.0 x10^12/L", status: "Normal", range: "4.5-5.5 x10^12/L" },
      { name: "Hemoglobin", value: "14.2 g/dL", status: "Normal", range: "13.5-17.5 g/dL" },
      { name: "Hematocrit", value: "42%", status: "Normal", range: "38.8-50.0%" },
      { name: "Platelet Count", value: "250 x10^9/L", status: "Normal", range: "150-450 x10^9/L" },
      { name: "Glucose", value: "95 mg/dL", status: "Normal", range: "70-99 mg/dL" }
    ]
  },
  {
    id: "rec-3",
    title: "MRI Scan - Left Knee",
    date: "2023-10-22",
    doctor: "Dr. Robert Kim",
    type: "Imaging",
    size: "5.4 MB",
    category: "imaging",
    results: [
      { name: "Medial Meniscus", value: "Mild degenerative tear", status: "Abnormal" },
      { name: "Lateral Meniscus", value: "No significant abnormality", status: "Normal" },
      { name: "Anterior Cruciate Ligament", value: "Intact", status: "Normal" },
      { name: "Posterior Cruciate Ligament", value: "Intact", status: "Normal" },
      { name: "Articular Cartilage", value: "Mild thinning", status: "Borderline" },
      { name: "Joint Effusion", value: "Minimal", status: "Borderline" }
    ]
  },
  {
    id: "rec-4",
    title: "Vaccination Record",
    date: "2023-09-08",
    doctor: "Dr. Jessica Patel",
    type: "Vaccination",
    size: "620 KB",
    category: "other",
    results: [
      { name: "Influenza Vaccine", value: "Administered", date: "2023-09-08" },
      { name: "COVID-19 Booster", value: "Administered", date: "2023-05-15" },
      { name: "Tetanus/Diphtheria/Pertussis", value: "Up to date", date: "2020-03-22" },
      { name: "Pneumococcal Vaccine", value: "Not administered", date: "N/A" }
    ]
  },
  {
    id: "rec-5",
    title: "Cholesterol Panel",
    date: "2023-10-12",
    doctor: "Dr. Michael Chen",
    type: "Lab Results",
    size: "720 KB",
    category: "lab",
    results: [
      { name: "Total Cholesterol", value: "185 mg/dL", status: "Normal", range: "< 200 mg/dL" },
      { name: "LDL Cholesterol", value: "110 mg/dL", status: "Normal", range: "< 130 mg/dL" },
      { name: "HDL Cholesterol", value: "55 mg/dL", status: "Normal", range: "> 40 mg/dL" },
      { name: "Triglycerides", value: "120 mg/dL", status: "Normal", range: "< 150 mg/dL" }
    ]
  },
  {
    id: "rec-6",
    title: "X-Ray - Chest",
    date: "2023-11-18",
    doctor: "Dr. Robert Kim",
    type: "Imaging",
    size: "3.2 MB",
    category: "imaging",
    results: [
      { name: "Lungs", value: "Clear and well-expanded", status: "Normal" },
      { name: "Heart Size", value: "Normal", status: "Normal" },
      { name: "Mediastinum", value: "Normal", status: "Normal" },
      { name: "Bony Structures", value: "No acute abnormality", status: "Normal" },
      { name: "Soft Tissues", value: "Unremarkable", status: "Normal" }
    ]
  },
  {
    id: "rec-7",
    title: "Allergy Test Results",
    date: "2023-08-22",
    doctor: "Dr. Jessica Patel",
    type: "Lab Results",
    size: "910 KB",
    category: "lab",
    results: [
      { name: "Dust Mites", value: "Positive (3+)", status: "Allergic" },
      { name: "Cat Dander", value: "Positive (2+)", status: "Allergic" },
      { name: "Dog Dander", value: "Negative", status: "Non-Allergic" },
      { name: "Grass Pollen", value: "Positive (3+)", status: "Allergic" },
      { name: "Tree Pollen", value: "Positive (1+)", status: "Mildly Allergic" },
      { name: "Mold", value: "Negative", status: "Non-Allergic" },
      { name: "Peanuts", value: "Negative", status: "Non-Allergic" }
    ]
  },
];

export default function HealthRecords() {
  const [activeTab, setActiveTab] = useState("all");
  const [records] = useState<HealthRecord[]>(mockRecords);
  const [viewingRecord, setViewingRecord] = useState<string | null>(null);
  const { toast } = useToast();

  const filteredRecords = activeTab === "all" 
    ? records 
    : records.filter(record => record.category === activeTab);

  const handleViewRecord = (id: string, title: string) => {
    setViewingRecord(id);
    toast({
      title: "Viewing Record",
      description: `Opening ${title}`,
    });
  };

  const handleDownloadRecord = (id: string, title: string) => {
    toast({
      title: "Downloading Record",
      description: `Downloading ${title}`,
    });
    
    // Simulate download by creating a fake link and clicking it
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "#"; // In a real app, this would be a valid file URL
      link.download = title.replace(/\s+/g, "_") + ".pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);
  };

  const handleShareRecord = (id: string, title: string) => {
    toast({
      title: "Share Record",
      description: `Preparing to share ${title}`,
    });
    
    // In a real app, this would open a sharing dialog
    setTimeout(() => {
      toast({
        title: "Record Shared",
        description: `${title} has been shared successfully`,
      });
    }, 1500);
  };

  const handleUploadRecord = () => {
    toast({
      title: "Upload Record",
      description: "You can upload your health records here",
    });
    
    // In a real app, this would open a file upload dialog
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".pdf,.jpg,.png,.doc,.docx";
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
  };

  const getRecordDetail = (id: string) => {
    return records.find(record => record.id === id);
  };

  const renderRecordsTable = (recordsToShow: HealthRecord[]) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Document</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Doctor</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Size</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recordsToShow.map((record) => (
          <TableRow key={record.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-medilink-accent rounded-lg">
                  <FileText size={18} className="text-medilink-primary" />
                </div>
                <span className="font-medium">{record.title}</span>
              </div>
            </TableCell>
            <TableCell className="text-gray-600">
              {new Date(record.date).toLocaleDateString()}
            </TableCell>
            <TableCell className="text-gray-600">{record.doctor}</TableCell>
            <TableCell className="text-gray-600">{record.type}</TableCell>
            <TableCell className="text-gray-600">{record.size}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleViewRecord(record.id, record.title)}
                  className="p-1 text-gray-500 hover:text-medilink-primary"
                  title="View"
                >
                  <Eye size={18} />
                </button>
                <button
                  onClick={() => handleDownloadRecord(record.id, record.title)}
                  className="p-1 text-gray-500 hover:text-medilink-primary"
                  title="Download"
                >
                  <Download size={18} />
                </button>
                <button
                  onClick={() => handleShareRecord(record.id, record.title)}
                  className="p-1 text-gray-500 hover:text-medilink-primary"
                  title="Share"
                >
                  <Share2 size={18} />
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  // Type guard functions to check result types
  const hasStatus = (result: RecordResult): result is StatusResult => {
    return 'status' in result;
  };

  const hasRange = (result: RecordResult): result is StatusResult & { range: string } => {
    return 'range' in result;
  };

  const hasDate = (result: RecordResult): result is DateResult => {
    return 'date' in result;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-medilink-dark mb-2">Health Records</h1>
            <p className="text-gray-600">
              Securely store and access your medical records in one place
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <TabsList className="grid grid-cols-4 mb-4 sm:mb-0 max-w-md">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="lab">Lab Results</TabsTrigger>
                  <TabsTrigger value="imaging">Imaging</TabsTrigger>
                  <TabsTrigger value="other">Other</TabsTrigger>
                </TabsList>
                <Button 
                  className="medilink-btn-primary mt-4 sm:mt-0 flex items-center gap-2" 
                  onClick={handleUploadRecord}
                >
                  <Plus size={16} />
                  Upload Record
                </Button>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="overflow-x-auto">
                  {renderRecordsTable(filteredRecords)}
                </div>
              </TabsContent>
              
              <TabsContent value="lab" className="mt-0">
                <div className="overflow-x-auto">
                  {filteredRecords.length > 0 ? (
                    renderRecordsTable(filteredRecords)
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-gray-500">No lab results available</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="imaging" className="mt-0">
                <div className="overflow-x-auto">
                  {filteredRecords.length > 0 ? (
                    renderRecordsTable(filteredRecords)
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-gray-500">No imaging records available</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="other" className="mt-0">
                <div className="overflow-x-auto">
                  {filteredRecords.length > 0 ? (
                    renderRecordsTable(filteredRecords)
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-gray-500">No other medical records available</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      {/* Record Viewing Dialog */}
      <Dialog open={!!viewingRecord} onOpenChange={() => setViewingRecord(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>
              {viewingRecord && getRecordDetail(viewingRecord)?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {viewingRecord && (
              <div className="bg-gray-50 p-6 rounded-md">
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-gray-500">
                      Date: {new Date(getRecordDetail(viewingRecord)?.date || "").toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-500">
                      Doctor: {getRecordDetail(viewingRecord)?.doctor}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500">
                    Type: {getRecordDetail(viewingRecord)?.type}
                  </p>
                </div>
                
                <h3 className="text-lg font-medium mb-3">Results</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Test</th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Result</th>
                        {viewingRecord && getRecordDetail(viewingRecord)?.results.some(result => hasStatus(result)) && (
                          <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Status</th>
                        )}
                        {viewingRecord && getRecordDetail(viewingRecord)?.results.some(result => hasRange(result)) && (
                          <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Reference Range</th>
                        )}
                        {viewingRecord && getRecordDetail(viewingRecord)?.results.some(result => hasDate(result)) && (
                          <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Date</th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {viewingRecord && getRecordDetail(viewingRecord)?.results.map((result, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="py-2 px-4 text-sm">{result.name}</td>
                          <td className="py-2 px-4 text-sm">{result.value}</td>
                          {hasStatus(result) && (
                            <td className="py-2 px-4 text-sm">
                              <span 
                                className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                  result.status === "Normal" ? "bg-green-100 text-green-800" : 
                                  result.status === "Abnormal" ? "bg-red-100 text-red-800" : 
                                  result.status === "Borderline" ? "bg-yellow-100 text-yellow-800" :
                                  result.status === "Allergic" ? "bg-red-100 text-red-800" :
                                  result.status === "Mildly Allergic" ? "bg-yellow-100 text-yellow-800" :
                                  result.status === "Non-Allergic" ? "bg-green-100 text-green-800" :
                                  "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {result.status}
                              </span>
                            </td>
                          )}
                          {hasRange(result) && (
                            <td className="py-2 px-4 text-sm text-gray-600">{result.range}</td>
                          )}
                          {hasDate(result) && (
                            <td className="py-2 px-4 text-sm">{result.date}</td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            <div className="flex justify-end gap-2 mt-4">
              <Button 
                variant="outline" 
                onClick={() => viewingRecord && handleDownloadRecord(viewingRecord, getRecordDetail(viewingRecord)?.title || "")}
                className="flex items-center gap-2"
              >
                <Download size={16} /> Download
              </Button>
              <Button 
                variant="outline" 
                onClick={() => viewingRecord && handleShareRecord(viewingRecord, getRecordDetail(viewingRecord)?.title || "")}
                className="flex items-center gap-2"
              >
                <Share2 size={16} /> Share
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
