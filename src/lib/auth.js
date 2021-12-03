import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth';

import app from './firebase';

const auth = getAuth(app);

export const twitterAuthProvider = new TwitterAuthProvider();
export const githubAuthProvider = new GithubAuthProvider();
export const googleAuthProvider = new GoogleAuthProvider();
export const facebookAuthProvider = new FacebookAuthProvider();
export default auth;
