import React, { Fragment, Component } from 'react'

// REDUX
import { connect } from 'react-redux'
import { updateCart } from '../../store'

// ELEMENTS
import Head from 'next/head'
import Header from '../header'
import Footer from '../footer'
import Notification from '../notification'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

// SCSS
import '../../assets/scss/app.scss'

// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faTruck, faCreditCard, faCheck } from '@fortawesome/free-solid-svg-icons'

library.add( faShoppingCart, faTruck, faCreditCard, faCheck )

class DefaultLayout extends Component {

    componentDidMount = () => {
        fetch( `${publicRuntimeConfig.API_URL}/api/cart`, {
            method: 'get',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            }
        } ).then( response => response.json() )
            .then( data => {
                this.props.dispatch( updateCart( data.cart ) )
            } );
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
                    <meta name="theme-color" content="#FEA47F" />
                    <link rel="shortcut icon" type="image/png" href="/static/favicon.ico" />

                    <script src="https://js.stripe.com/v3/"></script>
                    <script>
                        !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
                            n.callMethod.apply( n, arguments ) : n.queue.push( arguments )};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '259263868076655');
                    fbq('track', 'PageView');
                    </script>
                    <noscript><img height="1" width="1" style="display:none"
                        src="https://www.facebook.com/tr?id=259263868076655&ev=PageView&noscript=1"
                    /></noscript>

                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                </Head>

                <Notification notifications={this.props.notifications} />
                {headerElement}
                {this.props.children}
                {footerElement}
            </Fragment>
        )
    }
}

const mapStateToProps = ( state ) => ( {
    cartOverview: state.cartOverview,
    cartProducts: state.cartProducts,
    notifications: state.notificationList
} )

export default connect( mapStateToProps )( DefaultLayout )