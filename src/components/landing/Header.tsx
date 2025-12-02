import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CHECKOUT_URL } from '@/app/page';
import { Logo } from './Logo';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: "#benefits", label: "Benefits" },
  { href: "#in-action", label: "In Action" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
          <Button asChild>
            <Link href={CHECKOUT_URL}>Buy Now</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 p-6">
                <Logo />
                <nav className="flex flex-col space-y-4">
                  {navLinks.map(link => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="mt-4">
                  <Link href={CHECKOUT_URL}>Buy Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}