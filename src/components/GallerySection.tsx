// import { Card, CardContent } from '@/components/ui/card';
// import classroomImage from '@/assets/classroom-1.jpg';
// import labImage from '@/assets/lab-activity.jpg';
// import successImage from '@/assets/success-celebration.jpg';
// import { Camera, Users, BookOpen, FlaskConical } from 'lucide-react';

// const GallerySection = () => {
//   const galleryItems = [
//     {
//       id: 1,
//       image: classroomImage,
//       title: "Modern Classrooms",
//       description: "Well-equipped classrooms with latest technology",
//       category: "Infrastructure"
//     },
//     {
//       id: 2,
//       image: labImage,
//       title: "Laboratory Sessions",
//       description: "Hands-on learning with practical experiments",
//       category: "Learning"
//     },
//     {
//       id: 3,
//       image: successImage,
//       title: "Success Celebrations",
//       description: "Celebrating our students' achievements",
//       category: "Success"
//     }
//   ];

//   const highlights = [
//     {
//       icon: BookOpen,
//       title: "Interactive Learning",
//       description: "Modern teaching methods with digital boards and interactive sessions"
//     },
//     {
//       icon: Users,
//       title: "Small Batch Teaching",
//       description: "Personal attention with maximum 30 students per batch"
//     },
//     {
//       icon: FlaskConical,
//       title: "Practical Learning",
//       description: "Well-equipped labs for chemistry and physics experiments"
//     },
//     {
//       icon: Camera,
//       title: "Learning Environment",
//       description: "Comfortable and conducive environment for focused study"
//     }
//   ];

//   return (
//     <section id="gallery" className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
//             Our <span className="text-primary">Campus</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Take a look at our modern facilities and vibrant learning environment
//           </p>
//         </div>

//         {/* Main Gallery */}
//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           {galleryItems.map((item) => (
//             <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
//               <div className="relative overflow-hidden">
//                 <img 
//                   src={item.image} 
//                   alt={item.title}
//                   className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
//                 />
//                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
//                 <div className="absolute bottom-4 left-4 text-white">
//                   <span className="inline-block bg-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
//                     {item.category}
//                   </span>
//                   <h3 className="text-xl font-bold">{item.title}</h3>
//                 </div>
//               </div>
//               <CardContent className="p-6">
//                 <p className="text-muted-foreground">{item.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Highlights */}
//         <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-foreground mb-4">
//               World-Class Facilities
//             </h3>
//             <p className="text-lg text-muted-foreground">
//               Everything you need for successful exam preparation under one roof
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {highlights.map((highlight, index) => {
//               const IconComponent = highlight.icon;
//               return (
//                 <div key={index} className="text-center">
//                   <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//                     <IconComponent className="h-8 w-8 text-primary" />
//                   </div>
//                   <h4 className="text-xl font-semibold mb-3">{highlight.title}</h4>
//                   <p className="text-muted-foreground text-sm leading-relaxed">
//                     {highlight.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Virtual Tour CTA */}
//         <div className="mt-16 text-center">
//           <div className="bg-accent/10 rounded-2xl p-8 inline-block">
//             <Camera className="h-16 w-16 text-accent mx-auto mb-4" />
//             <h3 className="text-2xl font-bold text-foreground mb-4">
//               Want to see more?
//             </h3>
//             <p className="text-muted-foreground mb-6">
//               Visit our campus to experience the learning environment firsthand
//             </p>
//             <div className="text-sm text-muted-foreground">
//               <p>Campus visits available:</p>
//               <p className="font-medium">Monday - Saturday: 10 AM - 6 PM</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GallerySection;