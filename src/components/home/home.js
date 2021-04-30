import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBListGroup, MDBListGroupItem, MDBIcon, MDBRow, MDBCol } from 'mdbreact';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar'
export class home extends Component {


  render() {
    return (
         <MDBRow>
             <MDBCol size="2" className="h-100">
           
             </MDBCol>
             <MDBCol size="10">
             </MDBCol>
         </MDBRow>
    
    );
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles,
  products: state.products,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(home);
