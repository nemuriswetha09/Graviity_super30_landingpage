import { Target, Users, Award, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Graviity Super30</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are committed to nurturing the next generation of engineers and doctors 
            through comprehensive coaching and mentorship programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Graviity Super30, we believe that every student has the potential to achieve 
              excellence. Our mission is to provide world-class coaching for IIT-JEE and NEET 
              aspirants through innovative teaching methods, personalized attention, and 
              unwavering support.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Located in the heart of Hyderabad, we have been shaping successful careers 
              and helping students realize their dreams of getting into premier medical 
              and engineering institutions across India.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Focused Approach</h4>
                <p className="text-muted-foreground">Targeted preparation strategies</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Small Batches</h4>
                <p className="text-muted-foreground">Personal attention to each student</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-success mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Proven Results</h4>
                <p className="text-muted-foreground">Track record of success</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <BookOpen className="h-12 w-12 text-warning mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Expert Faculty</h4>
                <p className="text-muted-foreground">Experienced and qualified teachers</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Why Choose Graviity Super30?</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <h4 className="text-xl font-semibold mb-3">Individual Attention</h4>
              <p className="text-primary-foreground/90">
                With small batch sizes, every student receives personalized guidance and support.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Result-Oriented Teaching</h4>
              <p className="text-primary-foreground/90">
                Our teaching methodology is designed to maximize exam performance and understanding.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Comprehensive Support</h4>
              <p className="text-primary-foreground/90">
                From doubt clearing to counseling, we provide complete academic and emotional support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;