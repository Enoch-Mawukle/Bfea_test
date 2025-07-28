import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AIChat from "@/components/ui/ai-chat";
import { useToast } from "@/hooks/use-toast";
import { GraduationCap, Users, Heart, Globe, BookOpen, Trophy, CheckCircle } from "lucide-react";

const Register = () => {
  const { toast } = useToast();
  const [selectedProgram, setSelectedProgram] = useState("");
  const [formData, setFormData] = useState({
    participantName: "",
    parentGuardianName: "",
    email: "",
    phone: "",
    age: "",
    grade: "",
    preferredStartDate: "",
    previousExperience: "",
    additionalNotes: ""
  });

  const programs = [
    {
      id: "core-academic",
      title: "Core Academic Programs",
      description: "Foundational education including tutoring, financial literacy, and reading programs",
      icon: <BookOpen className="w-8 h-8 text-accent" />,
      ageRange: "Ages 8-18",
      subPrograms: [
        "National Tutoring Program (3rd & 4th grade boys)",
        "Dollars and $ense (Youth Financial Literacy)",
        "Reading Warriors Initiative"
      ]
    },
    {
      id: "mentorship",
      title: "Mentorship & Leadership",
      description: "Leadership development and character building programs",
      icon: <Users className="w-8 h-8 text-accent" />,
      ageRange: "Ages 12-24",
      subPrograms: [
        "The Village",
        "Million Dollar Club",
        "Boys of Valor"
      ]
    },
    {
      id: "social-emotional",
      title: "Social-Emotional & Family Health",
      description: "Healing, growth, and emotional resilience programs",
      icon: <Heart className="w-8 h-8 text-accent" />,
      ageRange: "All Ages",
      subPrograms: [
        "Fatherhood Reimagined",
        "Seat of a Man's Heart",
        "Family Wellness Workshops"
      ]
    },
    {
      id: "global",
      title: "Global Programs",
      description: "Cultural exchange and heritage learning opportunities",
      icon: <Globe className="w-8 h-8 text-accent" />,
      ageRange: "Ages 16-24",
      subPrograms: [
        "Ghana Internship Program",
        "Africa Reconnect Series",
        "Cultural Exchange Trips"
      ]
    },
    {
      id: "enrichment",
      title: "Enrichment & Special Topics",
      description: "Digital literacy and life skills development",
      icon: <GraduationCap className="w-8 h-8 text-accent" />,
      ageRange: "Ages 10-24",
      subPrograms: [
        "AI for the People",
        "Book Summary + Wisdom Workbook Series",
        "Digital Literacy Training"
      ]
    },
    {
      id: "boys-of-valor",
      title: "Boys of Valor",
      description: "Year-long character-building program for boys",
      icon: <Trophy className="w-8 h-8 text-accent" />,
      ageRange: "Ages 10-17",
      subPrograms: [
        "Monthly Virtue Focus",
        "Reflective Journaling",
        "Mentorship Support"
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProgram) {
      toast({
        title: "Please select a program",
        description: "Choose a program you'd like to register for.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Registration Submitted!",
      description: "Thank you for your registration. We'll contact you within 2 business days to confirm your enrollment.",
    });

    // Reset form
    setFormData({
      participantName: "",
      parentGuardianName: "",
      email: "",
      phone: "",
      age: "",
      grade: "",
      preferredStartDate: "",
      previousExperience: "",
      additionalNotes: ""
    });
    setSelectedProgram("");
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
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 text-white min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/src/assets/volunteer-registration.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Program Registration</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Join our community of learners and unlock your potential through our comprehensive educational programs.
          </p>
        </div>
      </section>

      {/* Program Selection */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Choose Your Program</h2>
            <p>Select the program that best fits your goals and interests</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {programs.map((program) => (
              <div
                key={program.id}
                className={`bg-card rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 border-2 ${
                  selectedProgram === program.id
                    ? "border-primary shadow-xl transform scale-105"
                    : "border-transparent hover:shadow-xl hover:transform hover:scale-102"
                }`}
                onClick={() => setSelectedProgram(program.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  {program.icon}
                  {selectedProgram === program.id && (
                    <CheckCircle className="w-6 h-6 text-success" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{program.title}</h3>
                <p className="text-muted-foreground mb-3">{program.description}</p>
                <p className="text-sm font-medium text-accent mb-3">{program.ageRange}</p>
                
                <div className="space-y-1">
                  <p className="text-sm font-medium text-foreground">Includes:</p>
                  {program.subPrograms.map((subProgram, index) => (
                    <p key={index} className="text-xs text-muted-foreground">• {subProgram}</p>
                  ))}
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
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Registration Information</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="participantName" className="form-label">Participant Name *</label>
                    <input
                      type="text"
                      id="participantName"
                      name="participantName"
                      value={formData.participantName}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="parentGuardianName" className="form-label">Parent/Guardian Name</label>
                    <input
                      type="text"
                      id="parentGuardianName"
                      name="parentGuardianName"
                      value={formData.parentGuardianName}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="For participants under 18"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="form-group">
                    <label htmlFor="age" className="form-label">Age *</label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="form-input"
                      min="5"
                      max="24"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="grade" className="form-label">Current Grade/Level</label>
                    <select
                      id="grade"
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select Grade</option>
                      <option value="kindergarten">Kindergarten</option>
                      <option value="1st">1st Grade</option>
                      <option value="2nd">2nd Grade</option>
                      <option value="3rd">3rd Grade</option>
                      <option value="4th">4th Grade</option>
                      <option value="5th">5th Grade</option>
                      <option value="6th">6th Grade</option>
                      <option value="7th">7th Grade</option>
                      <option value="8th">8th Grade</option>
                      <option value="9th">9th Grade</option>
                      <option value="10th">10th Grade</option>
                      <option value="11th">11th Grade</option>
                      <option value="12th">12th Grade</option>
                      <option value="college">College</option>
                      <option value="adult">Adult Learner</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="preferredStartDate" className="form-label">Preferred Start Date</label>
                    <input
                      type="date"
                      id="preferredStartDate"
                      name="preferredStartDate"
                      value={formData.preferredStartDate}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="previousExperience" className="form-label">Previous Educational Experience</label>
                  <textarea
                    id="previousExperience"
                    name="previousExperience"
                    value={formData.previousExperience}
                    onChange={handleChange}
                    className="form-textarea"
                    rows={3}
                    placeholder="Tell us about any relevant educational background, challenges, or achievements..."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="additionalNotes" className="form-label">Additional Notes or Questions</label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    className="form-textarea"
                    rows={3}
                    placeholder="Any special accommodations, goals, or questions you'd like us to know about..."
                  />
                </div>

                <div className="bg-accent/10 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg text-primary mb-3">What Happens Next?</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>We'll review your registration within 2 business days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Our team will contact you to confirm enrollment details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>You'll receive program materials and schedule information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Begin your educational journey with BFEA!</span>
                    </li>
                  </ul>
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Submit Registration
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

export default Register;