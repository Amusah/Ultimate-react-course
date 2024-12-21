import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lyeotiuycnqklnnxavwb.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5ZW90aXV5Y25xa2xubnhhdndiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwMTI3MzgsImV4cCI6MjA0ODU4ODczOH0.3MP3DoSGCE4rpUzeboV3cbX1lhwVhtdozcEtTJvxI5k";
;
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;