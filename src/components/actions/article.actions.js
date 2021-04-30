import {
    articleTypes
  } from '../../types/article.types';
  import Axios from "axios";
  
  export const articleActions = {
    getallarticles,
   
  };

  function getallarticles() {
    return dispatch => {
      dispatch(request());
      Axios.get("http://localhost:2000/data/articles/getall").then(
        res => {
         
          if(res.data.articles.length>0){
            dispatch(success(res.data.articles));
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
      type: articleTypes.GETALL_REQUEST,
      
    }
  }

  function success(articles) {
    return {
      type: articleTypes.GETALL_SUCCESS,
      articles
    }
  }

  function failure(error) {
    return {
      type: articleTypes.GETALL_FAILURE,
      error
    }
  }