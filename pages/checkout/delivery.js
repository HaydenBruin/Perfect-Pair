import React, { Component } from 'react'
import CartList from '../../components/cart-list'
import Link from 'next/link'
import '../../assets/scss/app.scss'

export default class Payment extends Component {
    render() {
        return (
            <div className="checkout">
                <div className="cart">
                    <div className="logo">
                        <Link href="/"><a><img src="/static/logo-circle-pp-blue.png" alt="Perfect Pair Logo" /></a></Link>
                    </div>
                    <CartList />
                </div>

                <div className="payment">
                    <div class="step step3">
                        <h2>Delivery Address</h2>
                        <p>Where do you want your package shipped?</p>
                        <input type="text" placeholder="Address" />
                        <input type="text" placeholder="Suburb" />
                        <input type="text" placeholder="City" />
                        <input type="text" placeholder="Postcode" />
                        <Link href="/checkout/completed"><button className="button">Confirm Shipping Address</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
