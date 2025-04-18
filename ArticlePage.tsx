import { useNavigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ArticlePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Telemedicine: Trends to Watch in 2025",
      content: `
        With virtual healthcare becoming increasingly mainstream, we explore the emerging trends that are shaping the future of telemedicine.
        
        The healthcare industry is undergoing a dramatic transformation, driven by technological advances and changing patient preferences. 
        Telemedicine, once considered an alternative to traditional healthcare delivery, has now become a fundamental part of modern medical practice.
        
        This shift has been accelerated by global events and the increasing demand for accessible, efficient healthcare solutions. As we look ahead to 2025,
        several key trends are emerging that will define the next era of telemedicine.
      `,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
      date: "April 10, 2025",
      author: "Dr. Sarah Johnson",
      category: "Telemedicine",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Understanding Your Lab Results: A Patient's Guide",
      excerpt: "Medical lab results can be confusing. This comprehensive guide helps patients understand what their test results really mean.",
      content: `
        Medical lab results can be confusing. This comprehensive guide helps patients understand what their test results really mean.
        
        When you receive medical test results, the numbers and terminology can often be overwhelming. Understanding these results is crucial for taking control of your health journey.
        
        In this guide, we break down common lab tests, explain what the values mean, and provide context for interpreting your results in partnership with your healthcare provider.
      `,
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop",
      date: "April 5, 2025",
      author: "Dr. Michael Chen",
      category: "Patient Education",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Digital Health Records: Security and Accessibility in the Modern Healthcare Landscape",
      content: `
        In the rapidly evolving world of healthcare technology, digital health records have emerged as a double-edged sword, promising unprecedented efficiency while presenting complex challenges in security and patient privacy.

        ## The Digital Transformation of Healthcare

        The healthcare industry is undergoing a massive digital transformation. Gone are the days of paper-based medical records stored in bulky filing cabinets. Today, patient information is stored, shared, and accessed through sophisticated digital systems that span hospitals, clinics, and healthcare networks.

        ### The Promise of Digital Health Records

        Digital health records offer numerous advantages:
        - Instant access to patient history
        - Improved coordination between healthcare providers
        - Reduced medical errors
        - More efficient treatment planning
        - Enhanced patient engagement

        ## Security Challenges in the Digital Era

        However, this digital revolution comes with significant security challenges. Healthcare organizations must navigate a complex landscape of:

        ### 1. Regulatory Compliance
        - HIPAA (Health Insurance Portability and Accountability Act)
        - GDPR for international patient data
        - State-specific healthcare privacy laws

        ### 2. Cybersecurity Threats
        - Ransomware attacks
        - Data breaches
        - Unauthorized access attempts
        - Sophisticated phishing campaigns targeting healthcare institutions

        ## Innovative Solutions for Secure Health Records

        Healthcare technology experts are developing cutting-edge solutions to address these challenges:

        ### Advanced Encryption Techniques
        - End-to-end encryption
        - Blockchain-based record keeping
        - Multi-factor authentication

        ### AI-Powered Security Monitoring
        - Real-time threat detection
        - Anomaly identification
        - Predictive security measures

        ## Balancing Accessibility and Security

        The key challenge lies in creating a system that is both highly secure and easily accessible. Patients need quick access to their health information, while institutions must protect sensitive data.

        ### Patient Portal Innovations
        - User-friendly interfaces
        - Granular access controls
        - Transparent data sharing permissions

        ## The Future of Digital Health Records

        As technology continues to advance, we can expect:
        - More intelligent, adaptive security systems
        - Greater patient control over personal health data
        - Seamless, secure information sharing across healthcare networks

        ## Conclusion

        Digital health records represent a critical evolution in healthcare delivery. By carefully balancing technological innovation with robust security measures, we can create a healthcare ecosystem that is both efficient and trustworthy.

        As we move forward, continued collaboration between healthcare providers, technology experts, and policymakers will be crucial in shaping the future of digital health information management.
      `,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
      date: "March 28, 2025",
      author: "Emma Roberts, CISO",
      category: "Health Tech",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "Mental Health and Telehealth: Breaking Down Barriers",
      excerpt: "How virtual consultations are making mental healthcare more accessible and reducing stigma for patients across the country.",
      content: `
        How virtual consultations are making mental healthcare more accessible and reducing stigma for patients across the country.
        
        Access to mental health services has historically been limited by geographic location, provider availability, and social stigma. Telehealth is changing this landscape dramatically.
        
        Virtual mental health consultations offer privacy, convenience, and often shorter wait times than traditional in-person appointments. This has proven particularly valuable for patients in rural areas and those with mobility challenges.
        
        Research is now showing that for many mental health conditions, telehealth outcomes are comparable to in-person care, while patient satisfaction rates are often higher.
      `,
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2070&auto=format&fit=crop",
      date: "March 20, 2025",
      author: "Dr. Lisa Patel",
      category: "Mental Health",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Preventive Care: The Role of Regular Health Screenings",
      excerpt: "Why regular health screenings are essential for early detection and prevention of diseases, and how virtual pre-screening can help.",
      content: `
        Why regular health screenings are essential for early detection and prevention of diseases, and how virtual pre-screening can help.
        
        Preventive care remains one of the most effective strategies for maintaining good health and reducing healthcare costs over time. Regular screenings can detect potential health issues before they become serious problems.
        
        The types of screenings recommended vary by age, gender, family history, and other risk factors. Understanding which screenings are appropriate for you is an important part of managing your health proactively.
        
        New technologies are now enabling virtual pre-screenings, which can help determine when in-person diagnostic tests are necessary, saving time and resources for both patients and healthcare systems.
      `,
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
      date: "March 15, 2025",
      author: "Dr. James Wilson",
      category: "Preventive Care",
      readTime: "4 min read"
    },
  ];
  
  const post = blogPosts.find(post => post.id === Number(id));
  
  if (!post) {
    return <div>Article not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Articles
          </Button>
          
          <article className="max-w-5xl mx-auto">
            <div className="mb-12">
              <span className="px-3 py-1.5 bg-medilink-accent text-medilink-primary rounded-md text-sm">
                {post.category}
              </span>
              <h1 className="text-[3rem] font-bold text-medilink-dark mt-6 mb-6 leading-tight">{post.title}</h1>
              <div className="flex items-center text-gray-600 text-lg gap-4">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[500px] object-cover rounded-lg mb-12"
            />
            
            <div className="prose prose-xl max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-8 text-lg text-gray-700 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
