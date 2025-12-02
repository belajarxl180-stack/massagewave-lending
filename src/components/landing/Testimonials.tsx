import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Sarah K.",
    review: "I have chronic neck pain from my desk job, and this is a life-changer. The heat is so soothing, and I feel genuine relief after just 15 minutes. Highly recommend!",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "Mike R.",
    review: "As a frequent traveler, this thing is a godsend. It's so lightweight and holds a charge forever. It makes long flights so much more bearable. Worth every penny.",
    rating: 5,
  },
  {
    id: "testimonial-3",
    name: "Emily T.",
    review: "I was skeptical at first, but the TENS technology is incredible. It feels like a professional massage. My neck has never felt better. I use it every single day.",
    rating: 5,
  },
  {
    id: "testimonial-4",
    name: "David L.",
    review: "Best purchase I've made all year. It's quiet, effective, and looks really sleek. My wife keeps stealing it, so I might have to buy another one!",
    rating: 5,
  },
];

export function Testimonials() {
  const images = PlaceHolderImages.filter(p => p.id.startsWith('testimonial-'));

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-headline">
            Loved By Thousands of Necks
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our happy customers have to say about their MassageWave experience.
          </p>
        </div>
        <div className="hidden md:grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => {
            const image = images.find(img => img.id === testimonial.id);
            return (
              <Card key={testimonial.name} className="flex flex-col justify-between shadow-lg">
                <CardContent className="p-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`} />
                    ))}
                  </div>
                  <p className="mt-4 text-foreground">"{testimonial.review}"</p>
                </CardContent>
                <div className="bg-muted/50 p-4 flex items-center gap-4">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={40}
                      height={40}
                      className="rounded-full"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </div>
              </Card>
            );
          })}
        </div>
        <div className="md:hidden mt-12">
           <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-xs mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => {
                const image = images.find(img => img.id === testimonial.id);
                return (
                  <CarouselItem key={testimonial.name}>
                    <div className="p-1">
                      <Card className="flex flex-col justify-between shadow-lg h-full">
                        <CardContent className="p-6 flex-grow">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`} />
                            ))}
                          </div>
                          <p className="mt-4 text-foreground">"{testimonial.review}"</p>
                        </CardContent>
                        <div className="bg-muted/50 p-4 flex items-center gap-4 mt-auto">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              width={40}
                              height={40}
                              className="rounded-full"
                              data-ai-hint={image.imageHint}
                            />
                          )}
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}