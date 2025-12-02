import { BatteryCharging, Feather, Heater, Music, Zap, Waves } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const benefits = [
  {
    icon: <Waves className="w-10 h-10 text-primary" />,
    title: "Deep Tissue Massage",
    description: "Multiple modes target deep knots and muscle tension for ultimate relief.",
  },
  {
    icon: <Feather className="w-10 h-10 text-primary" />,
    title: "Portable & Lightweight",
    description: "Use it anywhere - at your desk, on the couch, or while traveling.",
  },
  {
    icon: <BatteryCharging className="w-10 h-10 text-primary" />,
    title: "Long Battery Life",
    description: "A single charge provides hours of uninterrupted relaxation.",
  },
  {
    icon: <Heater className="w-10 h-10 text-primary" />,
    title: "Soothing Heat Therapy",
    description: "Gentle warmth improves circulation and soothes sore muscles.",
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "TENS Technology",
    description: "Advanced pulse-based recovery for faster muscle relief.",
  },
  {
    icon: <Music className="w-10 h-10 text-primary" />,
    title: "Whisper-Quiet Motor",
    description: "Enjoy a peaceful massage experience without any distracting noise.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-headline">
            Feel The Difference
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover the features that make MassageWave the ultimate solution for neck pain and stress relief.
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  {benefit.icon}
                </div>
                <CardTitle className="mt-4 font-headline">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
