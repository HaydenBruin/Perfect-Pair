import React, { Component } from 'react'
import DefaultLayout from '../../components/layouts/default-layout'
import CheckoutForm from './checkout-form'
import { StripeProvider, Elements } from 'react-stripe-elements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Payment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stripe: null
        };
    }

    componentDidMount() {
        this.setState({ stripe: window.Stripe('pk_test_xxaqpzviIbXJ63m1TPUhoyz8') });
    }

    render() {
        return (
            
                        <StripeProvider stripe={this.state.stripe}>
                            <Elements>
                                <CheckoutForm />
                            </Elements>
                        </StripeProvider>
        )
    }
}

export default Payment