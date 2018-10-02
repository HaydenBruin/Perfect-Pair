import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <div className="checkout">
                <div className="cart">
                    <img src="/static/logo-circle-pp-blue.png" alt="Perfect Pair Logo" className="logo" />
                    <table className="cartlist">
                        <thead>
                            <tr className="border">
                                <th className="desc">Item description</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th><strong>Total</strong></th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className="border">
                                <td className="image">
                                    <img src="/static/socks/product1.jpg" alt="Product Title" />

                                    <p><strong>Captain America</strong></p>
                    
                                </td>
                                <td><strong>$105.00</strong></td>
                                <td>
                                    <label className="hide" for="qty1">Quantity</label>
                                    <input type="hidden" name="products[2945]" id="inv" value="2945" />
                                    <input type="text" name="products[2945]" id="qty" value="1" />
                                    <a href="#" className="cart-update">Update</a>
                                    <a href="#" className="cart-remove" pid="2945">Remove</a>
                                </td>
                                <td>
                                    <strong className="oldprice">$115.00</strong>
                                    <strong className="onsale">$105.00</strong>

                                    <p className="discount">You save<br />$10.00 (8.70%)</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div className="payment">
                    payment..
                </div>
            </div>
        )
    }
}
