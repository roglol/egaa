import React from 'react';
import Header from '../components/Header';
import ProductContainer from '../components/ProductContainer';
import { Button, ButtonGroup } from 'reactstrap';
import Link from 'next/link'
import { withRouter } from 'next/router'



const Index = (props) => {
    return (
        <>
            {/*<Header/>*/}
            {/*<ProductContainer/>*/}
            <ButtonGroup>
                <Link href="/products/1">
                    <Button>Left</Button>
                </Link>
                <Link href="/products/2">
                    <Button>Middle</Button>
                </Link>
                <Link href="/products/3">
                    <Button>Right</Button>
                </Link>
                <Link href="/products/4">
                    <Button>Trakshi</Button>
                </Link>
            </ButtonGroup>

        </>
    )
  }


Index.getInitialProps = async function({query}) {
      console.log(query)
}
    export default withRouter(Index);




