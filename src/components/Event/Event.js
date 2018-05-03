import React from 'react';
import './Event.css';


class Event extends React.Component {
  render() {
    console.warn(this.props.event);
    return (
      <div className="Event">
          <div className="image-container">
            <img src={this.props.events.logo.original.url} alt=''/>
          </div>
          <div className="event-card">
            <p className="date-time">{this.props.events.start.local},</p>
            <div className="event-title">
              {this.props.events.name.text}
            </div>
              <p className="event-address">{this.props.location.address}</p>
          </div>
      </div>
    );
  }
}

export default Event;
