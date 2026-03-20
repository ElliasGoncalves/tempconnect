import React, { useState, useEffect } from 'react';
import { Smartphone, RefreshCw, Copy, Check, MessageSquare, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { COUNTRIES, Country, generatePhoneNumber, MOCK_MESSAGES } from '@/lib/phone-data';
import { formatDistanceToNow } from 'date-fns';

interface PhoneMessage {
  id: string;
  sender: string;
  text: string;
  timestamp: Date;
}

export function PhoneView() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [messages, setMessages] = useState<PhoneMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const handleCountrySelect = (country: Country) => {
    setLoading(true);
    setSelectedCountry(country);
    // Simulate API call delay
    setTimeout(() => {
      setPhoneNumber(generatePhoneNumber(country));
      setMessages([]);
      setLoading(false);
      // Add initial welcome message
      addMockMessage('System', `Number active for ${country.name}. Waiting for SMS...`);
    }, 1500);
  };

  const handleRegenerate = () => {
    if (selectedCountry) {
      handleCountrySelect(selectedCountry);
    }
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const addMockMessage = (sender: string, text: string) => {
    const newMessage: PhoneMessage = {
      id: Math.random().toString(36).substring(7),
      sender,
      text,
      timestamp: new Date(),
    };
    setMessages(prev => [newMessage, ...prev]);
  };

  // Simulate incoming messages
  useEffect(() => {
    if (!phoneNumber) return;

    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance to get a message every 5 seconds
        const randomMsg = MOCK_MESSAGES[Math.floor(Math.random() * MOCK_MESSAGES.length)];
        addMockMessage(randomMsg.sender, randomMsg.text);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [phoneNumber]);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  if (!selectedCountry) {
    return (
      <div className="space-y-8">
        <div className="border-l-2 border-primary pl-4 py-2 bg-primary/5">
          <h2 className="text-xl font-bold uppercase tracking-widest text-primary mb-2">
            Select_Region
          </h2>
          <p className="text-muted-foreground text-sm font-mono">
            ESTABLISH_UPLINK // CHOOSE_TARGET_NODE
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {COUNTRIES.map((country) => (
            <Card 
              key={country.code}
              className="group cursor-pointer border-border bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(57,255,20,0.1)]"
              onClick={() => handleCountrySelect(country)}
            >
              <CardContent className="p-6 flex flex-col items-center justify-center gap-4 text-center">
                <span className="text-4xl filter drop-shadow-lg">{country.flag}</span>
                <div className="space-y-1">
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors uppercase tracking-wider">
                    {country.name}
                  </h3>
                  <Badge variant="outline" className="font-mono text-xs border-primary/30 text-primary/70">
                    {country.dialCode}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header / Back */}
      <div className="flex items-center justify-between">
        <Button 
          variant="ghost" 
          className="text-muted-foreground hover:text-primary pl-0 gap-2"
          onClick={() => {
            setSelectedCountry(null);
            setPhoneNumber(null);
            setMessages([]);
          }}
        >
          <ArrowLeft className="h-4 w-4" />
          CHANGE_REGION
        </Button>
        <Badge variant="outline" className="font-mono border-primary text-primary animate-pulse">
          LIVE_CONNECTION
        </Badge>
      </div>

      {/* Active Number Card */}
      <Card className="border-primary/50 bg-card/50 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
        <CardContent className="p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
                <span className="text-2xl">{selectedCountry.flag}</span>
                ACTIVE_NUMBER ({selectedCountry.code})
              </div>
              {loading ? (
                <div className="h-10 w-64 bg-primary/10 animate-pulse rounded"></div>
              ) : (
                <div className="text-3xl md:text-4xl font-mono font-bold text-primary tracking-wider glitch" data-text={phoneNumber}>
                  {phoneNumber}
                </div>
              )}
            </div>

            <div className="flex gap-2 w-full md:w-auto">
              <CopyToClipboard text={phoneNumber || ''} onCopy={handleCopy}>
                <Button size="lg" variant="outline" className="flex-1 md:flex-none border-primary/30 hover:bg-primary hover:text-primary-foreground">
                  {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                  COPY
                </Button>
              </CopyToClipboard>
              <Button 
                size="lg" 
                variant="destructive" 
                className="flex-1 md:flex-none bg-destructive/20 text-destructive border border-destructive/50 hover:bg-destructive hover:text-destructive-foreground"
                onClick={handleRegenerate}
                disabled={loading}
              >
                <RefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                NEW_NUM
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SMS Inbox */}
      <Card className="border-border bg-card/30 backdrop-blur-sm min-h-[400px]">
        <CardHeader className="border-b border-border bg-muted/10">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm uppercase tracking-widest flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              SMS_Log
            </CardTitle>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 text-xs font-mono text-muted-foreground hover:text-primary"
              onClick={handleRefresh}
              disabled={refreshing}
            >
              <RefreshCw className={`mr-2 h-3 w-3 ${refreshing ? 'animate-spin' : ''}`} />
              REFRESH
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {messages.length > 0 ? (
            <div className="divide-y divide-border">
              {messages.map((msg) => (
                <div key={msg.id} className="p-4 hover:bg-primary/5 transition-colors group animate-in slide-in-from-top-2 duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-primary font-mono text-sm">
                          {msg.sender}
                        </span>
                        <span className="text-xs text-muted-foreground ml-auto font-mono">
                          {formatDistanceToNow(msg.timestamp, { addSuffix: true })}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/90 font-mono leading-relaxed">
                        {msg.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-[300px] text-muted-foreground gap-4">
              <div className="w-12 h-12 border border-dashed border-muted-foreground/30 rounded-full flex items-center justify-center animate-pulse">
                <Smartphone className="h-6 w-6 opacity-50" />
              </div>
              <p className="font-mono text-sm tracking-widest">WAITING_FOR_SMS...</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
