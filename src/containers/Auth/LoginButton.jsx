// src/LoginButton.js
import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, loginWithPopup} = useAuth0();

  useEffect(() => {
    const query = new URLSearchParams();

    if (query.get('state') === 'samlp') {
      loginWithRedirect({
        authorizationParams: {
          redirect_uri: window.location.origin,
          scope: 'read:current_user update:current_user_metadata',
          audience: 'https://launchnotes-production.us.auth0.com/api/v2/'
      }});
    }

  }, [loginWithRedirect]);

  return (
    <div>
      <button
        onClick={() => loginWithPopup()}
      >
        Log in
      </button>
    </div>
  );
};

export default LoginButton;