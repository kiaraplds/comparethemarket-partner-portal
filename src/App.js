import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import DashboardLiveboard from './pages/DashboardLiveboard';
import Benchmarking from './pages/Benchmarking';
import LeversOptimizer from './pages/LeversOptimizer';
import MarketExpansion from './pages/MarketExpansion';
import Segmentation from './pages/Segmentation';
import CompareAI from './pages/CompareAI';
import MyReports from './pages/MyReports';
import './App.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="app">
          <Sidebar />
          <div className="main-content">
            <div className="content-area">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<DashboardLiveboard />} />
                <Route path="/compareai" element={<CompareAI />} />
                <Route path="/my-reports" element={<MyReports />} />
                <Route path="/benchmarking" element={<Benchmarking />} />
                <Route path="/levers" element={<LeversOptimizer />} />
                <Route path="/market-expansion" element={<MarketExpansion />} />
                <Route path="/segmentation" element={<Segmentation />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;


