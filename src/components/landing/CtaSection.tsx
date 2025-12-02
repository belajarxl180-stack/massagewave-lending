import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CHECKOUT_URL } from "@/app/page";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section id="cta" className="py-16 sm:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-headline">
            Ready to Melt Away Your Stress?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't let neck pain hold you back another day. Get your MassageWave now and experience the future of relaxation and recovery.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" className="text-lg font-bold">
              <Link href={CHECKOUT_URL}>
                Buy MassageWave Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
