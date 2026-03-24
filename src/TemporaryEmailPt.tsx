import React, { useEffect } from "react";
import { EmailView } from "./EmailView";
import { Shield, Zap, Trash2, Mail } from "lucide-react";

export default function TemporaryEmailPt() {
  useEffect(() => {
    document.title = "Email Temporário Grátis - Sem Cadastro | TempConnect";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Gere um email temporário grátis instantaneamente. Sem cadastro, rápido e seguro para evitar spam."
      );
    }
  }, []);

  return (
    <div className="space-y-12">
      <section className="text-center space-y-4 mb-8">
        <h1
          className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-primary glitch"
          data-text="Gerador de Email Temporário"
        >
          Gerador de Email Temporário
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
          Proteja sua caixa de entrada principal contra spam, emails promocionais e possíveis vazamentos de dados.
          Gere um email descartável instantaneamente sem precisar de cadastro.
        </p>
      </section>

      <section className="mb-12">
        <EmailView />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border/50 pt-12">
        <div className="space-y-6">
          <div className="border-l-2 border-primary pl-4 py-1 bg-primary/5">
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary">
              O que é um Email Temporário?
            </h2>
          </div>
          <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
            <p>
              Um email temporário, também conhecido como email descartável ou email fake,
              é um endereço de email de curta duração que você pode usar para receber mensagens
              sem revelar sua identidade real. Diferente da sua conta permanente do Gmail ou Outlook,
              esses endereços são feitos para uso rápido e descarte posterior.
            </p>
            <p>
              Ao se cadastrar em novos serviços, baixar materiais gratuitos ou participar de fóruns,
              normalmente é obrigatório informar um endereço de email. O problema é que isso quase sempre
              resulta em newsletters indesejadas, spam promocional e até tentativas de phishing. Um email
              temporário funciona como um escudo para manter sua caixa principal limpa e segura.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border-l-2 border-primary pl-4 py-1 bg-primary/5">
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary">
              Por que usar o TempConnect?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-muted/10 border border-border p-4 space-y-2">
              <Shield className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-sm uppercase tracking-wider">Privacidade em Primeiro Lugar</h3>
              <p className="text-xs text-muted-foreground">
                Não pedimos nome, telefone ou dados pessoais. Sua identidade permanece anônima.
              </p>
            </div>

            <div className="bg-muted/10 border border-border p-4 space-y-2">
              <Zap className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-sm uppercase tracking-wider">Uso Instantâneo</h3>
              <p className="text-xs text-muted-foreground">
                Sem cadastro e sem senha. Sua caixa temporária fica pronta assim que a página abre.
              </p>
            </div>

            <div className="bg-muted/10 border border-border p-4 space-y-2">
              <Trash2 className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-sm uppercase tracking-wider">Auto Exclusão</h3>
              <p className="text-xs text-muted-foreground">
                As mensagens são removidas automaticamente depois de um período curto, reduzindo rastros digitais.
              </p>
            </div>

            <div className="bg-muted/10 border border-border p-4 space-y-2">
              <Mail className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-sm uppercase tracking-wider">Evite Spam</h3>
              <p className="text-xs text-muted-foreground">
                Preserve sua caixa real. Use o serviço em sites não confiáveis e verificações únicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border border-border bg-muted/5 p-6 md:p-8 mt-8">
        <h2 className="text-xl font-bold uppercase tracking-widest text-primary mb-6 text-center">
          Como usar nosso Gerador de Email Temporário
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto font-bold font-mono border border-primary/50">
              1
            </div>
            <h3 className="font-bold text-sm uppercase tracking-wider">Gerar</h3>
            <p className="text-xs text-muted-foreground">
              Clique para criar instantaneamente um endereço de email aleatório e único.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto font-bold font-mono border border-primary/50">
              2
            </div>
            <h3 className="font-bold text-sm uppercase tracking-wider">Copiar e Usar</h3>
            <p className="text-xs text-muted-foreground">
              Copie o endereço e cole no site ou aplicativo que exige verificação por email.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto font-bold font-mono border border-primary/50">
              3
            </div>
            <h3 className="font-bold text-sm uppercase tracking-wider">Receber</h3>
            <p className="text-xs text-muted-foreground">
              Aguarde alguns segundos. O email recebido aparecerá automaticamente na sua caixa temporária.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}