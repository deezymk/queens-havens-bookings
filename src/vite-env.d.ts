/// <reference types="vite/client" />

declare module '*.mp4' {
  const src: string
  export default src
}

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
  readonly VITE_PAYSTACK_PUBLIC_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface PaystackTransaction {
  reference: string
}

interface PaystackPopSetupOptions {
  key: string
  email: string
  amount: number
  currency?: string
  ref?: string
  metadata?: Record<string, unknown>
  onClose: () => void
  callback: (response: PaystackTransaction) => void
}

interface PaystackPopHandler {
  openIframe: () => void
}

interface PaystackPopStatic {
  setup: (options: PaystackPopSetupOptions) => PaystackPopHandler
}

declare const PaystackPop: PaystackPopStatic