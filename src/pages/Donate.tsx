import React from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AIChat from "@/components/ui/ai-chat";
import donateBackground from "@/assets/donate-background.jpg";
import { Heart, Users, Award, DollarSign, Zap, Target, Gift, Calendar } from "lucide-react";
import academicImpactImage from "@/assets/donate/academic-impact.jpg";
import mentorshipImpactImage from "@/assets/donate/mentorship-impact.jpg";
import familyWellnessImpactImage from "@/assets/donate/family-wellness-impact.jpg";
import scholarshipImpactImage from "@/assets/donate/scholarship-impact.jpg";


const Donate = () => {
  const donationAmounts = [25, 50, 100, 250, 500, 1000];
  
  const impactAreas = [
    {
      image: academicImpactImage,
      title: "Academic Programs",
      description: "Fund tutoring, literacy programs, and educational materials for students",
      impact: "$50 provides a month of tutoring for one student",
      examples: ["Reading Warriors materials", "Math tutoring sessions", "Financial literacy workshops"]
    },
    {
      image: mentorshipImpactImage,
      title: "Mentorship Programs",
      description: "Support leadership development and character-building initiatives",
      impact: "$100 sponsors a student in Boys of Valor for a month",
      examples: ["Boys of Valor supplies", "Leadership workshops", "Mentor training"]
    },
    {
      image: familyWellnessImpactImage,
      title: "Family Wellness",
      description: "Enable mental health support and family strengthening programs",
      impact: "$250 funds family counseling sessions for a month",
      examples: ["Therapy sessions", "Crisis intervention", "Wellness workshops"]
    },
    {
      image: scholarshipImpactImage,
      title: "Scholarships",
      description: "Provide educational opportunities and remove financial barriers",
      impact: "$500 provides a partial scholarship for one student",
      examples: ["Program enrollment fees", "Educational materials", "Conference attendance"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 text-white min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${donateBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Support Our Mission</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto mb-8">
            Your generous donation helps empower Black families through education and creates lasting impact in our communities.
          </p>
          <div className="flex items-center justify-center gap-4 text-lg">
            <Heart className="w-6 h-6 text-accent" />
            <span>Every donation makes a difference</span>
            <Heart className="w-6 h-6 text-accent" />
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Choose Your Donation Amount</h2>
            <p>Select an amount that feels right for you - every contribution helps</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  className="bg-card hover:bg-accent/10 border-2 border-border hover:border-accent rounded-lg p-6 text-center transition-all duration-200 group"
                >
                  <DollarSign className="w-8 h-8 text-accent mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-2xl font-bold text-primary">${amount}</span>
                </button>
              ))}
            </div>
            
            <div className="text-center space-y-6">
              <div className="bg-accent/10 p-4 rounded-lg">
                <p className="text-lg font-medium text-primary mb-2">Custom Amount</p>
                <div className="flex items-center justify-center gap-2">
                  <DollarSign className="w-5 h-5 text-accent" />
                  <input 
                    type="number" 
                    placeholder="Enter amount" 
                    className="w-32 px-3 py-2 border border-input rounded-md text-center"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <Button variant="gold" size="xl" className="w-full max-w-md">
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Now (One-Time)
                </Button>
                
                <Button variant="default" size="xl" className="w-full max-w-md">
                  <Zap className="w-5 h-5 mr-2" />
                  Monthly Donation
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                🔒 Secure donation processing • Tax-deductible • Receipt provided
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Your Impact</h2>
            <p>See how your donation directly supports our programs and community</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">{area.title}</h3>
                  <p className="text-muted-foreground mb-4">{area.description}</p>
                  
                  <div className="bg-accent/10 p-3 rounded-lg mb-4">
                    <p className="text-sm font-medium text-accent">{area.impact}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-primary">Your donation supports:</h4>
                    <ul className="space-y-1">
                      {area.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
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
            <h2>Donor Impact Stories</h2>
            <p>Real stories of how donations have transformed lives</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-primary mb-3">Educational Excellence</h3>
              <p className="text-muted-foreground mb-4">
                "Thanks to donor support, our Reading Warriors program helped 95% of participants 
                improve their reading level by at least one grade."
              </p>
              <div className="text-accent font-medium">Program Director</div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-primary mb-3">Family Transformation</h3>
              <p className="text-muted-foreground mb-4">
                "The family wellness program funded by donations helped us work through challenges 
                and grow stronger as a family unit."
              </p>
              <div className="text-accent font-medium">Parent Participant</div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-primary mb-3">Leadership Growth</h3>
              <p className="text-muted-foreground mb-4">
                "Scholarship support allowed me to participate in the Boys of Valor program, 
                which changed my perspective and goals for the future."
              </p>
              <div className="text-accent font-medium">Student Participant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="section-padding bg-muted/80 text-black">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2 className="text-black">Other Ways to Support</h2>
            <p className="text-white/90">Multiple ways to make a meaningful contribution</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Volunteer Your Time</h3>
              <p className="text-black/90 mb-4">
                Share your skills and expertise to directly impact our programs.
              </p>
              <Button variant="secondary" size="sm">Learn More</Button>
            </div>
            
            <div className="text-center">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Corporate Sponsorship</h3>
              <p className="text-black/90 mb-4">
                Partner with us to create large-scale community impact.
              </p>
              <Button variant="secondary" size="sm">Contact Us</Button>
            </div>
            
            <div className="text-center">
              <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">In-Kind Donations</h3>
              <p className="text-black/90 mb-4">
                Donate books, supplies, or equipment to support our programs.
              </p>
              <Button variant="secondary" size="sm">Donate Items</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AIChat />
    </div>
  );
};

export default Donate;