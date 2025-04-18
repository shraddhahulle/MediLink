import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Blog() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Telemedicine: Trends to Watch in 2025",
      excerpt: "With virtual healthcare becoming increasingly mainstream, we explore the emerging trends that are shaping the future of telemedicine.",
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
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop",
      date: "April 5, 2025",
      author: "Dr. Michael Chen",
      category: "Patient Education",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Digital Health Records: Security and Accessibility in the Modern Healthcare Landscape",
      excerpt: "A deep dive into how healthcare providers are navigating the complex challenges of secure and accessible digital health records in the era of technological advancement.",
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
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
      date: "March 15, 2025",
      author: "Dr. James Wilson",
      category: "Preventive Care",
      readTime: "4 min read"
    },
  ];
  
  // Filter posts based on search query
  const filteredPosts = searchQuery
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : blogPosts;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-medilink-dark mb-6">MediLink Blog</h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Insights and information about healthcare, telemedicine, and wellness from our team of experts.
            </p>
            
            <div className="max-w-2xl mx-auto mt-10">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-3 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          
          <Separator className="mb-16" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {filteredPosts.map((post) => (
              <div key={post.id} className="flex flex-col rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="px-3 py-1.5 bg-medilink-accent text-medilink-primary rounded-md mr-3">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-3xl font-semibold text-medilink-dark mb-4 line-clamp-2">{post.title}</h2>
                  <p className="text-lg text-gray-600 mb-6 flex-grow line-clamp-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                    <div className="flex items-center text-base text-gray-500">
                      <Calendar size={16} className="mr-2" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center text-base text-gray-500">
                      <User size={16} className="mr-2" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between text-medilink-primary hover:text-medilink-primary/80 hover:bg-medilink-accent/50 py-3 text-lg"
                    onClick={() => navigate(`/blog/${post.id}`)}
                  >
                    Read Article <ArrowRight size={20} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">We couldn't find any articles matching your search criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => setSearchQuery("")}
              >
                Clear Search
              </Button>
            </div>
          )}
          
          <div className="mt-8 text-center">
            <Button size="lg" className="medilink-btn-primary">
              Load More Articles
            </Button>
          </div>
          
          <div className="mt-16 p-8 bg-medilink-accent rounded-lg">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-medilink-dark mb-2">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600">Stay updated with the latest health insights and MediLink news.</p>
            </div>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-grow"
              />
              <Button className="medilink-btn-primary whitespace-nowrap">
                Subscribe
              </Button>
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
