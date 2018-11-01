import React, { Component } from 'react'
import DefaultLayout from '../../components/layouts/default-layout'
import AddToCart from '../../components/add-to-cart'

export default class Product extends Component {

    state = {
        product: []
    }

    componentDidMount = () => {
        fetch(`${process.env.API_URL}/api/products/${this.props.id}`, {
            method: 'get',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
        .then(data => {
            this.setState({
                product: data
            })
        });
    }

    render() {
        return (
            <DefaultLayout>
                <div className="product-details">
                    <div className="img">
                        <img src={this.state.product.image} className="productimg"/>
                    </div>
                    <div className="details">
                        <h1>{this.state.product.title}</h1>
                        <p>{this.state.product.description}</p>
                        <div className="pricing">
                            <div className="saleprice">${this.state.product.saleprice}</div>
                            <div className="price">${this.state.product.price}</div>
                        </div>
                        <AddToCart product={this.state.product} />
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}

Product.getInitialProps = async ({ query }) => {
    return query;
}
  