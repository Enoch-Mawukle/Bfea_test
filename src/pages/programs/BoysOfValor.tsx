import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingRegister from "@/components/ui/floating-register";
import AIChat from "@/components/ui/ai-chat";
import { Shield, BookOpen, Users, Award, Calendar, Clock } from "lucide-react";
import characterVirtueImage from "@/assets/programs/character-virtue-training.jpg";
import reflectionJournalingImage from "@/assets/programs/reflection-journaling.jpg";
import maleMentorshipImage from "@/assets/programs/male-mentorship.jpg";
import achievementRecognitionImage from "@/assets/programs/achievement-recognition.jpg";
import boys from "@/assets/programs/boys-of-valor.jpg";

const BoysOfValor = () => {
  const monthlyVirtues = [
    { month: "January", virtue: "Integrity", description: "Being honest and authentic in all situations" },
    { month: "February", virtue: "Respect", description: "Honoring others and treating them with dignity" },
    { month: "March", virtue: "Courage", description: "Standing up for what's right, even when it's difficult" },
    { month: "April", virtue: "Perseverance", description: "Never giving up in the face of challenges" },
    { month: "May", virtue: "Compassion", description: "Showing kindness and empathy to others" },
    { month: "June", virtue: "Responsibility", description: "Being accountable for actions and commitments" },
    { month: "July", virtue: "Excellence", description: "Striving to do your best in everything" },
    { month: "August", virtue: "Leadership", description: "Inspiring and guiding others positively" },
    { month: "September", virtue: "Self-Discipline", description: "Having control over thoughts and actions" },
    { month: "October", virtue: "Gratitude", description: "Appreciating what you have and expressing thanks" },
    { month: "November", virtue: "Humility", description: "Being modest and open to learning from others" },
    { month: "December", virtue: "Service", description: "Contributing to your community and helping others" }
  ];

  const programFeatures = [
    {
      title: "Character Virtue Training",
      description: "Each month centers around a specific character virtue with lessons, activities, and real-world applications.",
      image: characterVirtueImage
    },
    {
      title: "Reflection & Journaling",
      description: "Boys develop self-awareness and emotional intelligence through guided journal writing and reflection exercises.",
      image: reflectionJournalingImage
    },
    {
      title: "Male Mentorship",
      description: "Small group mentoring with positive male role models who provide guidance and accountability.",
      image: maleMentorshipImage
    },
    {
      title: "Achievement Recognition",
      description: "Achievement ceremonies and recognition for growth in character and virtue demonstration.",
      image: achievementRecognitionImage
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 text-white min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${boys})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Boys of Valor Program</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            A year-long character-building journey for boys ages 10–17, developing purpose, discipline, and emotional strength through virtue-based learning.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8">Program Overview</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Boys of Valor is specifically designed for young men who are ready to develop strong character, 
              emotional intelligence, and leadership skills. Through monthly virtue studies, reflective practices, 
              and supportive mentorship, boys learn what it means to be a man of integrity and purpose.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Character First</h3>
                <p className="text-muted-foreground">Building strong moral foundation and values</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Brotherhood</h3>
                <p className="text-muted-foreground">Creating bonds with peers and positive male mentors</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <BookOpen className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Self-Reflection</h3>
                <p className="text-muted-foreground">Developing emotional intelligence and self-awareness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Virtues */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>12 Months of Character Development</h2>
            <p>Each month focuses on a specific virtue with lessons, activities, and real-world applications</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monthlyVirtues.map((virtue, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{virtue.virtue}</h3>
                    <p className="text-sm text-accent">{virtue.month}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{virtue.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Program Components</h2>
            <p>Comprehensive approach to character development and leadership training</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {programFeatures.map((feature, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Valor Success Stories</h2>
            <p>Young men transformed through character development</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Marcus, Age 14</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Boys of Valor taught me what real strength looks like. I learned that being vulnerable 
                and asking for help actually makes you stronger, not weaker."
              </p>
              <div className="text-sm text-accent font-medium">Program Graduate</div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Devon, Age 16</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "The monthly virtues changed how I see myself and others. I'm more confident in 
                making good decisions and standing up for what's right."
              </p>
              <div className="text-sm text-accent font-medium">Current Participant</div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Mrs. Thompson, Parent</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "I've seen such a positive change in my son. He's more respectful, responsible, 
                and thoughtful about his actions. This program works."
              </p>
              <div className="text-sm text-accent font-medium">Parent Testimonial</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Requirements */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="section-title">
              <h2>Program Requirements & Expectations</h2>
              <p>What we ask of our Boys of Valor participants</p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Commitment Requirements:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">Attend monthly group sessions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">Complete weekly journal reflections</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">Participate in community service projects</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">Practice monthly virtue in daily life</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">What's Provided:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">Personal mentorship</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">Monthly workbooks and materials</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">Leadership development opportunities</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">Awards and recognition ceremonies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Become a Man of Valor?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join a brotherhood of young men committed to excellence, character, and positive change. 
            Through Boys of Valor, you'll discover your inner strength, develop leadership skills, 
            and learn what it truly means to be a man of integrity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/register">Join Boys of Valor</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-foreground">
              <Link to="/contact">Learn More</Link>
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

export default BoysOfValor;