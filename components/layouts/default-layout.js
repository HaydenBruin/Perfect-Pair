import React, { Fragment, Component } from 'react'

// REDUX
import { connect } from 'react-redux'
import { updateCart } from '../../store'

// ELEMENTS
import Head from 'next/head'
import Header from '../header'
import Footer from '../footer';

// SCSS
import '../../assets/scss/app.scss'

// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faTruck, faCreditCard, faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart, faTruck, faCreditCard, faCheck)

class DefaultLayout extends Component {
    componentDidMount() {
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
    render() {
        const headerElement = this.props.disableHeader ? null : <Header />
        const footerElement = this.props.disableFooter ? null : <Footer />
        return (
            <Fragment>
                <Head>
                    <title>Perfect Pair - Say it with socks</title>

                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="theme-color" content="#000000" />

                    <script src="https://js.stripe.com/v3/"></script>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                </Head>
                { headerElement }
                {this.props.children}
                { footerElement }
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    cartOverview: state.cartOverview,
    cartProducts: state.cartProducts

})

export default connect(mapStateToProps)(DefaultLayout)