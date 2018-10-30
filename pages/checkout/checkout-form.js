import React, { Component } from 'react'
import { injectStripe, CardElement } from 'react-stripe-elements'

class CheckoutForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = { complete: false };
        this.submit = this.submit.bind(this);
    }

    async submit(ev) {
        let token = await this.props.stripe.createToken({ name: 'Name' });
        console.log(token);
        let response = await fetch(`${process.env.API_URL}/api/checkout/payment`, {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: token.id
        });

        if (response.ok) this.setState({ complete: true });
    }

    render() {
        if (this.state.complete) return <h1>Purchase Complete</h1>;
        return (
            <div className="payment">
                <div className="step step2">
                    <h2>Payment Details</h2>
                    <p>We'll get your delivery address after payment has been completed</p>

                    <CardElement />
                    <button onClick={this.submit}>Send</button>
                </div>
            </div>
        )
    }
}
export default injectStripe(CheckoutForm)