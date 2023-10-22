import React from "react";
import { FaGithub, FaCamera, FaCode, FaApple, FaFileVideo, FaSearchPlus } from "react-icons/fa";
import Nav from "./Nav"

const Services = () => {
    const[header]=React.useState({mainHeader:"SERVICES",subHeading:"My Services",text:" Lauren Ispam is simply dummy text of the printing and typecasting interest in external duty."});
 const [state]=React.useState([
    {
        id:1,
        icon:<FaGithub  className="commonIcon" />,
        heading:"Web Development",
        text:"Server side propseven a particular function export another page Task is going on in server crops",
    },
    {
        id:2,
        icon:<FaCamera  className="commonIcon" />,
     
        heading:"Photography",
        text:"Server side propseven a particular function export another page Task is going on in server crops",
    },
    {
        id:3,
        icon:<FaCode  className="commonIcon"  />,
       
        heading:"Web Development",
        text:"Server side propseven a particular function export another page Task is going on in server crops",
    },
    {
        id:4,
        icon:<FaApple  className="commonIcon"  />,
     
        heading:"App Development",
        text:"Server side propseven a particular function export another page Task is going on in server crops",
    },
    {
        id:5,
        icon:<FaFileVideo  className="commonIcon"  />,
      
        heading:"Video Editing",
        text:"Server side propseven a particular function export another page Task is going on in server crops",
    },
    {
        id:6,
        icon:<FaSearchPlus  className="commonIcon"  />,
      
        heading:"SEO Expert",
        text:"Server side propseven a particular function export another page Task is going on in server crops",
    },
])
  return (
    <>
    <Nav />
     <div className="services">
      <div className="container">
        <div className="services_header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader"> {header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row ">
          {state.map(info=> {
            return(
            <div className="col-4">
              <div className="services_box">
                {info.icon}
                <div className="services_box-header">{info.heading}</div>
                <div className="services_box-p">{info.text}</div>
              </div>
            </div>
          )})}
          </div>

        </div>
      </div>
    </div>

    </>
   
  );
};

export default Services;
