import React, { Component } from 'react'
import DefaultLayout from './../../components/layouts/default-layout'
import CheckoutForm from './../../components/checkout-form'
import { StripeProvider, Elements } from 'react-stripe-elements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

class Payment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stripe: null
        };
    }

    componentDidMount() {
        this.setState({ stripe: window.Stripe(publicRuntimeConfig.STRIPE_PUBLIC) });
    }

    render() {
        return (
            <DefaultLayout>
                <div className="checkout">
                    <div className="check">
                        <div className="steps">
                            <div className="step completed"><div className="circle"><FontAwesomeIcon icon="shopping-cart" /></div>Email</div>
                            <div className="step completed"><div className="circle"><FontAwesomeIcon icon="truck" /></div>Delivery</div>
                            <div className="step completed"><div className="circle"><FontAwesomeIcon icon="credit-card" /></div>Payment</div>
                            <div className="step"><div className="circle"><FontAwesomeIcon icon="check" /></div>Completed</div>
                        </div>
                        <div className="payment">
                            <div className="step step3"></div>
                            <StripeProvider stripe={this.state.stripe}>
                                <Elements>
                                    <CheckoutForm />
                                </Elements>
                            </StripeProvider>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}

export default Payment