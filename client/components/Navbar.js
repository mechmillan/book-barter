import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";

import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  background: dodgerblue;
`;

const Navbar = () => {
  return (
    <Router>
      <div>
        <StyledNav>
          <Link to="/home">BookBarter</Link>
          <Link to="/my-books">My Books</Link>
          <Link to="/looking-for">Looking For</Link>
          <Link to="/login">Login</Link>
          <Link to="/logout">Logout</Link>
        </StyledNav>
        <Route exact path="/home" component={Home} />
      </div>
    </Router>
  );
};

export default Navbar;
