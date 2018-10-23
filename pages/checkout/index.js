import React, { Component } from 'react'
import CartList from '../../components/cart-list'
import Link from 'next/link'
import '../../assets/scss/app.scss'

export default class Cart extends Component {
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
                    <div className="step step1">
                        <h2>Email Address</h2>
                        <p>Your email address is used to send receipts & will be </p>
                        <input type="text" placeholder="Your Email address" />
                        <Link href="/checkout/payment"><button className="button">Continue</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
