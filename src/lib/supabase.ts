import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ixxyhqlbrkqufymrijbs.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4eHlocWxicmtxdWZ5bXJpamJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MTE3MjQsImV4cCI6MjA3MTA4NzcyNH0.2xIK1tHid-m9cWf7adTPxf4YANXVD3rVr_Ah2wzTUDs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface ContactMessage {
  id: string
  name: string
  email: string
  message: string
  created_at: string
  is_read: boolean
}

export interface ContactAttachment {
  id: string
  message_id: string
  file_name: string
  file_url: string
  file_type: string
  file_size: number
  created_at: string
}