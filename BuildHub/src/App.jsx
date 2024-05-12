import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Body from "./components/Body/Body";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Main />
      {/* <Body /> */}
    </div>
  );
};

export default App;
