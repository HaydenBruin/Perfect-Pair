import React, { Component } from 'react'
import Link from 'next/link'
import AddToCart from './add-to-cart'

export default class Products extends Component {

    componentDidMount = () => {
        console.log('fetching')
        fetch('http://localhost:8000/api/products/', {
            method: 'get',
            mode: 'no-cors', 
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(function(response) {
            console.log('returne')
            return response.json();
        }).then(function(hey) {
                console.log('made it this far')
        }).catch(function(err) {
            // Error :(
        });
    }

    render() {
        console.log('render');
        return (
            <div className="products">
                <div className="products-list">
                    {
                        /*this.products.map((product, index) => {
                            return (
                                <div className="product" key={index}>
                                    <Link href={`/product/${product.slug}`}><img src={product.img} className="productimg"/></Link>
                                    <div className="details">
                                        <h2>{product.title}</h2>
                                        <div className="pricing">
                                            <div className="saleprice">${product.salePrice}</div>
                                            <div className="price">${product.price}</div>
                                        </div>
                                        <AddToCart product={product} />
                                    </div>
                                </div>
                            )
                        })*/
                    }
                </div>
            </div>
        )
    }
}

/*
products = [
        {
            id: 1,
            title: "Captain America",
            slug: 'captain-america',
            img: "/static/socks/product1.jpg",
            price: 11.99,
            salePrice: 6.99,
            inventory: 2
        },
        {
            id: 2,
            title: "Pikachu Socks",
            slug: 'pikachu-socks',
            img: "/static/socks/product2.jpg",
            price: 11.99,
            salePrice: 6.99,
            inventory: 2
        },
        {
            id: 3,
            title: "Avocado Lovers",
            slug: 'avocado-loves',
            img: "/static/socks/product3.jpg",
            price: 11.99,
            salePrice: 6.99,
            inventory: 2
        },
        {
            id: 4,
            title: "Spiderman",
            slug: 'spiderman',
            img: "/static/socks/product4.jpg",
            price: 11.99,
            salePrice: 6.99,
            inventory: 2
        },
        {
            id: 5,
            title: "Captain America",
            slug: 'captain-america',
            img: "/static/socks/product1.jpg",
            price: 11.99,
            salePrice: 6.99,
            inventory: 2
        },
        {
            id: 6,
            title: "Pikachu Socks",
            slug: 'pikachu-socks',
            img: "/static/socks/product2.jpg",
            price: 11.99,
            salePrice: 6.99,
            inventory: 2
            
        }
    ]
*/