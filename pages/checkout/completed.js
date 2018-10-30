import React, { Component } from 'react'
import DefaultLayout from '../../components/layouts/default-layout'
import CartList from '../../components/cart-list'
import Link from 'next/link'
import '../../assets/scss/app.scss'

export default class Payment extends Component {
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

                    <div className="payment">
                        <div class="step step4">
                            <h2>Order Complete</h2>
                            <p>Thanks for purchasing some goodies from us.</p>
                            <p>We'll send you an update with your package details shortly.</p>
                            <p>If you have any questions feel free </p>
                            <Link href="/"><button className="button">Back to Homepage</button></Link>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}
