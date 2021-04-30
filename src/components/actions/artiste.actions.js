import {
    artisteTypes
  } from '../../types/artiste.types';
  import Axios from "axios";
  
  export const artisteActions = {
    getallartistes,
   
  };

  function getallartistes() {
    return dispatch => {
      dispatch(request());
      Axios.get("http://localhost:2000/data/artistes/getall").then(
        res => {
         
          if(res.data.artistes.length>0){
            dispatch(success(res.data.artistes));
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
      type: artisteTypes.GETALL_REQUEST,
      
    }
  }

  function success(artistes) {
    return {
      type: artisteTypes.GETALL_SUCCESS,
      artistes
    }
  }

  function failure(error) {
    return {
      type: artisteTypes.GETALL_FAILURE,
      error
    }
  }