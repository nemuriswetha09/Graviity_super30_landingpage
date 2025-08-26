import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Arjun Sharma",
      achievement: "IIT Delhi - Computer Science",
      year: "2023",
      content: "Graviity Super30 transformed my approach to JEE preparation. The faculty's dedication and small batch size helped me clear my doubts instantly. The regular mock tests prepared me well for the actual exam.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Reddy",
      achievement: "AIIMS Delhi - MBBS",
      year: "2023",
      content: "The NEET coaching at Graviity Super30 was exceptional. The biology faculty made complex concepts easy to understand. The study material and regular assessments helped me secure admission in AIIMS.",
      rating: 5
    },
    {
      id: 3,
      name: "Rohit Kumar",
      achievement: "IIT Bombay - Mechanical",
      year: "2022",
      content: "Best coaching institute in Hyderabad! The teachers are highly experienced and always available for doubt clearing. The environment is very supportive and motivating for serious JEE aspirants.",
      rating: 5
    },
    {
      id: 4,
      name: "Sneha Patel",
      achievement: "NEET AIR 156",
      year: "2023",
      content: "I joined Graviity Super30 for NEET preparation and it was the best decision. The structured approach, regular tests, and personal attention from teachers helped me achieve my dream rank.",
      rating: 5
    },
    {
      id: 5,
      name: "Vikash Gupta",
      achievement: "IIT Madras - Aerospace",
      year: "2022",
      content: "The faculty at Graviity Super30 is outstanding. They not only teach the concepts but also share valuable exam strategies. The small batch size ensures every student gets personal attention.",
      rating: 5
    },
    {
      id: 6,
      name: "Ananya Singh",
      achievement: "JIPMER - MBBS",
      year: "2023",
      content: "Excellent coaching center with dedicated teachers. The study material is comprehensive and up-to-date. The mock tests helped me manage time effectively during the actual NEET exam.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-warning fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Student <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our successful students who achieved their dreams with Graviity Super30
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <Quote className="h-8 w-8 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex mb-2">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-primary font-medium">{testimonial.achievement}</p>
                  <p className="text-xs text-muted-foreground">Class of {testimonial.year}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-accent/10 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Join Our Success Story
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            These are just a few of our many success stories. With dedicated preparation 
            and expert guidance, you could be next!
          </p>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">IIT Selections</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">300+</div>
              <div className="text-sm text-muted-foreground">Medical Admissions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning">8+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;