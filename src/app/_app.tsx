import React from 'react';
import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from '../msalConfig';
import '../globals.css';

const msalInstance = new PublicClientApplication(msalConfig);

function MyApp({ Component, pageProps }: any) {
  return (
    <MsalProvider instance={msalInstance}>
      <Component {...pageProps} />
    </MsalProvider>
  );
}

export default MyApp;
