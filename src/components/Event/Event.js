import React from 'react';
import './Event.css';
import image from './camp-nou.jpg';


class Event extends React.Component {
  render() {
    return (
      <div className="Event">
          <div className="image-container">
            <img src='{image}' alt=''/>
          </div>
          <div className="event-card">
            <p className="date-time">{this.props.event.start.date},{this.props.event.start.utc},{this.props.event.start.timezone}</p>
            <div className="event-title">
              {this.props.event.name.html}
            </div>
              <p className="event-address">{this.props.location.address}</p>
          </div>
      </div>
    );
  }
}

export default Event;
