export const msalConfig = {
  auth: {
    clientId: '95b2244d-b468-44bf-9d50-8a0bd92059a5',
    authority: 'https://login.microsoftonline.com/7a5bf294-6ae8-47c4-b0c4-b2f9166d7a3f',
    redirectUri: 'https://green-ground-0edef5f1e.2.azurestaticapps.net',
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: [
    'User.Read',
    'Mail.Read',
  ],
};
