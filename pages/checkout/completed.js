import React, { Component } from 'react'
import DefaultLayout from '../../components/layouts/default-layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default class Payment extends Component {

    componentDidMount = () => {
        fbq( 'track', 'Purchase' );
    }

    render() {
        return (
            <DefaultLayout checkoutPage={true}>
                <div className="checkout">
                    <div className="check">
                        <div className="steps">
                            <div className="step completed"><div className="circle"><FontAwesomeIcon icon="shopping-cart" /></div>Email</div>
                            <div className="step completed"><div className="circle"><FontAwesomeIcon icon="truck" /></div>Delivery</div>
                            <div className="step completed"><div className="circle"><FontAwesomeIcon icon="credit-card" /></div>Payment</div>
                            <div className="step"><div className="circle"><FontAwesomeIcon icon="check" /></div>Completed</div>
                        </div>
                        <div className="payment">
                            <div className="step step4">
                                <h2>Order Complete</h2>
                                <p>Thanks for purchasing some goodies from us.</p>
                                <p>We'll send you an update with your package details shortly.</p>
                                <p>If you have any questions feel free </p>
                                <Link href="/"><button className="button">Back to Homepage</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}
