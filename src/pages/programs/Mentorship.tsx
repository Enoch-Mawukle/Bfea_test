import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingRegister from "@/components/ui/floating-register";
import AIChat from "@/components/ui/ai-chat";
import { Users, Trophy, Target, Star, Calendar, Clock } from "lucide-react";
import communityMentorshipImage from "@/assets/programs/community-mentorship.jpg";
import leadershipDevelopmentImage from "@/assets/programs/leadership-development.jpg";
import characterMentorshipImage from "@/assets/programs/character-mentorship.jpg";
import mentorshipLeadership from "@/assets/programs/mentorship-leadership.jpg";

const Mentorship = () => {
  const subPrograms = [
    {
      title: "The Village",
      description: "Community-based mentorship program connecting youth with positive role models for guidance, support, and life skill development.",
      image: communityMentorshipImage,
      ageGroup: "Ages 10-18",
      duration: "Year-round",
      features: ["One-on-one mentoring", "Group activities", "Life skills training", "Community service"]
    },
    {
      title: "Million Dollar Club",
      description: "Exclusive leadership development program for high-achieving students focused on entrepreneurship, financial literacy, and executive skills.",
      image: leadershipDevelopmentImage,
      ageGroup: "Ages 14-18",
      duration: "12-month program",
      features: ["Business skills", "Financial planning", "Leadership training", "Networking opportunities"]
    },
    {
      title: "Boys of Valor Mentorship",
      description: "Character-focused mentorship specifically designed for young men, emphasizing integrity, responsibility, and positive masculinity.",
      image: characterMentorshipImage,
      ageGroup: "Boys 10-17",
      duration: "Ongoing",
      features: ["Character development", "Accountability partnerships", "Male role models", "Value-based learning"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 text-white min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${mentorshipLeadership})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Mentorship & Leadership</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Developing the next generation of leaders through mentorship, character building, accountability, and skill development.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8">Program Overview</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Our Mentorship and Leadership programs are designed to guide young people toward becoming confident, 
              capable leaders in their communities. Through structured mentoring relationships, skill development, 
              and character building, participants develop the tools they need to succeed in life and leadership.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Quality Mentors</h3>
                <p className="text-muted-foreground">Carefully selected and trained mentors who care</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <Target className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Goal-Oriented</h3>
                <p className="text-muted-foreground">Clear objectives and accountability measures</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <Star className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Character Focus</h3>
                <p className="text-muted-foreground">Building integrity, responsibility, and values</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Programs */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Our Programs</h2>
            <p>Comprehensive mentorship and leadership development opportunities</p>
          </div>
          
          <div className="space-y-12">
            {subPrograms.map((program, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 space-y-6">
                    <h3 className="text-3xl font-bold text-primary">{program.title}</h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-accent/10 px-4 py-2 rounded-lg">
                        <span className="text-sm font-medium text-accent">Age Group: {program.ageGroup}</span>
                      </div>
                      <div className="bg-primary/10 px-4 py-2 rounded-lg">
                        <span className="text-sm font-medium text-primary">Duration: {program.duration}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-primary">Program Features:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button variant="default" size="lg" asChild>
                      <Link to="/register">Join Program</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Leadership Success Stories</h2>
            <p>Young leaders making a difference in their communities</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Antonio, Age 17</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Through The Village program, I found a mentor who believed in me. Now I'm student 
                body president and heading to college on a leadership scholarship."
              </p>
              <div className="text-sm text-accent font-medium">The Village</div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Zara, Age 16</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Million Dollar Club taught me about business and financial planning. I launched my 
                own tutoring service and saved $3,000 for college."
              </p>
              <div className="text-sm text-accent font-medium">Million Dollar Club</div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Jamal, Age 15</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Boys of Valor helped me understand what it means to be a man of character. I'm more 
                confident and responsible now."
              </p>
              <div className="text-sm text-accent font-medium">Boys of Valor Mentorship</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Development Framework */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="section-title">
              <h2>Leadership Development Framework</h2>
              <p>Our comprehensive approach to building future leaders</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Relationship Building</h3>
                <p className="text-sm text-muted-foreground">Strong mentor-mentee connections and peer networks</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Skill Development</h3>
                <p className="text-sm text-muted-foreground">Practical skills for leadership and success</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Character Building</h3>
                <p className="text-sm text-muted-foreground">Values-based leadership and ethical decision making</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Achievement Focus</h3>
                <p className="text-sm text-muted-foreground">Goal setting and celebration of accomplishments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Lead?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Every great leader started with someone who believed in them. Join our mentorship and 
            leadership programs to discover your potential, develop your skills, and become the 
            leader your community needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/register">Join Today</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-foreground">
              <Link to="/contact">Become a Mentor</Link>
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

export default Mentorship;