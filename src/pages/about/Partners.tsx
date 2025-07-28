import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingRegister from "@/components/ui/floating-register";
import AIChat from "@/components/ui/ai-chat";
import { Button } from "@/components/ui/button";
import { Building, Users, Globe, BookOpen, Heart, Star, ArrowRight } from "lucide-react";
import partnershipsImage from "@/assets/partnerships.jpg";

const Partners = () => {
  const partners = [
    {
      name: "Dream Builders Network",
      type: "Primary Partner",
      description: "Our foundational partner organization helping us expand our reach and impact across both the United States and Ghana. Together, we're building educational programs that bridge cultures and empower communities.",
      focus: "International Expansion & Cultural Exchange",
      icon: <Globe className="w-12 h-12 text-accent" />,
      partnership: "Strategic Alliance"
    },
    {
      name: "Sunshine Learning Foundation",
      type: "Educational Partner",
      description: "A nonprofit organization specializing in early childhood education and literacy programs. They provide curriculum support and teacher training for our Reading Warriors Initiative.",
      focus: "Early Childhood Education & Literacy",
      icon: <BookOpen className="w-12 h-12 text-accent" />,
      partnership: "Program Collaboration"
    },
    {
      name: "Community Health Network",
      type: "Wellness Partner",
      description: "Providing mental health and family wellness support services to complement our social-emotional learning programs. They offer counseling and family therapy services.",
      focus: "Mental Health & Family Wellness",
      icon: <Heart className="w-12 h-12 text-accent" />,
      partnership: "Service Integration"
    },
    {
      name: "Tech Future Academy",
      type: "Technology Partner",
      description: "Leading the way in digital literacy education, they support our AI for the People program and provide cutting-edge technology resources for our students.",
      focus: "Digital Literacy & Technology",
      icon: <Star className="w-12 h-12 text-accent" />,
      partnership: "Technology Support"
    },
    {
      name: "Young Leaders Institute",
      type: "Leadership Partner",
      description: "Specializing in youth leadership development, they collaborate with our Boys of Valor and mentorship programs to provide advanced leadership training.",
      focus: "Youth Leadership Development",
      icon: <Users className="w-12 h-12 text-accent" />,
      partnership: "Leadership Training"
    },
    {
      name: "Corporate Excellence Foundation",
      type: "Corporate Partner",
      description: "A corporate foundation focused on educational equity and economic development in underserved communities. They provide funding and professional mentorship opportunities.",
      focus: "Corporate Mentorship & Funding",
      icon: <Building className="w-12 h-12 text-accent" />,
      partnership: "Financial & Mentorship Support"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section 
        //className="pt-32 pb-20 bg-gradient-primary text-white"
        className="relative pt-32 pb-20 text-white min-h-[60vh] flex items-center"
        style={{
          //backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a")`,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${partnershipsImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Partners</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Collaborating with organizations that share our vision for educational empowerment and community transformation.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Strategic Partnerships</h2>
            <p>Building stronger communities through collaborative excellence</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    {partner.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-primary">{partner.name}</h3>
                      <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mt-2 sm:mt-0">
                        {partner.type}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {partner.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-primary">Focus Area:</span>
                        <span className="text-sm text-muted-foreground">{partner.focus}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-primary">Partnership Type:</span>
                        <span className="text-sm text-muted-foreground">{partner.partnership}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Partnership Benefits</h2>
            <p>How our collaborative approach creates greater impact</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-lg text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">Expanded Reach</h3>
              <p className="text-muted-foreground">
                Partnerships allow us to serve more families and communities through shared resources and expertise.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-lg text-center">
              <Star className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">Enhanced Quality</h3>
              <p className="text-muted-foreground">
                Collaborating with specialists in various fields ensures our programs maintain the highest standards.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-lg text-center">
              <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">Sustainable Impact</h3>
              <p className="text-muted-foreground">
                Strong partnerships create lasting change through coordinated efforts and shared accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Become a Partner</h2>
            <p className="text-xl mb-8">
              Interested in partnering with BFEA? We're always looking for organizations 
              that share our commitment to educational excellence and community empowerment.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-3">Partnership Opportunities</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Program collaboration and curriculum development</li>
                  <li>• Resource sharing and expertise exchange</li>
                  <li>• Joint funding and grant opportunities</li>
                  <li>• Community outreach and impact expansion</li>
                </ul>
              </div>
              
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-3">What We Look For</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Shared mission and values alignment</li>
                  <li>• Commitment to educational equity</li>
                  <li>• Track record of community impact</li>
                  <li>• Sustainable partnership capacity</li>
                </ul>
              </div>
            </div>
            
            <Button variant="secondary" size="lg">
              Contact Us About Partnership
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingRegister />
      <AIChat />
    </div>
  );
};

export default Partners;