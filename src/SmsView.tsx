import React, { useState, useEffect } from 'react';
import { Smartphone, Copy, RefreshCw, Check, MessageSquare, Globe, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

// Simulated data for MVP
const MOCK_NUMBERS = [
  { id: '1', number: '+1 (555) 019-8372', country: 'USA', flag: '🇺🇸' },
  { id: '2', number: '+44 7700 900077', country: 'UK', flag: '🇬🇧' },
  { id: '3', number: '+1 (416) 555-0198', country: 'Canada', flag: '🇨🇦' },
  { id: '4', number: '+61 400 123 456', country: 'Australia', flag: '🇦🇺' },
  { id: '5', number: '+33 6 12 34 56 78', country: 'France', flag: '🇫🇷' },
  { id: '6', number: '+49 151 23456789', country: 'Germany', flag: '🇩🇪' },
  { id: '7', number: '+55 11 98765-4321', country: 'Brazil', flag: '🇧🇷' },
  { id: '8', number: '+81 90-1234-5678', country: 'Japan', flag: '🇯🇵' },
  { id: '9', number: '+34 6 12 34 56 78', country: 'Spain', flag: '🇪🇸' },
  { id: '10', number: '+39 612 345 678', country: 'Italy', flag: '🇮🇹' },
  { id: '11', number: '+31 312 345 6789', country: 'Netherlands', flag: '🇳🇱' },
  { id: '12', number: '+46 6 1234 5678', country: 'Sweden', flag: '🇸🇪' },
];

const MOCK_MESSAGES = [
  { id: '1', from: 'Google', text: 'G-482910 is your Google verification code.', time: '2 mins ago' },
  { id: '2', from: 'WhatsApp', text: 'Your WhatsApp code: 192-482. You can also tap on this link to verify your phone: v.whatsapp.com/192482', time: '5 mins ago' },
  { id: '3', from: 'Amazon', text: 'Your Amazon OTP is 849201. Do not share it with anyone.', time: '12 mins ago' },
  { id: '4', from: 'Uber', text: 'Your Uber verification code is 4921.', time: '25 mins ago' },
  { id: '5', from: 'Netflix', text: 'Your Uber verification code is 4921.', time: '1 hour ago' },
];

export function SmsView() {
  const [selectedNumber, setSelectedNumber] = useState(MOCK_NUMBERS[0]);
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedNumber.number);
    setCopied(true);
    toast.success('Phone number copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate network request
    setTimeout(() => {
      // Randomly add a new message sometimes to simulate activity
      if (Math.random() > 0.5) {
        const newMsg = {
          id: Date.now().toString(),
          from: ['TikTok', 'Instagram', 'Discord', 'PayPal'][Math.floor(Math.random() * 4)],
          text: `Your verification code is ${Math.floor(100000 + Math.random() * 900000)}. Valid for 10 minutes.`,
          time: 'Just now'
        };
        setMessages(prev => [newMsg, ...prev].slice(0, 10));
        toast.success('New message received!');
      } else {
        toast.info('No new messages');
      }
      setIsRefreshing(false);
    }, 1500);
  };

  // Auto refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isRefreshing) {
        handleRefresh();
      }
    }, 30000);
    return () => clearInterval(interval);
  }, [isRefreshing]);

  return (
    <div className="space-y-6">
      {/* Number Selection & Display */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Number List */}
        <div className="lg:col-span-1 border border-border bg-background/50 flex flex-col h-[400px]">
          <div className="p-4 border-b border-border bg-muted/20">
            <h3 className="font-bold text-sm uppercase tracking-widest flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              Available Numbers
            </h3>
          </div>
          <div className="overflow-y-auto flex-1 p-2 space-y-2">
            {MOCK_NUMBERS.map((num) => (
              <button
                key={num.id}
                onClick={() => setSelectedNumber(num)}
                className={`w-full text-left p-3 border transition-all duration-200 flex items-center justify-between ${
                  selectedNumber.id === num.id 
                    ? 'border-primary bg-primary/10 text-primary' 
                    : 'border-border/50 hover:border-primary/50 hover:bg-muted/10 text-muted-foreground'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{num.flag}</span>
                  <span className="font-mono text-sm">{num.number}</span>
                </div>
                {selectedNumber.id === num.id && (
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Active Number Display */}
        <div className="lg:col-span-2 border border-border bg-background/50 flex flex-col justify-center items-center p-8 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="text-center space-y-6 z-10 w-full max-w-md">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30 mb-2">
              <Smartphone className="h-8 w-8 text-primary" />
            </div>
            
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Active Virtual Number</p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-3xl">{selectedNumber.flag}</span>
                <h2 className="text-3xl md:text-4xl font-bold font-mono text-primary tracking-wider">
                  {selectedNumber.number}
                </h2>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                onClick={handleCopy}
                className="w-full sm:w-auto group relative overflow-hidden"
                variant="outline"
              >
                <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center gap-2">
                  {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  {copied ? 'COPIED!' : 'COPY NUMBER'}
                </span>
              </Button>
              
              <Button 
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="w-full sm:w-auto group"
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
                {isRefreshing ? 'CHECKING...' : 'CHECK MESSAGES'}
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground/70 flex items-center justify-center gap-1">
              <Clock className="h-3 w-3" /> Auto-refreshing every 30s
            </p>

            {/* External Real SMS Link */}
            <div className="pt-6 mt-6 border-t border-border/50 w-full flex flex-col items-center gap-3">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">For real SMS reception, use a trusted provider.</p>
              <Button 
                asChild
                variant="default"
                className="w-full sm:w-auto bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50"
              >
                <a href="https://sms-activate.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  GET REAL SMS NUMBER <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Inbox */}
      <div className="border border-border bg-background/50">
        <div className="p-4 border-b border-border bg-muted/20 flex items-center justify-between">
          <h3 className="font-bold text-sm uppercase tracking-widest flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-primary" />
            Incoming Messages
          </h3>
          <span className="text-xs text-muted-foreground font-mono">
            {messages.length} MSG(S)
          </span>
        </div>
        
        <div className="divide-y divide-border/50">
          {messages.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground flex flex-col items-center justify-center gap-3">
              <RefreshCw className="h-8 w-8 animate-spin text-primary/30" />
              <p className="text-sm uppercase tracking-widest">Waiting for messages...</p>
            </div>
          ) : (
            messages.map((msg) => (
              <div key={msg.id} className="p-4 hover:bg-muted/5 transition-colors flex flex-col sm:flex-row gap-4 sm:items-center">
                <div className="sm:w-1/4 flex flex-col">
                  <span className="font-bold text-primary text-sm">{msg.from}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {msg.time}
                  </span>
                </div>
                <div className="sm:w-3/4">
                  <p className="text-sm font-mono bg-muted/20 p-3 rounded border border-border/50">
                    {msg.text}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      
      {/* Disclaimer */}
      <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded text-sm text-yellow-500/80">
        <p className="font-bold mb-1 uppercase tracking-wider">⚠️ Public Shared Numbers</p>
        <p>These numbers are public and shared among all users. Do not use them for sensitive accounts, banking, or personal communication. Messages can be seen by anyone.</p>
      </div>
    </div>
  );
}
