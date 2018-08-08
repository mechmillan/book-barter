import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Router>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
    </Router>
  );
};

export default Navbar;
