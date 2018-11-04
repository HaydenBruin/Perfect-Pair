import React, { Component } from 'react'
import DefaultLayout from '../../components/layouts/default-layout'
import { Link } from 'next-routes'

export default class Returns extends Component {
    render() {
        return (
            <DefaultLayout>
                <div className="container">
                    <h1>Returns</h1>
                    <p>We accept returns within 14 days of purchase. You will be required to courier back all items to our warehouse at your own cost.</p>
                    <p>Once the goods have been received on our end your purchase will be fully refunded.</p>
                </div>
            </DefaultLayout>
        )
    }
}
