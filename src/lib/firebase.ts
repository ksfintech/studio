import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';

// Check if we're in a build environment or if Firebase config is available
const isBuildTime = process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase only if not in build time and config is available
let app;
let db: Firestore | null;

if (!isBuildTime && firebaseConfig.apiKey) {
  try {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
  } catch (error) {
    console.warn('Firebase initialization failed:', error);
    // Create a mock db object for build time
    db = null;
  }
} else {
  // Create a mock db object for build time
  db = null;
}

export { db };
