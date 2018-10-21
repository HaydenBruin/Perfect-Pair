import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class AddToCart extends Component {

    state = {
        quantity: 1
    }

    addToCart = () => {
        const product = {
            id: this.props.product.id,
            quantity: this.state.quantity
        }
        console.log(product);
        fetch(`${process.env.API_URL}/api/cart/add`, {
            method: 'post',
            credentials: 'include',
            body: JSON.stringify({
                productId: product.id,
                quantity: product.quantity
            }),
            headers: {
              "Content-Type": "application/json"
            }
        }).then(response => response.json())
        .then(data => this.setState({ cart: data.cart }))
        .then(() => {
            fetch(`${process.env.API_URL}/api/cart`, {
                method: 'get',
                credentials: 'include',
                headers: {
                  "Content-Type": "application/json"
                }
            }).then(response => response.json());
        });
    }

    updateQuantity = (event) => {
        this.setState({
            quantity: event.target.value
        })
    }

    createOptions = () => {
        let options = [];
        for (let i = 1; i < 10; i++) {
            if(i > this.props.product.inventory) break;
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

export default connect()(AddToCart);