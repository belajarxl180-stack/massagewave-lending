import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { PlayCircle } from "lucide-react";

export function InAction() {
  const videoThumb = PlaceHolderImages.find(p => p.id === 'action-video-thumb');
  const photo1 = PlaceHolderImages.find(p => p.id === 'action-photo-1');
  const photo2 = PlaceHolderImages.find(p => p.id === 'action-photo-2');

  return (
    <section id="in-action" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-headline">
            Relief On Your Terms
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you're grinding at the office, commuting, or unwinding at home, MassageWave is your personal therapist on the go.
          </p>
        </div>
        
        <div className="mt-12">
          {videoThumb && (
            <div className="relative group cursor-pointer aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={videoThumb.imageUrl}
                alt={videoThumb.description}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={videoThumb.imageHint}
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <PlayCircle className="w-20 h-20 text-white/80 transform transition-transform duration-500 group-hover:scale-110" />
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {photo1 && (
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={photo1.imageUrl}
                alt={photo1.description}
                width={600}
                height={800}
                className="w-full h-auto object-cover"
                data-ai-hint={photo1.imageHint}
              />
            </div>
          )}
          {photo2 && (
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={photo2.imageUrl}
                alt={photo2.description}
                width={600}
                height={800}
                className="w-full h-auto object-cover"
                data-ai-hint={photo2.imageHint}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
