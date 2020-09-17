import firebase from 'firebase/app';

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const microsoftAuthProvider = new firebase.auth.OAuthProvider('microsoft.com');

export const getAuthProvider = () => {
  switch (process.env.REACT_APP_AUTH_PROVIDER) {
    case 'MICROSOFT':
      return microsoftAuthProvider;
    case 'GOOGLE':
    default:
      return googleAuthProvider;
  }
};
