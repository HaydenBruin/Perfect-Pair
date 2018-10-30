import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

class MyApp extends App {
    constructor() {
        super();
        this.state = { stripe: null };
    }
    componentDidMount() {
        this.setState({ stripe: window.Stripe('pk_test_xxaqpzviIbXJ63m1TPUhoyz8') });
    }

    render() {
        const { Component, pageProps, reduxStore } = this.props

        return (
            <Container>
                <Provider store={reduxStore}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}

export default withReduxStore(MyApp)