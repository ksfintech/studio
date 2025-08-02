import { Metadata } from 'next';
import { ChatbotInterface } from '@/components/ai/chatbot-interface';

export const metadata: Metadata = {
  title: 'AI Financial Concierge | AI FinTech Insights',
  description: 'Chat with our AI Financial Concierge to get expert insights on AI in fintech, discover tools, and learn about the latest trends in financial technology.',
};

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Financial Concierge
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your intelligent assistant for exploring AI in fintech. Ask questions about tools, trends, 
            applications, and get personalized insights to help you navigate the world of financial technology.
          </p>
        </div>

        {/* Chatbot Interface */}
        <div className="max-w-4xl mx-auto">
          <ChatbotInterface />
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-blue-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Expert Insights</h3>
            <p className="text-sm text-muted-foreground">
              Get comprehensive answers about AI applications in fintech, from fraud detection to robo-advisory.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-purple-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Tool Discovery</h3>
            <p className="text-sm text-muted-foreground">
              Discover the best AI fintech tools and platforms for your specific needs and use cases.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-green-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Real-time Guidance</h3>
            <p className="text-sm text-muted-foreground">
              Receive instant, personalized guidance on implementing AI solutions in your financial projects.
            </p>
          </div>
        </div>

        {/* Suggested Questions */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6">Try asking about:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-blue-200 transition-colors">
              <p className="text-sm text-muted-foreground">"What are the best AI tools for fraud detection in banking?"</p>
            </div>
            <div className="p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-blue-200 transition-colors">
              <p className="text-sm text-muted-foreground">"How can I implement AI for credit scoring?"</p>
            </div>
            <div className="p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-blue-200 transition-colors">
              <p className="text-sm text-muted-foreground">"What are the latest trends in AI-powered robo-advisory?"</p>
            </div>
            <div className="p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-blue-200 transition-colors">
              <p className="text-sm text-muted-foreground">"Tell me about AI applications in payment processing"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 