import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingRegister from "@/components/ui/floating-register";
import AIChat from "@/components/ui/ai-chat";
import intern from "@/assets/intern.jpg";

const Internship = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section 
        className="relative pt-32 pb-20 text-white min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${intern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Internship Opportunities</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Gain valuable experience while supporting educational excellence.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Build Your Future While Building Ours</h2>
            <p>Transform your career while transforming lives through meaningful internship experiences</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Program Overview</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our internship program offers hands-on experience in educational excellence, community engagement, 
                and social impact. Work alongside experienced educators and community leaders while developing 
                professional skills that will serve you throughout your career.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Duration: 12-16 weeks</h4>
                    <p className="text-muted-foreground">Flexible scheduling options available</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Compensation: Paid positions</h4>
                    <p className="text-muted-foreground">Competitive stipends for all internships</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Mentorship included</h4>
                    <p className="text-muted-foreground">Direct access to industry professionals</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center" 
                alt="Students collaborating in a modern educational environment"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-4 text-foreground">Education Track</h3>
              <p className="text-muted-foreground mb-4">
                Support curriculum development, assist with classroom instruction, and help create innovative learning experiences.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Curriculum research and development</li>
                <li>• Student mentoring and tutoring</li>
                <li>• Educational technology integration</li>
                <li>• Assessment and evaluation support</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-4 text-foreground">Community Outreach</h3>
              <p className="text-muted-foreground mb-4">
                Engage with families, coordinate community events, and build partnerships with local organizations.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Family engagement programs</li>
                <li>• Community event planning</li>
                <li>• Partnership development</li>
                <li>• Social media and communications</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-4 text-foreground">Operations & Admin</h3>
              <p className="text-muted-foreground mb-4">
                Gain experience in nonprofit management, data analysis, and organizational development.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Program evaluation and analysis</li>
                <li>• Grant writing assistance</li>
                <li>• Financial operations support</li>
                <li>• Quality assurance and improvement</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">What Our Interns Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <p className="text-muted-foreground italic mb-4">
                  "This internship changed my perspective on education and community impact. I gained real-world experience 
                  while contributing to something meaningful."
                </p>
                <div className="font-semibold text-foreground">- Sarah Johnson, Education Track</div>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <p className="text-muted-foreground italic mb-4">
                  "The mentorship I received was invaluable. I learned not just about nonprofit work, but about leadership 
                  and making a difference in my community."
                </p>
                <div className="font-semibold text-foreground">- Marcus Williams, Community Outreach</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Ready to Apply?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Applications are accepted on a rolling basis. We welcome students from all backgrounds who are passionate 
              about education and community development.
            </p>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                <strong>Application Requirements:</strong> Resume, cover letter, two references, and unofficial transcript
              </p>
              <p className="text-muted-foreground">
                <strong>Application Deadline:</strong> Applications reviewed monthly
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

export default Internship;