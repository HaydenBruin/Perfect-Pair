import React, { Component } from 'react'
import '../assets/scss/app.scss'

export default class Cart extends Component {
    render() {
        return (
            <div className="checkout">
                <div className="cart">
                    <img src="/static/logo-circle-pp-blue.png" alt="Perfect Pair Logo" className="logo" />
                    
                    <div className="cartlist">
                        <div className="product">
                            <div className="image">
                                <img src="/static/noimage.jpg" alt="Product Title" />
                            </div>
                            <div className="details">
                                <h2>Captain America Socks</h2>
                                <div className="quantity">
                                    <div className="qty" ><img src="/static/minus.jpg" /></div>
                                    <div className="qty">1</div>
                                    <div className="qty"><img src="/static/plus.png" /></div>
                                </div>
                            </div>
                            <div className="price">
                                <span className="oldprice">$11.99</span>
                                <span className="onsale">$6.99</span>
                            </div>
                        </div>
                        <div className="product">
                            <div className="image">
                                <img src="/static/noimage.jpg" alt="Product Title" />
                            </div>
                            <div className="details">
                                <h2>Spongebob Sqaurepants Socks</h2>
                                <div className="quantity">
                                    <div className="qty" ><img src="/static/minus.jpg" /></div>
                                    <div className="qty">1</div>
                                    <div className="qty"><img src="/static/plus.png" /></div>
                                </div>
                            </div>
                            <div className="price">
                                <span className="oldprice">$11.99</span>
                                <span className="onsale">$6.99</span>
                            </div>
                        </div>
                        <div className="total">
                            <div class="fullprice">$21.99</div>
                            <div class="saleprice">$13.98</div>
                        </div>
                    </div>
                </div>
                
                <div className="payment">
                    <div class="step step1 hide">
                        <h2>Email Address</h2>
                        <p>Your email address is used to send receipts & will be </p>
                        <input type="text" placeholder="Your Email address" />
                        <button className="button">Continue</button>
                    </div>
                    <div class="step step2 hide">
                        <h2>Payment Details</h2>
                        <p>We'll get your delivery address after payment has been completed</p>
                        <input type="text" placeholder="Card Number" />
                        <input type="text" placeholder="CVV" />
                        <input type="text" placeholder="Expiry" />
                        <button className="button">Pay with Credit Card</button>
                    </div>
                    <div class="step step3 hide">
                        <h2>Delivery Address</h2>
                        <p>Where do you want your package shipped?</p>
                        <input type="text" placeholder="Address" />
                        <input type="text" placeholder="Suburb" />
                        <input type="text" placeholder="City" />
                        <input type="text" placeholder="Postcode" />
                        <button className="button">Confirm Shipping Address</button>
                    </div>
                    <div class="step step4">
                        <h2>Order Complete</h2>
                        <p>Thanks for purchasing some goodies from us.</p>
                        <p>We'll send you an update with your package details shortly.</p>
                        <p>If you have any questions feel free </p>
                        <button className="button">Back to homepage</button>
                    </div>
                </div>
            </div>
        )
    }
}
