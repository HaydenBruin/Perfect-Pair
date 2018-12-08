import React, { Component } from 'react'
import StripeCard from './stripe-card'

class CheckoutForm extends Component {
    render() {
        return (
            <div className="payment">
                <div className="step step3">
                    <h2>Payment Details</h2>
                    <p>We will ship your order shortly after the payment is completed</p>

                    <StripeCard />

                </div>
            </div>
        )
    }
}
export default CheckoutForm