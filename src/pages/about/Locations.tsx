import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingRegister from "@/components/ui/floating-register";
import AIChat from "@/components/ui/ai-chat";
import { MapPin, Globe, Phone, Mail } from "lucide-react";
import locationimage from "@/assets/locations-map.jpg"
const Locations = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section 
        //className="pt-32 pb-20 bg-gradient-primary text-white">
        className="relative pt-32 pb-20 text-white min-h-[60vh] flex items-center"
        style={{
          //backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a")`,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${locationimage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Locations</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Bridging communities across two continents with educational excellence.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Global Presence</h2>
            <p>Serving communities in both the United States and Ghana</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* USA Location */}
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">United States Headquarters</h3>
                <p className="text-accent font-medium">Florida, USA</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+1 (448) 488-3608</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@blackfamilyedu.org</p>
                  </div>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Programs Offered:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Core Academic Programs</li>
                    <li>• Mentorship & Leadership</li>
                    <li>• Social-Emotional & Family Health</li>
                    <li>• Enrichment & Special Topics</li>
                    <li>• Boys of Valor Program</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ghana Location */}
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Ghana Operations</h3>
                <p className="text-accent font-medium">Ada, Ghana</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+233 (54) 792-5195</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@blackfamilyedu.org</p>
                  </div>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Programs Offered:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Global Programs</li>
                    <li>• Ghana Internship Program</li>
                    <li>• Africa Reconnect Series</li>
                    <li>• Cultural Exchange Programs</li>
                    <li>• International Teaching Fellowship</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-accent text-white p-8 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Bridging Two Worlds</h3>
              <p className="text-lg leading-relaxed">
                Our dual-location model allows us to create unique educational experiences that 
                honor African heritage while preparing students for global opportunities. Through 
                our programs, students can participate in cultural exchanges, international 
                internships, and heritage learning experiences that connect them with their roots 
                while building skills for the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingRegister />
      <AIChat />
    </div>
  );
};

export default Locations;