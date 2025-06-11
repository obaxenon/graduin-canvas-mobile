
import { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface AIAssistantProps {
  onClose: () => void;
}

const AIAssistant = ({ onClose }: AIAssistantProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your Graduin AI assistant. I'm here to help you with university applications, course selection, and accommodation. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const detectName = (text: string) => {
    const namePatterns = [
      /my name is (\w+)/i,
      /i'm (\w+)/i,
      /i am (\w+)/i,
      /call me (\w+)/i
    ];
    
    for (const pattern of namePatterns) {
      const match = text.match(pattern);
      if (match) {
        return match[1];
      }
    }
    return null;
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Detect name in user message
    const detectedName = detectName(inputMessage);
    if (detectedName && !userName) {
      setUserName(detectedName);
    }

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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'
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `You are a helpful AI assistant for Graduin (graduin.app), a South African education platform that helps high school graduates apply to multiple universities and institutions. Your role is to assist users with:
              
              1. University applications and admissions
              2. Course selection and recommendations
              3. Student accommodation search
              4. Institution information
              5. Application deadlines and requirements
              
              If users ask about topics unrelated to education, universities, or Graduin services, politely redirect them back to relevant topics by saying something like "Oh, it seems we're off topic. Let's get back on track - what would you like assistance with regarding Graduin services?"
              
              Always be helpful, friendly, and professional. If you know the user's name, use it in your responses. Keep responses concise but informative.
              
              Key Graduin services to mention:
              - Multi-institution applications
              - Course finder
              - Student accommodation marketplace
              - Institution database with 200+ South African institutions
              - Application tracking
              
              Website: graduin.app`
            },
            {
              role: 'user',
              content: inputMessage
            }
          ],
          max_tokens: 300,
          temperature: 0.7
        })
      });

      const data = await response.json();
      let aiResponse = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't process that request. Please try again.";

      // Add user's name to response if we have it
      if (userName || detectedName) {
        const name = detectedName || userName;
        if (!aiResponse.includes(name)) {
          aiResponse = aiResponse.replace(/^/, `${name}, `);
        }
      }

      const aiMessage: Message = {
        id: Date.now() + 1,
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "I'm experiencing some technical difficulties. Please try again in a moment or contact our support team for assistance.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-end p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-full max-h-[600px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <Bot className="text-white" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Graduin AI Assistant</h3>
              <p className="text-xs text-slate-500">Online now</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-slate-600" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                message.isUser 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                  : 'bg-slate-100 text-slate-800'
              }`}>
                <div className="flex items-start gap-2">
                  {!message.isUser && (
                    <Bot size={16} className="mt-1 text-purple-600" />
                  )}
                  <p className="text-sm">{message.text}</p>
                  {message.isUser && (
                    <User size={16} className="mt-1 text-white/80" />
                  )}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-100 rounded-2xl px-4 py-2">
                <div className="flex items-center gap-2">
                  <Bot size={16} className="text-purple-600" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-slate-200">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about courses, applications, or accommodation..."
              className="flex-1 px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !inputMessage.trim()}
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
