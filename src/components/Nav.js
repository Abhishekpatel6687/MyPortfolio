import React from "react";
import {FaAlignJustify} from "react-icons/fa";
import {Link} from "react-router-dom"

const Nav = () => {
  const [state,setState]=React.useState(true);
  return (
    <nav className="navbar"> 
      <div className="container">
        <div className="navbar_container">
          <ul className="navbar_left">
            <div className="navbar_left-logo">
              <img src="/images/1.png" alt="logo"/>
            </div>
          </ul>
          {state?(
            <ul className="navbar_right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Skills & Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/prices">price</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
          ):null
          }
         
        </div>
      </div>
      <div className="toggle" onClick={()=>setState(!state)}>{FaAlignJustify}</div>
    </nav>
  );
};

export default Nav;
