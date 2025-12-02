"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How long does the battery last on a single charge?",
    answer: "The MassageWave features a long-lasting battery that provides up to 8 hours of use on a single charge, depending on the mode and heat settings used. It's perfect for a full week of relief."
  },
  {
    question: "Is it safe to use the heat function?",
    answer: "Absolutely. The soothing heat therapy is designed to operate at a comfortable and safe temperature, approximately 107°F (42°C). It also features an auto-shutoff timer for your peace of mind."
  },
  {
    question: "Can I use it while working or driving?",
    answer: "You can definitely use it while working at your desk or relaxing at home. However, for safety reasons, we strongly advise against using the MassageWave while driving or operating heavy machinery."
  },
  {
    question: "How many massage modes and intensity levels are there?",
    answer: "MassageWave comes with 6 distinct massage modes (e.g., kneading, shiatsu, acupuncture) and 16 intensity levels, allowing you to fully customize your massage experience for your specific needs."
  },
  {
    question: "Is the MassageWave noisy?",
    answer: "Not at all. It's engineered with a whisper-quiet motor, so you can enjoy a peaceful and relaxing massage without any distracting sounds. It's quiet enough to use in an office or library."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with your MassageWave for any reason, you can return it within 30 days of purchase for a full refund."
  }
];

export function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-headline">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm px-6">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
