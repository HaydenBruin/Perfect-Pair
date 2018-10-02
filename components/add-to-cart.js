import React, { Component } from 'react'

export default class AddToCart extends Component {

    state = {
        addQty: 1
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

    addToCart = (id) => {
        console.log('adding product to cart....')
        console.log('ProductID: ',this.props.product.id)
        console.log('ProductQty: ',this.state.addQty);
        console.log('Product Max Stock: ',this.props.product.inventory);
    }

    render() {
        return (
            <div className="basket">
                <div className="column">
                    <div className="quantity">
                        <div className="qty" onClick={() => this.quanitityDown()}><img src="/static/minus.jpg" /></div>
                        <div className="qty">{this.state.addQty}</div>
                        <div className="qty" onClick={() => this.quanitityUp()}><img src="/static/plus.png" /></div>
                    </div>
                </div>
                <div className="column">
                    <div onClick={() => this.addToCart(this.props.product.id)} className="button">Add to cart</div>
                </div>
            </div>
        )
    }
}
