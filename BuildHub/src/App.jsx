import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import{Route, Routes} from 'react-router-dom';
import BodyAdd from "./components/BodyAdd";
import Fitnes from './components/Fitnes'
import NavBar2 from "./components/NavBar2";
import BuildTransform from "./components/BuildTransform";

const App = () => {
  return (
    <div>
      <Navbar />
      
       <Routes>
       <Route path="/" element={<BodyAdd/>}> </Route>
        
         <Route path="/fitnes" element={<Fitnes/>}></Route>
         <Route path="/transform" element={<BuildTransform/>}></Route>
         
       </Routes>
      
      <Footer />
    </div>
  );
};

export default App;
