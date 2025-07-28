import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingRegister from "@/components/ui/floating-register";
import AIChat from "@/components/ui/ai-chat";
import { Users, Calendar, Clock } from "lucide-react";
import foundationalSupportImage from "@/assets/programs/foundational-support.jpg";
import financialLiteracyImage from "@/assets/programs/financial-literacy.jpg";
import readingWarriorsImage from "@/assets/programs/reading-warriors.jpg";
import coreAcad from "@/assets/programs/academic-programs.jpg";

const CoreAcademic = () => {
  const subPrograms = [
    {
      title: "3rd & 4th Grade Foundational Support",
      description: "Specialized support for 3rd & 4th-grade boys to build strong foundational skills in reading, writing, and mathematics.",
      image: foundationalSupportImage,
      ageGroup: "3rd & 4th Grade Boys",
      duration: "Year-round program",
      features: ["Small group instruction", "Individualized learning plans", "Progress tracking", "Parent engagement"]
    },
    {
      title: "Financial Literacy Program",
      description: "Youth financial literacy program teaching budgeting, saving, investing, and entrepreneurship skills for lifelong financial success.",
      image: financialLiteracyImage,
      ageGroup: "Ages 12-18",
      duration: "12-week cycles",
      features: ["Budget planning", "Investment basics", "Entrepreneurship", "Real-world applications"]
    },
    {
      title: "Reading Warriors",
      description: "Comprehensive reading program that builds literacy skills while celebrating Black literature and storytelling traditions.",
      image: readingWarriorsImage,
      ageGroup: "Ages 5-14",
      duration: "Ongoing enrollment",
      features: ["Culturally relevant texts", "Reading comprehension", "Storytelling skills", "Literary analysis"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 text-white min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${coreAcad})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Core Academic Programs</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Building strong educational foundations through culturally responsive teaching and comprehensive support.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8">Program Overview</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Our Core Academic Programs focus on foundational education that prepares students for 
              academic success while building confidence and cultural pride. These programs address 
              key areas where many students need additional support: literacy, numeracy, and financial 
              literacy.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Small Class Sizes</h3>
                <p className="text-muted-foreground">Personalized attention with low student-to-teacher ratios</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Flexible Scheduling</h3>
                <p className="text-muted-foreground">After-school and weekend options to fit family needs</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Progress Tracking</h3>
                <p className="text-muted-foreground">Regular assessments and parent communication</p>
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
            <p>Comprehensive academic support tailored to different age groups and learning needs</p>
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
                      <Link to="/register">Enroll Now</Link>
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
            <h2>Student Success Stories</h2>
            <p>Real results from our Core Academic Programs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Marcus, Age 10</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Improved from below grade level to reading at grade level in just 6 months through 
                the Reading Warriors Initiative."
              </p>
              <div className="text-sm text-accent font-medium">National Tutoring Program</div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Aisha, Age 16</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Started my first business selling handmade jewelry after completing the 
                Dollars and $ense program."
              </p>
              <div className="text-sm text-accent font-medium">Financial Literacy</div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Jamal, Age 9</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Now loves reading and has completed over 20 books featuring Black heroes 
                and stories."
              </p>
              <div className="text-sm text-accent font-medium">Reading Warriors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Give your child the academic foundation they need to succeed. Our programs are designed 
            to meet students where they are and help them reach their full potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/register">Enroll Today</Link>
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

export default CoreAcademic;