import React, { useEffect } from 'react';
import { EmailView } from '@/components/EmailView';
import { Shield, Zap, Trash2, Mail } from 'lucide-react';

export default function TemporaryEmailPt() {
  useEffect(() => {
    document.title = "Email Temporário Grátis - Sem Cadastro | TempConnect";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Gere um email temporário grátis instantaneamente. Sem cadastro, rápido e seguro para evitar spam.");
    }
  }, []);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-primary glitch" data-text="Gerador de Email Temporário">
          Gerador de Email Temporário
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
          Proteja sua caixa de entrada pessoal contra spam, emails promocionais e vazamentos de dados. Gere um endereço de email descartável instantaneamente, sem necessidade de cadastro.
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
              O que é um Email Temporário?
            </h2>
          </div>
          <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
            <p>
              Um email temporário, também conhecido como email descartável ou email fake, é um endereço de curto prazo que você pode usar para receber mensagens sem revelar sua verdadeira identidade. Diferente da sua conta permanente do Gmail ou Outlook, esses endereços são criados para serem usados uma vez e depois descartados.
            </p>
            <p>
              Sempre que você se cadastra em um novo serviço, baixa um recurso gratuito ou se registra em um fórum, geralmente é exigido um endereço de email. Infelizmente, isso muitas vezes resulta em uma caixa de entrada lotada de newsletters indesejadas, spam promocional e, às vezes, até tentativas de phishing. Um email temporário atua como um escudo, mantendo sua caixa de entrada principal limpa e segura.
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
              <h3 className="font-bold text-sm uppercase tracking-wider">Privacidade em 1º Lugar</h3>
              <p className="text-xs text-muted-foreground">Não pedimos seu nome, telefone ou qualquer dado pessoal. Sua identidade permanece completamente anônima.</p>
            </div>
            <div className="bg-muted/10 border border-border p-4 space-y-2">
              <Zap className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-sm uppercase tracking-wider">Configuração Instantânea</h3>
              <p className="text-xs text-muted-foreground">Sem formulários de registro ou senhas para lembrar. Sua caixa de entrada está pronta no momento em que a página carrega.</p>
            </div>
            <div className="bg-muted/10 border border-border p-4 space-y-2">
              <Trash2 className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-sm uppercase tracking-wider">Exclusão Automática</h3>
              <p className="text-xs text-muted-foreground">As mensagens são excluídas de forma segura e automática após um curto período, garantindo que nenhum rastro digital seja deixado.</p>
            </div>
            <div className="bg-muted/10 border border-border p-4 space-y-2">
              <Mail className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-sm uppercase tracking-wider">Evite Spam</h3>
              <p className="text-xs text-muted-foreground">Mantenha seu email real impecável. Use nosso serviço para sites não confiáveis e verificações únicas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border border-border bg-muted/5 p-6 md:p-8 mt-8">
        <h2 className="text-xl font-bold uppercase tracking-widest text-primary mb-6 text-center">
          Como usar nosso Gerador de Email Fake
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto font-bold font-mono border border-primary/50">1</div>
            <h3 className="font-bold text-sm uppercase tracking-wider">Gerar</h3>
            <p className="text-xs text-muted-foreground">Clique no botão de gerar para criar instantaneamente um endereço de email único e aleatório.</p>
          </div>
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto font-bold font-mono border border-primary/50">2</div>
            <h3 className="font-bold text-sm uppercase tracking-wider">Copiar e Usar</h3>
            <p className="text-xs text-muted-foreground">Copie o endereço e cole-o no site ou aplicativo que requer verificação.</p>
          </div>
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto font-bold font-mono border border-primary/50">3</div>
            <h3 className="font-bold text-sm uppercase tracking-wider">Receber</h3>
            <p className="text-xs text-muted-foreground">Aguarde alguns segundos. O email recebido aparecerá automaticamente na sua caixa de entrada temporária abaixo.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
