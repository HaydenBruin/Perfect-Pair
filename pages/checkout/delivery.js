import React, { Component } from 'react'
import DefaultLayout from '../../components/layouts/default-layout'
import Loading from '../../components/loading'
import { Router } from '../../routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import getConfig from 'next/config'
import { connect } from 'react-redux'
import { createNotification } from '../../store'
const { publicRuntimeConfig } = getConfig()

class Delivery extends Component {

    constructor() {
        super();

        this.state = {
            loading: false
        }
    }

    handleForm = (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        })

        fetch(`${publicRuntimeConfig.API_URL}/api/checkout/address`, {
            method: 'post',
            credentials: 'include',
            body: JSON.stringify({
                fullname: document.querySelector('input[name=fullname]').value,
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
                this.props.dispatch(createNotification("Thanks, your delivery address has been saved."));
            }
            else {
                alert("Sorry, we couldn't save your address");
            }
        });
    }

    render() {
        let renderCheckout = (
            <form id="checkout_step2" onSubmit={this.handleForm}>
                <h2>Delivery Address</h2>
                <p>Where do you want your package shipped?</p>
                <input type="text" name="fullname" placeholder="Full Name / Business Name" />
                <input type="text" name="address" placeholder="Address" />
                <input type="text" name="suburb" placeholder="Suburb" />
                <input type="text" name="city" placeholder="City" />
                <input type="text" name="postcode" placeholder="Postcode" />
                <button className="button">Confirm Shipping Address</button>
            </form>
        )

        if(this.state.loading)
        {
            renderCheckout = (
                <Loading />
            )
        }

        return (
            <DefaultLayout disableHeader={true} disableFooter={true}>
                <div className="checkout">
                    <div className="check">
                        <div className="steps">
                            <div className="step completed"><div className="circle"><FontAwesomeIcon icon="shopping-cart" /></div>Email</div>
                            <div className="step completed"><div className="circle"><FontAwesomeIcon icon="truck" /></div>Delivery</div>
                            <div className="step"><div className="circle"><FontAwesomeIcon icon="credit-card" /></div>Payment</div>
                            <div className="step"><div className="circle"><FontAwesomeIcon icon="check" /></div>Completed</div>
                        </div>
                        <div className="payment">
                            <div className="step step2">
                                {renderCheckout}
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}
export default connect()(Delivery)
