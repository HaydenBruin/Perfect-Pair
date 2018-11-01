import React, { Component } from 'react'
import CartList from '../../components/cart-list'
import DefaultLayout from '../../components/layouts/default-layout'
import { Link, Router } from '../../routes'

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
            <DefaultLayout disableHeader="true">
                <div className="checkout">
                    <div className="cart">
                        <div className="logo">
                            <Link href="/"><a><img src="/static/logo-circle-pp-blue.png" alt="Perfect Pair Logo" /></a></Link>
                        </div>
                        <CartList />
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
            </DefaultLayout>
        )
    }
}
