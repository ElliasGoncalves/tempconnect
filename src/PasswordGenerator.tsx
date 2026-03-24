import React, { useState, useEffect, useCallback } from "react";
import { Copy, RefreshCw, Shield, ShieldAlert, ShieldCheck, Check } from "lucide-react";
import { Button } from "./components/ui/button";
import { Slider } from "./components/ui/slider";
import { Switch } from "./components/ui/switch";
import { toast } from "sonner";

export function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState([16]);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [excludeAmbiguous, setExcludeAmbiguous] = useState(true);
  const [copied, setCopied] = useState(false);
  const [strength, setStrength] = useState<'weak' | 'medium' | 'strong'>('medium');

  const generatePassword = useCallback(() => {
    let charset = '';
    let newPassword = '';

    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    const ambiguous = 'il1Lo0O';

    if (includeUppercase) charset += uppercase;
    if (includeLowercase) charset += lowercase;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;

    if (excludeAmbiguous) {
      charset = charset.split('').filter(char => !ambiguous.includes(char)).join('');
    }

    if (charset === '') {
      setPassword('');
      setStrength('weak');
      return;
    }

    // Ensure at least one character of each selected type is included
    if (includeUppercase) {
      let chars = uppercase;
      if (excludeAmbiguous) chars = chars.split('').filter(c => !ambiguous.includes(c)).join('');
      if (chars) newPassword += chars[Math.floor(Math.random() * chars.length)];
    }
    if (includeLowercase) {
      let chars = lowercase;
      if (excludeAmbiguous) chars = chars.split('').filter(c => !ambiguous.includes(c)).join('');
      if (chars) newPassword += chars[Math.floor(Math.random() * chars.length)];
    }
    if (includeNumbers) {
      let chars = numbers;
      if (excludeAmbiguous) chars = chars.split('').filter(c => !ambiguous.includes(c)).join('');
      if (chars) newPassword += chars[Math.floor(Math.random() * chars.length)];
    }
    if (includeSymbols) {
      let chars = symbols;
      if (excludeAmbiguous) chars = chars.split('').filter(c => !ambiguous.includes(c)).join('');
      if (chars) newPassword += chars[Math.floor(Math.random() * chars.length)];
    }

    // Fill the rest
    while (newPassword.length < length[0]) {
      newPassword += charset[Math.floor(Math.random() * charset.length)];
    }

    // Shuffle the password
    newPassword = newPassword.split('').sort(() => 0.5 - Math.random()).join('');
    
    setPassword(newPassword);
    calculateStrength(newPassword);
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols, excludeAmbiguous]);

  const calculateStrength = (pass: string) => {
    let score = 0;
    if (pass.length > 8) score += 1;
    if (pass.length > 12) score += 1;
    if (pass.length >= 16) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[a-z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    if (score < 4) setStrength('weak');
    else if (score < 6) setStrength('medium');
    else setStrength('strong');
  };

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const handleCopy = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    toast.success('Password copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const getStrengthColor = () => {
    switch (strength) {
      case 'weak': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'strong': return 'text-green-500';
      default: return 'text-muted-foreground';
    }
  };

  const getStrengthBgColor = () => {
    switch (strength) {
      case 'weak': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'strong': return 'bg-green-500';
      default: return 'bg-muted';
    }
  };

  const getStrengthIcon = () => {
    switch (strength) {
      case 'weak': return <ShieldAlert className="h-5 w-5 text-red-500" />;
      case 'medium': return <Shield className="h-5 w-5 text-yellow-500" />;
      case 'strong': return <ShieldCheck className="h-5 w-5 text-green-500" />;
      default: return <Shield className="h-5 w-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Password Display */}
      <div className="border border-border bg-background/50 p-6 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
            <div className="text-2xl md:text-4xl font-mono tracking-wider text-primary break-all min-h-[40px] flex items-center">
              {password || 'Select options to generate'}
            </div>
          </div>
          
          <div className="flex items-center gap-2 shrink-0">
            <Button 
              variant="outline" 
              size="icon"
              onClick={generatePassword}
              className="hover:bg-primary/10 hover:text-primary border-border/50"
              title="Generate New Password"
            >
              <RefreshCw className="h-5 w-5" />
            </Button>
            <Button 
              onClick={handleCopy}
              className="group relative overflow-hidden w-32"
              disabled={!password}
            >
              <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center gap-2">
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? 'COPIED!' : 'COPY'}
              </span>
            </Button>
          </div>
        </div>

        {/* Strength Indicator */}
        <div className="mt-6 flex items-center gap-3 border-t border-border/50 pt-4">
          {getStrengthIcon()}
          <div className="flex-1 h-2 bg-muted/30 rounded-full overflow-hidden flex">
            <div className={`h-full transition-all duration-500 ${getStrengthBgColor()}`} style={{ width: strength === 'weak' ? '33%' : strength === 'medium' ? '66%' : '100%' }} />
          </div>
          <span className={`text-xs font-bold uppercase tracking-widest w-16 text-right ${getStrengthColor()}`}>
            {strength}
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="border border-border bg-background/50 p-6 space-y-8">
        {/* Length Slider */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Password Length</label>
            <span className="text-xl font-mono text-primary">{length[0]}</span>
          </div>
          <Slider
            value={length}
            onValueChange={setLength}
            max={64}
            min={8}
            step={1}
            className="py-4"
          />
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-border/50">
          <div className="flex items-center justify-between space-x-2">
            <label htmlFor="uppercase" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
              Uppercase (A-Z)
            </label>
            <Switch
              id="uppercase"
              checked={includeUppercase}
              onCheckedChange={setIncludeUppercase}
            />
          </div>
          
          <div className="flex items-center justify-between space-x-2">
            <label htmlFor="lowercase" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
              Lowercase (a-z)
            </label>
            <Switch
              id="lowercase"
              checked={includeLowercase}
              onCheckedChange={setIncludeLowercase}
            />
          </div>
          
          <div className="flex items-center justify-between space-x-2">
            <label htmlFor="numbers" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
              Numbers (0-9)
            </label>
            <Switch
              id="numbers"
              checked={includeNumbers}
              onCheckedChange={setIncludeNumbers}
            />
          </div>
          
          <div className="flex items-center justify-between space-x-2">
            <label htmlFor="symbols" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
              Symbols (!@#$...)
            </label>
            <Switch
              id="symbols"
              checked={includeSymbols}
              onCheckedChange={setIncludeSymbols}
            />
          </div>

          <div className="flex items-center justify-between space-x-2 sm:col-span-2 bg-muted/10 p-3 rounded border border-border/50">
            <div className="space-y-1">
              <label htmlFor="ambiguous" className="text-sm font-medium leading-none cursor-pointer">
                Exclude Ambiguous Characters
              </label>
              <p className="text-xs text-muted-foreground">Excludes characters like i, l, 1, L, o, 0, O</p>
            </div>
            <Switch
              id="ambiguous"
              checked={excludeAmbiguous}
              onCheckedChange={setExcludeAmbiguous}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
