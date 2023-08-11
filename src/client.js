import { createClient } from '@supabase/supabase-js';

const URL = 'https://titichtbxphmimgrzsjd.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpdGljaHRieHBobWltZ3J6c2pkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExMzIxNzgsImV4cCI6MjAwNjcwODE3OH0.EZeFhM5ASZ2P-Ypt0cIqLEoWmz5DJhH3qZPdThIGEFA';

export const supabase = createClient(URL, API_KEY);