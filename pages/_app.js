import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import { StripeProvider } from 'react-stripe-elements-universal'

class MyApp extends App {
    render() {
        const { Component, pageProps, reduxStore } = this.props
        return (
            <StripeProvider apiKey="pk_test_xxaqpzviIbXJ63m1TPUhoyz8">
                <Container>
                    <Provider store={reduxStore}>
                        <Component {...pageProps} />
                    </Provider>
                </Container>
            </StripeProvider>
        )
    }
}

export default withReduxStore(MyApp)