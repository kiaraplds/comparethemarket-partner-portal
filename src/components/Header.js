import React from 'react';
import './Header.css';

const Header = ({ selectedProducts, setSelectedProducts, dateRange, setDateRange }) => {
  const products = [
    { id: 'all', name: 'All Products', color: '#0066CC' },
    { id: 'car', name: 'Car Insurance', color: '#FF6B35' },
    { id: 'home', name: 'Home Insurance', color: '#4ECDC4' },
    { id: 'pet', name: 'Pet Insurance', color: '#95E1D3' },
    { id: 'life', name: 'Life Insurance', color: '#F38181' },
    { id: 'travel', name: 'Travel Insurance', color: '#AA96DA' },
    { id: 'energy', name: 'Energy', color: '#FCBAD3' },
  ];

  const handleProductToggle = (productId) => {
    if (productId === 'all') {
      setSelectedProducts(['all']);
    } else {
      const newSelection = selectedProducts.filter(id => id !== 'all');
      if (selectedProducts.includes(productId)) {
        const filtered = newSelection.filter(id => id !== productId);
        setSelectedProducts(filtered.length === 0 ? ['all'] : filtered);
      } else {
        setSelectedProducts([...newSelection, productId]);
      }
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-filters">
          <div className="filter-group">
            <label className="filter-label">Products:</label>
            <div className="product-pills">
              {products.map((product) => (
                <button
                  key={product.id}
                  className={`product-pill ${
                    selectedProducts.includes(product.id) ? 'active' : ''
                  }`}
                  style={{
                    '--pill-color': product.color,
                  }}
                  onClick={() => handleProductToggle(product.id)}
                >
                  <span className="pill-indicator"></span>
                  {product.name}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label className="filter-label">Time Period:</label>
            <select 
              className="date-select"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="last7days">Last 7 Days</option>
              <option value="last30days">Last 30 Days</option>
              <option value="last90days">Last 90 Days</option>
              <option value="lastQuarter">Last Quarter</option>
              <option value="lastYear">Last Year</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
        </div>

        <div className="header-actions">
          <button className="action-btn secondary">
            📥 Export Data
          </button>
          <button className="action-btn primary">
            ⚙️ Settings
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;


