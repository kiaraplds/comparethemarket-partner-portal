import React, { useEffect, useRef, useState } from 'react';
import { LiveboardEmbed, AuthType, init, Action } from '@thoughtspot/visual-embed-sdk';
import { useUser } from '../context/UserContext';
import './DashboardLiveboard.css';

const DashboardLiveboard = () => {
  const { isBasic } = useUser();
  const embedRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let embed = null;
    const embedContainer = embedRef.current;
    
    const initializeEmbed = async () => {
      try {
        console.log('Initializing ThoughtSpot Dashboard Liveboard...', 'User tier:', isBasic ? 'Basic' : 'Premium');
        
        // Initialize ThoughtSpot SDK with customizations for basic users
        await init({
          thoughtSpotHost: 'https://se-thoughtspot-cloud.thoughtspot.cloud',
          authType: AuthType.None,
          username: 'kiara.polychroniadi@thoughtspot.com',
          customizations: isBasic ? {
            style: {
              customCSS: {
                rules_UNSTABLE: {
                  // Block AI Highlights button with visual disabled state
                  'button[data-testid="ai-answers-button"]': {
                    'pointer-events': 'none !important',
                    'opacity': '0.4 !important',
                    'cursor': 'not-allowed !important',
                  },
                  'button[aria-label*="AI"]': {
                    'pointer-events': 'none !important',
                    'opacity': '0.4 !important',
                    'cursor': 'not-allowed !important',
                  },
                  'button[aria-label*="Highlights"]': {
                    'pointer-events': 'none !important',
                    'opacity': '0.4 !important',
                    'cursor': 'not-allowed !important',
                  },
                },
              },
            },
          } : {},
        });

        console.log('Creating liveboard embed...');

        // Calculate responsive height based on viewport
        const viewportHeight = window.innerHeight;
        const embedHeight = Math.max(600, Math.min(900, viewportHeight * 0.8));
        
        // Create LiveboardEmbed instance for specific Dashboard
        embed = new LiveboardEmbed(embedRef.current, {
          frameParams: {
            width: '100%',
            height: `${embedHeight}px`,
          },
          liveboardId: '53f4782e-b80b-4468-a692-7fe478c1bbe5',
          fullHeight: true,
          hideDataSources: true,
          showLiveboardTitle: true,
          showLiveboardDescription: false,
          // Hide AI Highlights completely for basic users
          hiddenActions: isBasic ? [
            Action.SpotIQAnalyze,
            Action.AIAnswer,
            'AIAnswers',
            'GenAIAnswers',
          ] : [],
        });

        // Register event listeners
        embed.on('init', () => {
          console.log('✅ Dashboard liveboard initialized');
          setLoading(true);
        });

        embed.on('load', () => {
          console.log('✅ Dashboard liveboard loaded successfully');
          setLoading(false);
          
          // Add additional blocking for basic users after load
          if (isBasic) {
            setTimeout(() => {
              try {
                // Add overlay to block AI interactions
                const container = embedRef.current?.querySelector('iframe');
                if (container) {
                  const style = document.createElement('style');
                  style.textContent = `
                    button[data-testid*="ai"] {
                      pointer-events: none !important;
                      opacity: 0.4 !important;
                      cursor: not-allowed !important;
                      position: relative;
                    }
                    button[aria-label*="AI"]::after,
                    button[aria-label*="Highlights"]::after {
                      content: '🔒';
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                      font-size: 16px;
                    }
                  `;
                  document.head.appendChild(style);
                }
              } catch (e) {
                console.log('Additional blocking applied:', e);
              }
            }, 500);
          }
        });

        embed.on('error', (error) => {
          console.error('❌ Dashboard liveboard error:', error);
          setError(error.message || 'Failed to load Dashboard');
          setLoading(false);
        });

        // Render the embed
        console.log('Rendering dashboard liveboard...');
        await embed.render();
      } catch (err) {
        console.error('❌ Error initializing Dashboard liveboard:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    // Clear the embed container and reinitialize
    if (embedContainer) {
      embedContainer.innerHTML = '';
    }
    
    initializeEmbed();

    // Cleanup on unmount or when isBasic changes
    return () => {
      console.log('Cleaning up Dashboard liveboard embed');
      if (embed) {
        try {
          // Destroy the embed if possible
          if (embedContainer) {
            embedContainer.innerHTML = '';
          }
        } catch (e) {
          console.log('Cleanup error:', e);
        }
      }
    };
  }, [isBasic]); // Re-initialize when user tier changes

  return (
    <div className="dashboard-liveboard-page">
      <div className="dashboard-liveboard-header">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">
            Comprehensive performance analytics and insights
            {isBasic && <span className="tier-note"> • AI Highlights disabled on Basic plan</span>}
          </p>
        </div>
      </div>

      <div className="dashboard-liveboard-container">
        {loading && (
          <div className="embed-loading">
            <div className="loading-spinner"></div>
            <p>Loading Dashboard...</p>
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
          className="dashboard-liveboard-embed"
          style={{ display: loading || error ? 'none' : 'block' }}
        ></div>
      </div>
    </div>
  );
};

export default DashboardLiveboard;

