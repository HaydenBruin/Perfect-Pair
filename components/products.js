import React, { Component } from 'react'
import { Link } from '../routes'
import AddToCart from './add-to-cart'
import LoadingProduct from "../components/loading-product";
import { createNotification } from '../store'
import getConfig from 'next/config'
import { connect } from 'react-redux'
const { publicRuntimeConfig } = getConfig()

class Products extends Component {

    state = {
        products: []
    }

    componentDidMount = () => {
        if (this.state.products.length === 0) {
            fetch(`${publicRuntimeConfig.API_URL}/api/products`, {
                method: 'get',
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(response => response.json())
                .then(json => this.setState({ products: json.data }));
        }
    }

    addNote = (message) => {
        this.props.dispatch(createNotification(message));
    }

    render() {
        if (this.state.products.length === 0) {
            let elements = [];
            for (let i = 0; i < 6; i++) { elements.push(<LoadingProduct key={i} />) }

            return (
                <div className="products">
                    <div className="container">
                        <div className="products-list">
                            {elements}
                        </div>
                    </div>
                </div>
            )
        }
        //<div className="saleprice">${product.saleprice}</div>
        return (
            <div className="products">
                <div className="container">
                    <button onClick={() => this.addNote("Hello, this is hayden")}>Add note</button>
                    <div className="products-list">
                        {
                            this.state.products.map((product, index) => {
                                return (
                                    <div className="product" key={index}>
                                        <Link route={`/product/${product.slug}/${product.id}`}>
                                            <a><img src={product.image} className="productimg" /></a>
                                        </Link>
                                        <div className="details">
                                            <div className="title">
                                                <h2>{product.title}</h2>
                                            </div>
                                            <div className="pricing">
                                                <div className="price">${product.price}</div>
                                            </div>
                                        </div>
                                        <AddToCart product={product} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Products)
