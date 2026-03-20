import React, { useState, useCallback } from 'react';
import { Copy, RefreshCw, Check, FileText, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';

export function CpfCnpjGenerator() {
  const [type, setType] = useState<'cpf' | 'cnpj'>('cpf');
  const [value, setValue] = useState('');
  const [format, setFormat] = useState(true);
  const [copied, setCopied] = useState(false);

  const generateCpf = useCallback(() => {
    const n = (max: number) => Math.floor(Math.random() * max);
    const n1 = n(9);
    const n2 = n(9);
    const n3 = n(9);
    const n4 = n(9);
    const n5 = n(9);
    const n6 = n(9);
    const n7 = n(9);
    const n8 = n(9);
    const n9 = n(9);

    let d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
    d1 = 11 - (d1 % 11);
    if (d1 >= 10) d1 = 0;

    let d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
    d2 = 11 - (d2 % 11);
    if (d2 >= 10) d2 = 0;

    let result = `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${d1}${d2}`;
    
    if (format) {
      result = result.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    
    setValue(result);
  }, [format]);

  const generateCnpj = useCallback(() => {
    const n = (max: number) => Math.floor(Math.random() * max);
    const n1 = n(9);
    const n2 = n(9);
    const n3 = n(9);
    const n4 = n(9);
    const n5 = n(9);
    const n6 = n(9);
    const n7 = n(9);
    const n8 = n(9);
    const n9 = 0;
    const n10 = 0;
    const n11 = 0;
    const n12 = 1;

    let d1 = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5;
    d1 = 11 - (d1 % 11);
    if (d1 >= 10) d1 = 0;

    let d2 = d1 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6;
    d2 = 11 - (d2 % 11);
    if (d2 >= 10) d2 = 0;

    let result = `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${n10}${n11}${n12}${d1}${d2}`;
    
    if (format) {
      result = result.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
    
    setValue(result);
  }, [format]);

  const generate = useCallback(() => {
    if (type === 'cpf') {
      generateCpf();
    } else {
      generateCnpj();
    }
  }, [type, generateCpf, generateCnpj]);

  // Generate on mount or when type/format changes
  React.useEffect(() => {
    generate();
  }, [generate]);

  const handleCopy = () => {
    if (!value) return;
    navigator.clipboard.writeText(value);
    setCopied(true);
    toast.success(`${type.toUpperCase()} copiado para a área de transferência`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Type Selector */}
      <div className="flex justify-center gap-4">
        <Button
          variant={type === 'cpf' ? 'default' : 'outline'}
          onClick={() => setType('cpf')}
          className={`w-32 ${type === 'cpf' ? 'bg-primary text-primary-foreground' : 'border-border/50'}`}
        >
          <FileText className="h-4 w-4 mr-2" />
          CPF
        </Button>
        <Button
          variant={type === 'cnpj' ? 'default' : 'outline'}
          onClick={() => setType('cnpj')}
          className={`w-32 ${type === 'cnpj' ? 'bg-primary text-primary-foreground' : 'border-border/50'}`}
        >
          <Building className="h-4 w-4 mr-2" />
          CNPJ
        </Button>
      </div>

      {/* Display */}
      <div className="border border-border bg-background/50 p-6 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full overflow-x-auto pb-2 sm:pb-0 scrollbar-hide text-center sm:text-left">
            <div className="text-3xl md:text-5xl font-mono tracking-wider text-primary break-all min-h-[60px] flex items-center justify-center sm:justify-start">
              {value || 'Gerando...'}
            </div>
          </div>
          
          <div className="flex items-center gap-2 shrink-0">
            <Button 
              variant="outline" 
              size="icon"
              onClick={generate}
              className="hover:bg-primary/10 hover:text-primary border-border/50 h-12 w-12"
              title={`Gerar Novo ${type.toUpperCase()}`}
            >
              <RefreshCw className="h-6 w-6" />
            </Button>
            <Button 
              onClick={handleCopy}
              className="group relative overflow-hidden w-32 h-12"
              disabled={!value}
            >
              <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center gap-2 text-lg">
                {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                {copied ? 'COPIADO' : 'COPIAR'}
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="border border-border bg-background/50 p-6 flex items-center justify-between">
        <div className="space-y-1">
          <label htmlFor="format" className="text-sm font-medium leading-none cursor-pointer uppercase tracking-widest">
            Formatação (Pontuação)
          </label>
          <p className="text-xs text-muted-foreground">
            {format ? 'Ex: 123.456.789-00' : 'Ex: 12345678900'}
          </p>
        </div>
        <Switch
          id="format"
          checked={format}
          onCheckedChange={setFormat}
        />
      </div>
    </div>
  );
}
