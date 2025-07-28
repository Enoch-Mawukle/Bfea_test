import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingRegister from "@/components/ui/floating-register";
import AIChat from "@/components/ui/ai-chat";
import director1 from "@/assets/board/director-1.jpg";
import director2 from "@/assets/board/director-2.jpg";
import director3 from "@/assets/board/director-3.jpg";
import boardBg from "@/assets/board-meeting.jpg"; // ✅ New import
import { Linkedin, Mail, Award, GraduationCap } from "lucide-react";

const Board = () => {
  const boardMembers = [
    {
      name: " Lt Col (Ret) Thallas C. Lumpkin",
      title: "Chairman of the Board",
      image: director1,
      bio: " Lt Col (Ret) Thallas C. Lumpkin brings over 20 years of experience in educational leadership and nonprofit governance. He holds a Ph.D. in Educational Administration from Harvard University and has served on multiple boards focused on advancing educational equity.",
      expertise: ["Educational Leadership", "Strategic Planning", "Nonprofit Governance", "Community Development"],
      linkedin: "#",
      email: "thallas.lumpkin@bfea.org"
    },
    {
      name: "Mrs. Sharon Riley",
      title: "Vice Chairman & Academic Affairs",
      image: director2,
      bio: "Mrs. Sharon Riley is a distinguished educator with 15 years of experience in curriculum development and teacher training. She specializes in culturally responsive pedagogy and has published extensively on education in African American communities.",
      expertise: ["Curriculum Development", "Teacher Training", "Cultural Education", "Academic Excellence"],
      linkedin: "#",
      email: "sharon.riley@bfea.org"
    },
    {
      name: "Mr. Daniel E. Ings",
      title: "Secretary & Community Outreach",
      image: director3,
      bio: "Mr. Daniel is a seasoned community organizer and social entrepreneur. He founded several successful youth development programs and has extensive experience in building partnerships between educational institutions and communities.",
      expertise: ["Community Engagement", "Youth Development", "Partnership Building", "Social Innovation"],
      linkedin: "#",
      email: "daniel.ings@bfea.org"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section 
        className="relative pt-32 pb-20 text-white min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${boardBg})`, // ✅ Fixed path
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Board of Directors</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Visionary leaders committed to advancing educational excellence and community empowerment through strategic governance and unwavering dedication.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Leadership Excellence</h2>
            <p>Meet the distinguished individuals guiding our mission and strategic direction</p>
          </div>
          
          <div className="space-y-12">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1 p-8">
                    <div className="text-center">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
                      />
                      <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
                      <p className="text-lg text-accent font-medium mb-4">{member.title}</p>
                      <div className="flex justify-center gap-4">
                        <a href={member.linkedin} className="social-icon">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={`mailto:${member.email}`} className="social-icon">
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5" />
                          About
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                          <GraduationCap className="w-5 h-5" />
                          Areas of Expertise
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
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
            <h2>Governance Commitment</h2>
            <p>Our board's dedication to transparency, accountability, and excellence</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-lg text-center">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">Strategic Oversight</h3>
              <p className="text-muted-foreground">Providing strategic direction and ensuring mission alignment across all programs and initiatives.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-lg text-center">
              <GraduationCap className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">Educational Excellence</h3>
              <p className="text-muted-foreground">Committed to maintaining the highest standards in educational programming and outcomes.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-lg text-center">
              <Linkedin className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">Community Impact</h3>
              <p className="text-muted-foreground">Ensuring our programs create meaningful, lasting change in the communities we serve.</p>
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

export default Board;
