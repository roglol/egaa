import React from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import Header from '../components/Header';
import ProductContainer from '../components/ProductContainer';
import Link from 'next/link'

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
      <>
      <Header/>
      <main>
      <ProductContainer/>
      </main>
        </>
    )
  }
}

export default Index;

