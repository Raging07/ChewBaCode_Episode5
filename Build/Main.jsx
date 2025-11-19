import React from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css"; // Your old main.html styles

export default function Main() {
  const navigate = useNavigate();

  return (
    <div className="main-body">
      {/* Header */}
      <header className="header">
        <h1>ChewBaCode Service</h1>
        <nav>
          <button onClick={() => navigate("/")} className="article-icon" title="Articles">
           
          </button>
        </nav>
      </header>

      {/* Description */}
      <p className="subtitle">
        Explore our frequently asked questions to find quick answers and solutions for common service inquiries.
      </p>

      {/* Dashboard Cards */}
      <section className="cards">
        <div className="card">
          <div className="icon">⚡</div>
          <h3>What's the current residential rate for peak hours?</h3>
          <p>Find out the latest rates for residential electricity during peak hours to manage your energy consumption effectively.</p>
          <button className="learn-btn" onClick={() => navigate("/articles#residential-rate")}>
            Learn More
          </button>
        </div>

        <div className="card">
          <div className="icon">💳</div>
          <h3>How do we handle disputed meter readings?</h3>
          <p>Learn about our procedures for addressing and resolving disputed meter readings to ensure accurate billing.</p>
          <button className="learn-btn" onClick={() => navigate("/articles#disputed-meter")}>
            Learn More
          </button>
        </div>

        <div className="card">
          <div className="icon">💡</div>
          <h3>What are the reconnection fees for late payment?</h3>
          <p>Get information on the fees associated with reconnecting your service after a late payment to avoid unexpected charges.</p>
          <button className="learn-btn" onClick={() => navigate("/articles#reconnection-fees")}>
            Learn More
          </button>
        </div>

        <div className="card">
          <div className="icon">⚙️</div>
          <h3>What's the procedure for reporting power line damage?</h3>
          <p>Understand the steps to report power line damage promptly to ensure safety and quick restoration of service.</p>
          <button className="learn-btn" onClick={() => navigate("/articles#power-line")}>
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
