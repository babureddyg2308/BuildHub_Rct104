import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/care">Care</Link>
      <Link to="/mind">Mind</Link>
    </nav>
  );
}

export default Navbar