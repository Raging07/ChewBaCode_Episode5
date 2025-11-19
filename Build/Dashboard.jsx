import React from "react";
import "./Dashboard.css"; // Optional: your existing styles
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-body">
      {/* Header */}
      <header className="dashboard-header">
        <h1>Welcome to ChewBaCode</h1>
      </header>

      {/* Quick Overview Cards */}
      <section className="dashboard-cards">
        <div className="dashboard-card">
          <div className="dashboard-icon">⚡</div>
          <h3>Check Rates</h3>
          <p>See the latest electricity rates for residential and commercial usage.</p>

        
        </div>

        <div className="dashboard-card">
          <div className="dashboard-icon">💳</div>
          <h3>Billing Info</h3>
          <p>Access your billing history and manage payments easily.</p>
           
        </div>

        <div className="dashboard-card">
          <div className="dashboard-icon">💡</div>
          <h3>Support & FAQ</h3>
          <p>Quickly find answers to common issues and procedures.</p>

          
        </div>
      </section>

      {/* Main Menu Button */}
      <div className="dashboard-main-menu-wrapper">
       <button
            className="dashboard-learn-btn"
            onClick={() => navigate("/main")}
          >
                Main Menu
            </button>
      </div>
    </div>
  );
}
