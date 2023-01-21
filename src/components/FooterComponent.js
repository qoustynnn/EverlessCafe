import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Footer(props) {
  return (
    
    <footer className="site-footer m-5">
      <div className="container pt-4">
        <div className="row">
          {" "}<ScrollAnimation animateIn="fadeIn" animateOnce>
          <div className="col-12 text-center mb-4">
            <a className="btn btn-social-icon" href="http://instagram.com/">
              <i className="fa fa-instagram icon" />
            </a>{" "}
            <a className="btn btn-social-icon" href="http://www.facebook.com/">
              <i className="fa fa-facebook icon" />
            </a>{" "}
          </div>
          <div className="col list-unstyled mb-2 text-center d-inline" >
            <a
              href="/contact"
              className="text-dark text-reset text-uppercase text-apart d-block"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-dark text-reset text-uppercase text-apart d-block mt-4 mb-4"
            >
              Website Design and Build by Qoustyn Yang
            </a>
          </div></ScrollAnimation>
        </div>
      </div>
    </footer>
    
  );
}

export default Footer;
