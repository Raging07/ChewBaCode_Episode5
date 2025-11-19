import React from "react";
import "./Service.css"; // optional – see CSS below
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

export default function Service() {
  return (
    <div className="service-body">
      {/* Header */}
      <header className="service-header">
        <h1>ChewBaCode Service</h1>
        <nav>
          <a href="articles.html" className="service-article-icon" title="Articles">
            <FontAwesomeIcon icon={faNewspaper} />
          </a>
        </nav>
      </header>

      {/* Description */}
      <p className="service-subtitle">
        Explore our frequently asked questions to find quick answers and solutions for common service inquiries.
      </p>

      {/* Cards */}
      <section className="service-cards">
        <div className="service-card">
          <div className="service-icon">⚡</div>
          <h3>What's the current residential rate for peak hours?</h3>
          <p>Find out the latest rates for residential electricity during peak hours to manage your energy consumption effectively.</p>
          <button
            className="service-learn-btn"
            onClick={() => (window.location.href = "articles.html#residential-rate")}
          >
            Learn More
          </button>
        </div>

        <div className="service-card">
          <div className="service-icon">💳</div>
          <h3>How do we handle disputed meter readings?</h3>
          <p>Learn about our procedures for addressing and resolving disputed meter readings to ensure accurate billing.</p>
          <button
            className="service-learn-btn"
            onClick={() => (window.location.href = "articles.html#disputed-meter")}
          >
            Learn More
          </button>
        </div>

        <div className="service-card">
          <div className="service-icon">💡</div>
          <h3>What are the reconnection fees for late payment?</h3>
          <p>Get information on the fees associated with reconnecting your service after a late payment.</p>
          <button
            className="service-learn-btn"
            onClick={() => (window.location.href = "articles.html#reconnection-fees")}
          >
            Learn More
          </button>
        </div>

        <div className="service-card">
          <div className="service-icon">⚙️</div>
          <h3>What's the procedure for reporting power line damage?</h3>
          <p>Understand the steps to report power line damage promptly to ensure safety and quick restoration of service.</p>
          <button
            className="service-learn-btn"
            onClick={() => (window.location.href = "articles.html#power-line")}
          >
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
