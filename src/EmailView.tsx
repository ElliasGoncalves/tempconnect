import React from 'react';
import { Copy, RefreshCw, Trash2, Mail, Clock, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTempMail } from "./useTempMail";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import QRCode from 'react-qr-code';
import { formatDistanceToNow } from 'date-fns';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function EmailView() {
  const { 
    account, 
    messages, 
    loading, 
    refreshing, 
    error, 
    generateEmail, 
    fetchMessages, 
    deleteMsg,
    getMessageDetail
  } = useTempMail();

  const [copied, setCopied] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMessageClick = async (id: string) => {
    const detail = await getMessageDetail(id);
    if (detail) {
      setSelectedMessage(detail);
      setIsDetailOpen(true);
    }
  };

  return (
    <div className="space-y-8">
      {/* Control Panel */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-primary/50 bg-card/50 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
          <CardHeader>
            <CardTitle className="text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Active Identity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {account ? (
              <div className="space-y-4">
                <div className="relative">
                  <div className="p-4 bg-background border border-primary/30 font-mono text-lg md:text-2xl break-all text-primary shadow-[0_0_15px_rgba(57,255,20,0.1)]">
                    {account.address}
                  </div>
                  <div className="absolute top-0 right-0 -mt-3 -mr-3 flex gap-2">
                    <CopyToClipboard text={account.address} onCopy={handleCopy}>
                      <Button size="icon" variant="outline" className="h-8 w-8 bg-background border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all">
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </CopyToClipboard>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    onClick={fetchMessages} 
                    disabled={refreshing}
                    variant="outline" 
                    className="flex-1 border-primary/30 hover:bg-primary/10 hover:text-primary hover:border-primary"
                  >
                    <RefreshCw className={`mr-2 h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
                    REFRESH_INBOX
                  </Button>
                  <Button 
                    onClick={generateEmail} 
                    disabled={loading}
                    variant="destructive"
                    className="flex-1 bg-destructive/20 text-destructive border border-destructive/50 hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    NEW_IDENTITY
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <p className="text-muted-foreground font-mono text-sm">NO ACTIVE IDENTITY DETECTED</p>
                <Button 
                  onClick={generateEmail} 
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-widest"
                >
                  {loading ? 'INITIALIZING...' : 'GENERATE_SECURE_EMAIL'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="border-border bg-card/30 backdrop-blur-sm flex items-center justify-center p-6">
          {account ? (
            <div className="bg-white p-4 rounded-sm">
              <QRCode value={account.address} size={120} />
            </div>
          ) : (
            <div className="text-center text-muted-foreground opacity-50">
              <div className="w-32 h-32 border-2 border-dashed border-muted-foreground/30 mx-auto flex items-center justify-center">
                <span className="text-xs">QR_PLACEHOLDER</span>
              </div>
            </div>
          )}
        </Card>
      </div>

      {/* Tools Promo */}
      <div className="grid md:grid-cols-1 gap-6">
        <a href="/tools/card-generator" className="block group">
          <div className="border-2 border-primary bg-primary/10 hover:bg-primary/20 transition-all p-8 flex items-center justify-between rounded-md group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all"></div>
            
            <div className="flex items-center gap-6 relative z-10">
              <div className="p-4 bg-primary text-primary-foreground rounded-lg shadow-[0_0_15px_rgba(57,255,20,0.5)] group-hover:scale-110 transition-transform duration-300">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 blur-sm rounded-full animate-pulse"></div>
                  <RefreshCw className="h-8 w-8 relative z-10" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-widest mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  GERADOR DE CARTÕES
                </h3>
                <p className="text-base md:text-lg text-foreground/80 font-mono border-l-2 border-primary/50 pl-3">
                  Ferramenta completa para gerar e validar cartões de teste
                </p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-2 text-primary font-bold tracking-widest group-hover:translate-x-2 transition-transform">
              <span>ACESSAR AGORA</span>
              <ArrowRight className="h-6 w-6" />
            </div>
          </div>
        </a>
      </div>

      {/* Inbox */}
      <Card className="border-border bg-card/30 backdrop-blur-sm min-h-[400px]">
        <CardHeader className="border-b border-border bg-muted/10">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm uppercase tracking-widest flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Incoming_Transmission_Log
            </CardTitle>
            <span className="text-xs font-mono text-muted-foreground">
              {messages.length} MSG(S)
            </span>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {messages.length > 0 ? (
            <div className="divide-y divide-border">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className="p-4 hover:bg-primary/5 transition-colors cursor-pointer group relative"
                  onClick={() => handleMessageClick(msg.id)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`w-2 h-2 rounded-full ${msg.seen ? 'bg-muted' : 'bg-primary animate-pulse'}`}></span>
                        <span className="font-bold text-primary truncate font-mono text-sm">
                          {msg.from.name || msg.from.address}
                        </span>
                        <span className="text-xs text-muted-foreground ml-auto font-mono">
                          {formatDistanceToNow(new Date(msg.createdAt), { addSuffix: true })}
                        </span>
                      </div>
                      <h4 className="font-medium truncate text-foreground/90 mb-1">{msg.subject || '(No Subject)'}</h4>
                      <p className="text-xs text-muted-foreground truncate font-mono">{msg.intro}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteMsg(msg.id);
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-[300px] text-muted-foreground gap-4">
              <div className="w-16 h-16 border border-dashed border-muted-foreground/30 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                <RefreshCw className="h-6 w-6 opacity-50" />
              </div>
              <p className="font-mono text-sm tracking-widest">AWAITING_DATA_STREAM...</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Message Detail Dialog */}
      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-background border-primary/50 text-foreground font-mono">
          <DialogHeader className="border-b border-border pb-4 mb-4">
            <DialogTitle className="text-primary uppercase tracking-widest text-lg flex items-center gap-2">
              <Mail className="h-5 w-5" />
              DECRYPTED_MESSAGE
            </DialogTitle>
          </DialogHeader>
          
          {selectedMessage && (
            <div className="space-y-6">
              <div className="grid grid-cols-[80px_1fr] gap-2 text-sm">
                <span className="text-muted-foreground uppercase">FROM:</span>
                <span className="text-primary font-bold">{selectedMessage.from.address}</span>
                
                <span className="text-muted-foreground uppercase">SUBJECT:</span>
                <span className="text-foreground">{selectedMessage.subject}</span>
                
                <span className="text-muted-foreground uppercase">DATE:</span>
                <span className="text-muted-foreground">{new Date(selectedMessage.createdAt).toLocaleString()}</span>
              </div>

              <div className="border border-border p-4 bg-card/50 rounded-sm min-h-[200px] whitespace-pre-wrap">
                {selectedMessage.text || 'No text content available.'}
              </div>

              {selectedMessage.html && selectedMessage.html.length > 0 && (
                 <div className="mt-4">
                   <div className="text-xs text-muted-foreground mb-2 uppercase">HTML_PREVIEW_MODE</div>
                   <div className="border border-border bg-white p-2 rounded-sm overflow-hidden">
                     <iframe 
                       srcDoc={selectedMessage.html[0]} 
                       className="w-full h-[300px] border-0" 
                       title="Email Content"
                       sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin"
                     />
                   </div>
                 </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
