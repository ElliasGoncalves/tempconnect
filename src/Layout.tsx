import React from 'react';
import { Link, useLocation } from 'wouter';
import { Terminal, Shield, Menu, X, Lock, Share2, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const [copied, setCopied] = useState(false);

  const shareUrl = "https://tempconnect.site";
  const shareTitle = "TempConnect - Gerador de E-mail Temporário e Cartões de Teste";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + " " + shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
  };

  useEffect(() => {
    const container = document.getElementById("adsterra-footer");
    if (container && !container.hasChildNodes()) {
      const script1 = document.createElement("script");
      script1.innerHTML = `
        atOptions = {
          'key' : 'ef587ff4b47a025735540235e07467a0',
          'format' : 'iframe',
          'height' : 90,
          'width' : 728,
          'params' : {}
        };
      `;

      const script2 = document.createElement("script");
      script2.src = "https://www.highperformanceformat.com/ef587ff4b47a025735540235e07467a0/invoke.js";
      script2.async = true;

      container.innerHTML = "";
      container.appendChild(script1);
      container.appendChild(script2);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-mono selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,6px_100%] opacity-60"></div>
      
      {/* Top Ad Placeholder */}
      <div className="w-full bg-muted/5 border-b border-border/50 py-2 flex justify-center overflow-hidden">
        <div style={{ textAlign: 'center', margin: '10px 0' }}>
          <script async={true} data-cfasync="false" src="https://pl28947942.profitablecpmratenetwork.com/26a6990fb5e8aec7e2293294b9c76217/invoke.js"></script>
          <div id="container-26a6990fb5e8aec7e2293294b9c76217"></div>
        </div>
      </div>

      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="h-6 w-6 text-primary animate-pulse" />
            <Link href="/">
              <span className="text-xl font-bold tracking-tighter uppercase glitch cursor-pointer" data-text="TempConnect">
                TempConnect
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/">
              <span className={cn(
                "text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest cursor-pointer",
                location === '/' ? "text-primary" : ""
              )}>[ Email ]</span>
            </Link>
            <Link href="/receive-sms">
              <span className={cn(
                "text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest cursor-pointer",
                location === '/receive-sms' ? "text-primary" : ""
              )}>[ SMS ]</span>
            </Link>
            <Link href="/password-generator">
              <span className={cn(
                "text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest cursor-pointer",
                location === '/password-generator' ? "text-primary" : ""
              )}>[ PASSWORD ]</span>
            </Link>
            <Link href="/gerador-cpf-cnpj">
              <span className={cn(
                "text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest cursor-pointer",
                location === '/gerador-cpf-cnpj' ? "text-primary" : ""
              )}>[ CPF/CNPJ ]</span>
            </Link>
            <Link href="/tools/card-generator">
              <span className={cn(
                "text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest cursor-pointer",
                location === '/tools/card-generator' ? "text-primary" : ""
              )}>[ Tools ]</span>
            </Link>
            <Link href="/about">
              <span className={cn(
                "text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest cursor-pointer",
                location === '/about' ? "text-primary" : ""
              )}>[ About ]</span>
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground border border-border px-2 py-1">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              SYSTEM ONLINE
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-30 bg-background border-b border-border p-4">
          <nav className="flex flex-col gap-4">
            <Link href="/">
              <span className="text-lg font-medium hover:text-primary uppercase tracking-widest block border-b border-border pb-2 cursor-pointer" onClick={() => setIsMenuOpen(false)}>&gt; Email_Module</span>
            </Link>
            <Link href="/receive-sms">
              <span className="text-lg font-medium hover:text-primary uppercase tracking-widest block border-b border-border pb-2 cursor-pointer" onClick={() => setIsMenuOpen(false)}>&gt; SMS_Module</span>
            </Link>
            <Link href="/password-generator">
              <span className="text-lg font-medium hover:text-primary uppercase tracking-widest block border-b border-border pb-2 cursor-pointer" onClick={() => setIsMenuOpen(false)}>&gt; Password_Gen</span>
            </Link>
            <Link href="/gerador-cpf-cnpj">
              <span className="text-lg font-medium hover:text-primary uppercase tracking-widest block border-b border-border pb-2 cursor-pointer" onClick={() => setIsMenuOpen(false)}>&gt; CPF_CNPJ_Gen</span>
            </Link>
            <Link href="/tools/card-generator">
              <span className="text-lg font-medium hover:text-primary uppercase tracking-widest block border-b border-border pb-2 cursor-pointer" onClick={() => setIsMenuOpen(false)}>&gt; Dev_Tools</span>
            </Link>
            <Link href="/about">
              <span className="text-lg font-medium hover:text-primary uppercase tracking-widest block border-b border-border pb-2 cursor-pointer" onClick={() => setIsMenuOpen(false)}>&gt; System_Info</span>
            </Link>
            <Link href="/privacy">
              <span className="text-lg font-medium hover:text-primary uppercase tracking-widest block border-b border-border pb-2 cursor-pointer" onClick={() => setIsMenuOpen(false)}>&gt; Privacy_Policy</span>
            </Link>
          </nav>
        </div>
      )}

      <main className="flex-1 container py-8 relative z-10">
        {children}
      </main>

      {/* Footer Ad Placeholder */}
      <div className="w-full bg-muted/5 border-t border-border/50 py-8 flex justify-center overflow-hidden mt-auto">
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <div id="adsterra-footer"></div>
        </div>
      </div>

      <footer className="border-t border-border py-6 bg-muted/20">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
            <p>© 2026 TempConnect</p>
            <span className="hidden md:inline text-muted-foreground/30">|</span>
            <Link href="/privacy">
              <span className="hover:text-primary cursor-pointer flex items-center gap-1">
                <Lock className="h-3 w-3" />
                Privacy Policy
              </span>
            </Link>
            <span className="hidden md:inline text-muted-foreground/30">|</span>
            <div className="flex gap-3">
              <Link href="/temporary-email"><span className="hover:text-primary cursor-pointer">EN</span></Link>
              <Link href="/email-temporario"><span className="hover:text-primary cursor-pointer">PT</span></Link>
              <Link href="/receive-sms"><span className="hover:text-primary cursor-pointer">SMS</span></Link>
              <Link href="/password-generator"><span className="hover:text-primary cursor-pointer">PASS</span></Link>
              <Link href="/gerador-cpf-cnpj"><span className="hover:text-primary cursor-pointer">CPF/CNPJ</span></Link>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            {/* Social Share */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground uppercase tracking-widest hidden sm:inline-block">Share:</span>
              <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#25D366] transition-colors" title="Share on WhatsApp">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
              </a>
              <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#1DA1F2] transition-colors" title="Share on X (Twitter)">
                <Twitter className="h-4 w-4" />
              </a>
              <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0A66C2] transition-colors" title="Share on LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <button onClick={handleCopyLink} className="text-muted-foreground hover:text-primary transition-colors relative" title="Copy Link">
                <LinkIcon className="h-4 w-4" />
                {copied && (
                  <span className="absolute -top-8 -left-4 bg-primary text-primary-foreground text-[10px] px-2 py-1 rounded whitespace-nowrap animate-in fade-in zoom-in duration-200">
                    Copied!
                  </span>
                )}
              </button>
            </div>

            <div className="hidden md:flex items-center gap-2 border-l border-border pl-6">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">NO LOGS RETAINED</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
