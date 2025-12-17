import React, { useEffect, useRef, useState } from 'react';
import { AppEmbed, AuthType, init, Page } from '@thoughtspot/visual-embed-sdk';
import './MyReports.css';

const MyReports = () => {
  const embedRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let appEmbed = null;
    const embedContainer = embedRef.current;

    const initializeEmbed = async () => {
      try {
        console.log('Initializing ThoughtSpot My Reports (Liveboards list)...');
        
        // Initialize ThoughtSpot SDK
        await init({
          thoughtSpotHost: 'https://se-thoughtspot-cloud.thoughtspot.cloud',
          authType: AuthType.None,
          username: 'kiara.polychroniadi@thoughtspot.com',
        });

        console.log('Creating AppEmbed for Liveboards list page...');

        // Calculate responsive height
        const viewportHeight = window.innerHeight;
        const embedHeight = Math.max(600, Math.min(900, viewportHeight * 0.8));
        
        // Create AppEmbed instance for Liveboards list page
        appEmbed = new AppEmbed(embedContainer, {
          frameParams: {
            width: '100%',
            height: `${embedHeight}px`,
          },
          pageId: Page.Liveboards,
          showPrimaryNavbar: false,
          disableProfileAndHelp: true,
        });

        // Register event listeners
        appEmbed.on('init', () => {
          console.log('✅ My Reports (Liveboards list) initialized');
          setLoading(true);
        });

        appEmbed.on('load', () => {
          console.log('✅ My Reports (Liveboards list) loaded successfully');
          setLoading(false);
        });

        appEmbed.on('error', (error) => {
          console.error('❌ My Reports error:', error);
          setError(error.message || 'Failed to load My Reports');
          setLoading(false);
        });

        // Render the embed
        console.log('Rendering My Reports...');
        await appEmbed.render();
      } catch (err) {
        console.error('❌ Error initializing My Reports:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    // Clear the embed container and initialize
    if (embedContainer) {
      embedContainer.innerHTML = '';
    }
    
    initializeEmbed();

    // Cleanup on unmount
    return () => {
      console.log('Cleaning up My Reports embed');
      if (embedContainer) {
        embedContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="my-reports-page">
      <div className="my-reports-header">
        <h1 className="page-title">My Reports</h1>
        <p className="page-subtitle">
          Browse and manage your Liveboards and reports
        </p>
      </div>

      <div className="reports-container">
        {loading && (
          <div className="embed-loading">
            <div className="loading-spinner"></div>
            <p>Loading My Reports...</p>
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
          className="my-reports-embed"
          style={{ display: loading || error ? 'none' : 'block' }}
        ></div>
      </div>
    </div>
  );
};

export default MyReports;

