import React, { useEffect } from "react";
import { PasswordGenerator } from "./PasswordGenerator";

export default function PasswordGeneratorPage() {
  useEffect(() => {
    document.title = "Free Password Generator - Strong & Secure Passwords | TempConnect";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Generate strong and secure passwords instantly. Free online password generator with custom options for length, symbols, numbers, and more."
      );
    }
  }, []);

  return (
    <div className="space-y-12">
      <section className="text-center space-y-4 mb-8">
        <h1
          className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-primary glitch"
          data-text="Free Password Generator"
        >
          Free Password Generator
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
          Generate strong and secure passwords instantly with custom options for
          length, uppercase letters, lowercase letters, numbers, and symbols.
        </p>
      </section>

      <section className="mb-12">
        <PasswordGenerator />
      </section>

      <section className="space-y-12 border-t border-border/50 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-4 py-1 bg-primary/5">
              <h2 className="text-xl font-bold uppercase tracking-widest text-primary">
                Why Use a Password Generator?
              </h2>
            </div>
            <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
              <p>
                A password generator helps you create strong and unpredictable
                passwords that are much harder to guess than manually created ones.
                Weak passwords are one of the most common reasons accounts get
                compromised.
              </p>
              <p>
                By using random combinations of uppercase letters, lowercase letters,
                numbers, and symbols, you dramatically increase the security of your
                online accounts and reduce the risk of brute-force attacks.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-4 py-1 bg-primary/5">
              <h2 className="text-xl font-bold uppercase tracking-widest text-primary">
                How It Works
              </h2>
            </div>
            <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
              <p>
                This tool lets you customize the generated password by selecting the
                desired length and choosing which character sets to include. You can
                generate a password instantly and copy it with one click.
              </p>
              <p>
                This is useful for creating passwords for email accounts, social
                networks, banking apps, websites, and any service where strong account
                protection matters.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border-l-2 border-primary pl-4 py-1 bg-primary/5">
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary">
              Best Practices for Secure Passwords
            </h2>
          </div>
          <div className="text-muted-foreground space-y-4 text-sm leading-relaxed bg-muted/5 p-6 border border-border">
            <p>
              Use a unique password for every important account. Avoid reusing the
              same password across multiple sites. Consider using a password manager
              to store your credentials securely.
            </p>
            <div className="mt-6 pt-4 border-t border-border/50">
              <p className="text-primary/80 italic">
                Looking for more useful tools? Try our{" "}
                <a href="/gerador-cpf-cnpj" className="text-primary hover:underline font-medium">
                  CPF/CNPJ Generator
                </a>{" "}
                for software testing, or use our{" "}
                <a href="/receive-sms" className="text-primary hover:underline font-medium">
                  Receive SMS Online
                </a>{" "}
                page for verification workflows.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}