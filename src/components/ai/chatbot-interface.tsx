'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';
import { Bot, User, Send, Sparkles, Copy, Check } from 'lucide-react';
import { askFinancialConcierge } from '@/app/chatbot/actions';
import { toast } from 'sonner';

interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export function ChatbotInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'bot',
      content: "Hello! I'm your AI Financial Concierge. I'm here to help you explore the world of AI in fintech. Ask me anything about AI tools, applications, trends, or get personalized recommendations for your financial technology needs. How can I assist you today?",
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const botResponse = await askFinancialConcierge(input.trim());
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: botResponse,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: 'Sorry, I am having trouble connecting. Please try again later.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
      toast.error('Failed to get response. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (content: string, messageId: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedMessageId(messageId);
      toast.success('Message copied to clipboard!');
      setTimeout(() => setCopiedMessageId(null), 2000);
    } catch (error) {
      toast.error('Failed to copy message');
    }
  };

  const formatTimestamp = (timestamp: Date) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Card className="flex flex-col shadow-xl border-0 bg-white/80 backdrop-blur-sm w-full h-full min-h-0 flex-1">
      <CardContent className="flex-1 flex flex-col p-0">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">AI Financial Concierge</h3>
              <p className="text-sm text-muted-foreground">Powered by Gemini AI</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Online</span>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4 min-h-0" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'bot' && (
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                
                <div className={`max-w-[80%] group relative`}>
                  <div
                    className={`p-4 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                    <div className={`text-xs mt-2 ${
                      message.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {formatTimestamp(message.timestamp)}
                    </div>
                  </div>
                  
                  {/* Copy button for bot messages */}
                  {message.role === 'bot' && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => copyToClipboard(message.content, message.id)}
                    >
                      {copiedMessageId === message.id ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  )}
                </div>

                {message.role === 'user' && (
                  <div className="w-8 h-8 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="max-w-[80%]">
                  <div className="p-4 rounded-2xl bg-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-sm text-gray-500">AI is thinking...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="p-4 border-t bg-gray-50/50">
          <form onSubmit={handleSendMessage} className="flex items-center gap-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about AI in fintech..."
              disabled={isLoading}
              className="flex-1 border-0 bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
            />
            <Button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Press Enter to send • Shift+Enter for new line
          </p>
        </div>
      </CardContent>
    </Card>
  );
} 