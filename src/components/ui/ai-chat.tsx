import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, X, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface PageContext {
  title: string;
  description: string;
  keywords: string[];
  icon: React.ReactNode;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your BFEA Assistant. I can help you with information about our programs, registration, volunteering, and more. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Get current page context
  const getCurrentPageContext = (): PageContext => {
    return {
      title: "Black Family Education Academy",
      description: "Empowering Black families through education, mentorship, and community programs",
      keywords: ["education", "mentorship", "programs", "volunteering", "internships", "career"],
      icon: <Bot className="w-4 h-4" />
    };
  };

  const pageContext = getCurrentPageContext();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase().trim();
    const context = pageContext.title.toLowerCase();
    
    // Greetings
    if (lowerMessage.match(/^(hello|hi|hey|greetings|good morning|good afternoon|good evening)/)) {
      return "Hello! I'm here to help you with information about Black Family Education Academy. You can ask me about our programs, registration process, volunteer opportunities, or anything else related to BFEA. What would you like to know?";
    }
    
    // Programs and Categories
    if (lowerMessage.includes("program") || lowerMessage.includes("courses") || lowerMessage.includes("offer")) {
      return "BFEA offers several comprehensive program categories designed to empower Black families:\n\n" +
             "📚 Core Academic Programs - Including tutoring, financial literacy, and reading programs\n" +
             "👥 Mentorship & Leadership - Like The Village and Million Dollar Club\n" +
             "❤️ Social-Emotional & Family Health - Including Fatherhood Reimagined\n" +
             "🌍 Global Programs - Such as Ghana Internship Program\n" +
             "🎓 Enrichment & Special Topics - Including AI for the People\n" +
             "👦 Boys of Valor Program - Character building for young men\n\n" +
             "Each program has specific age and gender requirements. Would you like details about any specific program?";
    }
    
    // Specific Program Details
    if (lowerMessage.includes("tutoring") || lowerMessage.includes("national tutoring")) {
      return "The National Tutoring Program is for ages 8-10 (male only). It provides foundational academic support to help students improve their performance in core subjects. Duration: 12 weeks with 2-3 hours/week commitment.";
    }
    
    if (lowerMessage.includes("financial") && lowerMessage.includes("literacy")) {
      return "Dollars and $ense is our financial literacy program for ages 12-18 (all genders). It teaches essential financial skills for young adults including budgeting, saving, and investing basics. Duration: 8 weeks with 3 hours/week commitment.";
    }
    
    if (lowerMessage.includes("reading warriors") || lowerMessage.includes("reading program")) {
      return "Reading Warriors Initiative is for ages 6-14 (all genders). It focuses on developing strong reading skills and comprehension through engaging activities. Duration: 10 weeks with 2 hours/week commitment.";
    }
    
    if (lowerMessage.includes("the village") || lowerMessage.includes("mentorship")) {
      return "The Village is a mentorship program for ages 16-24 (male only). It provides community-based leadership development and character building. Duration: 16 weeks with 4 hours/week commitment.";
    }
    
    if (lowerMessage.includes("million dollar") && lowerMessage.includes("club")) {
      return "Million Dollar Club is for ages 18-30 (all genders). This entrepreneurship and financial empowerment program helps participants build wealth and business skills. Duration: 20 weeks with 3 hours/week commitment.";
    }
    
    if (lowerMessage.includes("boys of valor")) {
      return "Boys of Valor is for ages 10-17 (male only). It focuses on character building and positive masculinity development through mentorship. Duration: 14 weeks with 2 hours/week commitment.";
    }
    
    if (lowerMessage.includes("fatherhood") && lowerMessage.includes("reimagined")) {
      return "Fatherhood Reimagined is for ages 18-65 (male only). It supports fathers in developing positive parenting skills and emotional well-being. Duration: 12 weeks with 3 hours/week commitment.";
    }
    
    if (lowerMessage.includes("ghana internship")) {
      return "The Ghana Internship Program is for ages 18-26 (all genders). It offers professional internship experience in Ghana with cultural exchange opportunities. Duration: 12-16 weeks (full-time).";
    }
    
    if (lowerMessage.includes("ai for the people") || lowerMessage.includes("ai people")) {
      return "AI for the People is for ages 14-30 (all genders). This program introduces participants to artificial intelligence and its practical applications. Duration: 8 weeks with 2 hours/week commitment.";
    }
    
    // Registration Process
    if (lowerMessage.includes("register") || lowerMessage.includes("enroll") || lowerMessage.includes("sign up")) {
      return "To register with BFEA:\n\n" +
             "1. Visit our unified registration form\n" +
             "2. Select your user type (Learner, Intern, Volunteer, or Career Applicant)\n" +
             "3. Provide your basic information\n" +
             "4. For learners: Select program categories and specific programs based on your age and gender\n" +
             "5. Complete additional information relevant to your selected role\n" +
             "6. Submit your registration\n\n" +
             "Our team will review your application within 2 business days and contact you with next steps.";
    }
    
    // Volunteer Information
    if (lowerMessage.includes("volunteer") || lowerMessage.includes("help out")) {
      return "We welcome volunteers to support our mission! Volunteer opportunities include:\n\n" +
             "📚 Academic Support - Tutoring and homework help\n" +
             "🎨 Enrichment Activities - Leading workshops and clubs\n" +
             "👥 Mentorship - Guiding students through personal development\n" +
             "👨‍👩‍👧‍👦 Family Engagement - Supporting family programs\n" +
             "📋 Administrative Support - Helping with operations\n" +
             "💻 Digital Literacy - Teaching technology skills\n\n" +
             "To volunteer, select 'Volunteer' on our registration form and choose the area where you'd like to contribute. Flexible scheduling available!";
    }
    
    // Intern Information
    if (lowerMessage.includes("intern") || lowerMessage.includes("internship")) {
      return "Our internship program offers hands-on experience in:\n\n" +
             "🎓 Education Track - Curriculum development and classroom support\n" +
             "🌍 Community Outreach - Family engagement and event planning\n" +
             "💼 Operations & Admin - Nonprofit management and data analysis\n\n" +
             "Program details:\n" +
             "• Duration: 12-16 weeks\n" +
             "• Compensation: Paid positions with competitive stipends\n" +
             "• Mentorship: Direct access to industry professionals\n\n" +
             "To apply, select 'Intern' on our registration form and choose your preferred track.";
    }
    
    // Career Opportunities
    if (lowerMessage.includes("career") || lowerMessage.includes("job") || lowerMessage.includes("work")) {
      return "BFEA offers career opportunities in various departments:\n\n" +
             "• Education\n" +
             "• Community Outreach\n" +
             "• Administration\n" +
             "• Marketing\n\n" +
             "We have positions in both our Florida, USA headquarters and Ada, Ghana operations, plus remote opportunities.\n\n" +
             "To apply, select 'Career Applicant' on our registration form, choose your preferred location, and select the position that interests you.";
    }
    
    // Contact Information
    if (lowerMessage.includes("contact") || lowerMessage.includes("reach") || lowerMessage.includes("email") || lowerMessage.includes("phone")) {
      return "You can reach BFEA through:\n\n" +
             "📧 Email: info@blackfamilyedu.org\n" +
             "🇺🇸 USA: +1 (448) 488-3608\n" +
             "🇬🇭 Ghana: +233 (54) 792-5195\n\n" +
             "Our headquarters are located in Florida, USA and Ada, Ghana.";
    }
    
    // Mission and Values
    if (lowerMessage.includes("mission") || lowerMessage.includes("purpose") || lowerMessage.includes("why")) {
      return "Our mission is to empower and educate Black families through culturally affirming programs that promote:\n\n" +
             "• Academic excellence\n" +
             "• Financial literacy\n" +
             "• Character development\n" +
             "• Community building\n\n" +
             "We serve youth ages 5-24 with a focus on achievement, engagement, and behavioral health.";
    }
    
    // Age and Gender Requirements
    if (lowerMessage.includes("age") || lowerMessage.includes("eligibility") || lowerMessage.includes("requirement")) {
      return "Our programs have different age and gender requirements:\n\n" +
             "• Ages 5-24 for most programs\n" +
             "• Some programs are gender-specific (primarily for males)\n" +
             "• Others are open to all genders\n\n" +
             "When you register, our system will show you programs that match your age and gender. Would you like me to help you find programs for a specific age group?";
    }
    
    // Locations
    if (lowerMessage.includes("location") || lowerMessage.includes("hq") || lowerMessage.includes("headquarters") || lowerMessage.includes("ghana") || lowerMessage.includes("florida")) {
      return "BFEA operates in multiple locations:\n\n" +
             "🇺🇸 United States Headquarters\n" +
             "   • Florida, USA\n\n" +
             "🇬🇭 Ghana Operations\n" +
             "   • Ada, Ghana\n\n" +
             "🌐 Remote Opportunities\n" +
             "   • Available for certain roles\n\n" +
             "Our global approach allows us to bridge communities and share resources across continents.";
    }
    
    // Donation and Support
    if (lowerMessage.includes("donate") || lowerMessage.includes("support") || lowerMessage.includes("contribute")) {
      return "Thank you for your interest in supporting BFEA! Your contribution helps us:\n\n" +
             "• Fund mental health support programs\n" +
             "• Provide technology access to students\n" +
             "• Support vital tutoring programs\n" +
             "• Expand our global initiatives\n\n" +
             "You can donate directly through our website. Every contribution makes a difference in empowering Black families through education.";
    }
    
    // What happens next
    if (lowerMessage.includes("next") || lowerMessage.includes("after") || lowerMessage.includes("process")) {
      return "After submitting your registration:\n\n" +
             "1. Our team reviews your application (2 business days)\n" +
             "2. We contact you to confirm details\n" +
             "3. You receive program materials and next steps\n" +
             "4. You begin your BFEA journey!\n\n" +
             "For volunteers: Background check and orientation\n" +
             "For interns: Interview process and mentor matching\n" +
             "For career applicants: Follow-up interview process";
    }
    
    // Default response with suggestions
    return "I can help you with information about BFEA programs, registration, volunteering, internships, careers, and more. Here are some things you can ask about:\n\n" +
           "• Our educational programs\n" +
           "• How to register\n" +
           "• Volunteer opportunities\n" +
           "• Internship programs\n" +
           "• Career opportunities\n" +
           "• Contact information\n\n" +
           "What specific information would you like to know?";
  };

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          variant="default"
          size="lg"
          className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="w-6 h-6 mr-2" />
          BFEA Assistant
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-xl shadow-2xl w-96 h-[500px] flex flex-col border border-primary/20 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <h3 className="font-semibold">BFEA Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-accent transition-colors p-1 rounded-full hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-background to-muted/30">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"} animate-fade-in`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl ${
                    message.isBot
                      ? "bg-muted text-foreground rounded-tl-none"
                      : "bg-primary text-primary-foreground rounded-tr-none"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {message.isBot ? (
                      <Bot className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                    ) : (
                      <User className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-background">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about programs, registration, volunteering..."
                className="flex-1 px-4 py-3 border border-input rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-muted/50"
              />
              <Button
                variant="default"
                size="icon"
                onClick={sendMessage}
                disabled={!inputValue.trim()}
                className="rounded-full w-12 h-12"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">
              I can help with BFEA programs, registration, and more
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;