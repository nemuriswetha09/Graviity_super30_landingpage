import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, FlaskConical, Calculator, Users, Clock, Award } from 'lucide-react';

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "IIT-JEE Mains & Advanced",
      description: "Comprehensive preparation for India's most prestigious engineering entrance exams",
      icon: Calculator,
      features: [
        "Complete syllabus coverage",
        "Regular mock tests",
        "Doubt clearing sessions",
        "Previous year papers"
      ],
      duration: "2 Years",
      batchSize: "30 Students",
      popular: true
    },
    {
      id: 2,
      title: "NEET Preparation",
      description: "Focused coaching for medical entrance examinations",
      icon: FlaskConical,
      features: [
        "Physics, Chemistry & Biology",
        "NCERT based preparation",
        "Medical entrance strategies",
        "Regular assessments"
      ],
      duration: "2 Years",
      batchSize: "30 Students",
      popular: true
    },
    {
      id: 3,
      title: "Foundation Courses",
      description: "Building strong fundamentals for Class 10+ students",
      icon: BookOpen,
      features: [
        "Class 11 & 12 board prep",
        "Early JEE/NEET foundation",
        "Concept building",
        "Study material provided"
      ],
      duration: "1-2 Years",
      batchSize: "25 Students",
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our specialized programs designed to help you excel in competitive exams
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <Card 
                key={course.id} 
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  course.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {course.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold">{course.title}</CardTitle>
                  <p className="text-muted-foreground">{course.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-muted-foreground mr-2" />
                      <span className="text-sm">{course.batchSize}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full"
                    variant={course.popular ? "default" : "outline"}
                    onClick={scrollToContact}
                  >
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <Award className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Special Features of All Courses
            </h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Study Material</h4>
              <p className="text-sm text-muted-foreground">Comprehensive notes and practice sets</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Personal Mentorship</h4>
              <p className="text-sm text-muted-foreground">One-on-one guidance and support</p>
            </div>
            
            <div className="text-center">
              <div className="bg-success/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Award className="h-8 w-8 text-success" />
              </div>
              <h4 className="font-semibold mb-2">Regular Tests</h4>
              <p className="text-sm text-muted-foreground">Weekly assessments and mock exams</p>
            </div>
            
            <div className="text-center">
              <div className="bg-warning/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Clock className="h-8 w-8 text-warning" />
              </div>
              <h4 className="font-semibold mb-2">Flexible Timings</h4>
              <p className="text-sm text-muted-foreground">Morning and evening batches available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;