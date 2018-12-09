import React, { Component } from 'react'
import DefaultLayout from '../../components/layouts/default-layout'
import Loading from '../../components/loading'
import { Router } from '../../routes'
import getConfig from 'next/config'
import { createNotification } from '../../store'
const { publicRuntimeConfig } = getConfig()
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Cart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            errorMSG: null,
            email_address: ""
        }
    }

    componentDidUpdate = () => {
        if(!this.props.cartOverview.length && this.props.cartOverview.totalProducts == 0)
        {
            Router.pushRoute('/');
        }
    }
    
    handleForm = (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        })

        fetch(`${publicRuntimeConfig.API_URL}/api/checkout/email`, {
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
                this.props.dispatch(createNotification("Thanks, your email address has been saved."));
            }
            else {
                this.setState({
                    loading: false,
                    errorMSG: "Please provide a valid email address"
                })
            }
        });
    }

    updateEmailAddress = (event) => {
        this.setState({
            email_address: event.target.value
        })
    }

    render() {
        let renderCheckout = (
            <form id="checkout_step1" onSubmit={this.handleForm}>
                <h2>Email Address</h2>
                <p>Your email address is used to send receipts</p>
                
                {this.state.errorMSG && (
                    <div className="validate error">{this.state.errorMSG}</div>
                )}
                
                <input type="text" name="email_address" placeholder="Your Email address" value={this.state.email_address} onChange={this.updateEmailAddress}/>
                <button className="button">Continue</button>
            </form>

        )

        if(this.state.loading)
        {
            renderCheckout = (
                <Loading />
            )
        }

        return (
            <DefaultLayout>
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
                                {renderCheckout}
                            </div>
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

export default connect(mapStateToProps)(Cart);
