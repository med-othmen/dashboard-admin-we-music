import {
    genre_prodTypes
  } from '../../types/genre_prod.types';
  import Axios from "axios";
  
  export const genres_prodActions = {
    getallgenres,
   
  };

  function getallgenres() {
    return dispatch => {
      dispatch(request());
      Axios.get("http://localhost:2000/data/genres/getall").then(
        res => {
         
          if(res.data.genres.length>0){
            dispatch(success(res.data.genres));
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
      type: genre_prodTypes.GETALL_REQUEST,
      
    }
  }

  function success(genres) {
    return {
      type: genre_prodTypes.GETALL_SUCCESS,
      genres
    }
  }

  function failure(error) {
    return {
      type: genre_prodTypes.GETALL_FAILURE,
      error
    }
  }