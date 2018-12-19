import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartList from '../components/cart-list'
import Link from 'next/link'

export class CartOverlay extends Component {

    toggleCartOverlay = () => {
        document.querySelector('.cart-overlay').classList.remove('active');
    }

    render() {
        if(this.props.cartProducts.length === 0)
        {
            return (
                <div className="cart-overlay">
                    <div className="cart-overlay-background" onClick={this.toggleCartOverlay}></div>
                    <div className="cart-overlay-content">
                        <div className="cart-empty">
                            <h1>Your cart is empty :(</h1>
                            <a className="button" onClick={this.toggleCartOverlay}>Continue Shopping</a>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div className="cart-overlay">
                <div className="cart-overlay-background" onClick={this.toggleCartOverlay}></div>
                <div className="cart-overlay-content">
                    <div className="overlay-header">
                        <div className="split">
                            <div className="column">
                                <h1>Your bag ({this.props.cartProducts.length} item(s))</h1>
                            </div>
                            <div className="close" onClick={this.toggleCartOverlay}>X</div>
                        </div>
                    </div>
                    <div className="overlay-content">
                        <CartList />

                        <div className="actions">
                            <div className="action">
                                <Link href="/checkout"><a className="button">Checkout</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cartOverview: state.cartOverview,
    cartProducts: state.cartProducts
})

export default connect(mapStateToProps)(CartOverlay)
