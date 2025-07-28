import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, Globe } from 'lucide-react';

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-accent">About Us</h4>
            <p className="text-gray-300 leading-relaxed">
              Empowering Black families through education, financial literacy, and leadership development programs.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-accent transition-colors">Programs</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-accent transition-colors">News & Events</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/donate" className="text-gray-300 hover:text-accent transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-accent">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-gray-300">info@blackfamilyedu.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-gray-300">+1 (448) 488-3608</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-gray-300">+233 (54) 792-5195</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-accent" />
                <span className="text-gray-300">blackfamily.edu.org</span>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a href="https://web.facebook.com/profile.php?id=61569021178244" className="text-gray-300 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/BPFWellness" className="text-gray-300 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/body_perfectionfitness/" className="text-gray-300 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/body-perfection-fitness/" className="text-gray-300 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCBMo95oVB2uQNVlCuuYvrow" className="text-gray-300 hover:text-accent transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-accent">Subscribe</h4>
            <p className="text-gray-300 mb-4">Get updates on our latest programs and events.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email" 
                required 
                className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-accent"
              />
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            &copy; 2025 | All rights reserved by Black Family Education Academy, a 501c3.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;