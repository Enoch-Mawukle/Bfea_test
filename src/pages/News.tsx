// src/pages/News.tsx (or your relevant path)
import React from "react";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/layout/Navigation'; // Changed from Header
import Footer from '@/components/layout/Footer'; // Adjust path as needed
import FloatingRegister from '@/components/ui/floating-register'; // Added
import AIChat from '@/components/ui/ai-chat'; // Added
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import financialLiteracy from '@/assets/financial-literacy.jpg';
import mentorshipImage from '@/assets/mentorship.jpg';
import globalPrograms from '@/assets/global-programs.jpg';
import enrichmentPro from "@/assets/programs/enrichment-programs.jpg";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "BFEA Launches New Financial Literacy Program for Youth",
      excerpt: "Our innovative 'Dollars and $ense' program is now available to help young people build essential money management skills.",
      date: "March 15, 2025",
      category: "Program Launch",
      image: financialLiteracy,
      featured: true
    },
    {
      id: 2,
      title: "100 Students Graduate from Boys of Valor Program",
      excerpt: "Celebrating the achievements of young men who completed our character-building leadership program.",
      date: "March 10, 2025",
      category: "Achievement",
      image: mentorshipImage,
      featured: false
    },
    {
      id: 3,
      title: "Ghana Cultural Exchange Program Accepting Applications",
      excerpt: "Students can now apply for our summer cultural immersion program in Ghana, Africa.",
      date: "March 5, 2025",
      category: "Opportunity",
      image: globalPrograms,
      featured: false
    },
    {
      id: 4,
      title: "Community Partnership with Local Schools Expands",
      excerpt: "BFEA announces new partnerships with three additional schools to expand our tutoring reach.",
      date: "February 28, 2025",
      category: "Partnership",
      image: financialLiteracy,
      featured: false
    },
    {
      id: 5,
      title: "Mental Health Support Services Now Available",
      excerpt: "New counseling and family support services launched to address community wellness needs.",
      date: "February 20, 2025",
      category: "Service Launch",
      image: mentorshipImage,
      featured: false
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Community Financial Workshop",
      date: "March 25, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "BFEA Florida Campus",
      description: "Learn budgeting basics and saving strategies for families.",
      capacity: "50 participants",
      type: "Workshop"
    },
    {
      id: 2,
      title: "Youth Leadership Summit 2025",
      date: "April 15, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Community Center",
      description: "Annual summit for young leaders aged 13-18 focusing on community impact.",
      capacity: "100 participants",
      type: "Summit"
    },
    {
      id: 3,
      title: "Parent Information Session",
      date: "April 8, 2025",
      time: "6:00 PM - 7:30 PM",
      location: "Virtual & In-Person",
      description: "Learn about our programs and how to enroll your child.",
      capacity: "Unlimited",
      type: "Information"
    },
    {
      id: 4,
      title: "Ghana Cultural Exchange Trip",
      date: "July 1-15, 2025",
      time: "2 weeks",
      location: "Ada, Ghana",
      description: "Cultural immersion and educational journey to West Africa.",
      capacity: "25 participants",
      type: "Travel"
    }
  ];

  // --- Mock Data for Quick Updates (from File 2) ---
  const quickUpdates = [
    { date: "Jan 20, 2024", content: "Registration opens for Spring enrichment programs" },
    { date: "Jan 18, 2024", content: "New volunteer orientation scheduled for February 3rd" },
    { date: "Jan 12, 2024", content: "Parent-Teacher conferences begin next week" },
  ];

  const featuredNews = newsArticles.find(article => article.featured);
  const regularNews = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation /> {/* Changed from Header */}
      
      {/* Hero Section - Taken from File 2 */}
      <section
        //className="pt-32 pb-20 bg-gradient-primary text-white">
        //className="pt-32 pb-20 bg-gradient-primary text-white">
        className="relative pt-32 pb-20 text-white min-h-[60vh] flex items-center"
        style={{
          //backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/src/assets/programs/enrichment/programs.jpg)`,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${enrichmentPro})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Latest News</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Stay updated with the latest from Black Family Education Academy.
          </p>
        </div>
      </section>

      <div className="py-16"> {/* Adjusted padding from pt-24 pb-20 */}
        <div className="container mx-auto px-4">
          
          {/* Removed the original hero content (title, line, paragraph) */}

          {/* Featured News - Kept from File 1 */}
          {featuredNews && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-8">Featured News</h2>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto">
                    <img
                      src={featuredNews.image}
                      alt={featuredNews.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="secondary" className="bg-accent text-accent-foreground">
                          {featuredNews.category}
                        </Badge>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredNews.date}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4">{featuredNews.title}</h3>
                      <p className="text-gray-600 mb-6">{featuredNews.excerpt}</p>
                    </div>
                    <Button asChild className="w-fit">
                      <Link to={`/news/${featuredNews.id}`}>
                        Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Recent News - Kept from File 1 */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-primary mb-8">Recent News</h2>
              <div className="space-y-6">
                {regularNews.map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div className="aspect-video md:aspect-auto">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <Badge variant="outline" className="border-primary text-primary">
                            {article.category}
                          </Badge>
                          <span className="text-sm text-gray-500 flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {article.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-3">{article.title}</h3>
                        <p className="text-gray-600 mb-4">{article.excerpt}</p>
                        <Button asChild variant="outline" size="sm">
                          <Link to={`/news/${article.id}`}>
                            Read More <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar - Combined elements from File 1 and File 2 */}
            <div className="space-y-6">
              {/* Quick Updates - From File 2 */}
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-bold mb-4 text-foreground">Quick Updates</h3>
                <div className="space-y-4">
                  {quickUpdates.map((update, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <p className="text-sm text-muted-foreground mb-1">{update.date}</p>
                      <p className="text-foreground">{update.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stay Connected - From File 2 */}
              <div className="bg-gradient-to-b from-primary to-primary text-white p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
                <p className="text-white/90 mb-4 text-sm">
                  Get the latest news and updates delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <button className="w-full bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
                    Subscribe to Newsletter
                  </button>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
                      Facebook
                    </button>
                    <button className="flex-1 bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
                      Twitter
                    </button>
                  </div>
                </div>
              </div>

              {/* Featured Video - From File 2 */}
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-bold mb-4 text-foreground">Featured Video</h3>
                <div className="bg-muted rounded-lg h-32 flex items-center justify-center mb-3">
                  <span className="text-muted-foreground">▶ Student Success Stories</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Watch how our programs are making a difference in students' lives.
                </p>
              </div>

              {/* Upcoming Events - Kept from File 1 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Upcoming Events</h2>
                <div className="space-y-6">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-secondary text-white">
                            {event.type}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg text-primary">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date} at {event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>{event.capacity}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mt-3 mb-4">{event.description}</p>
                        <Button asChild size="sm" className="w-full">
                          <Link to={`/news/events/${event.id}`}>
                            Learn More
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingRegister /> {/* Added */}
      <AIChat /> {/* Added */}
    </div>
  );
};

export default News;