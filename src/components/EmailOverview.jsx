import React from 'react';
import './EmailOverview.css';

function EmailOverview() {
    return (
        <div className="email-overview-container">
            <div className="email-overview-card">
                <div className="email-overview-bg bg-yellow" />
                <div className="email-overview-content">
                    <div className="email-overview-number">15</div>
                    <div className="email-overview-label">Total unread</div>
                </div>
            </div>
            <div className="email-overview-card">
                <div className="email-overview-bg bg-yellow" />
                <div className="email-overview-number">7</div>
                <div className="email-overview-label">Internal</div>
            </div>
            <div className="email-overview-card">
                <div className="email-overview-bg bg-blue" />
                <div className="email-overview-label">External</div>
                <div className="email-overview-number">8</div>
            </div>
            <div className="email-overview-card">
                <div className="email-overview-bg bg-red" />
                <div className="email-overview-content">
                    <div className="email-overview-number">2</div>
                    <div className="email-overview-label">Important</div>
                </div>
            </div>
            <div className="email-overview-card">
                <div className="email-overview-bg bg-black" />
                <div className="email-overview-content">
                    <div className="email-overview-number">1</div>
                    <div className="email-overview-label">Negative tone</div>
                </div>
            </div>
        </div>
    );
}

export default EmailOverview;
