import React from "react";
import { Cafe } from "../shared/cafe";
import { Fade } from 'react-animation-components';
import ScrollAnimation from "react-animate-on-scroll";

function Home() {

  return (
    <React.Fragment>
      <Fade in>
      <div className="container">
        <div className="row">
          <div className="col text-center mt-5 pb-5 mb-5">
            <img src={Cafe[0].img} alt="" className="img-fluid box-shadow" />
          </div>
        </div>
      </div>
      </Fade>

        <div className="container-fluid bg shadow-lg justify-content-center d-flex flex-column align-items-start">
          
        </div>
    
 
        <div className="container-fluid">
        <div className="row mt-5 mb-5 text-center">
          <div className="col">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce className="d-inline-block">
            <img
              alt=""
              src={Cafe[1].img}
              className="img-fluid p-2 rounded"
              height={453}
              width={453}
            /> 
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce className="d-inline-block">
            <img
              alt=""
              src={Cafe[2].img}
              className="img-fluid p-2 rounded"
              height={453}
              width={453}
            />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" animateOnce className="d-inline-block">
            <img
              alt=""
              src={Cafe[3].img}
              className="img-fluid p-2 rounded"
              height={453}
              width={453}
            />
            </ScrollAnimation>
          </div>
        </div>
      </div>
     
      
      
    </React.Fragment>
  );
}

export default Home;
