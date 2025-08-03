import { Metadata } from 'next';
import { ChatbotInterface } from '@/components/ai/chatbot-interface';

export const metadata: Metadata = {
  title: 'AI Financial Concierge | AI FinTech Insights',
  description: 'Chat with our AI Financial Concierge to get expert insights on AI in fintech, discover tools, and learn about the latest trends in financial technology.',
};

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center justify-start p-0 m-0">
      {/* Remove header for maximum space, or keep as a tiny label if desired */}
      {/* <h1 className="text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center leading-none p-0 m-0">
        AI Financial Concierge
      </h1> */}
      <div className="w-full max-w-3xl flex-1 flex flex-col justify-start p-0 m-0">
        <ChatbotInterface />
      </div>
    </div>
  );
} 