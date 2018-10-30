import React, { Component } from 'react'
import DefaultLayout from '../../components/layouts/default-layout'
import CartList from '../../components/cart-list'
import CheckoutForm from './checkout-form'
import { Elements } from 'react-stripe-elements'
import Link from 'next/link'
import '../../assets/scss/app.scss'

class Payment extends Component {

    render() {
        return (
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
        )
    }
}

export default Payment