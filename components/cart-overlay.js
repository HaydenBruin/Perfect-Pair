import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

export class CartOverlay extends Component {

    toggleCartOverlay = () => {
        document.querySelector('.cart-overlay').classList.remove('active');
    }

    render() {
        return (
            <div className="cart-overlay">
                <div className="cart-overlay-background" onClick={this.toggleCartOverlay}></div>
                <div className="cart-overlay-content">
                    <div className="split">
                        <div className="column">
                            <h1>Your bag</h1>
                        </div>
                        <div className="column">
                            {this.props.cartProducts.length} items
                        </div>
                    </div>
                    <div className="cartlist">
                        {
                            this.props.cartProducts.map((product, index) => {
                                return (
                                    <div className="product" key={index}>
                                        <div className="image">
                                            <img src={product.image} alt={product.title} />
                                        </div>
                                        <div className="details">
                                            <h2>{product.title}</h2>
                                        </div>
                                        <div className="price">
                                            <span className="oldprice">${product.price}</span>
                                            <span className="onsale">${product.saleprice}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <div className="total">
                            <div className="fullprice">${parseInt(this.props.cartOverview.totalPrice) + parseInt(this.props.cartOverview.totalSavings)}</div>
                            <div className="saleprice">${this.props.cartOverview.totalPrice}</div>
                        </div>
                    </div>
                    <div className="actions">
                        <div className="split">
                            <div className="column">
                                <div className="action">
                                    <a className="button" onClick={this.toggleCartOverlay}>Continue Shopping</a>
                                </div>
                            </div>
                            <div className="column">
                                <div className="action">
                                    <Link href="/checkout"><a className="button">Checkout</a></Link>
                                </div>
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
