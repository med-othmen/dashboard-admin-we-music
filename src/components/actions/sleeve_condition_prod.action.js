import {
    sleeve_condition_prodTypes
  } from '../../types/sleeve_condition.types';
  import Axios from "axios";
  
  export const sleeve_condition_prodActions = {
    getallsleeve_condition,
   
  };

  function getallsleeve_condition() {
    return dispatch => {
      dispatch(request());
      Axios.get("http://localhost:2000/data/sleeve_condition/getall").then(
        res => {
         
          if(res.data.sleeve_conditions.length>0){
            dispatch(success(res.data.sleeve_conditions));
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
  


  function request() {
    return {
      type: sleeve_condition_prodTypes.GETALL_REQUEST,
      
    }
  }

  function success(sleeve_conditions) {
    return {
      type: sleeve_condition_prodTypes.GETALL_SUCCESS,
      sleeve_conditions
    }
  }

  function failure(error) {
    return {
      type: sleeve_condition_prodTypes.GETALL_FAILURE,
      error
    }
  }