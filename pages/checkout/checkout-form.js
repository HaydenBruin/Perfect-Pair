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
        fetch(`${process.env.API_URL}/api/checkout/payment`, {
            method: 'post',
            credentials: 'include',
            body: JSON.stringify({
                tokenId: generatedToken.token.id,
            }),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json())
        .then(data => {
            if(data['status'] === "success") {    
                Router.pushRoute('/checkout/completed');
            }
            else {
                alert("Sorry, we had issues taking your payment");
            }
        });
    }

    render() {
        return (
            <div className="payment">
                <div className="step step3">
                    <h2>Payment Details</h2>
                    <p>We will ship your order shortly after the payment is completed</p>

                    <CardElement hidePostalCode={true} />
                    <button onClick={this.submit}>Send</button>
                </div>
            </div>
        )
    }
}
//export default injectStripe(CheckoutForm)
export default CheckoutForm