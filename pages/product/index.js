import React, { Component } from 'react'
import DefaultLayout from '../../components/layouts/default-layout'
import AddToCart from '../../components/add-to-cart'
import '../../assets/scss/app.scss'

export default class Product extends Component {

    //this.props.url.query.product
    product = {
        id: 1,
        title: "Captain America",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis neque in magna tempor, sit amet tincidunt nisl tincidunt. Etiam in nisl sit amet purus dapibus ullamcorper. Vivamus sed ex commodo, tempus enim id, iaculis augue.",
        slug: 'captain-america',
        img: "/static/socks/product1.jpg",
        price: 11.99,
        salePrice: 6.99,
        inventory: 2
    }

    state = {
        product: []
    }

    componentDidMount = () => {
        /*fetch(`${process.env.API_URL}/api/products/${this.props}`, {
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
        });*/
    }

    render() {
        console.log(this.props)
        return (
            <DefaultLayout>
                <div className="product-details">
                    <div className="img">
                        <img src={this.product.img} className="productimg"/>
                    </div>
                    <div className="details">
                        <h1>{this.product.title}</h1>
                        <p>{this.product.description}</p>
                        <div className="pricing">
                            <div className="saleprice">${this.product.salePrice}</div>
                            <div className="price">${this.product.price}</div>
                        </div>
                        <AddToCart product={this.product} />
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}