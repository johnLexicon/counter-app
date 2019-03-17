import React from "react";

//Stateless functional component
//The props must be declared as a parameter to the functional component.
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="https://www.google.se">
        Navbar{" "}
        <span className="badge badge-secondary">{props.totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
