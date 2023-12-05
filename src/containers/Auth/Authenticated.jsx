import React, { ReactNode } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from './LoginButton';

const Auth0Authenticated = ({ children }) => {
  const { isLoading, error, isAuthenticated } = useAuth0();

  console.log('Auth0Authenticated', { isLoading, error, isAuthenticated })

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Oops... {error.message}</>;
  }

  if (!isAuthenticated) {
    return <LoginButton />;
  }

  return <>{children}</>;
};

export default Auth0Authenticated;
