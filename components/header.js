import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import { updateCart } from '../store'
import CartOverlay from '../components/cart-overlay'

class Header extends Component {

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);

        fetch(`${process.env.API_URL}/api/cart`, {
            method: 'get',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(data => {
                this.props.dispatch(updateCart(data.cart))
            });
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
        return (
            <Fragment>
                <CartOverlay />
                <header>
                    <div className="container">
                        <div className="logo column">
                            <Link href="/"><a><img src="/static/logo-circle-pp-blue.png" alt="Perfect Pair Logo" /></a></Link>
                        </div>
                        <div className="nav column">
                            <nav>
                                <ul>
                                    <li onClick={this.toggleCartOverlay} className="cart-nav">
                                        <img src="/static/shopping-bag.png" />
                                        <div className="counter">{this.props.cartProducts.length}</div>
                                    </li>
                                </ul>
                            </nav>
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
