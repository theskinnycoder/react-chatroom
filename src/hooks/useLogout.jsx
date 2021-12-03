import { signOut } from '@firebase/auth'

import auth from '../lib/auth'

const useLogout = () => {
  let error = null

  const logout = async () => {
    error = null
    try {
      await signOut(auth)
      error = null
    } catch (err) {
      error = err.message
    }
  }

  return { error, logout }
}

export default useLogout
