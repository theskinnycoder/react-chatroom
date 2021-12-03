import { getApp, getApps, initializeApp } from 'firebase/app';

if (getApps().length === 0) {
  initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  });
}

const app = getApp();

export default app;
