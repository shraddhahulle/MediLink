
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  Mic, MicOff, Video, VideoOff, PhoneOff, Share2, 
  MessageSquare, Users, MoreVertical, ChevronLeft, 
  Volume2, VolumeX
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export default function VideoConsultation() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, sender: string, time: string}[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [participants, setParticipants] = useState(2);
  const [appointmentDetails, setAppointmentDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const consultationRef = useRef<HTMLDivElement>(null);
  
  const { id } = useParams();
  const navigate = useNavigate();

  // Initialize video stream
  useEffect(() => {
    async function setupLocalVideo() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: isVideoOn, 
          audio: !isMuted 
        });
        
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
        
        // Simulate loading appointment data
        setTimeout(() => {
          setAppointmentDetails({
            doctorName: "Dr. Sarah Johnson",
            patientName: "John Smith",
            time: "10:00 AM - 10:30 AM",
            date: new Date().toLocaleDateString(),
            reason: "Follow-up consultation"
          });
          setIsLoading(false);
          
          // Notification of successful connection
          toast({
            title: "Connection Established",
            description: "You're now connected to your appointment.",
          });
        }, 1500);
        
      } catch (err) {
        console.error("Error accessing media devices:", err);
        toast({
          variant: "destructive",
          title: "Camera Access Failed",
          description: "Please allow camera and microphone access for this call.",
        });
      }
    }
    
    setupLocalVideo();
    
    // Clean up function
    return () => {
      const stream = localVideoRef.current?.srcObject as MediaStream;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);
  
  // Toggle functions
  const toggleMute = () => {
    const stream = localVideoRef.current?.srcObject as MediaStream;
    if (stream) {
      stream.getAudioTracks().forEach(track => {
        track.enabled = isMuted;
      });
      setIsMuted(!isMuted);
      toast({
        description: isMuted ? "Microphone is now on" : "Microphone is now muted",
      });
    }
  };
  
  const toggleVideo = () => {
    const stream = localVideoRef.current?.srcObject as MediaStream;
    if (stream) {
      stream.getVideoTracks().forEach(track => {
        track.enabled = !isVideoOn;
      });
      setIsVideoOn(!isVideoOn);
      toast({
        description: isVideoOn ? "Camera turned off" : "Camera turned on",
      });
    }
  };
  
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      consultationRef.current?.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };
  
  const toggleAudio = () => {
    setIsAudioOn(!isAudioOn);
    if (remoteVideoRef.current) {
      remoteVideoRef.current.muted = isAudioOn;
    }
    toast({
      description: isAudioOn ? "Remote audio muted" : "Remote audio unmuted",
    });
  };
  
  const toggleScreenShare = async () => {
    try {
      if (!isScreenSharing) {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        if (localVideoRef.current) {
          const currentStream = localVideoRef.current.srcObject as MediaStream;
          const audioTracks = currentStream?.getAudioTracks();
          screenStream.addTrack(audioTracks[0]);
          localVideoRef.current.srcObject = screenStream;
        }
      } else {
        const userStream = await navigator.mediaDevices.getUserMedia({ 
          video: isVideoOn, 
          audio: !isMuted 
        });
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = userStream;
        }
      }
      setIsScreenSharing(!isScreenSharing);
      toast({
        description: isScreenSharing ? "Screen sharing stopped" : "Screen sharing started",
      });
    } catch (err) {
      console.error("Error sharing screen:", err);
      toast({
        variant: "destructive",
        title: "Screen Sharing Failed",
        description: "Unable to share your screen.",
      });
    }
  };
  
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  
  const endCall = () => {
    const stream = localVideoRef.current?.srcObject as MediaStream;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
    }
    toast({
      description: "Call ended successfully",
    });
    navigate("/dashboard");
  };
  
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const now = new Date();
      const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      setMessages([...messages, {
        text: newMessage,
        sender: "You",
        time
      }]);
      
      setNewMessage("");
      
      // Simulate receiving a reply after 2 seconds
      setTimeout(() => {
        const replyTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setMessages(prev => [...prev, {
          text: "Thank you for your message. How can I help you further?",
          sender: "Dr. Sarah Johnson",
          time: replyTime
        }]);
      }, 2000);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-1 flex flex-col md:flex-row p-4 gap-4 max-w-7xl mx-auto w-full">
        {/* Consultation Header */}
        <div className="w-full bg-white rounded-lg shadow-sm p-4 md:hidden mb-4">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate(-1)}
              className="mr-2"
            >
              <ChevronLeft size={20} />
            </Button>
            <h1 className="text-xl font-semibold text-medilink-dark">Video Consultation</h1>
          </div>
          {appointmentDetails && (
            <div className="mt-2">
              <p className="text-sm text-gray-600">
                {appointmentDetails.doctorName} • {appointmentDetails.date} • {appointmentDetails.time}
              </p>
            </div>
          )}
        </div>
        
        {/* Main Video Container */}
        <div 
          ref={consultationRef}
          className="flex-1 flex flex-col bg-black rounded-lg overflow-hidden relative"
        >
          {/* Hidden header for desktop */}
          <div className="hidden md:flex items-center justify-between bg-black/60 p-4 absolute top-0 left-0 right-0 z-10">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate(-1)}
                className="mr-2 text-white"
              >
                <ChevronLeft size={20} />
              </Button>
              <h1 className="text-xl font-semibold text-white">Video Consultation</h1>
            </div>
            {appointmentDetails && (
              <div>
                <p className="text-sm text-gray-300">
                  {appointmentDetails.doctorName} • {appointmentDetails.date} • {appointmentDetails.time}
                </p>
              </div>
            )}
            <div className="flex items-center">
              <Button variant="ghost" size="sm" className="text-white">
                <Users size={20} />
                <span className="ml-1">{participants}</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-white">
                <MoreVertical size={20} />
              </Button>
            </div>
          </div>
          
          {/* Loading Indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-medilink-primary mb-4"></div>
                <p className="text-white">Connecting to your appointment...</p>
              </div>
            </div>
          )}
          
          {/* Remote Video (Large) */}
          <video
            ref={remoteVideoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
          ></video>
          
          {/* Local Video (Small) */}
          <div className="absolute bottom-20 right-4 w-1/4 max-w-[180px] aspect-video rounded-lg overflow-hidden border-2 border-white">
            <video
              ref={localVideoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            ></video>
          </div>
          
          {/* Control Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 flex justify-center">
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                className={`rounded-full ${isMuted ? 'bg-red-500 text-white border-red-500 hover:bg-red-600' : 'bg-gray-800 text-white border-gray-700'}`}
                onClick={toggleMute}
              >
                {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className={`rounded-full ${!isVideoOn ? 'bg-red-500 text-white border-red-500 hover:bg-red-600' : 'bg-gray-800 text-white border-gray-700'}`}
                onClick={toggleVideo}
              >
                {isVideoOn ? <Video size={20} /> : <VideoOff size={20} />}
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className={`rounded-full ${isScreenSharing ? 'bg-green-500 text-white border-green-500 hover:bg-green-600' : 'bg-gray-800 text-white border-gray-700'}`}
                onClick={toggleScreenShare}
              >
                <Share2 size={20} />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className={`rounded-full ${isChatOpen ? 'bg-medilink-primary text-white border-medilink-primary' : 'bg-gray-800 text-white border-gray-700'}`}
                onClick={toggleChat}
              >
                <MessageSquare size={20} />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className={`rounded-full ${!isAudioOn ? 'bg-yellow-500 text-white border-yellow-500 hover:bg-yellow-600' : 'bg-gray-800 text-white border-gray-700'}`}
                onClick={toggleAudio}
              >
                {isAudioOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
              </Button>
              
              <Button
                variant="destructive"
                size="icon"
                className="rounded-full"
                onClick={endCall}
              >
                <PhoneOff size={20} />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Chat Panel - shown when chat is open */}
        {isChatOpen && (
          <div className="w-full md:w-80 bg-white rounded-lg shadow-sm flex flex-col">
            <div className="p-4 border-b">
              <h2 className="font-medium text-medilink-dark">Chat</h2>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.length === 0 ? (
                <div className="text-center text-gray-400 py-10">
                  <MessageSquare className="mx-auto h-8 w-8 mb-2" />
                  <p>No messages yet.</p>
                  <p className="text-sm">Send a message to start the conversation.</p>
                </div>
              ) : (
                messages.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`${
                      msg.sender === "You" 
                        ? "ml-auto bg-medilink-primary text-white" 
                        : "mr-auto bg-gray-100 text-gray-800"
                    } rounded-lg p-3 max-w-[85%]`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <div className={`text-xs mt-1 flex items-center ${
                      msg.sender === "You" ? "text-white/70" : "text-gray-500"
                    }`}>
                      <span>{msg.time}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            <form onSubmit={sendMessage} className="p-4 border-t">
              <div className="flex">
                <input 
                  type="text" 
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..." 
                  className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-medilink-primary" 
                />
                <Button 
                  type="submit" 
                  className="rounded-l-none bg-medilink-primary hover:bg-medilink-primary/90"
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
