import axios from 'axios';
import Router from 'next/router';
import { Cookies } from 'react-cookie';
// set up cookies
const cookies = new Cookies();
const serverUrl = 'http://localhost:3001';

export async function handleAuthSSR(ctx) {
  let token = null;
  // if context has request info aka Server Side
  if (ctx.req) {
    // ugly way to get cookie value from a string of values
    // good enough for demostration
    if(ctx.req.headers.cookie){
      token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    }
    
  }
  else {
    // we dont have request info aka Client Side
    token = cookies.get('token')
  }

  try {
   await axios.get(serverUrl + "/api/token/ping", { headers: { 'Authorization': token,page:ctx.pathname } });
  } catch (err) {
   
    // in the case of error
    // redirect to login
    if (ctx.res ) {
      ctx.res.writeHead(302, {
        Location: '/'
      })
      ctx.res.end()
    } else  {
      Router.push('/')
    }
  }

}