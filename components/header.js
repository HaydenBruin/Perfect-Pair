import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import { updateCart } from '../store'

class Header extends Component {

    componentDidMount = () => {
        if(this.props.cartProducts.length === 0)
        {
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
    }

    render() {
        return (
            <header>
                <div className="container">
                    <div className="logo column">
                        <Link href="/"><a><img src="/static/logo-circle-pp-blue.png" alt="Perfect Pair Logo" /></a></Link>
                    </div>
                    <div className="nav column">
                        <nav>
                            <ul>
                                <li><a>Account</a></li>
                                <li><Link href="/checkout"><a>Cart: {this.props.cartProducts.length} items</a></Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

const mapStateToProps = (state) => ({
    cartOverview: state.cartOverview,
    cartProducts: state.cartProducts

})

export default connect(mapStateToProps)(Header)
