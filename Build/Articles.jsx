import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import ChatSupport from "./ChatSupport"; // If you already have it
import "./articles-style.css";

export default function Articles() {
  const navigate = useNavigate(); // ✅ Initialize navigate

  const [activeArticle, setActiveArticle] = useState(null);

  // Detect URL hash to show specific article
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActiveArticle(hash);
    } else {
      setActiveArticle(null);
    }
  }, []);

  // Helper to conditionally show an article
   const show = (id) => {
    if (!activeArticle) return true; // show all if no hash
    return activeArticle === id; // show only selected
  };

  return (
    <div className="articles-page">

      {/* Header */}
      <header className="header">
        <h1>ChewBaCode Articles</h1>
        <button className="back-btn" onClick={() => navigate("/main")}>
          ← Back
        </button>
      </header>

      {/* Articles Section */}
      <section className="articles">

        {/* Residential Rate */}
        {show("residential-rate") && (
          <article id="residential-rate">
            <h2>Residential Rate for Peak Hours</h2>

            <p className="question">Question 1: What’s the current residential rate for peak hours?</p>       
            <p className="question">Question 2: How often are rates updated?</p>          
            <p className="question">Question 3: What is the off-peak rate?</p>  
            <p className="question">Question 4: How can I check my current rate?</p>       
            <p className="question">Question 5: Why are rates higher during peak hours?</p>
           
          </article>
        )}

        {/* Disputed Meter */}
        {show("disputed-meter") && (
          <article id="disputed-meter">
            <h2>Disputed Meter Readings</h2>

            <p className="question">Question 1: How do I file a dispute?</p>
            <p className="question">Question 2: What documents are required?</p>
            <p className="question">Question 3: How long does resolution take?</p>
            <p className="question">Question 4: Will electricity disconnect during a dispute?</p>
            <p className="question">Question 5: What happens if incorrect readings are confirmed?</p>
          
          </article>
        )}

        {/* Reconnection Fees */}
        {show("reconnection-fees") && (
          <article id="reconnection-fees">
            <h2>Reconnection Fees for Late Payment</h2>

            <p className="question">Question 1: What is the reconnection fee?</p>         
            <p className="question">Question 2: How long does reconnection take?</p>     
            <p className="question">Question 3: What are the payment options?</p>      
            <p className="question">Question 4: What if the payment is delayed?</p>
            <p className="question">Question 5: Are there any additional charges?</p>

          </article>
        )}

        {/* Power Line */}
        {show("power-line") && (
          <article id="power-line">
            <h2>Reporting Power Line Damage</h2>

            <p className="question">Question 1: What is the first action to take?</p>          
            <p className="question">Question 2: How can I report it quickly?</p>           
            <p className="question">Question 3: Can I report anonymously?</p>
            <p className="question">Question 4: What is the usual response time?</p>     
            <p className="question">Question 5: What should I do while waiting?</p>
           
          </article>
        )}

      </section>

      {/* Chat Support Component */}
      <ChatSupport />
    </div>
  );
}
