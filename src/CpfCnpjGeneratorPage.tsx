import React, { useEffect } from 'react';
import { FileText, Building, ShieldCheck, Code } from 'lucide-react';
import { CpfCnpjGenerator } from '@/components/CpfCnpjGenerator';

export default function CpfCnpjGeneratorPage() {
  useEffect(() => {
    document.title = "Gerador de CPF e CNPJ Válidos (Para Testes) | TempConnect";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Gere CPF e CNPJ válidos para testes de sistemas. Ferramenta gratuita com validação automática e opção com ou sem formatação.");
    }
  }, []);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-primary glitch" data-text="Gerador de CPF e CNPJ Válidos">
          Gerador de CPF e CNPJ Válidos
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
          Gere números de CPF e CNPJ válidos (matematicamente) para testes de software, cadastros e validações de sistemas.
        </p>
      </section>

      {/* The Tool */}
      <section className="mb-12">
        <CpfCnpjGenerator />
      </section>

      {/* SEO Content Section */}
      <section className="space-y-12 border-t border-border/50 pt-12">
        
        {/* Legal Warning - Highly Visible */}
        <div className="bg-destructive/10 border border-destructive/50 p-6 rounded-md text-center">
          <h3 className="text-destructive font-bold uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
            <ShieldCheck className="h-5 w-5" /> Aviso Legal Importante
          </h3>
          <p className="text-muted-foreground text-sm max-w-3xl mx-auto">
            Esta ferramenta é destinada <strong>exclusivamente para testes e desenvolvimento</strong> de sistemas. Os dados gerados são combinações matemáticas aleatórias, não representam pessoas ou empresas reais e não possuem vínculo com a Receita Federal. <strong>Não devem ser utilizados para fins ilegais, fraudes ou falsidade ideológica.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-4 py-1 bg-primary/5">
              <h2 className="text-xl font-bold uppercase tracking-widest text-primary">
                Para que serve o gerador?
              </h2>
            </div>
            <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
              <p>
                O Gerador de CPF e CNPJ é uma ferramenta indispensável para desenvolvedores de software, analistas de qualidade (QA) e estudantes de programação. Durante a criação de um sistema, aplicativo ou e-commerce, é necessário testar exaustivamente os formulários de cadastro.
              </p>
              <p>
                Usar dados reais de clientes para testes é uma violação grave de privacidade (LGPD). Por isso, nossa ferramenta cria números fictícios que passam perfeitamente nas validações de front-end e back-end, permitindo simular cenários reais de uso sem comprometer a segurança de ninguém.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-4 py-1 bg-primary/5">
              <h2 className="text-xl font-bold uppercase tracking-widest text-primary">
                Como funciona a validação de CPF e CNPJ?
              </h2>
            </div>
            <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
              <p>
                Tanto o CPF (Cadastro de Pessoas Físicas) quanto o CNPJ (Cadastro Nacional da Pessoa Jurídica) possuem uma estrutura matemática específica. Os dois últimos números de um CPF ou CNPJ são chamados de <strong>dígitos verificadores</strong>.
              </p>
              <p>
                Nosso gerador cria os primeiros dígitos de forma totalmente aleatória e, em seguida, aplica o algoritmo oficial (módulo 11) para calcular exatamente quais devem ser os dois últimos dígitos. É por isso que os números gerados aqui são aceitos como "válidos" por qualquer sistema de validação padrão.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border-l-2 border-primary pl-4 py-1 bg-primary/5">
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary">
              Uso seguro para testes
            </h2>
          </div>
          <div className="text-muted-foreground space-y-4 text-sm leading-relaxed bg-muted/5 p-6 border border-border">
            <p>
              Ao desenvolver sistemas, você pode escolher gerar os documentos com ou sem formatação (máscara). A formatação inclui os pontos, traços e barras (ex: 123.456.789-00 ou 12.345.678/0001-90), o que é útil para testar se o seu banco de dados está limpando os caracteres especiais corretamente antes de salvar.
            </p>
            <div className="mt-6 pt-4 border-t border-border/50">
              <p className="text-primary/80 italic">
                Procurando outras ferramentas úteis? Experimente também nosso <a href="/password-generator" className="text-primary hover:underline font-medium">Gerador de Senhas Fortes</a> para proteger suas contas, ou nossa ferramenta de <a href="/receive-sms" className="text-primary hover:underline font-medium">Receber SMS Online</a> para validações.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
