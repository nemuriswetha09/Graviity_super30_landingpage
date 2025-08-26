import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  MessageSquare,
  Send,
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.phone || !formData.course) {
      toast({
        title: "Please fill required fields",
        description: "Name, phone number, and course selection are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll contact you soon to discuss your admission.",
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      course: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "2-2, 647/52, Shivam Rd, CE Colony, Sukh Vihar, Bagh Amberpet, Amberpet, Hyderabad, Telangana 500013",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Timings",
      content: "Monday – Saturday: 7 AM – 9 PM\nSunday: Closed",
      color: "text-accent"
    },
    {
      icon: Phone,
      title: "Contact",
      content: "Call us for admissions and course details",
      color: "text-success"
    },
    {
      icon: Mail,
      title: "Email",
      content: "Send us your queries anytime",
      color: "text-warning"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your journey? Contact us today for admissions and course details
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8">
                Visit us, call us, or send us a message. We're here to help you achieve your dreams.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className={`p-3 rounded-full bg-secondary mr-4 ${info.color}`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2">{info.title}</h4>
                          <p className="text-muted-foreground whitespace-pre-line">
                            {info.content}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-success/10 border-success/20">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <MessageSquare className="h-8 w-8 text-success mr-4" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">WhatsApp Us</h4>
                    <p className="text-muted-foreground text-sm">
                      Get instant responses to your queries
                    </p>
                  </div>
                  <Button className="bg-success hover:bg-success/90">
                    Chat Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enquiry Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Send className="h-6 w-6 mr-2 text-primary" />
                Enquiry Form
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you soon
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <Label htmlFor="course">Course Interested In *</Label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    required
                  >
                    <option value="">Select a course</option>
                    <option value="IIT-JEE Mains & Advanced">IIT-JEE Mains & Advanced</option>
                    <option value="NEET Preparation">NEET Preparation</option>
                    <option value="Foundation Courses">Foundation Courses (Class 10+)</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your goals and any specific questions you have"
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
          <CheckCircle className="h-16 w-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            Join thousands of successful students who chose Graviity Super30 for their 
            IIT-JEE and NEET preparation. Your success story starts here!
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-2xl font-bold mb-2">Free</div>
              <div className="text-sm opacity-90">Demo Classes</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Flexible</div>
              <div className="text-sm opacity-90">Payment Options</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Student Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;