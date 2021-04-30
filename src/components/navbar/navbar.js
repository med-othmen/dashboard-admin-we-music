import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";

export class navbar extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <MDBNavbar color="black" dark expand="lg">
        <MDBNavbarBrand>
          <MDBNavLink to="/">
            {" "}
            <h3>
              <span className="bg-success text-white p-2 font-weight-bold  border-0">
                WE
              </span>
              <span className="white-text bg-dark border-0 pr-3 pl-2 pb-1 p-0  ">
                music
              </span>
            </h3>
          </MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/users">Utilisateur</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="products">Produit</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/types">Type</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/genres">Genre</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="media_condition">Etat de produit</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/sleeve_condition">Etat de pochet</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/article">Article</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/commands">Commandes</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="products">Déconnecter</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(navbar);
