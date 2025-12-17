import React, { useEffect, useRef, useState } from 'react';
import { SpotterEmbed, AuthType, init } from '@thoughtspot/visual-embed-sdk';
import { useUser } from '../context/UserContext';
import UpgradePrompt from '../components/UpgradePrompt';
import './CompareAI.css';

const CompareAI = () => {
  const { isBasic } = useUser();
  const embedRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Skip initialization if user is basic tier
    if (isBasic) {
      return;
    }

    let spotterEmbed = null;
    const embedContainer = embedRef.current;

    const initSpotter = async () => {
      try {
        console.log('Initializing ThoughtSpot CompareAI with Spotter...');
        
        // Initialize ThoughtSpot SDK
        await init({
          thoughtSpotHost: 'https://se-thoughtspot-cloud.thoughtspot.cloud',
          authType: AuthType.None,
          username: 'kiara.polychroniadi@thoughtspot.com',
        });

        console.log('Creating SpotterEmbed instance...');

        // Calculate responsive height
        const viewportHeight = window.innerHeight;
        const embedHeight = Math.max(500, Math.min(800, viewportHeight * 0.75));
        
        // Create SpotterEmbed instance with the model/worksheet ID
        spotterEmbed = new SpotterEmbed(embedContainer, {
          frameParams: {
            width: '100%',
            height: `${embedHeight}px`,
          },
          // Use the specific model ID (worksheet/data source)
          worksheetId: '0897218d-771e-4352-95e6-69a47f59e621',
          searchOptions: {
            searchQuery: '', // Optional: initial search query
          },
        });

        // Register event listeners
        spotterEmbed.on('init', () => {
          console.log('✅ CompareAI Spotter initialized');
          setLoading(true);
        });

        spotterEmbed.on('load', () => {
          console.log('✅ CompareAI Spotter loaded successfully');
          setLoading(false);
        });

        spotterEmbed.on('error', (error) => {
          console.error('❌ CompareAI Spotter error:', error);
          setError(error.message || 'Failed to load CompareAI');
          setLoading(false);
        });

        // Render the embed
        console.log('Rendering CompareAI Spotter...');
        await spotterEmbed.render();
        setLoading(false);
      } catch (err) {
        console.error('❌ Error initializing CompareAI:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    initSpotter();

    // Cleanup on unmount
    return () => {
      console.log('Cleaning up CompareAI embed');
      if (embedContainer) {
        embedContainer.innerHTML = '';
      }
    };
  }, [isBasic]);

  // If user is basic tier, show upgrade prompt
  if (isBasic) {
    return <UpgradePrompt featureName="CompareAI" />;
  }

  return (
    <div className="compare-ai-page">
      <div className="compare-ai-header">
        <div className="header-content">
          <div className="header-text">
            <h1 className="page-title">
              <span className="ai-icon">🤖</span> CompareAI
            </h1>
            <p className="page-subtitle">
              Ask questions about your data in natural language - powered by ThoughtSpot Spotter
            </p>
          </div>
          <div className="ai-badge">
            <span className="badge-icon">✨</span>
            <span className="badge-text">AI-Powered Insights</span>
          </div>
        </div>
      </div>

      <div className="ai-suggestions">
        <p className="suggestions-label">Try asking:</p>
        <div className="suggestions-grid">
          <div className="suggestion-chip">📋 "How many policies were sold this month?"</div>
          <div className="suggestion-chip">📈 "Show me policy conversion rates by age group"</div>
          <div className="suggestion-chip">🎯 "Which policy type has the highest retention?"</div>
          <div className="suggestion-chip">📊 "Compare policy sales across different segments"</div>
        </div>
      </div>

      <div className="compare-ai-container">
        {loading && (
          <div className="embed-loading">
            <div className="loading-spinner"></div>
            <p>Loading CompareAI...</p>
          </div>
        )}
        
        {error && (
          <div className="embed-error">
            <span className="error-icon">⚠️</span>
            <p className="error-message">{error}</p>
            <p className="error-help">Please ensure you're logged in to ThoughtSpot at:</p>
            <a 
              href="https://se-thoughtspot-cloud.thoughtspot.cloud/#/home" 
              target="_blank" 
              rel="noopener noreferrer"
              className="error-link"
            >
              https://se-thoughtspot-cloud.thoughtspot.cloud
            </a>
          </div>
        )}
        
        <div 
          ref={embedRef} 
          className="compare-ai-embed"
          style={{ display: loading || error ? 'none' : 'block' }}
        ></div>
      </div>
    </div>
  );
};

export default CompareAI;

