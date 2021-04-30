import {
    type_prodTypes
  } from '../../types/types_prods.types';
  import Axios from "axios";
  
  export const types_prodActions = {
    getalltypes,
    
  };

  function getalltypes() {
    return dispatch => {
      dispatch(request());
      Axios.get("http://localhost:2000/data/types/getall").then(
        res => {
         
          if(res.data.types.length>0){
            dispatch(success(res.data.types));
          }
         else{
          dispatch(failure("no data found"));
         }
        },
        error => {
        
            dispatch(failure(error));
  
        });
       
    };
  
  }
  
  export const asyncApiCall = (values) => {
   
    return async dispatch => {
     
      try {
        dispatch(request());
        const response = await Axios.get("http://localhost:2000/data/types/getall")
        if(response.data.types.length>0){
          dispatch(success(response.data.types));
        }
       else{
        dispatch(failure("no data found"));
       }
      }
      catch(error) {
        dispatch(failure(error));
  
      }
  
      return 'done';
    }




    
  }


  function request() {
    return {
      type: type_prodTypes.GETALL_REQUEST,
      
    }
  }

  function success(types) {
    return {
      type: type_prodTypes.GETALL_SUCCESS,
      types
    }
  }

  function failure(error) {
    return {
      type: type_prodTypes.GETALL_FAILURE,
      error
    }
  }