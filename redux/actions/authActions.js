import Router from 'next/router';
import axios from 'axios';
import { USER, AUTHENTICATE, DEAUTHENTICATE } from '../types';
import { API } from '../../config';
import { setCookie, removeCookie } from '../../utils/cookie';

// register user
export const register = ({email,password}, type) => {
    if (type !== 'register') {
        throw new Error('Wrong API call!');
    }
    return (dispatch) => {
        axios.post(`${API}/${type}`, {email,password})
            .then((response) => {
                Router.push('/');
                alert('you have successfully registered')
                console.log(response)
            })
            .catch((error) => {
                switch (error.response.status) {
                    case 400:
                        alert(error.response.data.message);
                        break;
                    case 401:
                        alert(error.response.data.meta.message);
                        break;
                    case 500:
                        alert('Interval server error! Try again!');
                        break;
                    default:
                        alert(error.response.data.meta.message);
                        break;
                }
            });
    };
};

// gets token from the api and stores it in the redux store and in cookie
export const authenticate = ({ email, password }, type) => {
    if (type !== 'login') {
      throw new Error('Wrong API call!');
    }
    return (dispatch) => {
      axios.post(`${API}/${type}`, { email, password })
        .then((response) => {
           setCookie('token', response.data.token);
           Router.push('/secret');
           console.log(response)
           dispatch({type: AUTHENTICATE, payload: response.data.token});
          console.log(response)
        })
        .catch((err) => {
          console.log(err);
          switch (err.response.status) {
            case 404:
            alert(err.response.data.message);
              break;
            case 401:
            alert(err.response.data.meta.message);
              break;
            case 500:
            alert('Interval server error! Try again!');
              break;
            default:
            alert(err.response.data.meta.message);
              break;
          }
  
        });
    };
  };
// gets the token from the cookie and saves it in the store
export const reauthenticate = (token,ctx) => {
     ctx.res.redirect('/');
    return (dispatch) => {
      dispatch({type: AUTHENTICATE, payload: token});
    };
  };
  
  // removing the token
export const deauthenticate = () => {
    return (dispatch) => {
    //   removeCookie('token');
      Router.push('/');
      dispatch({type: DEAUTHENTICATE});
    };
  };
  
 export const getUser = ({ token }, type) => {
    console.log(token)
    return (dispatch) => {
      axios.get(`${API}/${type}`,{headers: {
        "Authorization" : "bearer " + token
      }
    })
        .then((response) => {
          dispatch({ type: USER, payload: response.data.data.user });
        })
        .catch((error) => {
          switch (error.response.status) {
            case 401:
              Router.push('/');
              break;
            case 422:
              alert(error.response.data.meta.message);
              break;
            case 500:
            alert('Interval server error! Try again!');
            case 503:
            alert(error.response.data.meta.message);
            Router.push('/');
              break;
            default:
            alert(error.response.data.meta.message);
              break;
          }
        });
    };
  };
  