// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getPerformance, Performance } from "firebase/performance";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsbWaEkdj7EZLMYSa9InitdjI3BkteTAs",
  authDomain: "jslartesanatos.firebaseapp.com",
  projectId: "jslartesanatos",
  storageBucket: "jslartesanatos.firebasestorage.app",
  messagingSenderId: "140834651598",
  appId: "1:140834651598:web:f18a9342a3078cd8c53f9f",
  measurementId: "G-0BBQ8HL3MV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics and Performance (only in browser environment)
let analytics: Analytics | null = null;
let performance: Performance | null = null;

if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
  performance = getPerformance(app);
}

export { app, analytics, performance };