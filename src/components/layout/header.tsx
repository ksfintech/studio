
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Menu, Wand2 } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

const navItems = [
  { href: '/', label: 'Agents' },
  { href: '/insights', label: 'Insights' },
  { href: '/compare', label: 'Compare' },
  { href: '/recommend', label: 'Recommender' },
  { href: '/admin', label: 'Admin' },
];

export function Header() {
  const pathname = usePathname();

  const renderNavLinks = (isMobile = false) =>
    navItems.map(item => (
      <Link
        key={item.href}
        href={item.href}
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
            ? 'text-primary'
            : 'text-muted-foreground',
          isMobile && 'block py-2 text-lg'
        )}
      >
        {item.label}
      </Link>
    ));

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.Compass className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight sm:inline-block">
              AIFinTechInsights.com
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center space-x-6 md:flex">
          {renderNavLinks()}
        </nav>

        {/* Right side actions */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild className="hidden md:flex">
            <Link href="/recommend">
              <Wand2 className="mr-2 h-4 w-4" /> AI Recommender
            </Link>
          </Button>
          <ThemeToggle />
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-y-4 pt-6">
                  {renderNavLinks(true)}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
