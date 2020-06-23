import React, { createContext, useMemo, useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { User } from 'app/auth/types';
import { auth } from 'app/global/firebase';

type AuthContextValue = {
  user: User;
  loading: boolean;
  isAllowed: boolean;
  error?: firebase.auth.Error;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const allowedDomains = process.env.REACT_APP_ALLOWED_DOMAINS?.split(',').map((domain) =>
  domain.toLowerCase(),
);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth can only be used inside AuthProvider');

  return context;
};

const AuthProvider: React.FC = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  const isAllowed = useMemo(() => {
    const domain = user?.email?.slice(user?.email?.indexOf('@') + 1);

    return !!(user?.emailVerified && domain && allowedDomains?.includes(domain));
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps
  // FIXME: https://github.com/facebook/react/issues/19061

  const value = useMemo(
    () => ({
      user: {
        uid: user?.uid,
        name: user?.displayName,
        image: user?.photoURL,
        searchName: user?.displayName?.toLowerCase(),
        email: user?.email,
        emailVerified: user?.emailVerified,
      } as User,
      isAllowed,
      loading,
      error,
    }),
    [user, loading, error], // eslint-disable-line react-hooks/exhaustive-deps
    // FIXME: https://github.com/facebook/react/issues/19061
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
