import React, { Component } from 'react'
import DefaultLayout from '../components/layouts/default-layout'

export default class Cart extends Component {
    render() {
        return (
            <DefaultLayout>
                <div className="cart">
                    <h1>Your cart</h1>

                    <div className="cart-list">
                        <div className="column title">Item</div>
                        <div className="column title"></div>
                        <div className="column title">Price</div>
                        <div className="column title">Quantity</div>
                        <div className="column title">Total</div>

                        <div className="column"><img src="/static/socks/product1.jpg" className="productimg" /></div>
                        <div className="column">Captain America socks</div>
                        <div className="column">$11.99<br />$6.99</div>
                        <div className="column"><input type="text" defaultValue="1" /></div>
                        <div className="column">$13.98</div>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}
