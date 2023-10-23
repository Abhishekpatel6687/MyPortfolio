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
              <img src="/images/logo1.png" alt="logo"/>
            </div>
          </ul>
          {state?(
            <div className="navbar_right">
              <button><Link to="/">Home</Link> </button>                  
              <button><Link to="/services">Skills</Link></button>           
              <button><Link to="/about">About</Link> </button>           
              <button><Link to="/prices">Projects</Link></button>                              
              <button><Link to="/contact">contact</Link> </button>    
          </div>
          ):null
          }
         
        </div>
      </div>
      <div className="toggle" onClick={()=>setState(!state)}>{FaAlignJustify}</div>
    </nav>
  );
};

export default Nav;
