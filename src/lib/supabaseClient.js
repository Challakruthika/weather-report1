import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cnaxcfezydpgodnpbrvw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuYXhjZmV6eWRwZ29kbnBicnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3NjU5NDMsImV4cCI6MjA2MjM0MTk0M30.33aikXykgYmBQPiEz0QQMvm1f_93jmkNt336iZWd4X4';

export const supabase = createClient(supabaseUrl, supabaseKey);
