import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingRegister from "@/components/ui/floating-register";
import AIChat from "@/components/ui/ai-chat";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Globe, Send } from "lucide-react";
import heroBackground from "@/assets/hero/hero-12.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you shortly.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            We'd love to hear from you! Reach out with any questions about our programs or how to get involved.
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're interested in our programs, want to volunteer, or have questions about donations, 
                  we're here to help. Our team is committed to empowering Black families through education.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                    <p className="text-muted-foreground">info@blackfamilyedu.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone Numbers</h3>
                    <p className="text-muted-foreground">USA: +1 (448) 488-3608</p>
                    <p className="text-muted-foreground">Ghana: +233 (54) 792-5195</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Locations</h3>
                    <p className="text-muted-foreground">Florida, USA</p>
                    <p className="text-muted-foreground">Ada, Ghana</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Website</h3>
                    <p className="text-muted-foreground">blackfamily.edu.org</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-primary mb-3">Office Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email *</label>
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
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" variant="default" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about our programs and services</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg text-primary mb-3">How can I enroll my child in a program?</h3>
              <p className="text-muted-foreground">
                You can register for our programs through our registration page or contact us directly. 
                We'll help you find the best program match for your child's needs and age group.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg text-primary mb-3">Are there any fees for the programs?</h3>
              <p className="text-muted-foreground">
                Many of our programs are offered at no cost to families. Some specialized programs may have 
                nominal fees, but we never want cost to be a barrier to participation.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg text-primary mb-3">How can I volunteer with BFEA?</h3>
              <p className="text-muted-foreground">
                We welcome volunteers! Visit our volunteer page to learn about current opportunities, 
                or contact us directly to discuss how your skills can support our mission.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg text-primary mb-3">Do you operate programs in both the US and Ghana?</h3>
              <p className="text-muted-foreground">
                Yes! We have headquarters in both Florida, USA and Ada, Ghana. Our global programs 
                create connections between both communities through cultural exchange and learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingRegister />
      <AIChat />
    </div>
  );
};

export default Contact;