import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zxymjrsaoxxxvwnmrbrk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4eW1qcnNhb3h4eHZ3bm1yYnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4OTE1ODIsImV4cCI6MjA1NTQ2NzU4Mn0.KVX2K0BwUFrUsMpbrBGJyp-Us1WwZMjvG16IjJKPpm4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
