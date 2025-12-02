import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CHECKOUT_URL } from "@/app/page";

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-product');

  return (
    <section className="py-12 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl font-headline">
              Unwind & Recharge. The Future of Neck Relief is Here.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Experience deep tissue massage, soothing heat, and complete wireless freedom with MassageWave. Your personal oasis of calm.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="text-lg w-full sm:w-auto">
                <Link href={CHECKOUT_URL}>
                  Get My MassageWave
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-center lg:justify-start">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="ml-2 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">5.0</span> from 1,200+ happy customers
              </p>
            </div>
          </div>
          <div className="flex justify-center order-1 lg:order-2">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={600}
                height={600}
                className="rounded-full shadow-2xl w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] object-cover"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}