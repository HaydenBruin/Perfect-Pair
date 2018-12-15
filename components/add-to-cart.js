import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateCart, createNotification } from '../store'
import PropTypes from 'prop-types'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

class AddToCart extends Component {

    state = {
        quantity: 1
    }

    addToCart = () => {
        const product = {
            id: this.props.product.id,
            quantity: this.state.quantity
        }

        fetch( `${publicRuntimeConfig.API_URL}/api/cart/add`, {
            method: 'post',
            credentials: 'include',
            body: JSON.stringify( {
                productId: product.id,
                quantity: product.quantity
            } ),
            headers: {
                "Content-Type": "application/json"
            }
        } ).then( response => response.json() )
            .then( data => {
                fbq( 'track', 'AddToCart' );

                this.props.dispatch( updateCart( data.cart ) );
                this.props.dispatch( createNotification( "The product has been added to your cart" ) );
            } );
    }

    updateQuantity = ( event ) => {
        this.setState( {
            quantity: event.target.value
        } )
    }

    createOptions = () => {
        let options = [];
        for ( let i = 1; i < 10; i++ ) {
            if ( i > this.props.product.inventory ) break;
            options.push(
                <option key={i} value={i}>{i} Pair{i != 1 ? "s" : null}</option>
            )
        }
        return options;
    }

    render() {
        return (
            <div className="add-to-cart">
                <div className="column">
                    <select name="qty" onChange={this.updateQuantity}>
                        {this.createOptions()}
                    </select>
                </div>
                <div className="column">
                    <div onClick={() => this.addToCart()} className="button">Add to cart</div>
                </div>
            </div>
        )
    }
}

AddToCart.propTypes = {
    quantity: PropTypes.number
}
export default connect()( AddToCart );