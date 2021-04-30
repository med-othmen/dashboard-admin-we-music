import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBBtn,
  MDBInput,
} from "mdbreact";
export class users extends Component {
  render() {
    return (
      <div className=" mt-0 p-1">
        <MDBTable bordered responsive hover>
          <MDBTableHead>
            <tr>
              <th>Selection</th>
              <th>Id</th>
              <th>Titre</th>
              <th>Maison d'édition</th>
              <th>Artiste</th>
              <th>Type</th>
              <th>genre</th>
              <th>Etat de pochette</th>
              <th>Etat de produit</th>
              <th>Prix initial</th>
              <th>Prix promo</th>
              <th>Rating</th>
              <th>Photo</th>
              <th>Description</th>
              <th>Option</th>
            </tr>
          </MDBTableHead>

          <MDBTableBody>
            {this.props.products.map((el) => (
              <tr>
                <td>
                  <MDBInput size="sm" type="checkbox" className="p-0" />
                </td>
                <td>{el.id}</td>
                <td>{el.title}</td>
                <td>{el.media_home}</td>
                <td>{el.artiste}</td>
                <th>{el.type}</th>
                <th>{el.genre}</th>
                <th>{el.sleeve_condition}</th>
                <th>{el.meia_condition}</th>
                <th>{el.first_price}</th>
                <th>{el.promo_price}</th>
                <th>{el.rating}</th>
                <th>{el.picture}</th>
                <th>{el.description}</th>
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(users);
