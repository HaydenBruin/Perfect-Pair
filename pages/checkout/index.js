import React, { Component } from 'react'
import CartList from '../../components/cart-list'
import DefaultLayout from '../../components/layouts/default-layout'
import { Link, Router } from '../../routes'
import '../../assets/scss/app.scss'

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
            <DefaultLayout disableHeader="true">
                <div className="checkout">
                    <div className="cart">
                        <div className="logo">
                            <Link href="/"><a><img src="/static/logo-circle-pp-blue.png" alt="Perfect Pair Logo" /></a></Link>
                        </div>
                        <CartList />
                    </div>
                    
                    <div className="payment">
                        <div className="step step1">
                            <form id="checkout_step1" onSubmit={this.handleForm}>
                                <h2>Email Address</h2>
                                <p>Your email address is used to send receipts</p>
                                <input type="hidden" name="_token" value="{{ csrf_token() }}"></input>
                                <input type="text" name="email_address" placeholder="Your Email address" />
                                <button className="button">Continue</button>
                            </form>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}
