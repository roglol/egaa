import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux';
import Head from 'next/head'
import React from "react";



export default withRedux(initStore, { debug: true })(
    class MyApp extends App {
        static async getInitialProps({ Component, ctx }) {
            return {
                pageProps: {
                    ...(Component.getInitialProps
                        ? await Component.getInitialProps(ctx)
                        : {})
                }
            };
        }

        render() {
            const { Component, pageProps, store } = this.props;
            return (
                <Container>
                    <Provider store={store}>
                        <Head>
                            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous"/>
                        </Head>
                        <Component {...pageProps} />
                    </Provider>
                </Container>
            );
        }
    }
)
//
// export default class extends Document {
//     render() {
//         return (
//             <html>
//             <Head>
//                 <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous"/>
//             </Head>
//             <body>
//             <Main />
//             <NextScript />
//             </body>
//             </html>
//         )
//     }
// }