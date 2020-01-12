import Router from 'next/router';
import {reauthenticate} from '../redux/actions';
import { getCookie } from '../utils/cookie';

// checks if the page is being loaded on the server, and if so, get auth token from the cookie:
export default function(ctx) {
  let token = null;
  if(ctx.isServer) {
    if(ctx.req.headers.cookie) {
      token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      if(token && (ctx.pathname === '/register')) {
        ctx.res.redirect('/')
        res.end()
      }
    }
  } else {
    // token = ctx.store.getState().authentication.token;
    // if(token && (ctx.pathname === '/register')) {
    //   setTimeout(function() {
    //     Router.push('/');
    //   }, 0);
    // }
  }
}