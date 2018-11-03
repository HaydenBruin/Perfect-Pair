import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import CartOverlay from '../components/cart-overlay'

class Header extends Component {

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

    }

    toggleCartOverlay = () => {
        document.querySelector('.cart-overlay').classList.toggle('active');
    }

    render() {
        console.log(this.props.cartOverview);
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
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    cartOverview: state.cartOverview,
    cartProducts: state.cartProducts

})

export default connect(mapStateToProps)(Header)
