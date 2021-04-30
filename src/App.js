import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components

import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import User from "./components/user/users";
import Product from "./components/product/products";
import Types from "./components/type/types";
import Login from "./components/login/login";
// import actions
import { productsActions } from "./components/actions/product.actions";
import { types_prodActions } from "./components/actions/types_prod.actions";
import { genres_prodActions } from "./components/actions/genre_prod.actions";
import { sleeve_condition_prodActions } from "./components/actions/sleeve_condition_prod.action";
import { artisteActions } from "./components/actions/artiste.actions";
import { articleActions } from "./components/actions/article.actions";
import { userActions } from "./components/actions/useractions";
export class App extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.props.users();
    this.props.getallProducts();
    this.props.getalltypes();
    this.props.getallgenres();
    this.props.getallsleeve_condition();
    this.props.getallartistes();
    this.props.getallarticles();
  }
  render() {
    return (
      <Router>
        {!this.props.authenticate.loggedIn ? (
          <Navbar />
        ) : (
          <div className="text-center p-5 ">
            {" "}
            <h1>
              <span className="bg-success text-white p-2 font-weight-bold  border-0">
                WE
              </span>
              <span className="white-text bg-dark border-0 pr-3 pl-2 pb-1 p-0  ">
                music
              </span>
            </h1>
          </div>
        )}
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/users">
            <User />
          </Route>
          <Route path="/products">
            <Product />
          </Route>
          <Route path="/types">
            <Types />
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticate: state.authentication,
});

const mapDispatchToProps = (dispatch) => ({
  getallProducts: () => dispatch(productsActions.getallproduct()),
  getalltypes: () => dispatch(types_prodActions.getalltypes()),
  getallgenres: () => dispatch(genres_prodActions.getallgenres()),
  getallsleeve_condition: () =>
    dispatch(sleeve_condition_prodActions.getallsleeve_condition()),
  getallartistes: () => dispatch(artisteActions.getallartistes()),
  getallarticles: () => dispatch(articleActions.getallarticles()),
  users: () => dispatch(userActions.getallusers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

//  <Redirect from="*" to="/" />
