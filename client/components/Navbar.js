import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";

const Navbar = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/home">Home</Link>
        </nav>
        <Route exact path="/home" component={Home} />
      </div>
    </Router>
  );
};

export default Navbar;
