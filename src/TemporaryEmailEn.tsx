import React, { useEffect } from 'react';
import { EmailView } from '@/components/EmailView';
import { Shield, Zap, Trash2, Mail } from 'lucide-react';

export default function TemporaryEmailEn() {
  useEffect(() => {
    document.title = "Free Temporary Email - No Signup Required | TempConnect";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Generate a free temporary email instantly. No signup required. Fast, secure and disposable email service.");
    }
  }, []);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-primary glitch" data-text="Free Temporary Email Generator">
          Free Temporary Email Generator
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
          Protect your personal inbox from spam, promotional emails, and potential data leaks. Generate a disposable email address instantly with zero registration required.
        </p>
      </section>

      {/* The Tool */}
      <section className="mb-12">
        <EmailView />
      </section>

      {/* SEO Content Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border/50 pt-12">
        <div className="space-y-6">
          <div className="border-l-2 border-primary pl-4 py-1 bg-primary/5">
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary">
              What is a Temporary Email?
            </h2>
          </div>
          <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
            <p>
              A temporary email, also known as a disposable email or fake email, is a short-lived email address that you can use to receive messages without revealing your true identity. Unlike your permanent Gmail or Outlook account, these addresses are designed to be used once and then discarded.
            </p>
            <p>
              When you sign up for a new service, download a free resource, or register on a forum, you are often required to provide an email address. Unfortunately, this often leads to your inbox being flooded with unwanted newsletters, promotional spam, and sometimes even phishing attempts. A temporary email acts as a shield, keeping your primary inbox clean and secure.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border-l-2 border-primary pl-4 py-1 bg-primary/5">
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary">
              Why Use TempConnect?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-muted/10 border border-border p-4 space-y-2">
              <Shield className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-sm uppercase tracking-wider">Privacy First</h3>
              <p className="text-xs text-muted-foreground">We don't ask for your name, phone number, or any personal details. Your identity remains completely anonymous.</p>
            </div>
            <div className="bg-muted/10 border border-border p-4 space-y-2">
              <Zap className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-sm uppercase tracking-wider">Instant Setup</h3>
              <p className="text-xs text-muted-foreground">No registration forms or passwords to remember. Your inbox is ready the moment you load the page.</p>
            </div>
            <div className="bg-muted/10 border border-border p-4 space-y-2">
              <Trash2 className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-sm uppercase tracking-wider">Auto-Deletion</h3>
              <p className="text-xs text-muted-foreground">Messages are automatically securely deleted after a short period, ensuring no digital footprint is left behind.</p>
            </div>
            <div className="bg-muted/10 border border-border p-4 space-y-2">
              <Mail className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-sm uppercase tracking-wider">Bypass Spam</h3>
              <p className="text-xs text-muted-foreground">Keep your real inbox pristine. Use our service for untrusted websites and one-time verifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border border-border bg-muted/5 p-6 md:p-8 mt-8">
        <h2 className="text-xl font-bold uppercase tracking-widest text-primary mb-6 text-center">
          How to use our Fake Email Generator
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto font-bold font-mono border border-primary/50">1</div>
            <h3 className="font-bold text-sm uppercase tracking-wider">Generate</h3>
            <p className="text-xs text-muted-foreground">Click the generate button to instantly create a unique, random email address.</p>
          </div>
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto font-bold font-mono border border-primary/50">2</div>
            <h3 className="font-bold text-sm uppercase tracking-wider">Copy & Use</h3>
            <p className="text-xs text-muted-foreground">Copy the address and paste it into the website or app that requires verification.</p>
          </div>
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto font-bold font-mono border border-primary/50">3</div>
            <h3 className="font-bold text-sm uppercase tracking-wider">Receive</h3>
            <p className="text-xs text-muted-foreground">Wait a few seconds. The incoming email will automatically appear in your temporary inbox below.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
