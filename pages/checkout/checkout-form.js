import React, { Component } from 'react'
import { Router } from '../../routes'
import { injectStripe, CardElement } from 'react-stripe-elements'

class CheckoutForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            complete: false
        };
        this.submit = this.submit.bind(this);
    }

    async submit(ev) {
        let generatedToken = await this.props.stripe.createToken();
        let response = await fetch(`${process.env.API_URL}/api/checkout/payment`, {
            method: "post",
            credentials: 'include',
            body: JSON.stringify({
                tokenId: generatedToken.token.id,
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            Router.pushRoute('/checkout/completed');
        }
    }

    render() {
        return (
            <div className="payment">
                <div className="step step3">
                    <h2>Payment Details</h2>
                    <p>We'll get your delivery address after payment has been completed</p>

                    <CardElement hidePostalCode={true} />
                    <button onClick={this.submit}>Send</button>
                </div>
            </div>
        )
    }
}
export default injectStripe(CheckoutForm)