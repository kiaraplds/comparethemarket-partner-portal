import React, { useEffect, useRef, useState } from 'react';
import { AppEmbed, AuthType, init, Page, HomepageModule } from '@thoughtspot/visual-embed-sdk';
import './ThoughtSpotEmbed.css';

const ThoughtSpotEmbed = () => {
  const embedRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      console.log('Initializing ThoughtSpot...');
      
      // Initialize ThoughtSpot SDK
      init({
        thoughtSpotHost: 'https://se-thoughtspot-cloud.thoughtspot.cloud',
        authType: AuthType.None,
        username: 'kiara.polychroniadi@thoughtspot.com',
      });

      console.log('Creating KPI Watchlist embed...');

      // Create AppEmbed instance showing Home page with only Watchlist module
      // Calculate responsive height based on viewport
      const viewportHeight = window.innerHeight;
      const embedHeight = Math.max(450, Math.min(700, viewportHeight * 0.6));
      
      const embed = new AppEmbed(embedRef.current, {
        frameParams: {
          width: '100%',
          height: `${embedHeight}px`,
        },
        pageId: Page.Home,
        modularHomeExperience: true,
        showPrimaryNavbar: false, // Hide top navigation
        hideHomepageLeftNav: true, // Hide left sidebar
        disableProfileAndHelp: true, // Hide profile and help
        
        // Show ONLY the Watchlist module on home page
        hiddenHomepageModules: [
          HomepageModule.Learning,
          HomepageModule.MyLibrary,
          HomepageModule.Favorite,
          HomepageModule.Trending,
          HomepageModule.Search,
        ],
        // Watchlist is shown by default when others are hidden
      });

      // Register event listeners
      embed.on('init', () => {
        console.log('✅ ThoughtSpot embed initialized');
        setLoading(true);
      });

      embed.on('load', () => {
        console.log('✅ ThoughtSpot embed loaded successfully');
        setLoading(false);
      });

      embed.on('error', (error) => {
        console.error('❌ ThoughtSpot embed error:', error);
        setError(error.message || 'Failed to load ThoughtSpot');
        setLoading(false);
      });

      // Render the embed
      console.log('Rendering embed...');
      embed.render();

      // Cleanup on unmount
      return () => {
        console.log('Cleaning up ThoughtSpot embed');
      };
    } catch (err) {
      console.error('❌ Error initializing ThoughtSpot:', err);
      setError(err.message);
      setLoading(false);
    }
  }, []);

  return (
    <div className="thoughtspot-embed-container">
      <div className="embed-header">
        <h3 className="embed-title">📊 Live KPI Watchlist</h3>
        <p className="embed-subtitle">Real-time performance metrics powered by ThoughtSpot</p>
      </div>
      
      {loading && (
        <div className="embed-loading">
          <div className="loading-spinner"></div>
          <p>Loading ThoughtSpot analytics...</p>
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
        className="thoughtspot-embed"
        style={{ display: loading || error ? 'none' : 'block' }}
      ></div>
    </div>
  );
};

export default ThoughtSpotEmbed;

