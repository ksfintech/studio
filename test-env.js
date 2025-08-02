#!/usr/bin/env node

// Test script to verify environment variables
require('dotenv').config({ path: '.env.local' });

console.log('🔍 Environment Variables Test');
console.log('=============================');

const requiredVars = [
  'GEMINI_API_KEY',
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
  'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  'NEXT_PUBLIC_FIREBASE_APP_ID'
];

let allGood = true;

requiredVars.forEach(varName => {
  const value = process.env[varName];
  if (value) {
    console.log(`✅ ${varName}: Set (${value.substring(0, 10)}...)`);
  } else {
    console.log(`❌ ${varName}: Not Set`);
    allGood = false;
  }
});

console.log('\n📊 Summary:');
if (allGood) {
  console.log('🎉 All required environment variables are set!');
  console.log('✅ Ready for deployment');
} else {
  console.log('❌ Some environment variables are missing!');
  console.log('⚠️  Please check your .env.local file');
  process.exit(1);
} 