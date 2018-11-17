import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home/Home";

import { ButtonLink, Nav } from "./Navbar.css";

const Navbar = () => {
  return (
    <Router>
      <>
        <Nav>
          <ButtonLink to="/home">Book Barter</ButtonLink>
          <ButtonLink to="/my-books">My Books</ButtonLink>
          <ButtonLink to="/looking-for">Looking For</ButtonLink>
          <ButtonLink to="/login">Login</ButtonLink>
          <ButtonLink to="/logout">Logout</ButtonLink>
        </Nav>

        <Route exact path="/home" component={Home} />
      </>
    </Router>
  );
};

export default Navbar;
