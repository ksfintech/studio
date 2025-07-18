'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '../ui/sheet';
import { Menu, Bot, Home, BookOpen, Calculator, Info, BarChart3, Star, UserCog } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { useChatbot } from '@/context/chatbot-context';
import { VisuallyHidden } from '../ui/visually-hidden';

const navItems = [
  { href: '/', label: 'Agents', icon: Home },
  { href: '/learn', label: 'Learn', icon: BookOpen },
  { href: '/calculators', label: 'Calculators', icon: Calculator },
  { href: '/about', label: 'About', icon: Info },
  { href: '/insights', label: 'Insights', icon: BarChart3 },
  { href: '/compare', label: 'Compare', icon: BarChart3 },
  { href: '/recommend', label: 'Recommender', icon: Star },
  { href: '/admin', label: 'Admin', icon: UserCog },
];

export function Header() {
  const pathname = usePathname();
  const { openChatbot } = useChatbot();

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
          isMobile ? 'flex items-center gap-2 py-2 text-lg' : 'flex items-center p-2'
        )}
      >
        <item.icon className="h-5 w-5" />
        <span className={isMobile ? 'block' : 'sr-only'}>{item.label}</span>
      </Link>
    ));

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.Compass className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight sm:inline-block">
              AI FinTech Insights
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center space-x-6 md:flex">
          {renderNavLinks()}
          <Button variant="ghost" onClick={openChatbot} className="flex items-center p-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            <Bot className="h-5 w-5" />
            <span className="sr-only">Chatbot</span>
          </Button>
        </nav>

        {/* Right side actions */}
        <div className="flex flex-1 items-center justify-end space-x-2">
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
                <VisuallyHidden>
                  <SheetTitle>Mobile Navigation</SheetTitle>
                  <SheetDescription />
                </VisuallyHidden>
                <div className="flex flex-col gap-y-4 pt-6">
                  {renderNavLinks(true)}
                  <Button variant="ghost" onClick={openChatbot} className="flex items-center gap-2 py-2 text-lg text-muted-foreground justify-start">
                    <Bot className="h-5 w-5" />
                    Chatbot
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
