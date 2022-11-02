import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="row navbar">
      <div className="col-s navbar-leftside">
        <h2>HB</h2>
      </div>

      <ul className="col navbar-ul">
        <li className="navbar-li">
          <Link to="/" className="navbar-link">
            about
          </Link>
        </li>
        <li className="navbar-li">
          <Link to="/" className="navbar-link">
            expertise
          </Link>
        </li>
        <li className="navbar-li">
          <Link to="/" className="navbar-link">
            work
          </Link>
        </li>
        <li className="navbar-li">
          <Link to="/" className="navbar-link">
            contact
          </Link>
        </li>
      </ul>
      <div className="col-s navbar-rightside">
        <button className="navbar-rightside-button btn">Resume</button>
      </div>
    </div>
  );
}

export default Navbar;
