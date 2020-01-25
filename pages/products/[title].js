import React from 'react';
import { withRouter } from 'next/router'
import axios from 'axios';
import {API} from '../../config';

const Product = (props) => {
    console.log(props.router.query)
    return <div>This is my {props.router.query.title}, fuck you!!!</div>
}


// Product.getInitialProps = async function({query}){
//    let param = query.title.split('-')
//    let id = param[param.length-1]
//    await axios.get(API + '/product', {
//        params:{
//            id
//        }
//    })
//    .then(product => {
//      console.log(product)
//    })
//    return {}
// }

export default withRouter(Product);