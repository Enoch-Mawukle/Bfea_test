import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingRegister from "@/components/ui/floating-register";
import AIChat from "@/components/ui/ai-chat";
import whoWeAre from "@/assets/WhoWeAre.jpg";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Globe, 
  BookOpen,
  Award,
  TrendingUp
} from "lucide-react";

const WhoWeAre = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Empowerment",
      description: "We believe in empowering every individual to reach their full potential through education and support."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Community",
      description: "Strong communities are built through collaboration, mutual support, and shared commitment to growth."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-accent" />,
      title: "Excellence",
      description: "We strive for academic excellence while honoring cultural identity and promoting holistic development."
    },
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "Global Connection",
      description: "Bridging communities across continents to create meaningful cultural and educational exchanges."
    }
  ];

  const stats = [
    { number: "500+", label: "Students Served" },
    { number: "50+", label: "Volunteer Educators" },
    { number: "2", label: "Countries" },
    { number: "6", label: "Core Programs" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 text-white min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${whoWeAre})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Who We Are</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Transforming education through empowerment, identity, and opportunity for Black families worldwide.
          </p>
        </div>
      </section>

      {/* Mission, Vision, and Focus */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower and educate Black families through culturally affirming programs that promote 
                academic excellence, financial literacy, and character development.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Eye className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A nonprofit organization transforming education through empowerment, identity, and opportunity, 
                creating pathways for Black families to thrive globally.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-primary">Our Focus</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Supporting ages 5–24 with achievement, engagement, and behavioral health, while bridging 
                Ghana and the U.S. through academic support and family wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="section-title">
              <h2>Our Story</h2>
              <p>Founded on the belief that education is the key to empowerment</p>
            </div>
            
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2025, the Black Family Education Academy emerged from a deep understanding 
                of the educational disparities facing Black communities both in the United States and Ghana. 
                Our founders recognized that traditional educational approaches often failed to address the 
                unique cultural, social, and economic challenges that Black families navigate daily.
              </p>
              
              <p>
                What started as a vision to create culturally affirming educational programs has evolved into 
                a comprehensive academy that bridges two continents. With headquarters in Florida, USA, and 
                Ada, Ghana, we've built a unique model that honors African heritage while preparing students 
                for global citizenship.
              </p>
              
              <p>
                Our partnership with Dream Builders Network has been instrumental in expanding our reach and 
                impact. Together, we've developed programs that don't just teach academic subjects, but also 
                instill pride in identity, build financial literacy, and develop the character traits necessary 
                for leadership in the 21st century.
              </p>
              
              <p>
                Today, BFEA serves hundreds of students across multiple age groups, from elementary school 
                children learning to read with confidence to young adults preparing for careers in technology 
                and entrepreneurship. Our holistic approach addresses not just academic achievement, but also 
                mental health, family wellness, and community connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">Our Impact by the Numbers</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-4">
                <div className="text-5xl lg:text-6xl font-bold text-accent">{stat.number}</div>
                <div className="text-xl font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8">Our Leadership Philosophy</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              We believe that every person has the capacity for greatness. Our role is to provide the 
              tools, support, and opportunities necessary to unlock that potential. Through culturally 
              responsive education, mentorship, and community support, we help individuals develop not 
              just academic skills, but the confidence and character to become leaders in their own right.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We set high standards and provide the support needed to achieve them.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Collaboration</h3>
                <p className="text-muted-foreground">
                  We work together as families, educators, and community members.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Compassion</h3>
                <p className="text-muted-foreground">
                  We meet each learner where they are with understanding and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Join Our Community</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Whether you're a parent looking for educational opportunities, a young person ready to 
            unlock your potential, or a community member wanting to make a difference, there's a 
            place for you at BFEA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="gold" size="lg" asChild>
              <Link to="/register">Enroll in Programs</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/register">Volunteer With Us</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
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

export default WhoWeAre;