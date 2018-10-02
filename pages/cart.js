import React, { Component } from 'react'
import DefaultLayout from '../components/layouts/default-layout'

export default class Cart extends Component {
    render() {
        return (
            <DefaultLayout>
                <div className="cart">
                    <h1>Your cart</h1>

                    <table class="cartlist">
                        <thead>
                            <tr class="border">
                                <th class="desc">Item description</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th><strong>Total</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            <form id="cart-form" action="?" method="POST"></form>
                            <input type="hidden" name="submitted" value="1" />

                                <tr class="border">
                                    <td class="image">
                                        <img src="/static/socks/product1.jpg" alt="Mens Berghaus Explorer Active GTX Shoe" />

                                        <p><strong>Mens Berghaus Explorer Active GTX Shoe</strong></p>
                                        <p>Colour: Black/Red</p><p> Shoe Size: UK 9</p>
						
					                </td>
                                    <td><strong>$105.00</strong></td>
                                    <td>
                                        <label class="hide" for="qty1">Quantity</label>
                                        <input type="hidden" name="products[2945]" id="inv" value="2945" />
                                        <input type="text" name="products[2945]" id="qty" value="1" />
                                        <a href="#" class="cart-update">Update</a>
                                        <a href="#" class="cart-remove" pid="2945">Remove</a>
					                </td>
                                    <td>
                                        <strong class="oldprice">$115.00</strong>
                                        <strong class="onsale">$105.00</strong>

                                        <p class="discount">You save<br />$10.00 (8.70%)</p>
                                    </td>
					            </tr>
						</tbody>
					</table>
                </div>
            </DefaultLayout>
        )
    }
}
