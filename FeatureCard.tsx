
import { LucideIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  onClick?: () => void;
}

export default function FeatureCard({ icon: Icon, title, description, link, onClick }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleClick = () => {
    // Show toast notification
    toast({
      title: title,
      description: `Navigating to ${title.toLowerCase()} service`,
    });
    
    // Execute custom onClick if provided
    if (onClick) {
      onClick();
    } 
    // Navigate to link if provided
    else if (link) {
      navigate(link);
    }
  };

  // Determine which page to navigate to based on the title
  const getLinkFromTitle = () => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes("video") || titleLower.includes("consultation")) {
      return "/video-consultation";
    } else if (titleLower.includes("doctor") || titleLower.includes("specialist")) {
      return "/find-doctor";
    } else if (titleLower.includes("record") || titleLower.includes("document")) {
      return "/health-records";
    } else if (titleLower.includes("prescription") || titleLower.includes("medication")) {
      return "/prescriptions";
    }
    return "/";
  };

  // Use the link prop if provided, otherwise derive from title
  const cardLink = link || getLinkFromTitle();

  return (
    <div 
      className={`medilink-card flex flex-col items-center text-center p-8 transition-all duration-300 ${
        isHovered ? 'shadow-lg transform -translate-y-1' : 'shadow'
      } cursor-pointer hover:border-medilink-primary bg-white rounded-lg`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        // If custom onClick is provided, use it, otherwise navigate
        if (onClick) {
          onClick();
        } else {
          navigate(cardLink);
          toast({
            title: `${title}`,
            description: `Navigating to ${title.toLowerCase()} service`,
          });
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Learn more about ${title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          if (onClick) {
            onClick();
          } else {
            navigate(cardLink);
            toast({
              title: `${title}`,
              description: `Navigating to ${title.toLowerCase()} service`,
            });
          }
        }
      }}
    >
      <div className={`p-4 rounded-full mb-6 transition-colors duration-300 ${
        isHovered ? 'bg-medilink-primary' : 'bg-medilink-accent'
      }`}>
        <Icon className={`h-8 w-8 transition-colors duration-300 ${
          isHovered ? 'text-white' : 'text-medilink-primary'
        }`} />
      </div>
      <h3 className="text-xl font-semibold text-medilink-dark mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
