import React, { Component } from 'react'
import { Link } from "../routes";

export default class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="actions">
                    <Link to="/delivery"><a>Delivery</a></Link>
                    <Link to="/returns"><a>Returns</a></Link>
                    <Link to="/contact"><a>Contact</a></Link>
                </div>
                <div className="container">
                    <div className="column copyright">
                        <p>Copyright &copy; Perfect Pair NZ</p>
                    </div>
                    <div className="column links">
                        <Link to="/legal/terms-and-conditions"><a>Terms & Conditions</a></Link>
                        <Link to="/legal/privacy-policy"><a>Privacy Policy</a></Link>
                        <Link to="/legal/cookie-policy"><a>Cookie Policy</a></Link>
                    </div>
                </div>
            </footer>
        )
    }
}
