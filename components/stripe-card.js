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
            if (data['status'] === "success") {
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

        if (this.state.loading) {
            renderCheckout = (
                <Loading />
            )
        }
        return (
            <Fragment>
                <CardElement hidePostalCode={true} />
                {renderCheckout}
            </Fragment>
        )
    }
}
export default injectStripe(connect()(StripeCard))