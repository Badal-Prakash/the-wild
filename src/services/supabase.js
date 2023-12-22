
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://iuehjyhtldyloukudcvs.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1ZWhqeWh0bGR5bG91a3VkY3ZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxNDQwOTIsImV4cCI6MjAxODcyMDA5Mn0.yJ8aFOx345Ud4xbEAwZtilfCi7ZUlKjn1pO4_HS6vtw"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;