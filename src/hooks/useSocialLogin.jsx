import { signInWithPopup } from '@firebase/auth'

import auth, { facebookAuthProvider, githubAuthProvider, googleAuthProvider, twitterAuthProvider } from '../lib/auth'
import { formatUser } from '../utils/functions'

const useSocialLogin = () => {
  let error = null

  const loginWithSocials = async ({ provider }) => {
    error = null
    try {
      let providerFunc
      switch (provider) {
        case 'GITHUB':
          providerFunc = githubAuthProvider
          break
        case 'GOOGLE':
          providerFunc = googleAuthProvider
          break
        case 'TWITTER':
          providerFunc = twitterAuthProvider
          break
        case 'FACEBOOK':
          providerFunc = facebookAuthProvider
          break
        default:
          break
      }
      const { user } = await signInWithPopup(auth, providerFunc)
      error = null
      return formatUser(user)
    } catch (err) {
      const { message } = err
      if (
        message !== 'Firebase: Error (auth/popup-closed-by-user)' &&
        message !== 'Firebase: Error (auth/cancelled-popup-request)'
      ) {
        error = message
      }
    }
  }

  return { error, loginWithSocials }
}

export default useSocialLogin
