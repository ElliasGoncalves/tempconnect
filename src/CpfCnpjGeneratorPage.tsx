import React, { useEffect } from "react";
import { CpfCnpjGenerator } from "./CpfCnpjGenerator";

export default function CpfCnpjGeneratorPage() {
  useEffect(() => {
    document.title = "CPF/CNPJ Generator - Valid Numbers | TempConnect";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Generate valid CPF and CNPJ numbers for testing systems, forms, and APIs. Free online generator."
      );
    }
  }, []);

  return (
    <div className="space-y-12">
      <section className="text-center space-y-4 mb-8">
        <h1
          className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-primary glitch"
          data-text="CPF & CNPJ Generator"
        >
          CPF & CNPJ Generator
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
          Generate valid CPF and CNPJ numbers for testing systems, APIs, and forms.
        </p>
      </section>

      <section className="mb-12">
        <CpfCnpjGenerator />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border/50 pt-12">
        <div className="space-y-6">
          <div className="border-l-2 border-primary pl-4 py-1 bg-primary/5">
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary">
              What is this tool for?
            </h2>
          </div>
          <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
            <p>
              This generator creates valid CPF and CNPJ numbers for development,
              testing environments, and validation systems.
            </p>
            <p>
              The generated numbers follow official validation rules but do not
              belong to real individuals or companies.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border-l-2 border-primary pl-4 py-1 bg-primary/5">
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary">
              Important Notice
            </h2>
          </div>
          <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
            <p>
              This tool is intended for testing purposes only.
            </p>
            <p>
              Do not use generated data for illegal activities or fraud.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}