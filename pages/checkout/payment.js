import React, { Component } from 'react'
import CartList from '../../components/cart-list'
import Link from 'next/link'
import '../../assets/scss/app.scss'

export default class Payment extends Component {
    render() {
        return (
            <div className="checkout">
                <CartList />
                
                <div className="payment">
                    <div class="step step2">
                        <h2>Payment Details</h2>
                        <p>We'll get your delivery address after payment has been completed</p>
                        <input type="text" placeholder="Card Number" />
                        <input type="text" placeholder="CVV" />
                        <input type="text" placeholder="Expiry" />
                        <Link href="/checkout/delivery"><button className="button">Pay with Credit Card</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
