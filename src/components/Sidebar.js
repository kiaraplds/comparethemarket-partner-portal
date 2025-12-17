import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import './Sidebar.css';

const Sidebar = () => {
  const { userTier, isBasic, switchToBasic, switchToPremium } = useUser();

  const navItems = [
    { path: '/', icon: '🏠', label: 'Home', exact: true },
    { path: '/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/compareai', icon: '🤖', label: 'CompareAI', premium: true },
    { path: '/my-reports', icon: '📄', label: 'My Reports' },
    { path: '/benchmarking', icon: '📈', label: 'Benchmarking' },
    { path: '/levers', icon: '⚡', label: '4 Levers Optimizer' },
    { path: '/segmentation', icon: '👥', label: 'Segmentation' },
    { path: '/market-expansion', icon: '🌍', label: 'Market Expansion' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <img 
            src="/ctm-logo.png" 
            alt="Compare the Market" 
            className="logo-image"
          />
        </div>
        <p className="portal-subtitle">Partner Portal</p>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.exact}
            className={({ isActive }) => 
              `nav-item ${isActive ? 'active' : ''} ${item.premium && isBasic ? 'locked' : ''}`
            }
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
            {item.premium && isBasic && <span className="lock-icon">🔒</span>}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-switcher">
          <label htmlFor="partner-select" className="switcher-label">
            Switch Partner
          </label>
          <select 
            id="partner-select"
            className="partner-dropdown"
            value={userTier}
            onChange={(e) => e.target.value === 'premium' ? switchToPremium() : switchToBasic()}
          >
            <option value="premium">👑 Partner A (Premium)</option>
            <option value="basic">👤 Partner B (Basic)</option>
          </select>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;


