import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AIChat from "@/components/ui/ai-chat";
import { useToast } from "@/hooks/use-toast";
import { 
  GraduationCap, 
  Users, 
  Heart, 
  Globe, 
  BookOpen, 
  Trophy, 
  CheckCircle,
  User,
  Briefcase,
  UserCheck,
  Building,
  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar,
  Award,
  Target,
  Book,
  Palette,
  UserCircle,
  Users2,
  Clipboard,
  Monitor,
  Star,
  MapPin,
  Home,
  Wifi,
  Plus,
  Minus
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

type UserType = "learner" | "intern" | "volunteer" | "career";

interface SubProgram {
  id: string;
  name: string;
  ageMin: number;
  ageMax: number;
  genders: string[];
  category: string;
  duration?: string;
  commitment?: string;
  description?: string;
}

interface ProgramCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  userTypes: UserType[];
  subPrograms: SubProgram[];
}

interface VolunteerOpportunity {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  activities: string[];
  duration?: string;
  commitment?: string;
}

interface InternTrack {
  id: string;
  title: string;
  description: string;
  responsibilities: string[];
  icon: React.ReactNode;
  duration: string;
  compensation: string;
  mentorship: boolean;
}

interface CareerOpportunity {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

interface Location {
  id: string;
  name: string;
  country: string;
  icon: React.ReactNode;
}

const UnifiedRegister = () => {
  const { toast } = useToast();
  const [selectedUserType, setSelectedUserType] = useState<UserType | "">("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubPrograms, setSelectedSubPrograms] = useState<string[]>([]);
  const [selectedVolunteerOpportunity, setSelectedVolunteerOpportunity] = useState<string>("");
  const [selectedInternTrack, setSelectedInternTrack] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedCareerOpportunity, setSelectedCareerOpportunity] = useState<string>("");
  
  // Carousel states
  const [currentProgramIndex, setCurrentProgramIndex] = useState(0);
  const [currentVolunteerIndex, setCurrentVolunteerIndex] = useState(0);
  const [currentInternIndex, setCurrentInternIndex] = useState(0);
  const [currentCareerIndex, setCurrentCareerIndex] = useState(0);
  
  const [formData, setFormData] = useState({
    // Common fields
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    // Conditional fields
    parentGuardianName: "",
    grade: "",
    schoolName: "",
    preferredStartDate: "",
    previousExperience: "",
    availability: "",
    skills: "",
    motivation: "",
    resume: "",
    coverLetter: "",
    position: "",
    additionalNotes: "",
    // Volunteer specific
    volunteerRole: "",
    // Intern specific
    internTrack: "",
    transcript: "",
    references: ""
  });

  const userTypes = [
    { value: "learner", label: "Learner", icon: <GraduationCap className="w-5 h-5" />, description: "Join our educational programs" },
    { value: "intern", label: "Intern", icon: <User className="w-5 h-5" />, description: "Gain professional experience" },
    { value: "volunteer", label: "Volunteer", icon: <UserCheck className="w-5 h-5" />, description: "Support our community" },
    { value: "career", label: "Career Applicant", icon: <Building className="w-5 h-5" />, description: "Join our team" }
  ];

  const locations: Location[] = [
    {
      id: "florida",
      name: "Florida, USA",
      country: "United States",
      icon: <Home className="w-5 h-5" />
    },
    {
      id: "ada",
      name: "Ada, Ghana",
      country: "Ghana",
      icon: <MapPin className="w-5 h-5" />
    },
    {
      id: "remote",
      name: "Remote",
      country: "Worldwide",
      icon: <Wifi className="w-5 h-5" />
    }
  ];

  const programCategories: ProgramCategory[] = [
    {
      id: "core-academic",
      title: "Core Academic Programs",
      description: "Foundational education including tutoring, financial literacy, and reading programs",
      icon: <BookOpen className="w-8 h-8 text-accent" />,
      userTypes: ["learner"],
      subPrograms: [
        { 
          id: "tutoring", 
          name: "National Tutoring Program", 
          ageMin: 8, 
          ageMax: 10, 
          genders: ["male"], 
          category: "core-academic",
          duration: "12 weeks",
          commitment: "2-3 hours/week",
          description: "One-on-one tutoring to help students improve academic performance"
        },
        { 
          id: "financial-literacy", 
          name: "Dollars and $ense", 
          ageMin: 12, 
          ageMax: 18, 
          genders: ["male", "female", "non-binary"], 
          category: "core-academic",
          duration: "8 weeks",
          commitment: "3 hours/week",
          description: "Learn essential financial skills for young adults"
        },
        { 
          id: "reading-warriors", 
          name: "Reading Warriors Initiative", 
          ageMin: 6, 
          ageMax: 14, 
          genders: ["male", "female", "non-binary"], 
          category: "core-academic",
          duration: "10 weeks",
          commitment: "2 hours/week",
          description: "Develop strong reading skills and comprehension"
        }
      ]
    },
    {
      id: "mentorship",
      title: "Mentorship & Leadership",
      description: "Leadership development and character building programs",
      icon: <Users className="w-8 h-8 text-accent" />,
      userTypes: ["learner", "volunteer"],
      subPrograms: [
        { 
          id: "village", 
          name: "The Village", 
          ageMin: 16, 
          ageMax: 24, 
          genders: ["male"], 
          category: "mentorship",
          duration: "16 weeks",
          commitment: "4 hours/week",
          description: "Community-based mentorship and leadership development"
        },
        { 
          id: "million-dollar", 
          name: "Million Dollar Club", 
          ageMin: 18, 
          ageMax: 30, 
          genders: ["male", "female", "non-binary"], 
          category: "mentorship",
          duration: "20 weeks",
          commitment: "3 hours/week",
          description: "Entrepreneurship and financial empowerment program"
        },
        { 
          id: "boys-valor", 
          name: "Boys of Valor", 
          ageMin: 10, 
          ageMax: 17, 
          genders: ["male"], 
          category: "mentorship",
          duration: "14 weeks",
          commitment: "2 hours/week",
          description: "Character building and positive masculinity development"
        }
      ]
    },
    {
      id: "social-emotional",
      title: "Social-Emotional & Family Health",
      description: "Healing, growth, and emotional resilience programs",
      icon: <Heart className="w-8 h-8 text-accent" />,
      userTypes: ["learner", "volunteer"],
      subPrograms: [
        { 
          id: "fatherhood", 
          name: "Fatherhood Reimagined", 
          ageMin: 18, 
          ageMax: 65, 
          genders: ["male"], 
          category: "social-emotional",
          duration: "12 weeks",
          commitment: "3 hours/week",
          description: "Support for fathers in developing positive parenting skills"
        },
        { 
          id: "mans-heart", 
          name: "Seat of a Man's Heart", 
          ageMin: 16, 
          ageMax: 65, 
          genders: ["male"], 
          category: "social-emotional",
          duration: "10 weeks",
          commitment: "2 hours/week",
          description: "Emotional healing and personal growth for men"
        },
        { 
          id: "family-wellness", 
          name: "Family Wellness Workshops", 
          ageMin: 18, 
          ageMax: 65, 
          genders: ["male", "female", "non-binary"], 
          category: "social-emotional",
          duration: "8 weeks",
          commitment: "2 hours/week",
          description: "Holistic family wellness and communication skills"
        }
      ]
    },
    {
      id: "global",
      title: "Global Programs",
      description: "Cultural exchange and heritage learning opportunities",
      icon: <Globe className="w-8 h-8 text-accent" />,
      userTypes: ["learner", "intern"],
      subPrograms: [
        { 
          id: "ghana-internship", 
          name: "Ghana Internship Program", 
          ageMin: 18, 
          ageMax: 26, 
          genders: ["male", "female", "non-binary"], 
          category: "global",
          duration: "12-16 weeks",
          commitment: "Full-time",
          description: "Professional internship experience in Ghana"
        },
        { 
          id: "africa-reconnect", 
          name: "Africa Reconnect Series", 
          ageMin: 16, 
          ageMax: 30, 
          genders: ["male", "female", "non-binary"], 
          category: "global",
          duration: "6 weeks",
          commitment: "3 hours/week",
          description: "Cultural heritage and identity exploration program"
        },
        { 
          id: "cultural-exchange", 
          name: "Cultural Exchange Trips", 
          ageMin: 16, 
          ageMax: 25, 
          genders: ["male", "female", "non-binary"], 
          category: "global",
          duration: "2 weeks",
          commitment: "Full participation",
          description: "Immersive cultural exchange experiences"
        }
      ]
    },
    {
      id: "enrichment",
      title: "Enrichment & Special Topics",
      description: "Digital literacy and life skills development",
      icon: <GraduationCap className="w-8 h-8 text-accent" />,
      userTypes: ["learner", "volunteer"],
      subPrograms: [
        { 
          id: "ai-people", 
          name: "AI for the People", 
          ageMin: 14, 
          ageMax: 30, 
          genders: ["male", "female", "non-binary"], 
          category: "enrichment",
          duration: "8 weeks",
          commitment: "2 hours/week",
          description: "Introduction to artificial intelligence and its applications"
        },
        { 
          id: "book-summary", 
          name: "Book Summary + Wisdom Workbook Series", 
          ageMin: 12, 
          ageMax: 25, 
          genders: ["male", "female", "non-binary"], 
          category: "enrichment",
          duration: "10 weeks",
          commitment: "1 hour/week",
          description: "Critical thinking through book analysis and wisdom application"
        },
        { 
          id: "digital-literacy", 
          name: "Digital Literacy Training", 
          ageMin: 10, 
          ageMax: 65, 
          genders: ["male", "female", "non-binary"], 
          category: "enrichment",
          duration: "6 weeks",
          commitment: "2 hours/week",
          description: "Essential digital skills for academic and professional success"
        }
      ]
    }
  ];

  const volunteerOpportunities: VolunteerOpportunity[] = [
    {
      id: "academic-support",
      title: "Academic Support",
      description: "Provide one-on-one tutoring, homework assistance, and reading support to students of all ages.",
      icon: <Book className="w-6 h-6" />,
      activities: [
        "Reading buddies program",
        "Math and science tutoring",
        "Test preparation assistance",
        "Study skills coaching"
      ],
      duration: "Ongoing",
      commitment: "Flexible"
    },
    {
      id: "enrichment",
      title: "Enrichment Activities",
      description: "Lead workshops, clubs, and creative activities that expand learning beyond the classroom.",
      icon: <Palette className="w-6 h-6" />,
      activities: [
        "Art and music programs",
        "STEM clubs and competitions",
        "Cultural celebration events",
        "Life skills workshops"
      ],
      duration: "Ongoing",
      commitment: "Flexible"
    },
    {
      id: "mentorship",
      title: "Mentorship",
      description: "Serve as a positive role model and guide for students navigating academic and personal challenges.",
      icon: <UserCircle className="w-6 h-6" />,
      activities: [
        "One-on-one mentoring",
        "Career guidance sessions",
        "College preparation support",
        "Leadership development"
      ],
      duration: "6 months minimum",
      commitment: "2-4 hours/week"
    },
    {
      id: "family-engagement",
      title: "Family Engagement",
      description: "Help organize and facilitate programs that strengthen family involvement in education.",
      icon: <Users2 className="w-6 h-6" />,
      activities: [
        "Parent workshop facilitation",
        "Family literacy nights",
        "Community resource fairs",
        "Cultural heritage events"
      ],
      duration: "Ongoing",
      commitment: "Flexible"
    },
    {
      id: "administrative",
      title: "Administrative Support",
      description: "Assist with essential behind-the-scenes operations that keep our programs running smoothly.",
      icon: <Clipboard className="w-6 h-6" />,
      activities: [
        "Event planning and coordination",
        "Data entry and organization",
        "Resource development",
        "Communications support"
      ],
      duration: "Ongoing",
      commitment: "Flexible"
    },
    {
      id: "digital-literacy",
      title: "Digital Literacy",
      description: "Help students and families develop essential technology skills for academic and professional success.",
      icon: <Monitor className="w-6 h-6" />,
      activities: [
        "Computer skills training",
        "Digital citizenship education",
        "Online learning support",
        "Technology troubleshooting"
      ],
      duration: "Ongoing",
      commitment: "Flexible"
    }
  ];

  const internTracks: InternTrack[] = [
    {
      id: "education",
      title: "Education Track",
      description: "Support curriculum development, assist with classroom instruction, and help create innovative learning experiences.",
      responsibilities: [
        "Curriculum research and development",
        "Student mentoring and tutoring",
        "Educational technology integration",
        "Assessment and evaluation support"
      ],
      icon: <GraduationCap className="w-6 h-6" />,
      duration: "12-16 weeks",
      compensation: "Paid positions with competitive stipends",
      mentorship: true
    },
    {
      id: "community-outreach",
      title: "Community Outreach",
      description: "Engage with families, coordinate community events, and build partnerships with local organizations.",
      responsibilities: [
        "Family engagement programs",
        "Community event planning",
        "Partnership development",
        "Social media and communications"
      ],
      icon: <Users className="w-6 h-6" />,
      duration: "12-16 weeks",
      compensation: "Paid positions with competitive stipends",
      mentorship: true
    },
    {
      id: "operations-admin",
      title: "Operations & Admin",
      description: "Gain experience in nonprofit management, data analysis, and organizational development.",
      responsibilities: [
        "Program evaluation and analysis",
        "Grant writing assistance",
        "Financial operations support",
        "Quality assurance and improvement"
      ],
      icon: <Briefcase className="w-6 h-6" />,
      duration: "12-16 weeks",
      compensation: "Paid positions with competitive stipends",
      mentorship: true
    }
  ];

  const careerOpportunities: CareerOpportunity[] = [
    {
      id: "program-coordinator",
      title: "Program Coordinator",
      department: "Education",
      location: "Florida, USA",
      type: "Full-time",
      description: "Coordinate educational programs and manage student engagement initiatives.",
      requirements: [
        "Bachelor's degree in Education or related field",
        "2+ years of program coordination experience",
        "Strong organizational and communication skills"
      ]
    },
    {
      id: "community-outreach",
      title: "Community Outreach Specialist",
      department: "Outreach",
      location: "Ada, Ghana",
      type: "Full-time",
      description: "Develop and maintain relationships with community partners and stakeholders.",
      requirements: [
        "Bachelor's degree in Social Sciences or related field",
        "3+ years of community outreach experience",
        "Fluency in local languages preferred"
      ]
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Part-time",
      description: "Manage digital marketing campaigns and social media presence.",
      requirements: [
        "Bachelor's degree in Marketing or Communications",
        "3+ years of digital marketing experience",
        "Proficiency in social media platforms and analytics tools"
      ]
    },
    {
      id: "operations-manager",
      title: "Operations Manager",
      department: "Administration",
      location: "Florida, USA",
      type: "Full-time",
      description: "Oversee daily operations and ensure efficient organizational functioning.",
      requirements: [
        "Bachelor's degree in Business Administration or related field",
        "5+ years of operations management experience",
        "Strong leadership and problem-solving skills"
      ]
    }
  ];

  // Carousel navigation functions
  const nextProgram = () => {
    const filteredPrograms = getFilteredSubPrograms();
    if (filteredPrograms.length > 0) {
      setCurrentProgramIndex((prev) => (prev + 1) % filteredPrograms.length);
    }
  };

  const prevProgram = () => {
    const filteredPrograms = getFilteredSubPrograms();
    if (filteredPrograms.length > 0) {
      setCurrentProgramIndex((prev) => (prev - 1 + filteredPrograms.length) % filteredPrograms.length);
    }
  };

  const nextVolunteer = () => {
    if (volunteerOpportunities.length > 0) {
      setCurrentVolunteerIndex((prev) => (prev + 1) % volunteerOpportunities.length);
    }
  };

  const prevVolunteer = () => {
    if (volunteerOpportunities.length > 0) {
      setCurrentVolunteerIndex((prev) => (prev - 1 + volunteerOpportunities.length) % volunteerOpportunities.length);
    }
  };

  const nextIntern = () => {
    if (internTracks.length > 0) {
      setCurrentInternIndex((prev) => (prev + 1) % internTracks.length);
    }
  };

  const prevIntern = () => {
    if (internTracks.length > 0) {
      setCurrentInternIndex((prev) => (prev - 1 + internTracks.length) % internTracks.length);
    }
  };

  const nextCareer = () => {
    const filteredCareers = getFilteredCareerOpportunities();
    if (filteredCareers.length > 0) {
      setCurrentCareerIndex((prev) => (prev + 1) % filteredCareers.length);
    }
  };

  const prevCareer = () => {
    const filteredCareers = getFilteredCareerOpportunities();
    if (filteredCareers.length > 0) {
      setCurrentCareerIndex((prev) => (prev - 1 + filteredCareers.length) % filteredCareers.length);
    }
  };

  const getFilteredCategories = () => {
    if (!selectedUserType) return [];
    return programCategories.filter(category => 
      category.userTypes.includes(selectedUserType as UserType)
    );
  };

  const getFilteredSubPrograms = () => {
    if (!selectedCategory || !formData.age || !formData.gender) return [];
    const category = programCategories.find(cat => cat.id === selectedCategory);
    if (!category) return [];
    const age = parseInt(formData.age);
    return category.subPrograms.filter(subProgram => 
      age >= subProgram.ageMin && 
      age <= subProgram.ageMax && 
      subProgram.genders.includes(formData.gender)
    );
  };

  const getFilteredCareerOpportunities = () => {
    if (!selectedLocation) return [];
    return careerOpportunities.filter(opp => 
      opp.location === locations.find(l => l.id === selectedLocation)?.name
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUserType) {
      toast({
        title: "Please select a user type",
        description: "Choose what type of registration you're completing.",
        variant: "destructive"
      });
      return;
    }
    
    if (selectedUserType === "career" && !selectedLocation) {
      toast({
        title: "Please select a location",
        description: "Choose the location where you'd like to work.",
        variant: "destructive"
      });
      return;
    }
    
    if (selectedUserType === "career" && !selectedCareerOpportunity) {
      toast({
        title: "Please select a career opportunity",
        description: "Choose the position you're interested in.",
        variant: "destructive"
      });
      return;
    }
    
    if (selectedUserType === "volunteer" && !selectedVolunteerOpportunity) {
      toast({
        title: "Please select a volunteer opportunity",
        description: "Choose the volunteer opportunity you're interested in.",
        variant: "destructive"
      });
      return;
    }
    
    if (selectedUserType === "intern" && !selectedInternTrack) {
      toast({
        title: "Please select an intern track",
        description: "Choose the intern track you're interested in.",
        variant: "destructive"
      });
      return;
    }
    
    if (selectedUserType === "learner" && (!selectedCategory || selectedSubPrograms.length === 0)) {
      toast({
        title: "Please complete program selection",
        description: "Choose a program category and specific programs.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Registration Submitted!",
      description: `Thank you for registering as a ${selectedUserType}. We'll contact you within 2 business days.`,
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      age: "",
      gender: "",
      parentGuardianName: "",
      grade: "",
      schoolName: "",
      preferredStartDate: "",
      previousExperience: "",
      availability: "",
      skills: "",
      motivation: "",
      resume: "",
      coverLetter: "",
      position: "",
      additionalNotes: "",
      volunteerRole: "",
      internTrack: "",
      transcript: "",
      references: ""
    });
    setSelectedUserType("");
    setSelectedCategory("");
    setSelectedSubPrograms([]);
    setSelectedVolunteerOpportunity("");
    setSelectedInternTrack("");
    setSelectedLocation("");
    setSelectedCareerOpportunity("");
    setCurrentProgramIndex(0);
    setCurrentVolunteerIndex(0);
    setCurrentInternIndex(0);
    setCurrentCareerIndex(0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubProgramToggle = (subProgramId: string) => {
    setSelectedSubPrograms(prev => 
      prev.includes(subProgramId)
        ? prev.filter(id => id !== subProgramId)
        : [...prev, subProgramId]
    );
  };

  // Reset dependent selections when user type changes
  useEffect(() => {
    setSelectedCategory("");
    setSelectedSubPrograms([]);
    setSelectedVolunteerOpportunity("");
    setSelectedInternTrack("");
    setSelectedLocation("");
    setSelectedCareerOpportunity("");
    setCurrentProgramIndex(0);
    setCurrentVolunteerIndex(0);
    setCurrentInternIndex(0);
    setCurrentCareerIndex(0);
  }, [selectedUserType]);

  // Reset sub-programs when category changes
  useEffect(() => {
    setSelectedSubPrograms([]);
    setCurrentProgramIndex(0);
  }, [selectedCategory, formData.age, formData.gender]);

  // Reset career index when location changes
  useEffect(() => {
    setCurrentCareerIndex(0);
  }, [selectedLocation]);

  // Simplified program selection for learners
  const renderLearnerProgramSelection = () => {
    if (!formData.age || !formData.gender) {
      return (
        <Card className="p-6 text-center">
          <p className="text-muted-foreground">
            Please enter your age and select your gender to see available programs.
          </p>
        </Card>
      );
    }

    const filteredCategories = getFilteredCategories();
    
    if (filteredCategories.length === 0) {
      return (
        <Card className="p-6 text-center">
          <p className="text-muted-foreground">
            No programs are currently available for your age group. Please check back later or contact us for more information.
          </p>
        </Card>
      );
    }

    return (
      <div className="space-y-6">
        {/* Category Selection */}
        <div className="space-y-4">
          <Label className="text-lg font-medium">Choose a Program Category:</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredCategories.map((category) => (
              <Card
                key={category.id}
                className={`p-4 cursor-pointer transition-all duration-300 border-2 ${
                  selectedCategory === category.id
                    ? "border-primary shadow-lg"
                    : "border-border hover:shadow-md hover:border-primary/50"
                }`}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentProgramIndex(0);
                }}
              >
                <div className="flex items-start gap-3">
                  {category.icon}
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary">{category.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                    {selectedCategory === category.id && (
                      <CheckCircle className="w-5 h-5 text-success mt-2" />
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Sub-Program Selection */}
        {selectedCategory && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-lg font-medium">Available Programs:</Label>
              <span className="text-sm text-muted-foreground">
                {getFilteredSubPrograms().length} program(s) available
              </span>
            </div>
            
            {getFilteredSubPrograms().length > 0 ? (
              <div className="space-y-3">
                {getFilteredSubPrograms().map((subProgram) => (
                  <Card 
                    key={subProgram.id} 
                    className={`p-4 transition-all duration-200 ${
                      selectedSubPrograms.includes(subProgram.id)
                        ? "border-2 border-primary bg-primary/5"
                        : "border border-border"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <button
                        type="button"
                        onClick={() => handleSubProgramToggle(subProgram.id)}
                        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                          selectedSubPrograms.includes(subProgram.id)
                            ? "bg-primary border-primary"
                            : "border-gray-300 hover:border-primary"
                        }`}
                      >
                        {selectedSubPrograms.includes(subProgram.id) && (
                          <CheckCircle className="w-4 h-4 text-white" />
                        )}
                      </button>
                      <div className="flex-1">
                        <h5 className="font-medium">{subProgram.name}</h5>
                        <p className="text-sm text-muted-foreground mt-1">
                          {subProgram.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="inline-flex items-center gap-1 text-xs bg-accent/10 px-2 py-1 rounded">
                            <Clock className="w-3 h-3" />
                            {subProgram.duration}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs bg-accent/10 px-2 py-1 rounded">
                            <Calendar className="w-3 h-3" />
                            {subProgram.commitment}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs bg-accent/10 px-2 py-1 rounded">
                            Ages {subProgram.ageMin}-{subProgram.ageMax}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-6 text-center">
                <p className="text-muted-foreground">
                  No programs available for your age and gender in this category.
                  Please try a different category or contact us for more options.
                </p>
              </Card>
            )}
          </div>
        )}
      </div>
    );
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
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Join BFEA</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            One registration form for all opportunities - learners, interns, volunteers, and career applicants.
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Registration Form</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* User Type Selection */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">I am registering as a: *</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {userTypes.map((type) => (
                      <Card
                        key={type.value}
                        className={`p-4 cursor-pointer transition-all duration-300 border-2 ${
                          selectedUserType === type.value
                            ? "border-primary shadow-lg transform scale-105"
                            : "border-border hover:shadow-md hover:border-primary/50"
                        }`}
                        onClick={() => setSelectedUserType(type.value as UserType)}
                      >
                        <div className="text-center space-y-2">
                          <div className="flex justify-center text-primary">
                            {type.icon}
                          </div>
                          <h3 className="font-semibold">{type.label}</h3>
                          <p className="text-sm text-muted-foreground">{type.description}</p>
                          {selectedUserType === type.value && (
                            <CheckCircle className="w-5 h-5 text-success mx-auto" />
                          )}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Basic Information - Always show when user type is selected */}
                {selectedUserType && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="border-t pt-6">
                      <h3 className="text-xl font-semibold text-primary mb-4">Basic Information</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="form-group">
                          <Label htmlFor="firstName">First Name *</Label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="form-input"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="form-input"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="form-group">
                          <Label htmlFor="email">Email Address *</Label>
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
                          <Label htmlFor="phone">Phone Number *</Label>
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
                      
                      {/* Age and Gender for Learners only */}
                      {selectedUserType === "learner" && (
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="form-group">
                            <Label htmlFor="age">Age *</Label>
                            <input
                              type="number"
                              id="age"
                              name="age"
                              value={formData.age}
                              onChange={handleChange}
                              className="form-input"
                              min="5"
                              max="70"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <Label htmlFor="gender">Gender *</Label>
                            <select
                              id="gender"
                              name="gender"
                              value={formData.gender}
                              onChange={handleChange}
                              className="form-input"
                              required
                            >
                              <option value="">Select Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="non-binary">Non-binary</option>
                              <option value="prefer-not-to-say">Prefer not to say</option>
                            </select>
                          </div>
                        </div>
                      )}
                      
                      {/* Additional fields for learners under 18 */}
                      {selectedUserType === "learner" && parseInt(formData.age) < 18 && (
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="form-group">
                            <Label htmlFor="parentGuardianName">Parent/Guardian Name *</Label>
                            <input
                              type="text"
                              id="parentGuardianName"
                              name="parentGuardianName"
                              value={formData.parentGuardianName}
                              onChange={handleChange}
                              className="form-input"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <Label htmlFor="grade">Current Grade</Label>
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
                            </select>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Simplified Program Selection for Learners */}
                {selectedUserType === "learner" && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="border-t pt-6">
                      <h3 className="text-xl font-semibold text-primary mb-4">Program Selection</h3>
                      <p className="text-muted-foreground mb-6">
                        Select the programs you're interested in. Programs are filtered based on your age and gender.
                      </p>
                      {renderLearnerProgramSelection()}
                    </div>
                  </div>
                )}

                {/* Location Selection for Career Applicants */}
                {selectedUserType === "career" && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="border-t pt-6">
                      <h3 className="text-xl font-semibold text-primary mb-4">Preferred Work Location</h3>
                      <p className="text-muted-foreground mb-6">Select the location where you'd like to work</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {locations.map((location) => (
                          <Card
                            key={location.id}
                            className={`p-5 cursor-pointer transition-all duration-300 border-2 ${
                              selectedLocation === location.id
                                ? "border-primary shadow-lg"
                                : "border-border hover:shadow-md hover:border-primary/50"
                            }`}
                            onClick={() => setSelectedLocation(location.id)}
                          >
                            <div className="text-center space-y-3">
                              <div className="flex justify-center text-primary">
                                {location.icon}
                              </div>
                              <div>
                                <h4 className="font-semibold">{location.name}</h4>
                                <p className="text-sm text-muted-foreground">{location.country}</p>
                              </div>
                              {selectedLocation === location.id && (
                                <CheckCircle className="w-5 h-5 text-success mx-auto" />
                              )}
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Career Opportunities Carousel */}
                {selectedUserType === "career" && selectedLocation && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="border-t pt-6">
                      <h3 className="text-xl font-semibold text-primary mb-4">Available Career Opportunities</h3>
                      <p className="text-muted-foreground mb-6">Select the position you're interested in</p>
                      <div className="relative">
                        {getFilteredCareerOpportunities().length > 0 ? (
                          <>
                            <div className="overflow-hidden">
                              <Card className="p-6">
                                <div className="flex items-start gap-4">
                                  <div className="flex-1">
                                    <div className="flex items-start justify-between">
                                      <div>
                                        <h4 className="font-semibold text-lg">
                                          {getFilteredCareerOpportunities()[currentCareerIndex]?.title}
                                        </h4>
                                        <div className="flex items-center gap-2 mt-1">
                                          <span className="text-sm text-muted-foreground">
                                            {getFilteredCareerOpportunities()[currentCareerIndex]?.department}
                                          </span>
                                          <span className="text-muted-foreground">•</span>
                                          <span className="text-sm text-muted-foreground">
                                            {getFilteredCareerOpportunities()[currentCareerIndex]?.type}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <span className="text-sm text-muted-foreground">
                                          {currentCareerIndex + 1} of {getFilteredCareerOpportunities().length}
                                        </span>
                                      </div>
                                    </div>
                                    <p className="text-muted-foreground mt-3">
                                      {getFilteredCareerOpportunities()[currentCareerIndex]?.description}
                                    </p>
                                    <div className="mt-4">
                                      <h5 className="font-medium mb-2">Requirements:</h5>
                                      <ul className="space-y-1">
                                        {getFilteredCareerOpportunities()[currentCareerIndex]?.requirements.map((req, index) => (
                                          <li key={index} className="flex items-start gap-2 text-sm">
                                            <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                                            <span>{req}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </Card>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={prevCareer}
                                disabled={getFilteredCareerOpportunities().length <= 1}
                              >
                                <ChevronLeft className="w-4 h-4 mr-1" />
                                Previous
                              </Button>
                              <div className="flex items-center gap-2">
                                {getFilteredCareerOpportunities().map((_, index) => (
                                  <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full ${
                                      index === currentCareerIndex ? "bg-primary" : "bg-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={nextCareer}
                                disabled={getFilteredCareerOpportunities().length <= 1}
                              >
                                Next
                                <ChevronRight className="w-4 h-4 ml-1" />
                              </Button>
                            </div>
                            <div className="mt-4">
                              <Button
                                type="button"
                                variant={selectedCareerOpportunity === getFilteredCareerOpportunities()[currentCareerIndex]?.id ? "default" : "outline"}
                                className="w-full"
                                onClick={() => setSelectedCareerOpportunity(getFilteredCareerOpportunities()[currentCareerIndex]?.id || "")}
                              >
                                {selectedCareerOpportunity === getFilteredCareerOpportunities()[currentCareerIndex]?.id 
                                  ? "Selected" 
                                  : "Select This Opportunity"}
                              </Button>
                            </div>
                          </>
                        ) : (
                          <Card className="p-6 text-center">
                            <p className="text-muted-foreground">
                              No opportunities available for the selected location. Please try a different location.
                            </p>
                          </Card>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Volunteer Opportunities Carousel */}
                {selectedUserType === "volunteer" && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="border-t pt-6">
                      <h3 className="text-2xl font-bold text-primary mb-6 text-center">Volunteer Opportunities</h3>
                      <p className="text-center text-muted-foreground mb-8">Share your time and skills to support our educational mission</p>
                      
                      {/* Why Volunteer With Us */}
                      <div className="bg-primary/5 p-6 rounded-lg mb-8">
                        <h4 className="text-xl font-semibold text-primary mb-4">Why Volunteer With Us?</h4>
                        <p className="text-muted-foreground mb-4">
                          Join a community of dedicated individuals working to empower Black families through education. 
                          Your skills, experience, and passion can make a direct impact on students and families in our community.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                            <span>Flexible scheduling to fit your lifestyle</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                            <span>Comprehensive training and ongoing support</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                            <span>Opportunities for leadership and growth</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Volunteer Opportunities Carousel */}
                      <div className="relative">
                        <div className="overflow-hidden">
                          <Card className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                                {volunteerOpportunities[currentVolunteerIndex]?.icon}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h4 className="font-semibold text-lg">
                                      {volunteerOpportunities[currentVolunteerIndex]?.title}
                                    </h4>
                                    <p className="text-muted-foreground mt-2">
                                      {volunteerOpportunities[currentVolunteerIndex]?.description}
                                    </p>
                                    <div className="flex items-center gap-4 mt-3">
                                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                        <Clock className="w-4 h-4" />
                                        <span>{volunteerOpportunities[currentVolunteerIndex]?.duration}</span>
                                      </div>
                                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                        <Calendar className="w-4 h-4" />
                                        <span>{volunteerOpportunities[currentVolunteerIndex]?.commitment}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm text-muted-foreground">
                                      {currentVolunteerIndex + 1} of {volunteerOpportunities.length}
                                    </span>
                                  </div>
                                </div>
                                
                                <div className="mt-4">
                                  <h5 className="font-medium mb-2">Key Activities:</h5>
                                  <ul className="space-y-1">
                                    {volunteerOpportunities[currentVolunteerIndex]?.activities.map((activity, index) => (
                                      <li key={index} className="flex items-start gap-2 text-sm">
                                        <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                        <span>{activity}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </Card>
                        </div>
                        
                        <div className="flex justify-between items-center mt-4">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={prevVolunteer}
                            disabled={volunteerOpportunities.length <= 1}
                          >
                            <ChevronLeft className="w-4 h-4 mr-1" />
                            Previous
                          </Button>
                          
                          <div className="flex items-center gap-2">
                            {volunteerOpportunities.map((_, index) => (
                              <div
                                key={index}
                                className={`w-2 h-2 rounded-full ${
                                  index === currentVolunteerIndex ? "bg-primary" : "bg-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={nextVolunteer}
                            disabled={volunteerOpportunities.length <= 1}
                          >
                            Next
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                        
                        <div className="mt-4">
                          <Button
                            type="button"
                            variant={selectedVolunteerOpportunity === volunteerOpportunities[currentVolunteerIndex]?.id ? "default" : "outline"}
                            className="w-full"
                            onClick={() => setSelectedVolunteerOpportunity(volunteerOpportunities[currentVolunteerIndex]?.id || "")}
                          >
                            {selectedVolunteerOpportunity === volunteerOpportunities[currentVolunteerIndex]?.id 
                              ? "Selected" 
                              : "Select This Opportunity"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Intern Tracks Carousel */}
                {selectedUserType === "intern" && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="border-t pt-6">
                      <h3 className="text-2xl font-bold text-primary mb-6 text-center">Internship Tracks</h3>
                      <p className="text-center text-muted-foreground mb-8">
                        Transform your career while transforming lives through meaningful internship experiences
                      </p>
                      
                      {/* Program Overview */}
                      <div className="bg-primary/5 p-6 rounded-lg mb-8">
                        <h4 className="text-xl font-semibold text-primary mb-4">Program Overview</h4>
                        <p className="text-muted-foreground mb-4">
                          Our internship program offers hands-on experience in educational excellence, community engagement, 
                          and social impact. Work alongside experienced educators and community leaders while developing 
                          professional skills that will serve you throughout your career.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-primary" />
                            <span>Duration: 12-16 weeks</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-primary" />
                            <span>Competitive stipends</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Target className="w-5 h-5 text-primary" />
                            <span>Mentorship included</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Intern Tracks Carousel */}
                      <div className="relative">
                        <div className="overflow-hidden">
                          <Card className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                                {internTracks[currentInternIndex]?.icon}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h4 className="font-semibold text-lg">
                                      {internTracks[currentInternIndex]?.title}
                                    </h4>
                                    <p className="text-muted-foreground mt-2">
                                      {internTracks[currentInternIndex]?.description}
                                    </p>
                                    <div className="flex items-center gap-4 mt-3">
                                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                        <Clock className="w-4 h-4" />
                                        <span>{internTracks[currentInternIndex]?.duration}</span>
                                      </div>
                                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                        <Award className="w-4 h-4" />
                                        <span>{internTracks[currentInternIndex]?.compensation}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm text-muted-foreground">
                                      {currentInternIndex + 1} of {internTracks.length}
                                    </span>
                                  </div>
                                </div>
                                
                                <div className="mt-4">
                                  <h5 className="font-medium mb-2">Key Responsibilities:</h5>
                                  <ul className="space-y-1">
                                    {internTracks[currentInternIndex]?.responsibilities.map((resp, index) => (
                                      <li key={index} className="flex items-start gap-2 text-sm">
                                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                                        <span>{resp}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                
                                {internTracks[currentInternIndex]?.mentorship && (
                                  <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                                    <div className="flex items-center gap-2">
                                      <Target className="w-4 h-4 text-primary" />
                                      <span className="font-medium">Mentorship Program Included</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">
                                      Direct access to industry professionals for guidance and career development.
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </Card>
                        </div>
                        
                        <div className="flex justify-between items-center mt-4">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={prevIntern}
                            disabled={internTracks.length <= 1}
                          >
                            <ChevronLeft className="w-4 h-4 mr-1" />
                            Previous
                          </Button>
                          
                          <div className="flex items-center gap-2">
                            {internTracks.map((_, index) => (
                              <div
                                key={index}
                                className={`w-2 h-2 rounded-full ${
                                  index === currentInternIndex ? "bg-primary" : "bg-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={nextIntern}
                            disabled={internTracks.length <= 1}
                          >
                            Next
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                        
                        <div className="mt-4">
                          <Button
                            type="button"
                            variant={selectedInternTrack === internTracks[currentInternIndex]?.id ? "default" : "outline"}
                            className="w-full"
                            onClick={() => setSelectedInternTrack(internTracks[currentInternIndex]?.id || "")}
                          >
                            {selectedInternTrack === internTracks[currentInternIndex]?.id 
                              ? "Selected" 
                              : "Select This Track"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Additional Information Sections */}
                {selectedUserType === "volunteer" && selectedVolunteerOpportunity && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="border-t pt-6">
                      <h3 className="text-xl font-semibold text-primary mb-4">Volunteer Information</h3>
                      <div className="space-y-4">
                        <div className="form-group">
                          <Label htmlFor="availability">Availability *</Label>
                          <textarea
                            id="availability"
                            name="availability"
                            value={formData.availability}
                            onChange={handleChange}
                            className="form-textarea"
                            rows={3}
                            placeholder="When are you available to volunteer? (days, times, frequency)"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <Label htmlFor="skills">Relevant Skills & Experience</Label>
                          <textarea
                            id="skills"
                            name="skills"
                            value={formData.skills}
                            onChange={handleChange}
                            className="form-textarea"
                            rows={3}
                            placeholder="What skills and experience do you bring?"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedUserType === "intern" && selectedInternTrack && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="border-t pt-6">
                      <h3 className="text-xl font-semibold text-primary mb-4">Intern Information</h3>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="form-group">
                            <Label htmlFor="transcript">Unofficial Transcript</Label>
                            <textarea
                              id="transcript"
                              name="transcript"
                              value={formData.transcript}
                              onChange={handleChange}
                              className="form-textarea"
                              rows={3}
                              placeholder="Paste your unofficial transcript or provide a link..."
                            />
                          </div>
                          <div className="form-group">
                            <Label htmlFor="references">References</Label>
                            <textarea
                              id="references"
                              name="references"
                              value={formData.references}
                              onChange={handleChange}
                              className="form-textarea"
                              rows={3}
                              placeholder="Provide contact information for two references..."
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <Label htmlFor="previousExperience">Previous Experience</Label>
                          <textarea
                            id="previousExperience"
                            name="previousExperience"
                            value={formData.previousExperience}
                            onChange={handleChange}
                            className="form-textarea"
                            rows={3}
                            placeholder="Tell us about any relevant experience or background..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedUserType === "career" && selectedCareerOpportunity && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="border-t pt-6">
                      <h3 className="text-xl font-semibold text-primary mb-4">Career Application</h3>
                      <div className="space-y-4">
                        <div className="form-group">
                          <Label htmlFor="resume">Resume/CV</Label>
                          <textarea
                            id="resume"
                            name="resume"
                            value={formData.resume}
                            onChange={handleChange}
                            className="form-textarea"
                            rows={4}
                            placeholder="Please paste your resume or provide a link to your online resume"
                          />
                        </div>
                        <div className="form-group">
                          <Label htmlFor="coverLetter">Cover Letter</Label>
                          <textarea
                            id="coverLetter"
                            name="coverLetter"
                            value={formData.coverLetter}
                            onChange={handleChange}
                            className="form-textarea"
                            rows={4}
                            placeholder="Paste your cover letter or provide a link..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Universal Additional Information */}
                {selectedUserType && (
                  (selectedUserType === "learner" && selectedSubPrograms.length > 0) ||
                  (selectedUserType === "volunteer" && selectedVolunteerOpportunity) ||
                  (selectedUserType === "intern" && selectedInternTrack) ||
                  (selectedUserType === "career" && selectedCareerOpportunity)
                ) && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="border-t pt-6">
                      <h3 className="text-xl font-semibold text-primary mb-4">Additional Information</h3>
                      
                      <div className="space-y-4">
                        <div className="form-group">
                          <Label htmlFor="motivation">Why do you want to join BFEA?</Label>
                          <textarea
                            id="motivation"
                            name="motivation"
                            value={formData.motivation}
                            onChange={handleChange}
                            className="form-textarea"
                            rows={3}
                            placeholder="What motivates you to be part of our community?"
                          />
                        </div>
                        <div className="form-group">
                          <Label htmlFor="additionalNotes">Additional Notes</Label>
                          <textarea
                            id="additionalNotes"
                            name="additionalNotes"
                            value={formData.additionalNotes}
                            onChange={handleChange}
                            className="form-textarea"
                            rows={3}
                            placeholder="Any other information you'd like us to know..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Summary and Submit */}
                {selectedUserType && (
                  (selectedUserType === "learner" && selectedSubPrograms.length > 0) ||
                  (selectedUserType === "volunteer" && selectedVolunteerOpportunity) ||
                  (selectedUserType === "intern" && selectedInternTrack) ||
                  (selectedUserType === "career" && selectedCareerOpportunity)
                ) && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="bg-accent/10 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg text-primary mb-4">Registration Summary</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Registering as:</strong> {userTypes.find(t => t.value === selectedUserType)?.label}</p>
                        <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                        {selectedUserType === "learner" && (
                          <>
                            <p><strong>Age:</strong> {formData.age} years old</p>
                            <p><strong>Selected Programs:</strong></p>
                            <ul className="list-disc list-inside ml-4">
                              {selectedSubPrograms.map(id => {
                                const subProgram = programCategories
                                  .flatMap(cat => cat.subPrograms)
                                  .find(sub => sub.id === id);
                                return <li key={id}>{subProgram?.name}</li>;
                              })}
                            </ul>
                          </>
                        )}
                        {selectedUserType === "volunteer" && (
                          <p><strong>Selected Opportunity:</strong> {volunteerOpportunities.find(o => o.id === selectedVolunteerOpportunity)?.title}</p>
                        )}
                        {selectedUserType === "intern" && (
                          <p><strong>Selected Track:</strong> {internTracks.find(t => t.id === selectedInternTrack)?.title}</p>
                        )}
                        {selectedUserType === "career" && (
                          <>
                            <p><strong>Preferred Location:</strong> {locations.find(l => l.id === selectedLocation)?.name}</p>
                            <p><strong>Selected Position:</strong> {careerOpportunities.find(o => o.id === selectedCareerOpportunity)?.title}</p>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <div className="bg-primary/10 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg text-primary mb-3">What Happens Next?</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                          <span>We'll review your registration within 2 business days</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                          <span>Our team will contact you to confirm details</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                          <span>You'll receive program materials and next steps</span>
                        </li>
                      </ul>
                    </div>
                    
                    <Button type="submit" variant="gold" size="lg" className="w-full">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Submit Registration
                    </Button>
                  </div>
                )}
              </form>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
      <AIChat />
    </div>
  );
};

export default UnifiedRegister;