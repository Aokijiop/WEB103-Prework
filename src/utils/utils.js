import axios from 'axios';

const Backend = axios.create({
    baseURL: 'https://titichtbxphmimgrzsjd.supabase.co'
  });

  Backend.defaults.headers.common['apikey'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpdGljaHRieHBobWltZ3J6c2pkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExMzIxNzgsImV4cCI6MjAwNjcwODE3OH0.EZeFhM5ASZ2P-Ypt0cIqLEoWmz5DJhH3qZPdThIGEFA';

  export { Backend };