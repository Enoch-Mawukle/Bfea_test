import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingRegister from "@/components/ui/floating-register";
import AIChat from "@/components/ui/ai-chat";
import { Heart, Users2, Shield, Calendar, Clock, BookOpen } from "lucide-react";
import fatherSupportImage from "@/assets/programs/father-support.jpg";
import emotionalHealingImage from "@/assets/programs/emotional-healing.jpg";
import familyWellnessImage from "@/assets/programs/family-wellness.jpg";
import familyHealthImage from "@/assets/programs/family-health.jpg";

const SocialEmotional = () => {
  const subPrograms = [
    {
      title: "Fatherhood Reimagined",
      description: "Supporting fathers and father figures in developing healthy relationships and effective parenting skills through community and mentorship.",
      image: fatherSupportImage,
      ageGroup: "Adult Men",
      duration: "12-week cycles",
      features: ["Parenting skills", "Emotional intelligence", "Communication", "Community support"]
    },
    {
      title: "Seat of a Man's Heart",
      description: "A reflective program focusing on emotional healing, vulnerability, and authentic masculinity through journaling and group discussions.",
      image: emotionalHealingImage,
      ageGroup: "Men 18+",
      duration: "8-week program",
      features: ["Emotional healing", "Self-reflection", "Vulnerability training", "Brotherhood building"]
    },
    {
      title: "Family Wellness Circles",
      description: "Holistic family support addressing mental health, communication, and resilience through culturally responsive therapeutic approaches.",
      image: familyWellnessImage,
      ageGroup: "All Ages",
      duration: "Ongoing support",
      features: ["Mental health support", "Family therapy", "Crisis intervention", "Wellness planning"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 text-white min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${familyHealthImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Social-Emotional & Family Health</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Fostering healing, growth, and emotional resilience through reflection, community support, and culturally responsive care.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8">Program Overview</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Our Social-Emotional and Family Health programs address the critical need for mental health support, 
              emotional wellness, and family strengthening within Black communities. We provide culturally responsive 
              therapeutic approaches that honor our experiences while promoting healing and growth.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Culturally Responsive</h3>
                <p className="text-muted-foreground">Therapy and support that honors Black experiences and culture</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <Users2 className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Community Centered</h3>
                <p className="text-muted-foreground">Group support and collective healing approaches</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Safe Spaces</h3>
                <p className="text-muted-foreground">Confidential, judgment-free environments for growth</p>
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
            <p>Comprehensive wellness and support programs for individuals and families</p>
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
                        <span className="text-sm font-medium text-accent">Participants: {program.ageGroup}</span>
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
                      <Link to="/register">Access Support</Link>
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
            <h2>Stories of Healing</h2>
            <p>Real transformations from our wellness programs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Marcus, Father of 3</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Fatherhood Reimagined helped me break generational patterns and become the father 
                I wish I had. My relationship with my children has completely transformed."
              </p>
              <div className="text-sm text-accent font-medium">Fatherhood Reimagined</div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">James, Age 34</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Through Seat of a Man's Heart, I learned it's okay to be vulnerable. I found a 
                brotherhood that supports my healing journey."
              </p>
              <div className="text-sm text-accent font-medium">Seat of a Man's Heart</div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Williams Family</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Family Wellness Circles gave us tools to communicate better and navigate challenges 
                together. We're stronger as a family now."
              </p>
              <div className="text-sm text-accent font-medium">Family Wellness Circles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8">Additional Resources</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <BookOpen className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Crisis Support</h3>
                <p className="text-muted-foreground mb-4">
                  24/7 crisis intervention and emergency mental health support for individuals and families.
                </p>
                <Button variant="outline" size="sm">Access Now</Button>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Wellness Workshops</h3>
                <p className="text-muted-foreground mb-4">
                  Monthly workshops on stress management, self-care, and building emotional resilience.
                </p>
                <Button variant="outline" size="sm">View Schedule</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Begin Your Healing Journey</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            You don't have to face life's challenges alone. Our culturally responsive support programs 
            provide the safe space and community you need to heal, grow, and thrive. Take the first 
            step toward wellness today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/register">Get Support</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-foreground"> 
              <Link to="/contact">Speak to Someone</Link>
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

export default SocialEmotional;