import React, { Component } from 'react'
import CartList from '../../components/cart-list'
import DefaultLayout from '../../components/layouts/default-layout'
import { Link, Router } from '../../routes'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Cart extends Component {

    handleForm = (e) => {
        e.preventDefault();

        fetch(`${process.env.API_URL}/api/checkout/email`, {
            method: 'post',
            credentials: 'include',
            body: JSON.stringify({
                email_address: document.querySelector('input[name=email_address]').value
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
        .then(data => {
            if(data['status'] === "success") {    
                Router.pushRoute('/checkout/delivery');
            }
            else {
                alert('get a unique email pls');
            }
        });
    }

    render() {
        return (
            <DefaultLayout disableHeader="true" disableFooter="true">
                <div className="checkout">
                    <div className="check">
                        <div className="steps">
                            <div className="step completed"><div className="circle"><FontAwesomeIcon icon="shopping-cart" /></div>Email</div>
                            <div className="step"><div className="circle"><FontAwesomeIcon icon="truck" /></div>Delivery</div>
                            <div className="step"><div className="circle"><FontAwesomeIcon icon="credit-card" /></div>Payment</div>
                            <div className="step"><div className="circle"><FontAwesomeIcon icon="check" /></div>Completed</div>
                        </div>
                        <div className="payment">
                            <div className="step step1">
                                <form id="checkout_step1" onSubmit={this.handleForm}>
                                    <h2>Email Address</h2>
                                    <p>Your email address is used to send receipts</p>
                                    <input type="text" name="email_address" placeholder="Your Email address" />
                                    <button className="button">Continue</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}
