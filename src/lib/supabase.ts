import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const hasSupabaseConfig = Boolean(supabaseUrl && supabaseAnonKey)

if (!hasSupabaseConfig) {
  // This will show up loudly in the browser console during dev if the
  // .env.local file is missing or the keys weren't set on your host (Vercel).
  console.warn(
    '[Queens Haven] Supabase env vars are missing. Add VITE_SUPABASE_URL and ' +
      'VITE_SUPABASE_ANON_KEY to a .env.local file (see .env.example).',
  )
}

export const supabase = hasSupabaseConfig ? createClient(supabaseUrl, supabaseAnonKey) : null

export const INSPO_BUCKET = 'inspo-images'
