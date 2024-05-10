// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
// import Dashboard from './components/Dashboard';

function App() {
  return (
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route path="/login" component={Login} />
    //       <Route path="/signup" component={Signup} />
    //       {/* <Route path="/dashboard" component={Dashboard} /> */}
    //     </Routes>
    //   </div>
    // </Router>
    <>
    <Login/>
    <Signup/>
    </>
  );
}

export default App;
