const SUPABASE_URL = "https://odbbggdckjdauohqtwqh.supabase.co";

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kYmJnZ2Rja2pkYXVvaHF0d3FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUwMDM5OTcsImV4cCI6MjEwMDU3OTk5N30.IfgdbcDLtJKTkHol8J8_vD1aGxy7XeMOx2A3YdJMIBc";


const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);