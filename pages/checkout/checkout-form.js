import React, { Component } from 'react'
import { Router } from '../../routes'
import Loading from '../../components/loading'
import { injectStripe, CardElement } from 'react-stripe-elements'
import getConfig from 'next/config'
import { createNotification } from '../../store'
import { connect } from 'react-redux'
const { publicRuntimeConfig } = getConfig()

class CheckoutForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            complete: false,
            loading: false
        };
        this.submit = this.submit.bind(this);
    }

    async submit(ev) {
        this.setState({
            loading: true
        })

        let generatedToken = await this.props.stripe.createToken();
        fetch(`${publicRuntimeConfig.API_URL}/api/checkout/payment`, {
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
                this.props.dispatch(createNotification("Thanks, your payment was successful"));
            }
            else {
                alert("Sorry, we had issues taking your payment");
            }
        });
    }

    render() {
        let renderCheckout = (
            <button className="button" onClick={this.submit}>Purchase Goodies</button>
        )

        if(this.state.loading)
        {
            renderCheckout = (
                <Loading />
            )
        }
        return (
            <div className="payment">
                <div className="step step3">
                    <h2>Payment Details</h2>
                    <p>We will ship your order shortly after the payment is completed</p>

                    <CardElement hidePostalCode={true} />
                    {renderCheckout}
            
                </div>
            </div>
        )
    }
}
export default injectStripe(connect()(CheckoutForm)) //injectStripe
