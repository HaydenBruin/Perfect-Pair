import React, { Component } from 'react'

class LoadingProduct extends Component {
    render() {
        return (
            <div className="product">
                <div className="loading-product">
                    <div className="image"></div>
                    <div className="detail">
                        <div className="title">
                            <div className="tit"></div>
                        </div>
                        <div className="pricing">
                            <div className="price"></div>
                            <div className="price"></div>
                        </div>
                    </div>
                    <div className="stocking">
                        <div className="stock"></div>
                        <div className="stock"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoadingProduct