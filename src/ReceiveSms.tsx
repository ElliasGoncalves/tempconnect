import React, { useEffect } from 'react';
import { Shield, Globe, Clock, Smartphone } from 'lucide-react';
import { SmsView } from '@/components/SmsView';

export default function ReceiveSms() {
  useEffect(() => {
    document.title = "Receive SMS Online - Free Virtual Phone Number | TempConnect";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Receive SMS online using free virtual phone numbers. No registration required. Protect your privacy and bypass SMS verification.");
    }
  }, []);

  return (
    <div className="space-y-12">
      {/* Demo Warning */}
      <div className="bg-yellow-500/10 border border-yellow-500/50 text-yellow-500 p-3 text-center text-sm font-bold uppercase tracking-widest rounded-sm">
        ⚠️ This is a demo version. Real SMS integration coming soon.
      </div>

      {/* Hero Section */}
      <section className="text-center space-y-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-primary glitch" data-text="Receive SMS Online Free">
          Receive SMS Online Free
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
          Use our free virtual phone numbers to receive SMS verification codes online. Protect your personal phone number from spam and maintain your privacy.
        </p>
      </section>

      {/* The Tool */}
      <section className="mb-12">
        <SmsView />
      </section>

      {/* SEO Content Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border/50 pt-12">
        <div className="space-y-6">
          <div className="border-l-2 border-primary pl-4 py-1 bg-primary/5">
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary">
              Why Use Virtual Phone Numbers?
            </h2>
          </div>
          <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
            <p>
              In today's digital age, almost every online service, app, or social media platform requires a phone number for SMS verification during registration. While this adds a layer of security for the platform, it compromises your personal privacy.
            </p>
            <p>
              By using a free virtual phone number to receive SMS online, you can bypass these verification steps without handing over your real contact information. This prevents your number from being sold to telemarketers, reduces spam calls, and keeps your identity secure across the web.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border-l-2 border-primary pl-4 py-1 bg-primary/5">
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary">
              Features & Benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-muted/10 border border-border p-4 space-y-2">
              <Shield className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-sm uppercase tracking-wider">Privacy Protection</h3>
              <p className="text-xs text-muted-foreground">Keep your real phone number hidden from untrusted websites and apps.</p>
            </div>
            <div className="bg-muted/10 border border-border p-4 space-y-2">
              <Globe className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-sm uppercase tracking-wider">Global Access</h3>
              <p className="text-xs text-muted-foreground">Access numbers from various countries to bypass regional restrictions.</p>
            </div>
            <div className="bg-muted/10 border border-border p-4 space-y-2">
              <Clock className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-sm uppercase tracking-wider">Instant Reception</h3>
              <p className="text-xs text-muted-foreground">Receive verification codes and OTPs (One-Time Passwords) in seconds.</p>
            </div>
            <div className="bg-muted/10 border border-border p-4 space-y-2">
              <Smartphone className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-sm uppercase tracking-wider">No SIM Required</h3>
              <p className="text-xs text-muted-foreground">Everything works directly in your browser. No physical SIM card or mobile phone needed.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
