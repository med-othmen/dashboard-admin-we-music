import {
    cartTypes
  } from '../../types/cart.types';
  import Swal from 'sweetalert2'
  
  export const cartActions = {
    getall_from_cart,
    add_to_cart,
    delete_from_cart,
    update_in_cart
  };
  
  // get all products from cart
  function getall_from_cart(cart) {
    return dispatch => {
        dispatch(request());
        dispatch(success(cart));
        if(!cart){
          failure('erreur request database')
        }
      };
    function request() {
        return { type: cartTypes.CART_UPDATE_REQUEST };
      }
      function success(cart) {
        return { type: cartTypes.GETALL_CART_SUCCESS, cart };
      }
      function failure(error) {
        return { type: cartTypes.GETALL_CART_FAILURE, error };
      }
  }
//add product to cart
  function add_to_cart(product) {
    return dispatch => {
     
        dispatch(request());
        if(product !== null)
        dispatch(success(product));
        else dispatch(failure('error'))
      };
    function request() {
        return { type: cartTypes.ADD_CART_REQUEST };
      }
      function success(product) {
        alert_add()
        return { type: cartTypes.ADD_CART_SUCCESS, product };
      }
      function failure(error) {
        return { type: cartTypes.ADD_CART_FAILURE, error };
      }
      function alert_add() {
        Swal.fire({
          text: "Produit ajouter dans le panier",
          icon: "success",
          confirmButtonText: "Fermer",
          confirmButtonColor: "#008000",
          animation: true,
        });
      }
     
}
//delete product from cart
function delete_from_cart(id) {
    return dispatch => {
        console.log(id)
        dispatch(request());
        if(id !== null)
        dispatch(success(id));
        else dispatch(failure('error'))
      };
    function request() {
        return { type: cartTypes.DELETE_FROM_CART_REQUEST };
      }
      function success(id) {
        alert_remove()
        return { type: cartTypes.DELETE_FROM_CART_SUCCESS, id };
      }
      function failure(error) {
        return { type: cartTypes.DELETE_FROM_CART_FAILURE, error };
      }  
      function alert_remove() {
        Swal.fire({
          text: "Produit enlever de panier",
          icon: "warning",
          confirmButtonText: "Fermer",
          confirmButtonColor: "#DD6B55",
          animation: true,
        });
      }
}
//update quanitity of product in cart
function update_in_cart(data) {
    return dispatch => {
        dispatch(request());
        dispatch(success(data));
      };
    function request() {
        return { type: cartTypes.CART_UPDATE_REQUEST };
      }
      function success(data) {
       
        return { type: cartTypes.CART_UPDATE_SUCCESS, data };
      }
     
}

