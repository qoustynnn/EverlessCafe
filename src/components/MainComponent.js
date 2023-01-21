import React, { Component } from "react";
import { withRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import MenuVersionOne from "./MenuComponentOne";
import { MENU } from "../shared/menu";
import Contact from "./ContactComponent";
import MenuVersionTwo from "./MenuComponentTwo";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: MENU,
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/Order" exact>
              <MenuVersionOne menu={this.state.menu} />
            </Route>
            <Route path="/Menu" exact>
              <MenuVersionTwo menu={this.state.menu} />
            </Route>
            <Route path="/Contact" exact>
              <Contact />
            </Route>
          </Switch>
          <Footer />
 
      </React.Fragment>
    );
  }
}

export default withRouter(Main);
