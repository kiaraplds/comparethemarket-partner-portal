import React from 'react';
import { useUser } from '../context/UserContext';
import './UpgradePrompt.css';

const UpgradePrompt = ({ featureName = 'CompareAI' }) => {
  const { switchToPremium } = useUser();

  return (
    <div className="upgrade-prompt-page">
      <div className="upgrade-prompt-container">
        <div className="upgrade-icon">🔒</div>
        <h1 className="upgrade-title">Premium Feature</h1>
        <h2 className="upgrade-subtitle">{featureName} is a Premium Feature</h2>
        
        <div className="upgrade-content">
          <img 
            src="/sergei-meerkat.webp" 
            alt="Upgrade to Premium" 
            className="upgrade-meerkat"
          />
          
          <p className="upgrade-description">
            Unlock the power of AI-driven insights and natural language queries with our Premium plan.
          </p>

          <div className="premium-features">
            <h3 className="features-title">Premium Includes:</h3>
            <div className="features-grid">
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span className="feature-text">AI-Powered Analytics with Spotter</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span className="feature-text">AI Highlights in Dashboards</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span className="feature-text">Natural Language Queries</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span className="feature-text">Advanced Data Insights</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span className="feature-text">Priority Support</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span className="feature-text">Unlimited Data Queries</span>
              </div>
            </div>
          </div>

          <div className="upgrade-actions">
            <button 
              className="upgrade-btn primary"
              onClick={switchToPremium}
            >
              <span className="btn-icon">🚀</span>
              Upgrade to Premium
            </button>
            <button className="upgrade-btn secondary">
              Contact Sales
            </button>
          </div>

          <div className="upgrade-pricing">
            <div className="pricing-card">
              <div className="pricing-header">
                <span className="pricing-label">Starting at</span>
                <span className="pricing-price">£299<span className="pricing-period">/month</span></span>
              </div>
              <p className="pricing-note">Annual billing available with 20% discount</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradePrompt;

