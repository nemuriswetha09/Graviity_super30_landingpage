import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary bg-blue-950 text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">Graviity Super30</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Empowering students to achieve excellence in IIT-JEE and NEET examinations 
              through quality education and personal mentorship.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Amberpet, Hyderabad</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>Contact: Available on enquiry</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>Email: info@graviitysuper30.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('#home')}
                  className="hover:text-accent transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#about')}
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#courses')}
                  className="hover:text-accent transition-colors"
                >
                  Courses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#testimonials')}
                  className="hover:text-accent transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#gallery')}
                  className="hover:text-accent transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              <Clock className="h-5 w-5 inline mr-2" />
              Timings
            </h4>
            <div className="space-y-2 text-sm">
              <div>
                <div className="font-medium">Monday - Saturday</div>
                <div className="text-primary-foreground/80">7:00 AM - 9:00 PM</div>
              </div>
              <div>
                <div className="font-medium">Sunday</div>
                <div className="text-primary-foreground/80">Closed</div>
              </div>
              <div className="mt-4 p-3 bg-primary-foreground/10 rounded">
                <div className="text-xs font-medium">Campus Visits:</div>
                <div className="text-xs text-primary-foreground/80">Mon-Sat: 10 AM - 6 PM</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="text-primary-foreground/80 mb-4 md:mb-0">
              © 2024 Graviity Super30. All rights reserved.
            </div>
            <div className="text-primary-foreground/80">
              Excellence in Education | IIT-JEE & NEET Coaching
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;