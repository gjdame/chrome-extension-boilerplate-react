import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { GetTokenSilentlyOptions, useAuth0 } from '@auth0/auth0-react';

// interface AccessTokenContextShape {
//   token: string;
//   getToken(): Promise<string>;
//   refetchToken(): Promise<string>;
// }

const AccessTokenContext = createContext(undefined);

const AccessTokenProvider = ( { children } ) => {
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState();

  const getToken = useCallback(async (options) => {
    const auth0Token = await getAccessTokenSilently(options);

    setToken(auth0Token);
    return auth0Token;
  }, [getAccessTokenSilently]);

  const refetchToken = useCallback(() => getToken({ cacheMode: 'off' }), [getToken]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getToken();
  }, []);

  // polls auth0 for the lastest token to ensure our cache is updated with reasonable frequency
  // this is usually just a memory lookup from the auth0 cache and will only make a network request if a new token is needed
  useEffect(() => {
    const interval = setInterval(() => getToken(), 5000);
    return () => clearInterval(interval);
  }, [getToken]);

  return !token ? (
    <>Loading</>
  ) : (
    <AccessTokenContext.Provider value={{
      token,
      getToken,
      refetchToken,
    }}>
      {children}
    </AccessTokenContext.Provider>
  );
};

export const useAccessTokenContext = () => {
  const context = useContext(AccessTokenContext);
  if (!context) throw new Error('Missing AccessTokenProvider');
  return context;
};

export default AccessTokenProvider;
