import React from "react";
import Nav from "./Nav"
const About = () => {
  const [header] = React.useState({
    subHeading: "About Me",
    text: "Server side propseven a particular function export another page Task is going on in server crops",
  });
 const[state]=React.useState([
  {id:1,title:"Name",text:"Abhishek Patel"},
  {id:2,title:"Email",text:"abhi7868090@gmail.com"},
  {id:3,title:"Phone",text:"7071326687"},
  {id:4,title:"LinkedIn",text:"abhishek-patel-2a6599240"},
]);
  return (
    <>
    <Nav />
    <div className="about">
      <div className="container">
        <div className="common">
          {/* <h3 className="heading">{header.mainHeader}</h3> */}
          <h1 className="mainHeader"> {header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row h-650 alignCenter">
            <div className="col-6">
            <div className="about_img">
                <img src="/images/pic.png" alt="img"/>
            </div>
             
            </div>
            <div className="col-6">
            <div className="about_info">
              <h1>Hi There</h1>
              <div className="about_info-p1">
              In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis
              </div>
              <div className="about_info-p2">
              nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis porta sem turpis quis leo. Nulla in feugiat elit
              </div>
              <div className="info_contacts">
              <div className="row">
              {state.map(info =>(
                <div className="col-6">
                  <strong>{info.title}</strong>
                  <p>{info.text}</p>
                </div>
              ))}
              </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
