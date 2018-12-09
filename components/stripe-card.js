import React, { Fragment, Component } from 'react'
import Loading from './loading'
import { injectStripe, CardElement } from 'react-stripe-elements'
import { Router } from './../routes'
import { createNotification } from './../store'
import { connect } from 'react-redux'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

class StripeCard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            complete: false,
            loading: false,
            errorMSG: ''
        };
        this.submit = this.submit.bind(this);
    }

    async submit(ev) {
        this.setState({
            loading: true,
            errorMSG: ''
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
            console.log(data);
            if (data['status'] === "success") {
                Router.pushRoute('/checkout/completed');
                this.props.dispatch(createNotification("Thanks, your payment was successful"));
            }
            else {
                
                const errorMSG = data.message ? data.message : "Sorry, we had issues taking your payment - please try again!";
                this.setState({
                    loading: false,
                    errorMSG: errorMSG
                })
            }
        });
    }

    render() {
        
        let renderCheckout = (
            <button className="button" onClick={this.submit}>Purchase Goodies</button>
        )

        if (this.state.loading) {
            renderCheckout = (
                <Loading />
            )
        }
        return (
            <div className="payment">
                <div className="step step3">
                    <h2>Payment Details</h2>
                    <p>We will ship your order shortly after the payment is completed</p>

                    {this.state.errorMSG && (
                        <div className="validate error">{this.state.errorMSG}</div>
                    )}

                    <CardElement hidePostalCode={true} />
                    {renderCheckout}
                </div>
            </div>
        )
    }
}
export default injectStripe(connect()(StripeCard))