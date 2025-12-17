import React from 'react';
import ThoughtSpotEmbed from '../components/ThoughtSpotEmbed';
import './Dashboard.css';

const Home = () => {
  const performanceAlerts = [
    {
      type: 'opportunity',
      icon: '💡',
      title: 'Price Optimization Opportunity',
      message: 'Lower your Car Insurance price by £2.74 to increase revenue by £18,500/month',
      action: 'View Details',
    },
    {
      type: 'warning',
      icon: '⚠️',
      title: 'Conversion Drop Detected',
      message: 'Home Insurance conversion down 2.3% in London region - review pricing',
      action: 'Investigate',
    },
    {
      type: 'success',
      icon: '🎯',
      title: 'Target Achieved',
      message: 'Pet Insurance exceeded monthly target by 15%',
      action: 'View Report',
    },
  ];

  const recentInsights = [
    {
      title: 'Age Segment Analysis',
      description: '25-34 year olds show 34% higher conversion in Car Insurance',
      time: '2 hours ago',
      category: 'Segmentation',
    },
    {
      title: 'Competitor Movement',
      description: 'Top competitor reduced prices by 3% in Pet Insurance',
      time: '5 hours ago',
      category: 'Benchmarking',
    },
    {
      title: 'New Market Opportunity',
      description: 'Life Insurance demand up 22% in Scotland region',
      time: '1 day ago',
      category: 'Market Expansion',
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1 className="page-title">Home</h1>
        </div>
      </div>

      {/* Welcome Banner */}
      <div className="welcome-banner">
        <div className="welcome-content">
          <div className="welcome-text">
            <h2 className="welcome-title">Welcome to Your Partner Portal</h2>
            <p className="welcome-description">
              Get actionable insights and recommendations to optimize your performance. 
              Our intelligent platform helps you make data-driven decisions that drive revenue growth.
            </p>
            <div className="welcome-features">
              <div className="feature-item">
                <span className="feature-icon">🎯</span>
                <span className="feature-text">Actionable Recommendations</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <span className="feature-text">Real-time Benchmarking</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💰</span>
                <span className="feature-text">Revenue Optimization</span>
              </div>
            </div>
          </div>
          <div className="welcome-image">
            <img 
              src="/sergei-meerkat.webp" 
              alt="Compare the Market Meerkat" 
              className="meerkat-image"
            />
          </div>
        </div>
      </div>

      {/* ThoughtSpot KPI Watchlist */}
      <ThoughtSpotEmbed />

      {/* Performance Alerts */}
      <div className="section">
        <h2 className="section-title">Performance Alerts & Recommendations</h2>
        <div className="alerts-grid">
          {performanceAlerts.map((alert, index) => (
            <div key={index} className={`alert-card ${alert.type}`}>
              <div className="alert-icon">{alert.icon}</div>
              <div className="alert-content">
                <h3 className="alert-title">{alert.title}</h3>
                <p className="alert-message">{alert.message}</p>
              </div>
              <button className="alert-action">{alert.action}</button>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Recent Insights */}
        <div className="insights-panel">
          <h2 className="section-title">Recent Insights</h2>
          <div className="insights-list">
            {recentInsights.map((insight, index) => (
              <div key={index} className="insight-item">
                <div className="insight-header">
                  <span className="insight-category">{insight.category}</span>
                  <span className="insight-time">{insight.time}</span>
                </div>
                <h4 className="insight-title">{insight.title}</h4>
                <p className="insight-description">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="quick-stats-panel">
          <h2 className="section-title">Quick Stats</h2>
          <div className="stats-list">
            <div className="stat-item">
              <div className="stat-label">Average Quote Value</div>
              <div className="stat-value">£847</div>
              <div className="stat-bar">
                <div className="stat-bar-fill" style={{ width: '72%' }}></div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Top Performing Product</div>
              <div className="stat-value">Car Insurance</div>
              <div className="stat-bar">
                <div className="stat-bar-fill" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Best Converting Age Group</div>
              <div className="stat-value">25-34 years</div>
              <div className="stat-bar">
                <div className="stat-bar-fill" style={{ width: '68%' }}></div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Peak Traffic Time</div>
              <div className="stat-value">8-10 PM</div>
              <div className="stat-bar">
                <div className="stat-bar-fill" style={{ width: '91%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Performance Summary */}
      <div className="section">
        <h2 className="section-title">Product Performance Summary</h2>
        <div className="product-table">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quotes</th>
                <th>Conversions</th>
                <th>Revenue</th>
                <th>Market Position</th>
                <th>Trend</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="product-name">🚗 Car Insurance</span></td>
                <td>524,231</td>
                <td>8.7%</td>
                <td>£1.8M</td>
                <td><span className="position-badge rank-2">#2</span></td>
                <td><span className="trend-badge up">↗ 12%</span></td>
              </tr>
              <tr>
                <td><span className="product-name">🏠 Home Insurance</span></td>
                <td>312,456</td>
                <td>7.9%</td>
                <td>£1.2M</td>
                <td><span className="position-badge rank-3">#3</span></td>
                <td><span className="trend-badge up">↗ 8%</span></td>
              </tr>
              <tr>
                <td><span className="product-name">🐾 Pet Insurance</span></td>
                <td>189,234</td>
                <td>9.1%</td>
                <td>£680K</td>
                <td><span className="position-badge rank-1">#1</span></td>
                <td><span className="trend-badge up">↗ 15%</span></td>
              </tr>
              <tr>
                <td><span className="product-name">💼 Life Insurance</span></td>
                <td>145,678</td>
                <td>6.8%</td>
                <td>£520K</td>
                <td><span className="position-badge rank-4">#4</span></td>
                <td><span className="trend-badge down">↘ 2%</span></td>
              </tr>
              <tr>
                <td><span className="product-name">✈️ Travel Insurance</span></td>
                <td>76,968</td>
                <td>11.2%</td>
                <td>£180K</td>
                <td><span className="position-badge rank-2">#2</span></td>
                <td><span className="trend-badge up">↗ 22%</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;

