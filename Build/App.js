import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Main from "./components/Main"; // Make sure this exists
import Articles from "./components/Articles"; // <- missing?


function App() {
 return (
  <Router>
    <Routes>
     <Route path="/" element={<Dashboard />} />
     <Route path="/main" element={<Main />} /> {/* <-- add this */}
      <Route path="/articles" element={<Articles />} />
     </Routes>
   </Router>
 );}

export default App;
