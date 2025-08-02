'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '../ui/sheet';
import { Menu, Bot, Home, BookOpen, Calculator, Info, BarChart3, Star, UserCog, ChevronRight } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { VisuallyHidden } from '../ui/visually-hidden';

// Organized navigation items with submenus
const navItems = [
  {
    href: '/',
    label: 'Agents',
    icon: Home,
    description: 'Browse AI Fintech Tools'
  },
  {
    href: '/learn',
    label: 'Learn',
    icon: BookOpen,
    description: 'Educational Resources',
    submenu: [
      { href: '/learn/ai-finance-intro', label: 'AI Finance Intro' },
      { href: '/learn/ai-implementation-guide', label: 'Implementation Guide' },
      { href: '/learn/ai-finance-glossary', label: 'Glossary' },
      { href: '/learn/customer-service-ai', label: 'Customer Service AI' }
    ]
  },
  {
    href: '/calculators',
    label: 'Calculators',
    icon: Calculator,
    description: 'Financial Tools'
  },
  {
    href: '/insights',
    label: 'Insights',
    icon: BarChart3,
    description: 'AI Fintech Analysis'
  },
  {
    href: '/compare',
    label: 'Compare',
    icon: BarChart3,
    description: 'Tool Comparison'
  },
  {
    href: '/recommend',
    label: 'Recommender',
    icon: Star,
    description: 'Get Recommendations'
  },
  {
    href: '/chatbot',
    label: 'AI Concierge',
    icon: Bot,
    description: 'Chat with AI Assistant'
  },
  {
    href: '/admin',
    label: 'Admin',
    icon: UserCog,
    description: 'Administration Panel'
  },
];

export function Header() {
  const pathname = usePathname();

  const renderNavItem = (item: any, isMobile = false) => {
    const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
    const hasSubmenu = item.submenu && item.submenu.length > 0;

    if (hasSubmenu) {
      return (
        <div key={item.href} className="relative group">
          <div className={cn(
            'flex items-center justify-between p-3 rounded-lg transition-colors cursor-pointer',
            isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-primary hover:bg-accent',
            isMobile ? 'text-lg' : 'text-sm'
          )}>
            <div className="flex items-center gap-3">
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </div>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:rotate-90" />
          </div>
          
          {/* Submenu */}
          <div className="absolute left-0 top-full mt-1 w-64 bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="p-2">
              <div className="text-xs font-medium text-muted-foreground px-3 py-2 border-b">
                {item.description}
              </div>
              {item.submenu.map((subItem: any) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className={cn(
                    'flex items-center px-3 py-2 rounded-md text-sm transition-colors',
                    pathname === subItem.href
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:text-primary hover:bg-accent'
                  )}
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <Link
        key={item.href}
        href={item.href}
        className={cn(
          'flex items-center gap-3 p-3 rounded-lg transition-colors',
          isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-primary hover:bg-accent',
          isMobile ? 'text-lg' : 'text-sm'
        )}
      >
        <item.icon className="h-5 w-5" />
        <span>{item.label}</span>
      </Link>
    );
  };

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

        {/* Desktop Navigation - Hamburger Menu */}
        <div className="hidden md:flex flex-1 items-center justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 sm:w-96">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription />
              </VisuallyHidden>
              
              <div className="flex flex-col gap-y-2 pt-6">
                <div className="px-3 py-2">
                  <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                </div>
                
                {navItems.map(item => renderNavItem(item, false))}
                
                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center justify-between px-3 py-2">
                    <span className="text-sm text-muted-foreground">Theme</span>
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

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
              
              <div className="flex flex-col gap-y-2 pt-6">
                <div className="px-3 py-2">
                  <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                </div>
                
                {navItems.map(item => renderNavItem(item, true))}
                
                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center justify-between px-3 py-2">
                    <span className="text-sm text-muted-foreground">Theme</span>
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
