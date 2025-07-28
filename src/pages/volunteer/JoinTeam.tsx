import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingRegister from "@/components/ui/floating-register";
import AIChat from "@/components/ui/ai-chat";
import volunteers from "@/assets/volunteers.jpg";

const JoinTeam = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section 
        className="relative pt-32 pb-20 text-white min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${volunteers})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Make a difference in the lives of Black families through volunteer service.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Volunteer Opportunities</h2>
            <p>Share your time and skills to support our educational mission</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Why Volunteer With Us?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Join a community of dedicated individuals working to empower Black families through education. 
                Your skills, experience, and passion can make a direct impact on students and families in our community.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <span className="text-foreground">Flexible scheduling to fit your lifestyle</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <span className="text-foreground">Comprehensive training and ongoing support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <span className="text-foreground">Opportunities for leadership and growth</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop&crop=center" 
                alt="Volunteers working together in a community setting"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-card p-6 rounded-lg border hover-scale">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Academic Support</h3>
              <p className="text-muted-foreground mb-4">
                Provide one-on-one tutoring, homework assistance, and reading support to students of all ages.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Reading buddies program</li>
                <li>• Math and science tutoring</li>
                <li>• Test preparation assistance</li>
                <li>• Study skills coaching</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border hover-scale">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Enrichment Activities</h3>
              <p className="text-muted-foreground mb-4">
                Lead workshops, clubs, and creative activities that expand learning beyond the classroom.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Art and music programs</li>
                <li>• STEM clubs and competitions</li>
                <li>• Cultural celebration events</li>
                <li>• Life skills workshops</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border hover-scale">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Mentorship</h3>
              <p className="text-muted-foreground mb-4">
                Serve as a positive role model and guide for students navigating academic and personal challenges.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• One-on-one mentoring</li>
                <li>• Career guidance sessions</li>
                <li>• College preparation support</li>
                <li>• Leadership development</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border hover-scale">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Family Engagement</h3>
              <p className="text-muted-foreground mb-4">
                Help organize and facilitate programs that strengthen family involvement in education.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Parent workshop facilitation</li>
                <li>• Family literacy nights</li>
                <li>• Community resource fairs</li>
                <li>• Cultural heritage events</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border hover-scale">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Administrative Support</h3>
              <p className="text-muted-foreground mb-4">
                Assist with essential behind-the-scenes operations that keep our programs running smoothly.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Event planning and coordination</li>
                <li>• Data entry and organization</li>
                <li>• Resource development</li>
                <li>• Communications support</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border hover-scale">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Digital Literacy</h3>
              <p className="text-muted-foreground mb-4">
                Help students and families develop essential technology skills for academic and professional success.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Computer skills training</li>
                <li>• Digital citizenship education</li>
                <li>• Online learning support</li>
                <li>• Technology troubleshooting</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-primary text-white p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Volunteer Training & Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold mb-2">Orientation</h4>
                <p className="text-white/90">Comprehensive introduction to our mission, values, and programs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📖</span>
                </div>
                <h4 className="font-semibold mb-2">Skill Training</h4>
                <p className="text-white/90">Role-specific training to ensure you feel confident and prepared</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="font-semibold mb-2">Ongoing Support</h4>
                <p className="text-white/90">Regular check-ins and professional development opportunities</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Ready to Get Started?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our volunteer community and make a lasting impact. Whether you have 2 hours a week or 10, 
              there's a meaningful way for you to contribute.
            </p>
            <div className="bg-card p-6 rounded-lg border max-w-md mx-auto">
              <h4 className="font-bold mb-4 text-foreground">Next Steps:</h4>
              <ol className="text-left text-muted-foreground space-y-2">
                <li>1. Complete our volunteer application</li>
                <li>2. Attend an orientation session</li>
                <li>3. Complete background check</li>
                <li>4. Begin your volunteer journey!</li>
              </ol>
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

export default JoinTeam;