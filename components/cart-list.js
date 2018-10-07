import React, { Component } from 'react'

export default class CartList extends Component {
    render() {
        return (
            <div className="cart">
                <img src="/static/logo-circle-pp-blue.png" alt="Perfect Pair Logo" className="logo" />
                
                <div className="cartlist">
                    <div className="product">
                        <div className="image">
                            <img src="/static/noimage.jpg" alt="Product Title" />
                        </div>
                        <div className="details">
                            <h2>1 x Captain America Socks</h2>
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
                            <h2>2 x Spongebob Sqaurepants Socks</h2>
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
        )
    }
}
