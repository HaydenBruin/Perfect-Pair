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
            loading: false,
            errorMSG: null,
            fullname: '',
            address: '',
            suburb: '',
            city: '',
            postcode: ''
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

        fetch(`${publicRuntimeConfig.API_URL}/api/checkout/address`, {
            method: 'post',
            credentials: 'include',
            body: JSON.stringify({
                fullname: this.state.fullname,
                address: this.state.address,
                suburb: this.state.suburb,
                city: this.state.city,
                postcode: this.state.postcode
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
                this.setState({
                    loading: false,
                    errorMSG: "Please make sure all fields are populated"
                })
            }
        });
    }

    updateFullName = (event) => {
        this.setState({
            fullname: event.target.value
        })
    }
    updateAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    updateCity = (event) => {
        this.setState({
            city: event.target.value
        })
    }
    updatePostcode = (event) => {
        this.setState({
            postcode: event.target.value
        })
    }
    updateSuburb = (event) => {
        this.setState({
            suburb: event.target.value
        })
    }

    render() {
        let renderCheckout = (
            <form id="checkout_step2" onSubmit={this.handleForm}>
                <h2>Delivery Address</h2>
                <p>Where do you want your package shipped?</p>
                
                {this.state.errorMSG && (
                    <div className="validate error">{this.state.errorMSG}</div>
                )}

                <div className={this.state.fullname ? "field active" : "field"}>
                    <label>Full Name / Business Name</label>
                    <input type="text" name="fullname" placeholder="Full Name / Business Name" value={this.state.fullname} onChange={this.updateFullName} />
                </div>

                <div className={this.state.address ? "field active" : "field"}>
                    <label>Address</label>
                    <input type="text" name="address" placeholder="Address" value={this.state.address} onChange={this.updateAddress} />
                </div>

                <div className={this.state.suburb ? "field active" : "field"}>
                    <label>Suburb</label>
                    <input type="text" name="suburb" placeholder="Suburb" value={this.state.suburb} onChange={this.updateSuburb} />
                </div>

                <div className={this.state.city ? "field active" : "field"}>
                    <label>City</label>
                    <input type="text" name="city" placeholder="City" value={this.state.city} onChange={this.updateCity} />
                </div>

                <div className={this.state.postcode ? "field active" : "field"}>
                    <label>Postcode</label>
                    <input type="text" name="postcode" placeholder="Postcode" value={this.state.postcode} onChange={this.updatePostcode} />
                </div>

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
            <DefaultLayout checkoutPage={true}>
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
const mapStateToProps = (state) => ({
    cartOverview: state.cartOverview,
    cartCoupons: state.cartCoupons,
    cartProducts: state.cartProducts
})

export default connect(mapStateToProps)(Delivery);
