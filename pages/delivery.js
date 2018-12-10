import React, { Component } from 'react'
import DefaultLayout from '../components/layouts/default-layout'
import { Link } from 'next-routes'

export default class Delivery extends Component {
    render() {
        return (
            <DefaultLayout>
                <div className="containercontent">
                    <h1>Delivery</h1>
                    <p>All deliveries will be sent the next business day. Deliveries will generally take about <strong>3-7 business days</strong>.</p>
                    <p>All stock is stored & shipped from our Tauranga warehouse.</p>
                    <hr />
                    <p>If you have any special requests please email us to let us know.</p>
                    <p>Business days are <strong>monday to friday</strong>, excluding public holidays</p>
                </div>
            </DefaultLayout>
        )
    }
}
