import React from "react";
import Nav from "./Nav"
import About from "./About"
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaInstagram,
} from "react-icons/fa";
import Services from "./Services";
import Prices from "./Prices";
import Contact from "./Contact";
const Home = () => {
  const [state] = React.useState({
    title: "I am Abhishek Patel",
    text: "I am Abhishek, Professional Web Developer with long time experience in this field",
    image:'/images/myPic.png',
  });
  return (
    <>
    <Nav/>
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header_content">
              <div className="header_section">
                <ul className="header_ul">
                  <li>
                   <a href="instagram.com/simple_boy_abhishek_6687"><FaInstagram /></a> 
                  </li>
                  <li>
                   <a href="https://www.linkedin.com/in/abhishek-patel-2a6599240"><FaLinkedinIn /></a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100027938424252&mibextid=ZbWKwL"><FaFacebookF /></a>
                  </li>
                  <li>
                   <a href="tel:91+7071326687"> <FaPhoneAlt /></a>
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div>
                   <button className="btn btn-outline">My Portfolio</button> 
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner_img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <About />
    <Services/>
    <Prices/>
    <Contact/>
    </>
  );
};
export default Home;
