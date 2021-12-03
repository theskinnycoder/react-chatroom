import { isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from '@firebase/auth'
import cookie from 'js-cookie'

import auth from '../lib/auth'
import { BASE_URL } from '../utils/constants'
import { formatUser } from '../utils/functions'

const useMagicLink = () => {
  let error = null

  // Send magic link
  const sendMagicLink = async ({ email }) => {
    error = null

    try {
      await sendSignInLinkToEmail(auth, email, {
        url: BASE_URL,
        handleCodeInApp: true,
      })
      cookie.set('magicEmail', email)
      error = null
    } catch (err) {
      error = err.message
    }
  }

  // Login with magic link
  const loginWithMagicLink = async () => {
    error = null

    try {
      const emailLink = window?.location?.href
      if (isSignInWithEmailLink(auth, emailLink)) {
        const email = cookie.get('magicEmail')
        const { user } = await signInWithEmailLink(auth, email, emailLink)
        const loggedInUser = formatUser(user)
        cookie.remove('magicEmail')
        error = null
        return loggedInUser
      } else {
        error = 'Invalid link'
      }
    } catch (err) {
      error = err.message
    }
  }

  return {
    error,
    sendMagicLink,
    loginWithMagicLink,
  }
}

export default useMagicLink
