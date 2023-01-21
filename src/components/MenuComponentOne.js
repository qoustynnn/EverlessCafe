import React from "react";
import { Fade } from "react-animation-components";

function MenuVersionOne() {
  return (
    <React.Fragment>
      <Fade in>
        <div className="container mt-3 text-center vh-50 justify-content-center d-flex flex-column shadow-sm">
          <h1 className=" text-bold mb-5 nav-text">Order Online for Pick Up</h1>
          <div className="row">
            <div className="col">
              <span className="text-bold nav-text">
                Everless Cafe - Brooklyn Park
              </span>
              <p className="mt-3 mb-5 nav-text">
                8462 Xerxes Ave N,
                <br /> Brooklyn Park, MN 55444
              </p>
              <a
                className="btn-custom "
                href="https://www.clover.com/pos-systems/online-ordering"
              >
                Place an Order- Brooklyn Park
              </a>
            </div>
          </div>
        </div>{" "}
      </Fade>
    </React.Fragment>
  );
}

export default MenuVersionOne;
