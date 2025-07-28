// src/pages/Events.tsx (or your relevant path)
import React, { useState } from "react";
import { Calendar, Clock, MapPin, Users, Filter, Search } from 'lucide-react';
import Navigation from "@/components/layout/Navigation"; // From File 2
import Footer from "@/components/layout/Footer"; // From File 2
import FloatingRegister from "@/components/ui/floating-register"; // From File 2
import AIChat from "@/components/ui/ai-chat"; // From File 2
import { Card, CardContent } from '@/components/ui/card'; // From File 1
import { Button } from '@/components/ui/button'; // From File 1
import { Input } from '@/components/ui/input'; // From File 1
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // From File 1
import { Badge } from '@/components/ui/badge'; // From File 1
import heroImage from "@/assets/hero/hero-4.jpg";

// Define the Event interface (From File 1)
interface Event {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD format
  time: string;
  location: string;
  description: string;
  capacity: number; // 0 for unlimited
  registered: number;
  type: 'workshop' | 'meeting' | 'celebration' | 'fundraiser' | 'academic' | 'community'; // Extended from File 2
  featured: boolean;
  registrationRequired: boolean;
}

const Events = () => {
  // State for filtering (From File 1)
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');

  // Mock data combining elements from both files
  const upcomingEvents: Event[] = [
    // Featured Events (Inspired by File 1 & File 2)
    {
      id: '1',
      title: 'Family Financial Literacy Workshop',
      date: '2024-02-10',
      time: '6:00 PM - 8:00 PM',
      location: 'BFEA Main Campus, Room 101',
      description: 'Learn essential financial planning skills for your family\'s future. This comprehensive workshop covers budgeting, saving, investing, and building generational wealth.',
      capacity: 50,
      registered: 32,
      type: 'workshop',
      featured: true,
      registrationRequired: true
    },
    {
      id: '2',
      title: 'Community Career Fair',
      date: '2024-02-17',
      time: '10:00 AM - 2:00 PM',
      location: 'Community Center',
      description: 'Explore career opportunities with local employers and organizations. Resume review, interview tips, and networking opportunities available.',
      capacity: 200,
      registered: 85,
      type: 'community',
      featured: true,
      registrationRequired: false
    },
    // February Events (Inspired by File 2)
    {
      id: '3',
      title: 'Student Science Expo',
      date: '2024-02-24',
      time: '1:00 PM - 4:00 PM',
      location: 'BFEA Main Campus',
      description: 'Celebrate student achievement in STEM with interactive science demonstrations, project presentations, and hands-on activities for all ages.',
      capacity: 150,
      registered: 98,
      type: 'academic',
      featured: false,
      registrationRequired: false
    },
    {
      id: '4',
      title: 'Parent Education Workshop',
      date: '2024-02-28',
      time: '7:00 PM - 8:30 PM',
      location: 'Virtual Event',
      description: '"Supporting Your Child\'s Digital Learning" - Learn effective strategies for managing screen time and enhancing online education experiences.',
      capacity: 0, // Unlimited
      registered: 42,
      type: 'workshop',
      featured: false,
      registrationRequired: true
    },
    // March Events (Inspired by File 2)
    {
      id: '5',
      title: 'Cultural Heritage Celebration',
      date: '2024-03-09',
      time: '11:00 AM - 3:00 PM',
      location: 'Community Center',
      description: 'Community-wide celebration of Black history and culture featuring performances, food, and educational exhibits.',
      capacity: 300,
      registered: 180,
      type: 'celebration',
      featured: false,
      registrationRequired: false
    },
    {
      id: '6',
      title: 'Financial Literacy Workshop',
      date: '2024-03-16',
      time: '6:30 PM - 8:00 PM',
      location: 'BFEA Main Campus, Room 205',
      description: 'Learn budgeting, saving, and investment basics to secure your family\'s financial future.',
      capacity: 75,
      registered: 52,
      type: 'workshop',
      featured: false,
      registrationRequired: true
    },
    {
      id: '7',
      title: 'Spring Reading Festival',
      date: '2024-03-23',
      time: '10:00 AM - 1:00 PM',
      location: 'BFEA Library & Courtyard',
      description: 'Author visits, storytelling, and literacy activities for children and families.',
      capacity: 120,
      registered: 78,
      type: 'academic',
      featured: false,
      registrationRequired: false
    },
    // Additional Events (Inspired by File 1)
    {
      id: '8',
      title: 'Spring Fundraising Gala',
      date: '2024-04-05',
      time: '7:00 PM - 11:00 PM',
      location: 'Grand Ballroom, Downtown Hotel',
      description: 'Join us for an elegant evening celebrating our achievements and supporting future programs. Features dinner, entertainment, and silent auction.',
      capacity: 300,
      registered: 186,
      type: 'fundraiser',
      featured: true,
      registrationRequired: true
    },
    {
      id: '9',
      title: 'Boys of Valor Leadership Summit',
      date: '2024-04-12',
      time: '9:00 AM - 3:00 PM',
      location: 'Community Center Auditorium',
      description: 'Annual leadership development event for young men in our Boys of Valor program. Features guest speakers, workshops, and networking opportunities.',
      capacity: 100,
      registered: 78,
      type: 'academic',
      featured: false,
      registrationRequired: true
    },
  ];

  // Filter events (From File 1)
  const featuredEvents = upcomingEvents.filter(event => event.featured);
  const regularEvents = upcomingEvents.filter(event => !event.featured);

  const filteredEvents = regularEvents.filter(event => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || event.type === filterType;
    return matchesSearch && matchesType;
  });

  // Group events by month (Inspired by File 2)
  const groupEventsByMonth = (events: Event[]) => {
    const grouped: Record<string, Event[]> = {};
    events.forEach(event => {
      const monthYear = new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
      if (!grouped[monthYear]) {
        grouped[monthYear] = [];
      }
      grouped[monthYear].push(event);
    });
    return grouped;
  };

  const groupedEvents = groupEventsByMonth(filteredEvents);

  // Get color for event type badge (From File 1)
  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      workshop: 'bg-blue-100 text-blue-800',
      meeting: 'bg-green-100 text-green-800',
      celebration: 'bg-purple-100 text-purple-800',
      fundraiser: 'bg-yellow-100 text-yellow-800',
      academic: 'bg-red-100 text-red-800',
      community: 'bg-indigo-100 text-indigo-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  // Format date (From File 1)
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short', // Shortened for card display
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Format date for month header (Inspired by File 2)
  const formatMonthHeader = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  // Format date for featured event card (From File 1)
  const formatDateLong = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get short month and day (Inspired by File 2)
  const getShortDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase();
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section - From File 2 */}
      <section
        className="relative pt-32 pb-20 text-white min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage})`, // Adjust path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Join us for workshops, seminars, and community gatherings.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Main Events Content - Combined Structure */}
            <div className="lg:col-span-2">
              {/* Featured Events - From File 1 */}
              {featuredEvents.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-primary mb-6">Featured Events</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {featuredEvents.map((event) => (
                      <Card key={`featured-${event.id}`} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-32 bg-gradient-to-r from-primary/20 to-accent/20 relative">
                          <div className="absolute top-3 left-3">
                            <Badge className={getTypeColor(event.type)}>
                              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                            </Badge>
                          </div>
                          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-bold">
                            {getShortDate(event.date)}
                          </div>
                        </div>
                        <CardContent className="p-5">
                          <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                          <div className="space-y-1 text-xs text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3 flex-shrink-0" />
                              <span>{formatDateLong(event.date)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3 flex-shrink-0" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3 flex-shrink-0" />
                              <span className="truncate">{event.location}</span>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                            {event.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              {event.capacity > 0 ? (
                                <>
                                  <Users className="h-3 w-3" />
                                  <span>{event.registered}/{event.capacity} registered</span>
                                </>
                              ) : (
                                <span>Unlimited</span>
                              )}
                            </div>
                            {event.registrationRequired ? (
                              <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground h-7 text-xs">
                                Register
                              </Button>
                            ) : (
                              <Button size="sm" variant="outline" className="h-7 text-xs">
                                Learn More
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Search and Filter - From File 1 */}
              <div className="flex flex-col md:flex-row gap-3 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-full md:w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Events</SelectItem>
                    <SelectItem value="workshop">Workshops</SelectItem>
                    <SelectItem value="meeting">Meetings</SelectItem>
                    <SelectItem value="celebration">Celebrations</SelectItem>
                    <SelectItem value="fundraiser">Fundraisers</SelectItem>
                    <SelectItem value="academic">Academic</SelectItem>
                    <SelectItem value="community">Community</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Events Grouped by Month - Inspired by File 2 */}
              {Object.entries(groupedEvents).length > 0 ? (
                Object.entries(groupedEvents).map(([monthYear, events]) => (
                  <div key={monthYear} className="mb-10">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">{monthYear}</h2>
                    <div className="space-y-4">
                      {events.map((event) => (
                        <Card key={event.id} className="p-4 rounded-lg border hover:shadow-md transition-shadow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div className="flex items-start space-x-4 flex-1 min-w-0">
                              <div className="bg-primary/20 px-3 py-1 rounded-full text-primary text-sm font-semibold flex-shrink-0">
                                {getShortDate(event.date)}
                              </div>
                              <div className="min-w-0"> {/* For truncation */}
                                <h3 className="font-semibold text-foreground truncate">{event.title}</h3>
                                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mt-1">
                                  <span>{event.time}</span>
                                  <span>•</span>
                                  <span className="truncate">{event.location}</span>
                                  <span>•</span>
                                  <Badge className={`${getTypeColor(event.type)} text-xs`} variant="secondary">
                                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                                  </Badge>
                                </div>
                                <p className="text-muted-foreground text-sm mt-2 line-clamp-1">
                                  {event.description}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between sm:justify-end gap-3 flex-shrink-0">
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                {event.capacity > 0 ? (
                                  <>
                                    <Users className="h-3 w-3" />
                                    <span>{event.registered}/{event.capacity}</span>
                                  </>
                                ) : (
                                  <span>Unlimited</span>
                                )}
                              </div>
                              {event.registrationRequired ? (
                                <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground h-7 text-xs">
                                  Register
                                </Button>
                              ) : (
                                <Button size="sm" variant="outline" className="h-7 text-xs">
                                  Details
                                </Button>
                              )}
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                 // Empty State - From File 1
                <div className="text-center py-12">
                  <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Events Found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search terms or filters to find events.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar - From File 2 with additions */}
            <div className="space-y-6">
              {/* Event Categories - From File 2 */}
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-bold mb-4 text-foreground">Event Categories</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Workshops</span>
                    <span className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">
                      {upcomingEvents.filter(e => e.type === 'workshop').length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Academic</span>
                    <span className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">
                      {upcomingEvents.filter(e => e.type === 'academic').length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Community</span>
                    <span className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">
                      {upcomingEvents.filter(e => e.type === 'community').length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Celebrations</span>
                    <span className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">
                      {upcomingEvents.filter(e => e.type === 'celebration').length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Fundraisers</span>
                    <span className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">
                      {upcomingEvents.filter(e => e.type === 'fundraiser').length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Meetings</span>
                    <span className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">
                      {upcomingEvents.filter(e => e.type === 'meeting').length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Get Event Notifications - Adapted from File 2 "Stay Connected" */}
              <div className="bg-gradient-to-b from-primary to-primary text-white p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Get Event Notifications</h3>
                <p className="text-white/90 mb-4 text-sm">
                  Never miss an important event. Subscribe to receive notifications about upcoming programs.
                </p>
                <button className="w-full bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
                  Subscribe to Calendar
                </button>
              </div>

              {/* Event Guidelines - From File 2 */}
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-bold mb-4 text-foreground">Event Guidelines</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Registration required for most events</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Childcare available upon request</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Materials and refreshments provided</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Parking available on-site</span>
                  </div>
                </div>
              </div>

              {/* Past Event Highlights - From File 2 */}
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-bold mb-4 text-foreground">Past Event Highlights</h3>
                <div className="space-y-4">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=300&h=150&fit=crop&crop=center"
                      alt="Holiday Learning Festival"
                      className="w-full h-24 object-cover rounded mb-2"
                    />
                    <p className="text-sm font-semibold text-foreground">Holiday Learning Festival</p>
                    <p className="text-xs text-muted-foreground">200+ families attended</p>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=150&fit=crop&crop=center"
                      alt="Academic Showcase"
                      className="w-full h-24 object-cover rounded mb-2"
                    />
                    <p className="text-sm font-semibold text-foreground">Winter Academic Showcase</p>
                    <p className="text-xs text-muted-foreground">Student achievements celebrated</p>
                  </div>
                </div>
              </div>
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

export default Events;