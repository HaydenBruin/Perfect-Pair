import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import CartOverlay from '../components/cart-overlay'
import Countdown from 'react-countdown-now';

class Header extends Component {

    sliderTimer = null;

    state = {
        discountFinish: 1546243541807,
        currentMessage: 0,
        messages: [
            //"All novetly socks just $5.99 (usually $9.99)"
            "Buy 2 pairs of socks get 15% off, buy 3 pairs get 30% off"
        ]
    }
    
    componentDidMount = () => {
        //console.log(Date.now() + (1000 * 60 * 60 * 24 * 7));
        /*this.sliderTimer = setInterval(() => {
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
        }, 3000);*/
    }

    componentWillUnmount = () => {
        //clearInterval(this.sliderTimer);
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
                            <div className="details">
                                <div className="overview" onClick={this.toggleCartOverlay}>
                                    {this.props.cartProducts.length} Pair(s) - ${this.props.cartOverview.totalPrice} NZD
                                </div>
                                <div className="submessage">Free shipping on all orders NZ wide</div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="secondary-header">
                    <div className="container">
                        <div className="message"><span className="sale">Deal</span> {this.state.messages[0]}</div>
                        <div className="countdown" style={{display: 'none'}}><Countdown date={this.state.discountFinish} /> till sale ends</div>
                    </div>
                </div>
                {!this.props.checkoutPage ? (
                    <div className="mobile-cart" onClick={this.toggleCartOverlay}>
                        {this.props.cartProducts.length} bag item(s) - ${this.props.cartOverview.totalPrice} NZD<br/>
                        <span className="shipping">Free shipping on all orders NZ wide</span>
                    </div>
                ) : null}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    cartOverview: state.cartOverview,
    cartProducts: state.cartProducts

})

export default connect(mapStateToProps)(Header)
