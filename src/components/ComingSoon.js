import React from 'react';
import './ComingSoon.css';

const ComingSoon = ({ pageName, icon = '🚧' }) => {
  return (
    <div className="coming-soon-page">
      <div className="coming-soon-content">
        <img 
          src="/sergei-meerkat.webp" 
          alt="Coming Soon" 
          className="coming-soon-meerkat"
        />
        <div className="coming-soon-icon">{icon}</div>
        <h1 className="coming-soon-title">{pageName}</h1>
        <h2 className="coming-soon-subtitle">Coming Soon</h2>
        <p className="coming-soon-description">
          We're working hard to bring you this feature. Stay tuned for exciting updates!
        </p>
        <div className="coming-soon-features">
          <div className="feature-box">
            <span className="feature-icon">📊</span>
            <span className="feature-text">Advanced Analytics</span>
          </div>
          <div className="feature-box">
            <span className="feature-icon">🎯</span>
            <span className="feature-text">Actionable Insights</span>
          </div>
          <div className="feature-box">
            <span className="feature-icon">⚡</span>
            <span className="feature-text">Real-time Data</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;

