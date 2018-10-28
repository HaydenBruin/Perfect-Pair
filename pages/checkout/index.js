import React, { Component } from 'react'
import CartList from '../../components/cart-list'
import Link from 'next/link'
import '../../assets/scss/app.scss'

export default class Cart extends Component {

    handleForm = (e) => {
        // /checkout/payment
        e.preventDefault();
        const formData = new FormData(document.querySelector('#checkout_step1'));
console.log(formData);
        fetch(`${process.env.API_URL}/api/checkout/email`, {
            method: 'post',
            credentials: 'include',
            body: formData,
            headers: {
              "Content-Type": "application/json"
            }
        }).then(response => response.json())
        .then(data => {
            console.log(data);
        });
    }

    render() {
        return (
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
                            <input type="text" name="email_address" placeholder="Your Email address" />
                            <button className="button">Continue</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
