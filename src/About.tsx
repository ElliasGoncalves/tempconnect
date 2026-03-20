import React from 'react';
import { Mail, CreditCard, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {/* Header Ad Placeholder */}
      <div className="w-full bg-muted/5 border border-dashed border-muted-foreground/20 h-[90px] flex items-center justify-center text-xs text-muted-foreground uppercase tracking-widest mb-8">
        AD_SPACE_CONTENT_TOP [Responsive]
      </div>

      <div className="border-l-2 border-primary pl-4 py-2 bg-primary/5">
        <h2 className="text-xl font-bold uppercase tracking-widest text-primary mb-2">
          System_Info
        </h2>
        <p className="text-muted-foreground text-sm font-mono">
          PROJECT_CODENAME: TEMP_CONNECT
        </p>
      </div>

      <div className="space-y-6 font-mono text-sm text-muted-foreground">
        <p>
          <strong className="text-foreground">TempConnect</strong> is a privacy-focused utility suite designed for developers, QA testers, and privacy-conscious users. Our tools are built to be fast, stateless, and secure.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2 mt-8">
          <div className="p-6 border border-border bg-card/30 rounded-lg hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-2 mb-4 text-primary">
              <Mail className="h-5 w-5" />
              <h3 className="font-bold uppercase">Protocol_Email</h3>
            </div>
            <p className="leading-relaxed">
              Generates disposable email addresses that self-destruct. Uses secure routing to protect your primary inbox from spam, tracking pixels, and unwanted solicitations.
            </p>
          </div>
          
          <div className="p-6 border border-border bg-card/30 rounded-lg hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-2 mb-4 text-primary">
              <CreditCard className="h-5 w-5" />
              <h3 className="font-bold uppercase">Dev_Tools</h3>
            </div>
            <p className="leading-relaxed">
              A suite of testing utilities including a Luhn-algorithm compliant Credit Card Generator and Validator. Strictly for development and testing purposes.
            </p>
          </div>
        </div>

        {/* Content Ad Placeholder */}
        <div className="w-full bg-muted/5 border border-dashed border-muted-foreground/20 h-[250px] flex items-center justify-center text-xs text-muted-foreground uppercase tracking-widest my-8">
          AD_SPACE_CONTENT_MIDDLE [300x250]
        </div>

        <div className="mt-8 p-6 border border-destructive/30 bg-destructive/5 text-destructive text-xs rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="h-4 w-4" />
            <h4 className="font-bold uppercase">Legal Disclaimer</h4>
          </div>
          <p className="leading-relaxed opacity-90">
            This tool is for educational and privacy protection purposes only. The Credit Card Generator produces mathematically valid but non-functional numbers for testing software systems. Do not use for illegal activities. The developers assume no liability for misuse.
          </p>
        </div>
      </div>
    </div>
  );
}
