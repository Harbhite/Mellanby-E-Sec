require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Manually parse .env if dotenv doesn't work out of the box or if using older node
function parseEnv() {
  const envPath = path.resolve(__dirname, '../.env');
  if (!fs.existsSync(envPath)) {
      console.warn('No .env file found at ' + envPath);
      return {};
  }
  const content = fs.readFileSync(envPath, 'utf-8');
  return content.split('\n').reduce((acc, line) => {
    const [key, val] = line.split('=');
    if (key && val) acc[key.trim()] = val.trim();
    return acc;
  }, {});
}

const env = parseEnv();
const supabaseUrl = process.env.VITE_SUPABASE_URL || env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function createAdmin() {
  const email = process.argv[2];
  const password = process.argv[3];

  if (!email || !password) {
    console.log('Usage: node scripts/create_admin.js <email> <password>');
    process.exit(1);
  }

  console.log(`Creating user ${email}...`);

  // Try to sign up
  let userId;
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signUpError) {
    if (signUpError.message.includes('already registered')) {
        console.log('User already exists, attempting to sign in to verify credentials...');
        const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
            email,
            password
        });
        if (signInError) {
            console.error('Could not sign in:', signInError.message);
            process.exit(1);
        }
        userId = signInData.user.id;
        console.log('Signed in successfully.');
    } else {
        console.error('Error creating user:', signUpError.message);
        process.exit(1);
    }
  } else if (signUpData?.user) {
      userId = signUpData.user.id;
      console.log('User created successfully.');
  } else {
      console.error('Sign up succeeded but no user data returned (Check email confirmation settings).');
      // In this case, we might not get the user ID immediately if confirmation is required.
      // But we can try to proceed if we got an ID.
      if (signUpData?.user?.id) userId = signUpData.user.id;
      else process.exit(1);
  }

  console.log('User ID:', userId);

  console.log('Attempting to set role to admin...');

  // Try to update profile. This might fail if RLS prevents it.
  const { error: updateError } = await supabase
    .from('profiles')
    .update({ role: 'admin' })
    .eq('id', userId);

  if (updateError) {
    console.warn('Could not update role automatically (likely RLS restriction):', updateError.message);
    console.log('IMPORTANT: Please run the following SQL in your Supabase Dashboard SQL Editor to grant admin access:');
    console.log(`UPDATE profiles SET role = 'admin' WHERE id = '${userId}';`);
  } else {
    // Verify the update
    const { data: profile } = await supabase.from('profiles').select('role').eq('id', userId).single();
    if (profile?.role === 'admin') {
        console.log('Successfully set user role to admin!');
    } else {
        console.warn('Update command succeeded but role is still:', profile?.role);
        console.log('IMPORTANT: Please run the following SQL in your Supabase Dashboard SQL Editor to grant admin access:');
        console.log(`UPDATE profiles SET role = 'admin' WHERE id = '${userId}';`);
    }
  }
}

createAdmin();
