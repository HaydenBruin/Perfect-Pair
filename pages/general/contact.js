import React, { Component } from 'react'
import DefaultLayout from '../../components/layouts/default-layout'

export default class Contact extends Component {
    render() {
        return (
            <DefaultLayout>
                <div className="container">
                    <h1>Contact Us</h1>
                    
                    <p>If you have any questions about our products or services feel free to contact us using the email address below.</p>
                    <p><strong>support@perfectpair.nz</strong></p>
                </div>
            </DefaultLayout>
        )
    }
}
  