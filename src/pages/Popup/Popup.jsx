import React from 'react';
import logo from '../../assets/img/ln-logo.png';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
import Auth0Authenticated from '../../containers/Auth/Authenticated';
import AccessTokenProvider from '../../containers/Auth/AccessTokenProvider';

const Popup = () => {
  return (
    <div className="App">
    <Auth0Authenticated>
      <AccessTokenProvider>

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React!
            </a>
          </header>

      </AccessTokenProvider>
    </Auth0Authenticated>
    </div>
  );
};

export default Popup;
