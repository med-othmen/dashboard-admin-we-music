import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBTable, MDBTableBody, MDBTableHead,MDBBtn } from "mdbreact";
export class Users extends Component {
  render() {
    return (
      <MDBTable bordered responsive hoverl>
        <MDBTableHead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Email</th>
            <th>password</th>
            <th>Telephone</th>
            <th>Photo</th>
            <th>Active</th>
            <th>Option</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {this.props.users.map((el) => (
            <tr>
              <td>{el.id}</td>
              <td>{el.nom}</td>
              <td>{el.prenom}</td>
              <td>{el.email}</td>
              <td>{el.password}</td>
              <td>{el.telephone}</td>
              <td>{el.picture}</td>
              <td>{el.active}</td>
              <th>
                <MDBBtn color="warning" size="sm" className="w-100">
                  Editer
                </MDBBtn>{" "}
                <MDBBtn color="danger" size="sm" className="w-100">
                  Supprimer
                </MDBBtn>{" "}
               
              </th>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
