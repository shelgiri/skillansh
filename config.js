/* Growth Circle — Centralized Integration Configuration */
/* IMPORTANT: All values below must be set before launch. Do not insert fake URLs. */
/* Formspree endpoint handles enquiry submissions. No secrets are exposed in frontend code. */

window.ACCOUNTPRO_CONFIG = {
  // Official Primary Domain
  SITE_URL: 'https://www.skillansh.com',

  // Consultation booking link (Calendly, Google Calendar booking page, etc.)
  CLARITY_CALL_BOOKING_URL: 'https://calendly.com/ai-girish-shelar/skillansh-free-clarity-call',

  // Supabase project settings (Growth Circle | Skillansh — active project)
  SUPABASE_URL: 'https://szyzepyksnrxtydsitib.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6eXplcHlrc25yeHR5ZHNpdGliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM1NTI0ODMsImV4cCI6MjEwOTEyODQ4M30.-kJcgAEf-RixgTL-Vtuw26UDAZnS8DyGeBKRCKltNBk',
  ENABLE_SUPABASE: false,
  // Contact configuration (set before launch)
  CONTACT_EMAIL: '',
  CONTACT_PHONE: '+919922045007',
  WHATSAPP_NUMBER: '919922045007',
  WHATSAPP_COMMUNITY_URL: 'https://chat.whatsapp.com/JPGdVKRxJ77G2paT6xl9nr',
  WORKSHOP_PAID_COMMUNITY_URL: 'https://chat.whatsapp.com/EztQgqztZ54HQ9h2jTvroA',

  // Free Direct Payment Gateway (Zero % Transaction Charges)
  // Direct UPI VPA and Official QR Code
  PAYMENT_UPI_ID: 's.giru07-4@oksbi',
  PAYMENT_PAYEE_NAME: 'Girish',
  PAYMENT_QR_IMAGE: 'images/upi-qr-code.jpg',
  PROGRAM_PRICE_INR: 9999,
  WORKSHOP_PRICE_INR: 51,

  // Formspree endpoint — configure at formspree.io, then paste the endpoint URL here
  ENQUIRY_SUBMISSION_ENDPOINT: 'https://formspree.io/f/xqppyvgd',

  // Legal pages (verified URLs only — do not link to nonexistent pages)
  PRIVACY_INFORMATION_URL: 'privacy.html',
  TERMS_URL: 'terms.html',

  // Duplicate submission guard (milliseconds)
  DUPLICATE_SUBMIT_WINDOW_MS: 30000
};
