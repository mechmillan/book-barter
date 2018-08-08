import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";

const Navbar = () => {
  return (
    <Router>
      <div className="navigation">
        <nav>
          <Link to="/home">BookBarter</Link>
          <Link to="/my-books">My Books</Link>
          <Link to="/looking-for">Looking For</Link>
          <Link to="/login">Login</Link>
          <Link to="/logout">Logout</Link>
        </nav>
        <Route exact path="/home" component={Home} />
      </div>
    </Router>
  );
};

export default Navbar;
