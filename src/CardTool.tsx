import React, { useEffect, useState } from "react";
import {
  CreditCard,
  RefreshCw,
  Copy,
  Check,
  AlertTriangle,
  ShieldCheck,
  ShieldAlert,
} from "lucide-react";

const CARD_BRANDS = [
  { id: "visa", name: "Visa", bin: "4539" },
  { id: "mastercard", name: "MasterCard", bin: "5500" },
  { id: "amex", name: "American Express", bin: "3782" },
  { id: "jcb", name: "JCB", bin: "3528" },
  { id: "cup", name: "China UnionPay", bin: "62" },
  { id: "diners", name: "Diners Club", bin: "300" },
];

function luhnCheck(value: string) {
  if (/[^0-9-\s]+/.test(value)) return false;

  let nCheck = 0;
  let bEven = false;
  value = value.replace(/\D/g, "");

  for (let n = value.length - 1; n >= 0; n--) {
    let nDigit = parseInt(value.charAt(n), 10);

    if (bEven) {
      nDigit *= 2;
      if (nDigit > 9) nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return nCheck % 10 === 0;
}

function generateCardNumber(bin: string, length = 16) {
  let cardNumber = bin;

  while (cardNumber.length < length - 1) {
    cardNumber += Math.floor(Math.random() * 10).toString();
  }

  for (let i = 0; i <= 9; i++) {
    if (luhnCheck(cardNumber + i)) {
      return cardNumber + i;
    }
  }

  return cardNumber + "0";
}

function generateExpiry() {
  const currentYear = new Date().getFullYear();
  const year = currentYear + Math.floor(Math.random() * 5) + 1;
  const month = Math.floor(Math.random() * 12) + 1;

  return {
    month: month.toString().padStart(2, "0"),
    year: year.toString().slice(-2),
  };
}

function generateCVV(brandId: string) {
  const length = brandId === "amex" ? 4 : 3;
  let cvv = "";

  for (let i = 0; i < length; i++) {
    cvv += Math.floor(Math.random() * 10).toString();
  }

  return cvv;
}

function copyText(text: string) {
  return navigator.clipboard.writeText(text);
}

export function CardTool() {
  const [selectedBrandId, setSelectedBrandId] = useState(CARD_BRANDS[0].id);
  const [generatedCard, setGeneratedCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [validateInput, setValidateInput] = useState("");
  const [validationResult, setValidationResult] = useState<"valid" | "invalid" | null>(null);

  const selectedBrand =
    CARD_BRANDS.find((brand) => brand.id === selectedBrandId) || CARD_BRANDS[0];

  const handleGenerate = () => {
    const length = selectedBrand.id === "amex" ? 15 : 16;
    const number = generateCardNumber(selectedBrand.bin, length);
    const expiry = generateExpiry();
    const cvv = generateCVV(selectedBrand.id);

    setGeneratedCard({
      number: number.match(/.{1,4}/g)?.join(" ") || number,
      expiry: `${expiry.month}/${expiry.year}`,
      cvv,
    });
  };

  const handleCopy = async (text: string, field: string) => {
    try {
      await copyText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const handleValidate = () => {
    if (!validateInput.trim()) {
      setValidationResult(null);
      return;
    }

    const isValid = luhnCheck(validateInput);
    setValidationResult(isValid ? "valid" : "invalid");
  };

  useEffect(() => {
    handleGenerate();
  }, [selectedBrandId]);

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
        <div className="border border-primary/20 bg-card/30 backdrop-blur-sm rounded-lg">
          <div className="p-6 border-b border-border space-y-2">
            <div className="flex items-center gap-2 text-primary">
              <CreditCard className="h-5 w-5" />
              <h3 className="font-semibold">GENERATOR</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Generate valid test numbers for development
            </p>
          </div>

          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Card Brand</label>
              <select
                className="w-full h-10 rounded-md border border-border bg-background px-3 text-sm font-mono"
                value={selectedBrandId}
                onChange={(e) => setSelectedBrandId(e.target.value)}
              >
                {CARD_BRANDS.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="p-6 bg-background/50 border border-border rounded-lg space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/50" />

              <div className="space-y-1">
                <label className="text-xs text-muted-foreground uppercase">Card Number</label>
                <div className="flex items-center gap-2">
                  <code className="flex-1 text-xl font-mono font-bold tracking-wider text-primary">
                    {generatedCard.number}
                  </code>
                  <button
                    type="button"
                    onClick={() => handleCopy(generatedCard.number.replace(/\s/g, ""), "number")}
                    className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-border hover:text-primary"
                  >
                    {copiedField === "number" ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground uppercase">Expiry</label>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 text-lg font-mono text-foreground">
                      {generatedCard.expiry}
                    </code>
                    <button
                      type="button"
                      onClick={() => handleCopy(generatedCard.expiry, "expiry")}
                      className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-border hover:text-primary"
                    >
                      {copiedField === "expiry" ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground uppercase">CVV</label>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 text-lg font-mono text-foreground">
                      {generatedCard.cvv}
                    </code>
                    <button
                      type="button"
                      onClick={() => handleCopy(generatedCard.cvv, "cvv")}
                      className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-border hover:text-primary"
                    >
                      {copiedField === "cvv" ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleGenerate}
              className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground hover:opacity-90"
            >
              <RefreshCw className="h-4 w-4" />
              GENERATE NEW CARD
            </button>
          </div>
        </div>

        <div className="border border-border bg-card/30 backdrop-blur-sm rounded-lg">
          <div className="p-6 border-b border-border space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" />
              <h3 className="font-semibold">VALIDATOR</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Check if a number passes the Luhn algorithm
            </p>
          </div>

          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Card Number</label>
              <input
                type="text"
                placeholder="Paste card number here..."
                className="w-full h-10 rounded-md border border-border bg-background px-3 text-sm font-mono"
                value={validateInput}
                onChange={(e) => {
                  setValidateInput(e.target.value);
                  setValidationResult(null);
                }}
              />
            </div>

            <button
              type="button"
              onClick={handleValidate}
              disabled={!validateInput}
              className="w-full h-11 inline-flex items-center justify-center rounded-md border border-border bg-secondary text-secondary-foreground disabled:opacity-50"
            >
              VALIDATE NUMBER
            </button>

            {validationResult && (
              <div
                className={`p-4 rounded-md border flex items-center gap-3 ${
                  validationResult === "valid"
                    ? "bg-green-500/10 border-green-500/50 text-green-500"
                    : "bg-red-500/10 border-red-500/50 text-red-500"
                }`}
              >
                {validationResult === "valid" ? (
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
          </div>
        </div>
      </div>
    </div>
  );
}