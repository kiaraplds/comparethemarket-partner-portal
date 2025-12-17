import React, { useState } from 'react';
import './PortfolioView.css';

const PortfolioView = ({ selectedProducts, dateRange }) => {
  const [viewMode, setViewMode] = useState('portfolio'); // 'portfolio' or 'individual'

  const portfolioData = {
    totalRevenue: '£4.2M',
    totalQuotes: '1,248,567',
    avgConversion: '8.3%',
    portfolioGrowth: '+15.2%',
  };

  const products = [
    {
      id: 'car',
      name: 'Car Insurance',
      icon: '🚗',
      color: '#FF6B35',
      revenue: '£1.8M',
      quotes: '524,231',
      conversion: '8.7%',
      growth: '+12%',
      marketPosition: 2,
      avgPrice: '£687',
      competitorGap: '£12.50',
      opportunity: 'high',
    },
    {
      id: 'home',
      name: 'Home Insurance',
      icon: '🏠',
      color: '#4ECDC4',
      revenue: '£1.2M',
      quotes: '312,456',
      conversion: '7.9%',
      growth: '+8%',
      marketPosition: 3,
      avgPrice: '£423',
      competitorGap: '£8.20',
      opportunity: 'medium',
    },
    {
      id: 'pet',
      name: 'Pet Insurance',
      icon: '🐾',
      color: '#95E1D3',
      revenue: '£680K',
      quotes: '189,234',
      conversion: '9.1%',
      growth: '+15%',
      marketPosition: 1,
      avgPrice: '£312',
      competitorGap: '-£5.40',
      opportunity: 'low',
    },
    {
      id: 'life',
      name: 'Life Insurance',
      icon: '💼',
      color: '#F38181',
      revenue: '£520K',
      quotes: '145,678',
      conversion: '6.8%',
      growth: '-2%',
      marketPosition: 4,
      avgPrice: '£845',
      competitorGap: '£18.90',
      opportunity: 'high',
    },
    {
      id: 'travel',
      name: 'Travel Insurance',
      icon: '✈️',
      color: '#AA96DA',
      revenue: '£180K',
      quotes: '76,968',
      conversion: '11.2%',
      growth: '+22%',
      marketPosition: 2,
      avgPrice: '£156',
      competitorGap: '£3.20',
      opportunity: 'medium',
    },
  ];

  const getOpportunityLabel = (opportunity) => {
    const labels = {
      high: '🔥 High Impact',
      medium: '⚡ Medium Impact',
      low: '✓ Optimized',
    };
    return labels[opportunity];
  };

  return (
    <div className="portfolio-view">
      <div className="portfolio-header">
        <div>
          <h1 className="page-title">Portfolio View</h1>
          <p className="page-subtitle">
            Manage and analyze all your products in one place
          </p>
        </div>

        <div className="view-mode-toggle">
          <button
            className={`toggle-btn ${viewMode === 'portfolio' ? 'active' : ''}`}
            onClick={() => setViewMode('portfolio')}
          >
            📊 Portfolio View
          </button>
          <button
            className={`toggle-btn ${viewMode === 'individual' ? 'active' : ''}`}
            onClick={() => setViewMode('individual')}
          >
            📋 Individual Products
          </button>
        </div>
      </div>

      {viewMode === 'portfolio' && (
        <>
          {/* Portfolio Summary */}
          <div className="portfolio-summary">
            <div className="summary-card highlight">
              <div className="summary-icon">💰</div>
              <div className="summary-content">
                <p className="summary-label">Total Portfolio Revenue</p>
                <h2 className="summary-value">{portfolioData.totalRevenue}</h2>
                <span className="summary-trend up">
                  ↗ {portfolioData.portfolioGrowth}
                </span>
              </div>
            </div>

            <div className="summary-card">
              <div className="summary-icon">📊</div>
              <div className="summary-content">
                <p className="summary-label">Total Quotes</p>
                <h3 className="summary-value">{portfolioData.totalQuotes}</h3>
              </div>
            </div>

            <div className="summary-card">
              <div className="summary-icon">✅</div>
              <div className="summary-content">
                <p className="summary-label">Avg Conversion</p>
                <h3 className="summary-value">{portfolioData.avgConversion}</h3>
              </div>
            </div>

            <div className="summary-card">
              <div className="summary-icon">🎯</div>
              <div className="summary-content">
                <p className="summary-label">Active Products</p>
                <h3 className="summary-value">{products.length}</h3>
              </div>
            </div>
          </div>

          {/* Portfolio Chart */}
          <div className="portfolio-chart-section">
            <h2 className="section-title">Revenue Distribution</h2>
            <div className="revenue-chart">
              {products.map((product) => {
                const revenueNum = parseFloat(product.revenue.replace(/[£MK]/g, ''));
                const totalRevenue = 4.2; // Total in millions
                const percentage = ((revenueNum / totalRevenue) * 100).toFixed(1);
                
                return (
                  <div key={product.id} className="chart-bar-wrapper">
                    <div className="chart-label">
                      <span className="chart-product">
                        {product.icon} {product.name}
                      </span>
                      <span className="chart-value">{product.revenue}</span>
                    </div>
                    <div className="chart-bar">
                      <div
                        className="chart-bar-fill"
                        style={{
                          width: `${percentage}%`,
                          background: product.color,
                        }}
                      >
                        <span className="chart-percentage">{percentage}%</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cross-Product Insights */}
          <div className="cross-product-insights">
            <h2 className="section-title">Cross-Product Insights</h2>
            <div className="insights-grid">
              <div className="insight-card">
                <div className="insight-icon">🔗</div>
                <h3 className="insight-title">Cross-Sell Opportunity</h3>
                <p className="insight-text">
                  42% of Car Insurance customers also quote for Home Insurance.
                  Potential revenue: <strong>£340K/year</strong>
                </p>
              </div>
              <div className="insight-card">
                <div className="insight-icon">📊</div>
                <h3 className="insight-title">Seasonal Trends</h3>
                <p className="insight-text">
                  Travel Insurance peaks in May-August. Consider promotional pricing
                  for Life & Pet during these months.
                </p>
              </div>
              <div className="insight-card">
                <div className="insight-icon">👥</div>
                <h3 className="insight-title">Customer Segments</h3>
                <p className="insight-text">
                  Young families (30-40) purchase average of 2.3 products. Focus
                  bundling strategies on this demographic.
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {viewMode === 'individual' && (
        <div className="individual-products">
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-card-header">
                  <div className="product-icon-large" style={{ background: product.color }}>
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="product-card-title">{product.name}</h3>
                    <span className={`opportunity-badge ${product.opportunity}`}>
                      {getOpportunityLabel(product.opportunity)}
                    </span>
                  </div>
                </div>

                <div className="product-metrics">
                  <div className="metric-row">
                    <span className="metric-label">Revenue</span>
                    <span className="metric-value">{product.revenue}</span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label">Quotes</span>
                    <span className="metric-value">{product.quotes}</span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label">Conversion</span>
                    <span className="metric-value">{product.conversion}</span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label">Growth</span>
                    <span className={`metric-value ${product.growth.startsWith('+') ? 'positive' : 'negative'}`}>
                      {product.growth}
                    </span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label">Market Position</span>
                    <span className="metric-value">#{product.marketPosition}</span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label">Avg Price</span>
                    <span className="metric-value">{product.avgPrice}</span>
                  </div>
                  <div className="metric-row highlight">
                    <span className="metric-label">Price Gap to Leader</span>
                    <span className={`metric-value ${product.competitorGap.startsWith('-') ? 'advantage' : 'gap'}`}>
                      {product.competitorGap}
                    </span>
                  </div>
                </div>

                <div className="product-actions">
                  <button className="action-btn primary-small">
                    View Details
                  </button>
                  <button className="action-btn secondary-small">
                    Optimize
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioView;


