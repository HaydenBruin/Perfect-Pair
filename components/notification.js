import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeNotifications } from '../store'

class Notification extends Component {

    notificationTimer = null;
    
    dismissNotifications = (id) => {
        this.props.dispatch(removeNotifications());
    }

    componentDidUpdate = () => {
        clearTimeout(this.notificationTimer);
        this.notificationTimer = setTimeout(() => {
            this.props.dispatch(removeNotifications());
        },3000)
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
                                <p className="text" onClick={() => this.dismissNotifications()}><img src="/static/success.png" />{notification}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}

export default connect()(Notification)
