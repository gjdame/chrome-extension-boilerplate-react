import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

import Popup from './Popup';
import './index.css';

const container = document.getElementById('app-container');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Auth0Provider
    domain="launchnotes-production.us.auth0.com"
    clientId="mrGoTfRLM7xxB55V8mDaoRFQtQ3hu1Ka"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    cacheLocation="localstorage"
    useRefreshTokens={true}
  >
    <Popup />
  </Auth0Provider>
);
