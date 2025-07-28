import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AIChat from "@/components/ui/ai-chat";
import { useToast } from "@/hooks/use-toast";
import volunteerBackground from "@/assets/volunteer-registration.jpg";
import { Users, Heart, BookOpen, Calendar, CheckCircle, Clock } from "lucide-react";

const VolunteerRegister = () => {
  const { toast } = useToast();
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    availability: "",
    experience: "",
    motivation: ""
  });

  const volunteerRoles = [
    {
      id: "tutor",
      title: "Academic Tutor",
      description: "Support students with homework help and educational reinforcement",
      commitment: "4-6 hours/week",
      icon: <BookOpen className="w-8 h-8 text-accent" />
    },
    {
      id: "mentor",
      title: "Youth Mentor",
      description: "Provide guidance and support for personal development",
      commitment: "3-5 hours/week", 
      icon: <Users className="w-8 h-8 text-accent" />
    },
    {
      id: "events",
      title: "Event Support", 
      description: "Help organize and run community events and programs",
      commitment: "Flexible",
      icon: <Calendar className="w-8 h-8 text-accent" />
    },
    {
      id: "wellness",
      title: "Family Wellness Assistant",
      description: "Support family programs and wellness initiatives",
      commitment: "2-4 hours/week",
      icon: <Heart className="w-8 h-8 text-accent" />
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRole) {
      toast({
        title: "Please select a volunteer role",
        description: "Choose a role that interests you most.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Volunteer Application Submitted!",
      description: "Thank you for your interest! We'll contact you within 3 business days for next steps.",
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      availability: "",
      experience: "",
      motivation: ""
    });
    setSelectedRole("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section 
        className="pt-32 pb-20 bg-gradient-primary text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${volunteerBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Volunteer Registration</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Join our community of dedicated volunteers making a real difference in Black families' lives through education.
          </p>
        </div>
      </section>

      {/* Role Selection */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Choose Your Volunteer Role</h2>
            <p>Select the area where you'd like to make the biggest impact</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {volunteerRoles.map((role) => (
              <div
                key={role.id}
                className={`bg-card rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 border-2 ${
                  selectedRole === role.id
                    ? "border-primary shadow-xl transform scale-105"
                    : "border-transparent hover:shadow-xl hover:transform hover:scale-102"
                }`}
                onClick={() => setSelectedRole(role.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  {role.icon}
                  {selectedRole === role.id && (
                    <CheckCircle className="w-6 h-6 text-success" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{role.title}</h3>
                <p className="text-muted-foreground mb-3">{role.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-accent font-medium">{role.commitment}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Volunteer Application</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="availability" className="form-label">Availability *</label>
                    <select
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      className="form-input"
                      required
                    >
                      <option value="">Select availability</option>
                      <option value="weekday-mornings">Weekday Mornings</option>
                      <option value="weekday-afternoons">Weekday Afternoons</option>
                      <option value="weekday-evenings">Weekday Evenings</option>
                      <option value="weekends">Weekends</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="experience" className="form-label">Relevant Experience</label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="form-textarea"
                    rows={3}
                    placeholder="Tell us about your background, skills, or any relevant experience..."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="motivation" className="form-label">Why do you want to volunteer with BFEA?</label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    className="form-textarea"
                    rows={3}
                    placeholder="Share your motivation and what you hope to contribute..."
                  />
                </div>

                <div className="bg-accent/10 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg text-primary mb-3">Next Steps</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Application review (3 business days)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Background check and references</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Volunteer orientation and training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Begin making a difference!</span>
                    </li>
                  </ul>
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full">
                  <Users className="w-5 h-5 mr-2" />
                  Submit Volunteer Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AIChat />
    </div>
  );
};

export default VolunteerRegister;