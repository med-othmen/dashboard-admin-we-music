import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
export class sidebar extends Component {
  render() {
    return (
      <BrowserRouter>
        <MDBNav className="flex-column bg-danger">
          <MDBNavItem>
            <MDBNavLink active to="#!">
              Active
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!">Link</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!">Link</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink disabled to="#!">
              Disabled
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(sidebar);
