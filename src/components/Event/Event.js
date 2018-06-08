import React from 'react';
import './Event.css';


class Event extends React.Component {
  render() {
    return (
      <div className="Event">
          <div className="image-container">
            <img src={this.props.event.imageSrc ? this.props.event.imageSrc.url : ''} alt=''/>
          </div>
          <div className="event-card">
            <p className="date-time">{this.props.event.start},</p>
            <div className="event-title">
              {this.props.event.name}
            </div>
              <p className="event-address">{this.props.location.address}</p>
          </div>
      </div>
    );
  }
}

export default Event;
