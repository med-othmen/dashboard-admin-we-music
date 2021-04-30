import { productTypes } from "../../types/product.types";
import Axios from "axios";

export const productsActions = {
  getallproduct,
  update_product
};

function getallproduct() {
  return (dispatch) => {
    dispatch(request());
    Axios.get("http://localhost:2000/product/getall").then(
      (res) => {
        if (res.data.products.length > 0) {
          dispatch(success(res.data.products));
        } else {
          dispatch(failure("no data found"));
        }
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function request() {
    return {
      type: productTypes.GETALL_REQUEST,
    };
  }

  function success(products) {
    return {
      type: productTypes.GETALL_SUCCESS,
      products,
    };
  }

  function failure(error) {
    return {
      type: productTypes.GETALL_FAILURE,
      error,
    };
  }
}

function update_product(data) {
  console.log(data)
  return (dispatch) => {
    dispatch(request());

    Axios.post("http://localhost:2000/product/update", data).then(
      (response) => {
        if (response.data.ok) {
          dispatch(success(data));
        
        } else {
          dispatch(failure("Error while update in database"));
        }
      },
      (error) => {
        dispatch(failure(error));
      }
    );


  function request() {
    return { type: productTypes.UPDATE_REQUEST };
  }
  function success(data) {
    return { type: productTypes.UPDATE_SUCCESS, data };
  }
  function failure(error) {
    return { type: productTypes.UPDATE_FAILURE, error };
  }
}
}
