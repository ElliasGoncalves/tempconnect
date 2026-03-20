import React from 'react';
import { EmailView } from '@/components/EmailView';

import { Shield, Zap, Trash2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section with H1 */}
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
              Why Use a Temporary Email?
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
              TempConnect Features
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-muted/10 border border-border p-4 flex items-start gap-4">
              <Shield className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider">Privacy First</h3>
                <p className="text-xs text-muted-foreground mt-1">We don't ask for your name, phone number, or any personal details. Your identity remains completely anonymous.</p>
              </div>
            </div>
            <div className="bg-muted/10 border border-border p-4 flex items-start gap-4">
              <Zap className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider">Instant Setup</h3>
                <p className="text-xs text-muted-foreground mt-1">No registration forms or passwords to remember. Your inbox is ready the moment you load the page.</p>
              </div>
            </div>
            <div className="bg-muted/10 border border-border p-4 flex items-start gap-4">
              <Trash2 className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider">Auto-Deletion</h3>
                <p className="text-xs text-muted-foreground mt-1">Messages are automatically securely deleted after a short period, ensuring no digital footprint is left behind.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
