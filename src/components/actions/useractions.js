import { userTypes } from "../../types/user.types";
import { alertTypes } from "../../types/alert.types";
import Axios from "axios";

export const userActions = {
  login,
  register,
  logout,
  update,getallusers
};


function getallusers() {
  return (dispatch) => {
    dispatch(request());
    Axios.get("http://localhost:2000/user/getall").then(
      (res) => {
        if (res.data.users.length > 0) {
          dispatch(success(res.data.users));
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
      type: userTypes.GETALL_REQUEST,
    };
  }

  function success(users) {
    return {
      type: userTypes.GETALL_SUCCESS,
      users,
    };
  }

  function failure(error) {
    return {
      type: userTypes.GETALL_FAILURE,
      error,
    };
  }
}
function login(email, password) {
  return (dispatch) => {
    dispatch(
      request({
        email,
        password,
      })
    );
    Axios.post(
      "http://localhost:2000/user/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    ).then(
      (res) => {
        console.log(res.data.ok === true);
        if (res.data.ok === true) {
          dispatch(success(res.data.text));
          localStorage.setItem("user", JSON.stringify(res.data.text));
          window.location.pathname = "/";
        } else if (res.data.ok === false) {
          dispatch(failure("user not found"));
          dispatch(alert_error("utilisateur n existe pas "));
        }
      },
      (error) => {
        dispatch(failure("error"));
      }
    );
  };

  function alert_error(message) {
    return {
      type: alertTypes.ERROR,
      message,
    };
  }

  function request(user) {
    return {
      type: userTypes.LOGIN_REQUEST,
      user,
    };
  }

  function success(user) {
    return {
      type: userTypes.LOGIN_SUCCESS,
      user,
    };
  }

  function failure(error) {
    return {
      type: userTypes.LOGIN_FAILURE,
      error,
    };
  }
}

function logout() {
  localStorage.removeItem("user");
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.location.pathname = "/";
  return { type: userTypes.LOGOUT };
}

function register(user) {
  return (dispatch) => {
    dispatch(request(user));
    Axios.post("http://localhost:2000/user/registre", user).then(
      (response) => {
        if (response.data.ok === true) {
          dispatch(success());
          dispatch(alert_success("Registration successful"));
        } else {
          dispatch(failure("User already exist"));
          dispatch(alert_error("Email deja existe"));
        }
      },
      (error) => {}
    );
  };

  function alert_success(message) {
    return {
      type: alertTypes.SUCCESS,
      message,
    };
  }

  function alert_error(message) {
    return {
      type: alertTypes.ERROR,
      message,
    };
  }

  function request(payload) {
    return {
      type: userTypes.REGISTER_REQUEST,
      payload,
    };
  }

  function success(payload) {
    return {
      type: userTypes.REGISTER_SUCCESS,
      payload,
    };
  }

  function failure(error) {
    return {
      type: userTypes.REGISTER_FAILURE,
      error,
    };
  }
}
function update(user) {
  return (dispatch) => {
    console.log(user);

    dispatch(request(user));
    Axios.post("http://localhost:2000/user/update", user).then(
      (response) => {
        if (response.data.ok) {
          dispatch(success());
          dispatch(updatecurentuser(response.data.text));
          localStorage.setItem("user", JSON.stringify(response.data.text));
          dispatch(alert_success("update successful"));
        } else {
          dispatch(failure("Error while update in database"));
        }
      },
      (error) => {
        dispatch(failure(error));
      }
    );

    function alert_success(message) {
      return {
        type: alertTypes.SUCCESS,
        message,
      };
    }

    function request(payload) {
      return {
        type: userTypes.UPDATE_USER_REQUEST,
        payload,
      };
    }

    function updatecurentuser(user) {
      return {
        type: userTypes.LOGIN_SUCCESS,
        user,
      };
    }
    function success(payload) {
      return {
        type: userTypes.UPDATE_USER_SUCCESS,
        payload,
      };
    }

    function failure(error) {
      return {
        type: userTypes.UPDATE_USER_FAILURE,
        error,
      };
    }
  };
}

/*

function getuserById(id) {
  return dispatch => {
    Axios.post("http://localhost:2000/user/currentuser/"+id, {
      withCredentials: true,
    }).then(response => {

        if (response.data.ok) {
          if (response.status === 401) {
          console.log('error')
          } else if (response.status === 200) {
          }
          else {
            console.log('dd')
          }
        }
      },
      error => {
      });
  };

}

*/
