import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBTable, MDBTableBody, MDBTableHead,MDBBtn } from "mdbreact";
export class Types extends Component {
  render() {
    return (
      <MDBTable bordered responsive hoverl>
        <MDBTableHead>
          <tr>
            <th>Id</th>
            <th>Libelle</th>
            <th>Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {this.props.types.map((el) => (
            <tr>
              <td>{el.id}</td>
              <td>{el.libelle}</td>
              
              <th>
                <MDBBtn color="warning" size="sm" >
                  Editer
                </MDBBtn>{" "}
                <MDBBtn color="danger" size="sm" >
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
  types: state.types,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Types);
