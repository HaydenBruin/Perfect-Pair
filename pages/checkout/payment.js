import React, { Component } from 'react'
import DefaultLayout from './../../components/layouts/default-layout'
import CheckoutForm from './../../components/checkout-form'
import { StripeProvider, Elements } from 'react-stripe-elements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import { Router } from '../../routes'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

class Payment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stripe: null
        };
    }

    componentDidUpdate = () => {
        if(!this.props.cartOverview.length && this.props.cartOverview.totalProducts == 0)
        {
            Router.pushRoute('/');
        }
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

const mapStateToProps = (state) => ({
    cartOverview: state.cartOverview,
    cartCoupons: state.cartCoupons,
    cartProducts: state.cartProducts
})

export default connect(mapStateToProps)(Payment);