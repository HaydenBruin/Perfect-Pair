import React, { Component } from 'react'
import CartList from '../../components/cart-list'
import DefaultLayout from '../../components/layouts/default-layout'
import { Link, Router } from '../../routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Payment extends Component {

    handleForm = (e) => {
        e.preventDefault();

        fetch(`${process.env.API_URL}/api/checkout/address`, {
            method: 'post',
            credentials: 'include',
            body: JSON.stringify({
                address: document.querySelector('input[name=address]').value,
                suburb: document.querySelector('input[name=suburb]').value,
                city: document.querySelector('input[name=city]').value,
                postcode: document.querySelector('input[name=postcode]').value
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
        .then(data => {
            if(data['status'] === "success") {    
                Router.pushRoute('/checkout/payment');
            }
            else {
                alert("Sorry, we couldn't save your address");
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
                            <div className="step step2">
                                <form id="checkout_step2" onSubmit={this.handleForm}>
                                    <h2>Delivery Address</h2>
                                    <p>Where do you want your package shipped?</p>
                                    <input type="text" name="address" placeholder="Address" />
                                    <input type="text" name="suburb" placeholder="Suburb" />
                                    <input type="text" name="city" placeholder="City" />
                                    <input type="text" name="postcode" placeholder="Postcode" />
                                    <button className="button">Confirm Shipping Address</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}
