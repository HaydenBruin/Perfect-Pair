import React, { Component } from 'react'

export default class AddToCart extends Component {

    state = {
        addQty: 1,
        cart: []
    }

    quanitityUp = () => {
        let totalQty = this.state.addQty + 1;
        if(totalQty >= this.props.product.inventory) totalQty = this.props.product.inventory;
        this.setState({
            addQty: totalQty
        })
    }

    quanitityDown = () => {
        let totalQty = this.state.addQty - 1;
        if(totalQty <= 0) totalQty = 1;
        this.setState({
            addQty: totalQty
        })
    }

    addToCart = () => {
        console.log('adding to cart');
        const product = {
            id: this.props.product.id,
            quantity: this.state.addQty
        }
        console.log(product);
        fetch(`${process.env.API_URL}/api/cart/add`, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            body: {
                productId: product.id,
                quantity: product.quantity
            },
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(response => response.json())
        .then(data => this.setState({ cart: data }) && console.log(data));
    }

    render() {
        return (
            <div className="add-to-cart">
                <div className="column">
                    <div className="quantity">
                        <div className="qty minus" onClick={() => this.quanitityDown()}></div>
                        <div className="qty">{this.state.addQty}</div>
                        <div className="qty plus" onClick={() => this.quanitityUp()}></div>
                    </div>
                </div>
                <div className="column">
                    <div onClick={() => this.addToCart()} className="button">Add to cart</div>
                </div>
            </div>
        )
    }
}
