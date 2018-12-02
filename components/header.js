import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import CartOverlay from '../components/cart-overlay'

class Header extends Component {

    state = {
        currentMessage: 0,
        messages: [
            "Free shipping on all orders New Zealand wide",
            "Buy 2 pairs of socks get 15% off, buy 3 pairs get 30% off"
        ]
    }
    
    componentDidMount = () => {
        setInterval(() => {
            if(this.state.currentMessage === (this.state.messages.length - 1)) {
                this.setState({
                    currentMessage: 0
                })
            }
            else {
                this.setState({
                    currentMessage: this.state.currentMessage + 1
                })
            }
        }, 3000);
    }

    toggleCartOverlay = () => {
        document.querySelector('.cart-overlay').classList.toggle('active');
    }

    render() {
        return (
            <Fragment>
                <CartOverlay />
                <header>
                    <div className="container">
                        <div className="logo column">
                            <Link href="/"><a><img src="/static/logo.png" alt="Perfect Pair Logo" /></a></Link>
                        </div>
                        <div className="nav column">
                            <div className="overview" onClick={this.toggleCartOverlay}>
                                {this.props.cartProducts.length} bag item(s) - ${this.props.cartOverview.totalPrice} NZD
                            </div>
                        </div>
                    </div>
                </header>
                <div className="secondary-header">
                    <p>{this.state.messages[this.state.currentMessage]}</p>
                </div>
                <div className="mobile-cart" onClick={this.toggleCartOverlay}>
                    {this.props.cartProducts.length} bag item(s) - ${this.props.cartOverview.totalPrice} NZD
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    cartOverview: state.cartOverview,
    cartProducts: state.cartProducts

})

export default connect(mapStateToProps)(Header)
