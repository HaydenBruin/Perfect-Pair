import React, { Component } from 'react'
import DefaultLayout from '../../components/layouts/default-layout'
import CartList from '../../components/cart-list'
import CheckoutForm from './checkout-form'
import { injectStripe, Elements } from 'react-stripe-elements'
import Link from 'next/link'

class Payment extends Component {

    render() {
        return (
            <StripeProvider stripe={this.state.stripe}>
                <DefaultLayout disableHeader="true">
                    <div className="checkout">
                        <div className="cart">
                            <div className="logo">
                                <Link href="/"><a><img src="/static/logo-circle-pp-blue.png" alt="Perfect Pair Logo" /></a></Link>
                            </div>
                            <CartList />
                        </div>

                        <Elements>
                            <CheckoutForm />
                        </Elements>
                    </div>
                </DefaultLayout>
            </StripeProvider>
        )
    }
}

export default injectStripe(Payment)