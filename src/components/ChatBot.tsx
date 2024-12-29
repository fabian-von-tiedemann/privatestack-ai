import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { ContactButton } from './ui/contact-button';
import { Button } from '@/components/ui/button';
import { Input } from './ui/input';
import { Card, CardHeader, CardContent, CardFooter } from './ui/card';

const initialMessages = [
  { 
    type: 'bot', 
    content: 'Hej! Jag är privatestack.ai:s assistent. Jag hjälper gärna till med:',
  },
  {
    type: 'bot',
    content: '• Information om vår plattform och dess funktioner\n• Boka demo eller möte med vårt team\n• Tekniska frågor om implementation och säkerhet\n• Prisförfrågningar och offertunderlag'
  }
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { type: 'user', content: input }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: 'Tack för ditt meddelande! Jag är under utveckling just nu, men vårt team kommer att kontakta dig inom kort. Under tiden är du välkommen att utforska vår plattform eller boka en demo via formuläret ovan.' 
      }]);
    }, 1000);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={`fixed bottom-6 right-6 z-50 p-4 ${
          isOpen ? 'bg-gray-700' : 'bg-[#005293]'
        } text-white rounded-full shadow-lg hover:opacity-90 transition-colors`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Stäng chat' : 'Öppna chat'}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <Card className="fixed bottom-24 right-6 z-50 w-[400px] flex flex-col shadow-xl">
            <CardHeader className="flex-row items-center justify-between border-b bg-[#005293] text-white rounded-t-xl">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                <h3 className="font-semibold">privatestack.ai Assistent</h3>
              </div>              
            </CardHeader>

            <CardContent className="flex-1 space-y-4 overflow-y-auto max-h-[400px] p-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`flex items-start gap-2 max-w-[80%] ${
                      message.type === 'user'
                        ? 'flex-row-reverse ml-auto'
                        : 'flex-row'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user' ? 'bg-[#005293]' : 'bg-gray-100'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="w-5 h-5 text-white" />
                      ) : (
                        <Bot className="w-5 h-5 text-[#005293]" />
                      )}
                    </div>
                    <div className={`p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-[#005293] text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="whitespace-pre-line text-sm">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-[#005293]" />
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-lg">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </CardContent>

            <CardFooter as="form" onSubmit={handleSubmit} className="border-t p-4">
              <div className="flex gap-2 w-full">
                <Input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                  placeholder="Skriv ett meddelande..."
                  className="flex-1"
                />
                <Button type="submit" className="px-4 py-2 h-[38px] bg-[#005293] hover:bg-[#005293]/90">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        )}
      </AnimatePresence>
    </>
  );
}