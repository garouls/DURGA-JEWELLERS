import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kucxgktrcklojwzdcdbq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1Y3hna3RyY2tsb2p3emRjZGJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA3ODM3MjksImV4cCI6MjA5NjM1OTcyOX0.81sgrfJLuOf9CG-JYx_TVt0LuXSdmo0_boufqoGRHYg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
