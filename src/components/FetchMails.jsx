import React, { useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../msalConfig';
import { Client } from '@microsoft/microsoft-graph-client';
import "isomorphic-fetch";

const FetchMails = () => {
  const { instance, accounts } = useMsal();
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await instance.acquireTokenSilent({ ...loginRequest, account: accounts[0] });
        const accessToken = response.accessToken;
        const client = Client.init({
          authProvider: (done) => {
            done(null, accessToken);
          },
        });
        // Get ISO string for 6 hours ago
        const sixHoursAgo = new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString();
        const messages = await client.api('/me/messages')
          .filter(`receivedDateTime ge ${sixHoursAgo}`)
          .top(10)
          .select('subject,from,receivedDateTime,bodyPreview')
          .orderby('receivedDateTime desc')
          .get();
        setEmails(messages.value);
      } catch (err) {
        setError(err.message || 'Error fetching emails');
      }
      setLoading(false);
    };
    if (accounts.length > 0) {
      fetchEmails();
    }
  }, [instance, accounts]);

  if (!accounts.length) {
    return <button onClick={() => instance.loginPopup(loginRequest)}>Sign in to view emails</button>;
  }
  if (loading) return <div>Loading emails...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <h2>Recent Emails (last 6 hours)</h2>
      <ul>
        {emails.map((mail, idx) => (
          <li key={idx} style={{marginBottom: '1rem'}}>
            <strong>{mail.subject}</strong><br />
            <span>From: {mail.from?.emailAddress?.name}</span><br />
            <span>{mail.bodyPreview}</span><br />
            <span>{new Date(mail.receivedDateTime).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchMails;
