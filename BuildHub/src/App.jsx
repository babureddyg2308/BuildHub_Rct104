import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Fitness() {
  return <h2>Fitness Page</h2>;
}

function Sports() {
  return <h2>Sports Page</h2>;
}

function Care() {
  return <h2>Care Page</h2>;
}

function Mind() {
  return <h2>Mind Page</h2>;
}

function Store() {
  return <h2>Store Page</h2>;
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/care" element={<Care />} />
        <Route path="/mind" element={<Mind />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Router>
  );
}

export default App;
