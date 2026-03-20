export interface Country {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
}

export const COUNTRIES: Country[] = [
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷' },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪' },
  { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷' },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦' },
];

export const MOCK_MESSAGES = [
  { sender: 'Google', text: 'G-123456 is your Google verification code.' },
  { sender: 'WhatsApp', text: 'Your WhatsApp code: 889-900. You can also tap on this link to verify your phone: v.whatsapp.com/123456' },
  { sender: 'Facebook', text: '123456 is your Facebook confirmation code' },
  { sender: 'Uber', text: 'Your Uber code is 1234. Never share this code.' },
  { sender: 'Amazon', text: '789012 is your Amazon OTP. Do not share it with anyone.' },
  { sender: 'Telegram', text: 'Telegram code: 55667' },
  { sender: 'Instagram', text: '123 456 is your Instagram code. Don\'t share it.' },
  { sender: 'Twitter', text: 'Your Twitter confirmation code is 909090' },
];

export function generatePhoneNumber(country: Country): string {
  const randomDigits = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
  // Format based on country roughly
  if (country.code === 'US' || country.code === 'CA') {
    return `${country.dialCode} (${randomDigits.substring(0, 3)}) ${randomDigits.substring(3, 6)}-${randomDigits.substring(6)}`;
  }
  return `${country.dialCode} ${randomDigits.substring(0, 3)} ${randomDigits.substring(3, 6)} ${randomDigits.substring(6)}`;
}
