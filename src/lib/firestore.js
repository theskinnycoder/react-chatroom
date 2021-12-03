import { FieldValue, getFirestore } from 'firebase/firestore';

import app from './firebase';

const db = getFirestore(app);

export const timestamp = FieldValue.serverTimestamp;
export default db;
