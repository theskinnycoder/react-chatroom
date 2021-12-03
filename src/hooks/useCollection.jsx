import { doc, setDoc } from 'firebase/firestore'

import db from '../lib/firestore'

const useCollection = ({ collection }) => {
  let error = null

  const addOrUpdate = async ({ uid, ...data }) => {
    error = null

    try {
      const newDoc = doc(db, `${collection}/${uid}`)
      await setDoc(newDoc, { uid, ...data }, { merge: true })
      error = null
    } catch (err) {
      error = err.message
    }
  }

  return {
    addOrUpdate,
    error,
  }
}

export default useCollection
