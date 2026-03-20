import React from 'react';
import { Shield, Lock, EyeOff, ServerOff } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div className="border-l-2 border-primary pl-4 py-2 bg-primary/5">
        <h2 className="text-xl font-bold uppercase tracking-widest text-primary mb-2">
          Privacy_Policy
        </h2>
        <p className="text-muted-foreground text-sm font-mono">
          LAST_UPDATED: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="space-y-6 font-mono text-sm text-muted-foreground">
        <p className="text-foreground leading-relaxed">
          At <strong>TempConnect</strong>, we believe privacy is a fundamental right, not a feature. This policy outlines our strict "No-Logs" approach and how we operate without collecting your personal data.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          <div className="p-6 border border-border bg-card/30 rounded-lg">
            <div className="flex items-center gap-2 mb-4 text-primary">
              <EyeOff className="h-5 w-5" />
              <h3 className="font-bold uppercase">No Personal Data Collection</h3>
            </div>
            <p className="leading-relaxed">
              We do not collect, store, or share any personal information. You do not need to register, provide an email address, or create a password to use our services.
            </p>
          </div>

          <div className="p-6 border border-border bg-card/30 rounded-lg">
            <div className="flex items-center gap-2 mb-4 text-primary">
              <ServerOff className="h-5 w-5" />
              <h3 className="font-bold uppercase">Stateless Operation</h3>
            </div>
            <p className="leading-relaxed">
              Our tools operate entirely client-side or via ephemeral sessions. Generated emails and test data are not linked to your real identity and are automatically purged.
            </p>
          </div>
        </div>

        <h3 className="text-lg font-bold text-foreground mt-8 mb-4 uppercase">Detailed Policy</h3>
        
        <div className="space-y-4">
          <section>
            <h4 className="font-bold text-primary mb-2">1. Information We Do NOT Collect</h4>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>We do NOT collect names, email addresses, or phone numbers.</li>
              <li>We do NOT collect IP addresses or device identifiers for tracking purposes.</li>
              <li>We do NOT use persistent cookies to track your behavior across the web.</li>
            </ul>
          </section>

          <section>
            <h4 className="font-bold text-primary mb-2">2. Temporary Email Service</h4>
            <p>
              The temporary email service is provided via a secure third-party API (Mail.tm). Emails received are stored temporarily on their servers solely for the purpose of displaying them to you. We do not have access to your permanent inbox and do not store message contents on our own servers.
            </p>
          </section>

          <section>
            <h4 className="font-bold text-primary mb-2">3. Developer Tools</h4>
            <p>
              The Credit Card Generator and Validator run entirely in your browser (client-side). No data entered or generated in these tools is sent to any server. It is mathematically impossible for us to see what you generate or validate.
            </p>
          </section>

          <section>
            <h4 className="font-bold text-primary mb-2">4. Advertising and Analytics</h4>
            <p>
              We use third-party vendors, including Google, to serve ads. These vendors may use cookies to serve ads based on your prior visits to our website or other websites. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" className="text-primary hover:underline">Google Ad Settings</a>.
            </p>
          </section>
        </div>

        <div className="mt-8 p-6 border border-primary/30 bg-primary/5 text-primary text-xs rounded-lg flex items-start gap-3">
          <Shield className="h-5 w-5 shrink-0" />
          <div>
            <h4 className="font-bold uppercase mb-1">Commitment to Security</h4>
            <p className="leading-relaxed opacity-90">
              We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
