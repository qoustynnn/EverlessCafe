import React from "react";
import { milkTeas } from '../shared/milkTeas';
import { Fade } from 'react-animation-components';
import ScrollAnimation from "react-animate-on-scroll";


function MenuVersionTwo(props) {
  const menuItems = props.menu.map((menu) => {
    return (
      <p>
        <span className="text-apart text-underline">{menu.drink}</span>
        <br />
      </p>
    );
  });

  return (
    <React.Fragment>
      <div className="container mb-5 mt-5">
        <Fade in>
        <div className="row border-bottom pb-5">
          <div className="col-md-6 d-flex flex-wrap align-items-center">
            <img src={milkTeas.img} className="img-fluid  mb-sm-5 box-shadow" alt=""></img>
          </div>
          <div className="col-md-6">
            <h2 className="pb-3 pt-5 text-center text-bold">Standard Drinks</h2>
            {menuItems}
            </div>
        </div>
        </Fade>
        <ScrollAnimation animateIn="fadeIn" animateOnce>
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <span className="font-weight-bold">
              C U S T O M I Z A T I O N S
            </span>
            <br/>
            <br/>
            <p className="text-monospace">
              Toppings / Milk / Sweetness / Hot or Iced
            </p>
          </div>
          <div className="col-md-4 text-center">
            <span className="font-weight-bold text-apart">TOPPINGS</span>
            <br/>
            <br/>
            <p>
              Tapioca Pearls (Boba) / Peach Bursting Boba / Grass Jelly / Lychee
              Jelly / Mango Jelly / Cheese Foam
            </p>
          </div>
          <div className="col-md-4 text-center">
            <span className="font-weight-bold text-apart">MILK OPTIONS</span>
            <br/>
            <br/>
            <p>
               Organic Milk /  Organic Almond Milk /
               Oat Milk / Soy Milk
            </p>
          </div>
          <div className="col-md-4 text-center">
            <span className="font-weight-bold text-apart">SWEETNESS LEVEL</span>
            <br/>
            <br/>
            <p>100% / 75% / 50% / 25% / 0%</p>
          </div>
        </div>
        </ScrollAnimation>
      </div>
    </React.Fragment>
  );
}

export default MenuVersionTwo;
