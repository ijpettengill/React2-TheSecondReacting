import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>

        <Nav className="ml-auto d-flex justify-content-end" navbar>
          <NavItem className="d-flex align-items-center">
            <NavLink to="/snacks" className="nav-link-snacks">Snacks</NavLink>
            <NavLink to="/drinks" className="nav-link-drinks">Drinks</NavLink>
            <NavLink to="/add" className="nav-link-add">Add</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;