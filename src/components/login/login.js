import React, { Component } from "react";
import { connect } from "react-redux";
import "./login.css";
import { userActions } from "../actions/useractions";
import { alertActions } from "../actions/alert.actions";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

export class login extends Component {
  onHandleLogin = (event) => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;
  console.log(email,password)
  };
  render() {
    return (
      <div className="p-5">
        <MDBContainer>
        <h3 className="text-center mt-5">
              <span className="bg-success text-white p-2 font-weight-bold  border-0">
                WE
              </span>
              <span className="white-text bg-dark border-0 pr-3 pl-2 pb-1 p-0  ">
                music
              </span>
            </h3>
    
        
          <MDBRow>
            <MDBCol></MDBCol>
            <MDBCol md="4" className="p-5 mt-5">
            
              <form onSubmit={this.onHandleLogin}>
                <p className="h4 text-center mb-4">Connexion</p>
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                   email
                </label>
                <input
                  type="email"
                  name="email"
                  id="defaultFormLoginEmailEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormLoginPasswordEx"
                  className="grey-text"
                >
                   password
                </label>
                <input
                  type="password"
                  name="password"
                  id="defaultFormLoginPasswordEx"
                  className="form-control"
                />
                <div className="text-center mt-4">
                  <MDBBtn color="success" type="submit" className="w-100">
                    Connexion
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
            <MDBCol></MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  alert: state.alert,
});

const mapDispatchToProps = (dispatch) => ({
  singin: (email, password) => dispatch(userActions.login(email, password)),
  clearAlerts: () => dispatch(alertActions.clear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(login);

