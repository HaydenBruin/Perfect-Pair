import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <div className="checkout">
                <div className="cart">
                    <img src="/static/logo-circle-pp-blue.png" alt="Perfect Pair Logo" className="logo" />
                    
                    <div className="cartlist">
                        <div className="product">
                            <div className="image">
                                <img src="/static/socks/noimage.jpg" alt="Product Title" />
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

                                <span className="discount">You save<br />$10.00 (8.70%)</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="payment">
                    payment..
                </div>
            </div>
        )
    }
}
