import React from "react";
import {FaAlignJustify} from "react-icons/fa";
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
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Skills & Projects</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">contact</a>
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
