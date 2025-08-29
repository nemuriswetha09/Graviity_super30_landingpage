import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Users, Trophy } from 'lucide-react';
import heroImage from '@/assets/hero-education.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Students studying at Graviity Super30" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex justify-center mb-6">
            <GraduationCap className="h-16 w-16 text-accent" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-blue-950 mb-6 leading-tight">
            Graviity <span className="text-accent">Super30</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Excellence in IIT-JEE Mains, Advanced & NEET Coaching
          </p>
          
          <p className="text-lg mb-12 text-gray-200 max-w-2xl mx-auto">
            Transform your dreams into reality with our expert faculty, small batch sizes, 
            and proven track record of success in competitive exams.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-8 py-4 text-lg"
              onClick={scrollToContact}
            >
              Enroll Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-blue-800 hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
              onClick={scrollToAbout}
            >
              Learn More
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <div className="text-2xl font-bold">Small</div>
              <div className="text-sm text-gray-200">Batch Sizes</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <BookOpen className="h-8 w-8 text-accent" />
              </div>
              <div className="text-2xl font-bold">Expert</div>
              <div className="text-sm text-gray-200">Faculty</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Trophy className="h-8 w-8 text-accent" />
              </div>
              <div className="text-2xl font-bold">Proven</div>
              <div className="text-sm text-gray-200">Results</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <GraduationCap className="h-8 w-8 text-accent" />
              </div>
              <div className="text-2xl font-bold">Success</div>
              <div className="text-sm text-gray-200">Track Record</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;