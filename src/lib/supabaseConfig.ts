import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Type definitions for your database
export interface MechanicApplication {
  id?: string;
  name: string;
  phone: string;
  mechanic_type: 'individual' | 'shop';
  working_area?: string | null;
  shop_name?: string | null;
  shop_location?: string | null;
  shop_address?: string | null;
  created_at?: string;
  updated_at?: string;
}