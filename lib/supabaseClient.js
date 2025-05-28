import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ubbmkihltkvbcqgccvdq.supabase.co'
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InViYm1raWhsdGt2YmNxZ2NjdmRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzNjc3NjQsImV4cCI6MjA2Mzk0Mzc2NH0.UCRUm2lvUas1O9rWFbFzGPPhxdtQmlG473zo36hbC04'

export const supabase = createClient(supabaseUrl, supabaseKey)
