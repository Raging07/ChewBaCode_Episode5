import React, { useEffect, useRef, useState } from "react";

export default function ChatSupport() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const chatBoxRef = useRef(null);
  const modalRef = useRef(null);

  // Your response dictionary converted to React
  const responses = {
    "hi": "Hello! 👋 I’m ChewBaCode Chat Support. You can ask me about electricity rates, disputes, reconnections, or power line issues.",
    "hello": "Hello! 👋 How can I assist you today?",
    "residential rate": "The current residential peak-hour rate is ₱11.25/kWh (5:00 PM–10:00 PM weekdays). Off-peak rate is ₱9.50/kWh.",
    "off-peak rate": "The off-peak residential rate is ₱9.50/kWh.",
    "disputed meter": "To dispute a meter reading, submit online or visit the billing office within 10 days.",
    "reconnection fee": "Reconnection fees are ₱200–₱300. Reconnection occurs within 24–48 hours.",
    "power line damage": "Stay 10 meters away and report it immediately via hotline or app.",
    "thank you": "You’re welcome! 😊",
    "thanks": "You’re welcome! 😊",
    "billing inquiry": "For billing inquiries, check your latest bill online or visit a customer service center.",
    "payment options": "Payments can be made via online banking, centers, or offices.",
    "peak hours": "Peak hours are 5 PM – 10 PM during weekdays.",
    "off-peak hours": "Off-peak hours are 10:01 PM – 4:59 PM.",
    "how to save electricity": "Use LED bulbs, unplug idle devices, avoid high-power appliances during peak hours.",
    "contact support": "You may reach support via hotline, email, or mobile app.",
    "report outage": "Report outages through the app, website, or hotline.",
    "meter reading": "Meter readings occur monthly; you can submit manually online.",
    "late payment": "Late payments may incur reconnection fees and delays.",
    "energy-saving tips": "Use LEDs, unplug devices, schedule tasks during off-peak hours.",
    "new connection": "Apply online or visit the service center with ID and proof of address.",
    "safety tips": "Stay away from exposed wires and fallen poles.",
    "faq": "Ask me about rates, disputes, reconnections, outages, safety, and payments."
  };

  // Auto-scroll when messages update
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  // Add user message
  const addUserMessage = (msg) => {
    setMessages((prev) => [...prev, { from: "user", text: msg }]);
  };

  // Add bot message
  const addBotMessage = (msg) => {
    setMessages((prev) => [...prev, { from: "bot", text: msg }]);
  };

  // Main send logic
  const sendMessage = () => {
    const message = input.trim();
    if (!message) return;

    addUserMessage(message);
    setInput("");

    const lower = message.toLowerCase();
    let found = false;

    for (const key in responses) {
      if (lower.includes(key)) {
        addBotMessage(responses[key]);
        found = true;
        break;
      }
    }

    if (!found) {
      addBotMessage(
        "Sorry, I didn’t understand that. You can ask about electricity rates, meter disputes, reconnections, or power line issues."
      );
    }
  };

  // Restart chat
  const restartChat = () => {
    setMessages([]);
    addBotMessage(
      "Hello! 👋 I’m ChewBaCode Chat Support. You can ask me about electricity rates, disputes, reconnections, or power line issues."
    );
  };

  // Open chat modal
  const openChat = () => {
    setOpen(true);
    if (messages.length === 0) restartChat();
  };

  // Close on clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (modalRef.current && e.target === modalRef.current) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {/* Floating Chat Button */}
      <button id="chatSupportBtn" style={styles.chatBtn} onClick={openChat}>
        💬
      </button>

      {/* Chat Modal */}
      {open && (
        <div id="chatModal" ref={modalRef} style={styles.modal}>
          <div style={styles.container}>
            {/* Header */}
            <div style={styles.header}>
              <span>Chat Support</span>
              <div>
                <button
                  id="restartHeaderBtn"
                  style={styles.headerBtn}
                  onClick={restartChat}
                >
                  Restart
                </button>
                <button
                  id="closeChat"
                  style={styles.headerBtn}
                  onClick={() => setOpen(false)}
                >
                  ×
                </button>
              </div>
            </div>

            {/* Chat Box */}
            <div id="chatBox" style={styles.chatBox} ref={chatBoxRef}>
              {messages.map((m, i) => (
                <p key={i} style={{ fontWeight: m.from === "bot" ? "bold" : "normal" }}>
                  {m.from === "user" ? "You" : "Agent"}: {m.text}
                </p>
              ))}
            </div>

            {/* Input Area */}
            <div style={styles.inputArea}>
              <input
                id="chatMessage"
                type="text"
                style={styles.input}
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button id="sendChat" style={styles.sendBtn} onClick={sendMessage}>
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// --- Inline Styling (same look as your original UI) ---
const styles = {
  chatBtn: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    border: "none",
    background: "#007BFF",
    color: "#fff",
    fontSize: "24px",
    cursor: "pointer",
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    background: "#fff",
    width: "350px",
    maxHeight: "500px",
    borderRadius: "8px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    background: "#007BFF",
    color: "white",
    padding: "10px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerBtn: {
    background: "none",
    border: "none",
    fontSize: "16px",
    color: "white",
    cursor: "pointer",
    marginLeft: "8px",
  },
  chatBox: {
    flex: 1,
    overflowY: "auto",
    padding: "10px",
    borderBottom: "1px solid #ccc",
  },
  inputArea: {
    display: "flex",
    padding: "10px",
    gap: "5px",
  },
  input: {
    flex: 1,
    padding: "6px",
  },
  sendBtn: {
    padding: "6px 12px",
    cursor: "pointer",
  },
};
