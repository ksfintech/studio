
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { MobileFooter } from '@/components/layout/mobile-footer';
import { Chatbot } from '@/components/ai/chatbot';
import { ChatbotProvider } from '@/context/chatbot-context';

export const metadata: Metadata = {
  title: 'AI FinTech Insights',
  description: 'An AI Fintech Agents Directory & Insights Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-body antialiased flex flex-col min-h-screen"
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ChatbotProvider>
            <Header />
            <main className="flex-1 pb-16 md:pb-0">{children}</main>
            <Footer />
            <Chatbot />
            <MobileFooter />
            <Toaster />
          </ChatbotProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
