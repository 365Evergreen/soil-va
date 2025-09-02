import React from 'react';
import './EmailList.css';

const emails = [
  {
    sender: 'Jaisal Rathee',
    subject: 'Welcome',
    preview: 
      "+ You're part of the community now :)",
    date: '03/09/2025',
    link: '#',
  },
  {
    sender: 'The CData Team',
    subject: 'Get Ready to Adapt: Learn from Red Wing Shoes',
    preview:
      'Join us for an exclusive session during our live Foundations virtual event, Built to Last, Ready to Adapt: How Red Wing Shoes Rebuilt Its Data Architecture. Hi Paul, When disconnected systems and unreliable sync processes started sl...',
    date: '03/09/2025',
    link: '#',
  },
  {
    sender: 'Paul Murphy',
    subject: 'Sass',
    preview:
      'https://medium.com/@katt_72306/how-to-find-micro-saas-ideas-with-users-on-auto-pilot-e5b9a0b7da23 Get Outlook for iOS',
    date: '03/09/2025',
    link: '#',
  },
  {
    sender: 'Chromatic',
    subject: '[Chromatic] Verify your email',
    preview:
      "Verify your email Verify your email Welcome 365Evergreen! Start using Chromatic by clicking the link below to verify paul@365evergreen.com. Verify email If you didn't create an account with Chromatic, you can ignore this email. An...",
    date: '03/09/2025',
    link: '#',
  },
  {
    sender: 'GitHub',
    subject: '[GitHub] A third-party OAuth application has been added to your account',
    preview:
      'Hey 365Evergreen! A third-party OAuth application (Chromatic OAuth) with read:org, read:user, repo:status, and user:email scopes was recently authorized to access your account. Visit https://github.com/settings/connections/applic... ',
    date: '03/09/2025',
    link: '#',
  },
];

const EmailList = () => (
  <div className="email-list-container">
    <h2 className="email-list-title">Personal e-mail</h2>
    <a href="#" className="email-list-new">New e-mail</a>
    <ul className="email-list">
      {emails.map((email, idx) => (
        <li key={idx} className="email-list-item">
          <div className="email-list-header">
            <span className="email-list-sender">{email.sender}</span>
            <span className="email-list-date">{email.date}</span>
          </div>
          <div className="email-list-subject">
            <a href={email.link} className="email-list-link">{email.subject}</a>
          </div>
          <div className="email-list-preview">{email.preview}</div>
        </li>
      ))}
    </ul>
    <a href="#" className="email-list-full">View the full list</a>
  </div>
);

export default EmailList;
