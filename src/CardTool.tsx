import React, { useState } from 'react';
import { CreditCard, RefreshCw, Copy, Check, AlertTriangle, ShieldCheck, ShieldAlert } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { cn } from '@/lib/utils';

// --- Logic for Card Generation & Validation ---

const CARD_BRANDS = [
  { id: 'visa', name: 'Visa', bin: '4539' },
  { id: 'mastercard', name: 'MasterCard', bin: '5500' },
  { id: 'amex', name: 'American Express', bin: '3782' },
  { id: 'jcb', name: 'JCB', bin: '3528' },
  { id: 'cup', name: 'China UnionPay', bin: '62' },
  { id: 'diners', name: 'Diners Club', bin: '300' },
];

function luhnCheck(value: string) {
  // Accept only digits, dashes or spaces
  if (/[^0-9-\s]+/.test(value)) return false;

  // The Luhn Algorithm
  let nCheck = 0, nDigit = 0, bEven = false;
  value = value.replace(/\D/g, "");

  for (let n = value.length - 1; n >= 0; n--) {
    let cDigit = value.charAt(n),
        nDigit = parseInt(cDigit, 10);

    if (bEven) {
      if ((nDigit *= 2) > 9) nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return (nCheck % 10) == 0;
}

function generateCardNumber(bin: string, length: number = 16) {
  let cardNumber = bin;
  while (cardNumber.length < length - 1) {
    cardNumber += Math.floor(Math.random() * 10);
  }

  // Calculate checksum digit
  let sum = 0;
  let isEven = false;
  
  // We need to calculate what the last digit should be
  // First, calculate sum of the first length-1 digits (reversed for luhn)
  // But standard luhn iterates from right to left. 
  // Let's just brute force the last digit.
  
  for (let i = 0; i <= 9; i++) {
    if (luhnCheck(cardNumber + i)) {
      return cardNumber + i;
    }
  }
  return cardNumber + '0'; // Fallback
}

function generateExpiry() {
  const currentYear = new Date().getFullYear();
  const year = currentYear + Math.floor(Math.random() * 5) + 1;
  const month = Math.floor(Math.random() * 12) + 1;
  return {
    month: month.toString().padStart(2, '0'),
    year: year.toString().slice(-2)
  };
}

function generateCVV(brandId: string) {
  const length = brandId === 'amex' ? 4 : 3;
  let cvv = '';
  for (let i = 0; i < length; i++) {
    cvv += Math.floor(Math.random() * 10);
  }
  return cvv;
}

// --- Component ---

export function CardTool() {
  // Generator State
  const [selectedBrand, setSelectedBrand] = useState(CARD_BRANDS[0]);
  const [generatedCard, setGeneratedCard] = useState({ number: '', expiry: '', cvv: '' });
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Validator State
  const [validateInput, setValidateInput] = useState('');
  const [validationResult, setValidationResult] = useState<'valid' | 'invalid' | null>(null);

  const handleGenerate = () => {
    const brand = selectedBrand;
    const length = brand.id === 'amex' ? 15 : 16;
    const number = generateCardNumber(brand.bin, length);
    const expiry = generateExpiry();
    const cvv = generateCVV(brand.id);

    setGeneratedCard({
      number: number.match(/.{1,4}/g)?.join(' ') || number,
      expiry: `${expiry.month}/${expiry.year}`,
      cvv
    });
  };

  const handleCopy = (text: string, field: string) => {
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleValidate = () => {
    if (!validateInput) {
      setValidationResult(null);
      return;
    }
    const isValid = luhnCheck(validateInput);
    setValidationResult(isValid ? 'valid' : 'invalid');
  };

  // Generate one on mount
  React.useEffect(() => {
    handleGenerate();
  }, []);

  return (
    <div className="space-y-8">
      <div className="border-l-2 border-primary pl-4 py-2 bg-primary/5 mb-8">
        <h2 className="text-xl font-bold uppercase tracking-widest text-primary mb-2">
          TEST Card Generator & Validator
        </h2>
        <p className="text-muted-foreground text-sm font-mono">
          Generator for Visa, MasterCard, Amex, JCB, CUP, Diners
        </p>
      </div>

      {/* Warning Banner */}
      <div className="bg-yellow-500/10 border border-yellow-500/50 p-4 rounded-md flex items-start gap-3 text-yellow-500">
        <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
        <div className="space-y-1 text-sm font-mono">
          <p className="font-bold">WARNING: FOR TESTING PURPOSES ONLY</p>
          <ul className="list-disc list-inside opacity-90 space-y-0.5">
            <li>These numbers are NOT REAL and CANNOT be used for payments.</li>
            <li>Generated using mathematical algorithms (Luhn) for development/QA only.</li>
            <li>Do NOT use for illegal activities or fraud.</li>
          </ul>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Generator Section */}
        <Card className="border-primary/20 bg-card/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <CreditCard className="h-5 w-5" />
              GENERATOR
            </CardTitle>
            <CardDescription>Generate valid test numbers for development</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Card Brand</Label>
              <Select 
                value={selectedBrand.id} 
                onValueChange={(val) => {
                  const brand = CARD_BRANDS.find(b => b.id === val);
                  if (brand) setSelectedBrand(brand);
                }}
              >
                <SelectTrigger className="font-mono">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CARD_BRANDS.map(brand => (
                    <SelectItem key={brand.id} value={brand.id} className="font-mono">
                      {brand.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="p-6 bg-background/50 border border-border rounded-lg space-y-4 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/50"></div>
              
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground uppercase">Card Number</Label>
                <div className="flex items-center gap-2">
                  <code className="flex-1 text-xl font-mono font-bold tracking-wider text-primary">
                    {generatedCard.number}
                  </code>
                  <CopyToClipboard text={generatedCard.number.replace(/\s/g, '')} onCopy={() => handleCopy(generatedCard.number, 'number')}>
                    <Button size="icon" variant="ghost" className="h-8 w-8 hover:text-primary">
                      {copiedField === 'number' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </CopyToClipboard>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground uppercase">Expiry</Label>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 text-lg font-mono text-foreground">
                      {generatedCard.expiry}
                    </code>
                    <CopyToClipboard text={generatedCard.expiry} onCopy={() => handleCopy(generatedCard.expiry, 'expiry')}>
                      <Button size="icon" variant="ghost" className="h-8 w-8 hover:text-primary">
                        {copiedField === 'expiry' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </CopyToClipboard>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground uppercase">CVV</Label>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 text-lg font-mono text-foreground">
                      {generatedCard.cvv}
                    </code>
                    <CopyToClipboard text={generatedCard.cvv} onCopy={() => handleCopy(generatedCard.cvv, 'cvv')}>
                      <Button size="icon" variant="ghost" className="h-8 w-8 hover:text-primary">
                        {copiedField === 'cvv' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
            </div>

            <Button onClick={handleGenerate} className="w-full" size="lg">
              <RefreshCw className="mr-2 h-4 w-4" />
              GENERATE NEW CARD
            </Button>
          </CardContent>
        </Card>

        {/* Validator Section */}
        <Card className="border-border bg-card/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" />
              VALIDATOR
            </CardTitle>
            <CardDescription>Check if a number passes the Luhn algorithm</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Card Number</Label>
              <Input 
                placeholder="Paste card number here..." 
                className="font-mono"
                value={validateInput}
                onChange={(e) => {
                  setValidateInput(e.target.value);
                  setValidationResult(null);
                }}
              />
            </div>

            <Button 
              onClick={handleValidate} 
              variant="secondary" 
              className="w-full"
              disabled={!validateInput}
            >
              VALIDATE NUMBER
            </Button>

            {validationResult && (
              <div className={cn(
                "p-4 rounded-md border flex items-center gap-3 animate-in fade-in slide-in-from-top-2",
                validationResult === 'valid' 
                  ? "bg-green-500/10 border-green-500/50 text-green-500" 
                  : "bg-red-500/10 border-red-500/50 text-red-500"
              )}>
                {validationResult === 'valid' ? (
                  <>
                    <ShieldCheck className="h-6 w-6" />
                    <div>
                      <p className="font-bold">VALID NUMBER</p>
                      <p className="text-xs opacity-80">Passes Luhn algorithm check</p>
                    </div>
                  </>
                ) : (
                  <>
                    <ShieldAlert className="h-6 w-6" />
                    <div>
                      <p className="font-bold">INVALID NUMBER</p>
                      <p className="text-xs opacity-80">Does not pass Luhn check</p>
                    </div>
                  </>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
