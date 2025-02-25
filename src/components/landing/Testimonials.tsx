
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Homeowner",
    text: "Switching to a smart tariff through this platform saved me £300 annually. The process was incredibly simple!",
    image: "/placeholder.svg"
  },
  {
    name: "Michael Chen",
    role: "Solar Panel Owner",
    text: "The platform helped me find the perfect export tariff for my solar setup. Very impressed with the service.",
    image: "/placeholder.svg"
  },
  {
    name: "Emma Williams",
    role: "Smart Home Enthusiast",
    text: "Finally, a service that understands modern energy needs. The recommendations were spot-on!",
    image: "/placeholder.svg"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <Avatar className="w-16 h-16 mx-auto mb-4">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
