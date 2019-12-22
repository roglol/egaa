import React from 'react';
import Link from 'next/link.js';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import Login from '../components/Login';
import Header from '../components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.scss';
const serverUrl = 'http://localhost:3001';

// set up cookies
const cookies = new Cookies();
class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: cookies.get('token') || null
    }
  }

  onLoginClick = async () => {
    console.log("Login called");
    const response = await axios.get(serverUrl + '/api/login')
    const token = response.data.token;
    cookies.set('token', token);
    this.setState({
      token: token
    })
  }

  render() {
    return (
      <Header/>
    )
  }
}

export default Index;

 // <div>
      //   <h2>Main page</h2>
      //   <br></br>
      //   <button onClick={() => this.onLoginClick()}>Get Token</button>
      //   <br></br>
      //   <br></br>
      //   <Login {...this.props}/>
      //   <Link href="/secret">
      //     <a>Secret page</a>
      //   </Link>
      //   <Link href="/login">
      //     <a>Login page</a>
      //   </Link>
      // </div >