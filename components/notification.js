import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeNotification } from '../store'

class Notification extends Component {

    dismissNotification = (id) => {
        this.props.dispatch(removeNotification(id));
        this.forceUpdate();
    }

    render() {
        if(!this.props.notifications)
        {
            return null;
        }
        return (
            <div className="notification">
                {
                    this.props.notifications.map((notification, index) => {
                        return (
                            <div className="notification-wrap" key={index}>
                                <p className="text" onClick={() => this.dismissNotification(index)}><img src="/static/success.png" />{notification}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}

export default connect()(Notification)
