import React from 'react';
import './EventList.css';
import Event from '../Event/Event';

class EventList extends React.Component {
  render() {
    return (
      <div className="EventList-container">
        <div className="Events">
        {
          this.props.events.map(event => {
            return <Event event={event} key={event.id} />
          })
        }
        </div>
      </div>
    );
  }
}

export default EventList;
