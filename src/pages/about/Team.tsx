import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingRegister from "@/components/ui/floating-register";
import AIChat from "@/components/ui/ai-chat";

// ✅ Proper imports from the assets folder
import heroImage from "@/assets/team-photo.jpg";
import director1 from "@/assets/board/director-1.jpg";
import simon from "@/assets/team/simon.jpg";
import ben from "@/assets/team/ben.jpg";
import joshua from "@/assets/team/joshua.jpg";
import pamela from "@/assets/team/pamela.jpg";
import lumpkin from "@/assets/team/lumpkin.jpg";

const Team = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section
        className="relative pt-32 pb-20 text-white min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Team</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Meet the dedicated educators and leaders driving our mission forward.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Leadership Team</h2>
            <p>Experienced professionals committed to empowering Black families through education</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-card p-6 rounded-lg border text-center hover-scale">
              <img 
                src={director1}
                alt="Dr. Marcus Johnson - Executive Director"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2 text-foreground">Dr. Marcus Johnson</h3>
              <p className="text-primary font-semibold mb-3">Executive Director</p>
              <p className="text-muted-foreground text-sm mb-4">
                Ed.D. in Educational Leadership with 15 years of experience in urban education reform and community development.
              </p>
              <div className="text-xs text-muted-foreground">
                Previously served as Principal at Roosevelt Elementary and holds certifications in nonprofit management.
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border text-center hover-scale">
              <img 
                src={simon}
                alt="Angela Washington - Director of Programs"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2 text-foreground">Angela Washington</h3>
              <p className="text-primary font-semibold mb-3">Director of Programs</p>
              <p className="text-muted-foreground text-sm mb-4">
                M.Ed. in Curriculum and Instruction with expertise in culturally responsive pedagogy and family engagement.
              </p>
              <div className="text-xs text-muted-foreground">
                Former curriculum specialist and parent education coordinator with 12 years in education.
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border text-center hover-scale">
              <img 
                src={ben}
                alt="David Thompson - Community Outreach Manager"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2 text-foreground">David Thompson</h3>
              <p className="text-primary font-semibold mb-3">Community Outreach Manager</p>
              <p className="text-muted-foreground text-sm mb-4">
                B.A. in Social Work with extensive experience in community organizing and partnership development.
              </p>
              <div className="text-xs text-muted-foreground">
                Community advocate with 10 years building relationships between schools and families.
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border text-center hover-scale">
              <img 
                src={joshua}
                alt="Dr. Keisha Williams - Director of Research"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2 text-foreground">Dr. Keisha Williams</h3>
              <p className="text-primary font-semibold mb-3">Director of Research</p>
              <p className="text-muted-foreground text-sm mb-4">
                Ph.D. in Educational Psychology specializing in academic achievement gaps and intervention strategies.
              </p>
              <div className="text-xs text-muted-foreground">
                Published researcher with expertise in data-driven program evaluation and assessment.
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border text-center hover-scale">
              <img 
                src={pamela}
                alt="James Miller - Operations Director"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2 text-foreground">James Miller</h3>
              <p className="text-primary font-semibold mb-3">Operations Director</p>
              <p className="text-muted-foreground text-sm mb-4">
                MBA in Nonprofit Management with expertise in organizational development and financial sustainability.
              </p>
              <div className="text-xs text-muted-foreground">
                Former operations manager at United Way with 8 years in nonprofit administration.
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border text-center hover-scale">
              <img 
                src={lumpkin}
                alt="Tiffany Roberts - Youth Development Coordinator"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2 text-foreground">Tiffany Roberts</h3>
              <p className="text-primary font-semibold mb-3">Youth Development Coordinator</p>
              <p className="text-muted-foreground text-sm mb-4">
                M.S. in Counseling Psychology with specialization in adolescent development and mentorship programs.
              </p>
              <div className="text-xs text-muted-foreground">
                Licensed counselor with 9 years developing youth leadership and mentorship initiatives.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Our Approach to Leadership</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">🎯</span>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-foreground">Shared Vision</h4>
                <p className="text-muted-foreground">
                  Our leadership team operates with a unified commitment to educational equity and community empowerment.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">🤝</span>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-foreground">Collaborative Decision-Making</h4>
                <p className="text-muted-foreground">
                  We believe in inclusive leadership that values input from all stakeholders in our community.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">📈</span>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-foreground">Continuous Learning</h4>
                <p className="text-muted-foreground">
                  Our team commits to ongoing professional development and staying current with best practices.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg border">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Advisory Board</h3>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              Our Advisory Board includes distinguished leaders from education, business, and community organizations 
              who provide strategic guidance and support for our mission.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">DR</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Dr. Patricia Robinson</h4>
                  <p className="text-muted-foreground text-sm">Former Superintendent, City School District</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">MH</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Michael Harris</h4>
                  <p className="text-muted-foreground text-sm">CEO, Community Development Corporation</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">LJ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Lisa Jackson</h4>
                  <p className="text-muted-foreground text-sm">Director of Education, Local Foundation</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">RW</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Robert Wilson</h4>
                  <p className="text-muted-foreground text-sm">Parent Leader & Community Advocate</p>
                </div>
              </div>
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

export default Team;