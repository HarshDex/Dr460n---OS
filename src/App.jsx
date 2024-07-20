// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import QuestCard from "./pages/QuestCard";
// import Scores from "./pages/Scores";

const App = () => {
  return (
    <Router>
      <div className="bg-[url('/bg.jpg')] bg-no-repeat bg-cover opacity-[100%]  saturate-50  text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/file/:name" element={<QuestCard />} />
          {/* <Route path="/scores" element={<Scores />} /> */}
          {/* Add more routes for different pages if needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
