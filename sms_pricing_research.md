# SMS API Pricing Research

## Twilio
- **Model:** Pay-as-you-go + Monthly rental
- **Phone Number Cost:** ~$1.15/month (US), varies by country
- **SMS Receive Cost:** ~$0.0075/message (US)
- **Minimum Deposit:** Usually around $20 for initial credit
- **Pros:** Reliable, clean numbers, official API, good documentation
- **Cons:** Monthly commitment, KYC/Verification often required, stricter anti-fraud

## 5sim
- **Model:** Pay-per-activation (disposable)
- **Cost:** Starts from $0.014 per activation (varies by service/country)
- **Minimum Deposit:** Low (often crypto or specific payment gateways)
- **Pros:** Extremely cheap, no monthly fee, huge variety of countries
- **Cons:** Numbers are often reused/flagged, less reliable for high-security services (Google/WhatsApp), "grey" market

## SMS Activate
- **Model:** Pay-per-activation
- **Cost:** Starts around $0.10 - $0.50 depending on service
- **Pros:** Good balance of price/quality, specific service targeting (e.g., "buy number for WhatsApp")
- **Cons:** Similar to 5sim, variable quality

## Recommendation for Testing
For platform testing where you need to receive real SMS messages:
- **Twilio** is best if you need a *stable* number to test repeatedly over time.
- **5sim/SMS Activate** is best if you just need to test the *flow* of receiving an SMS once and don't care about keeping the number.
