"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Suman Temburu",
      achievement: "Local Guide · 2 reviews · 1 photo",
      year: "2 months ago",
      content:
        "It's a very very suitable for learning IIT subjects and teachers are very friendly. The fee structure is also very reasonable.",
      rating: 5,
    },
    {
      id: 2,
      name: "Chaitanya Raju",
      achievement: "1 review",
      year: "2 months ago",
      content:
        "What a place to study with fun and full concept explanation. After joining here my life totally changed, now I can solve any physics problem and my marks are improving day by day.",
      rating: 5,
    },
    {
      id: 3,
      name: "Yadavalli Sudheerkumar",
      achievement: "1 review",
      year: "2 months ago",
      content: "Good teachers who take care of students very well.",
      rating: 5,
    },
    {
      id: 4,
      name: "Narwa Venkatreddy",
      achievement: "2 reviews",
      year: "2 months ago",
      content: "Good qualified teachers and good support for preparing students.",
      rating: 5,
    },
    {
      id: 5,
      name: "Ramakrishna Suroju",
      achievement: "2 reviews",
      year: "3 weeks ago",
      content: "Great place to boost IIT foundation.",
      rating: 5,
    },
    {
      id: 6,
      name: "Sowjanya Suroju",
      achievement: "1 review",
      year: "3 weeks ago",
      content: "Best place for IIT foundation.",
      rating: 5,
    },
    {
      id: 7,
      name: "Winningedge",
      achievement: "1 review",
      year: "2 months ago",
      content: "Good teachers who take care of students very well.",
      rating: 5,
    },
    {
      id: 8,
      name: "Gaddam Krishna",
      achievement: "2 reviews",
      year: "Edited 2 months ago",
      content:
        "This place is excellent for school and college going students.",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-warning fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Student <span className="text-primary">Reviews</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from students and parents who experienced Graviity Super30
            first-hand
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
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
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-primary font-medium">
                    {testimonial.achievement}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.year}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
