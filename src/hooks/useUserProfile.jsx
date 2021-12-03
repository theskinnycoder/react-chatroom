import { updateProfile } from '@firebase/auth';

import auth from '../lib/auth';

const addHandle = async ({ handle }) => {
  await updateProfile(auth.currentUser, {
    displayName: handle,
  });
  return auth.currentUser?.displayName;
};

const useUserProfile = () => {
  return { addHandle };
};

export default useUserProfile;
