import React from 'react';
import './App.css';
import SearchBar from '../components/SearchBar/SearchBar';
import EventList from '../components/EventList/EventList';
import EventBrite from '../components/util/EventBrite';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        events: []
      };

      this.searchEventBrite = this.searchEventBrite.bind(this);
  }

  searchEventBrite(term, address, date, sortBy) {
    EventBrite.search(term, address, date, sortBy).then(events => {
      this.setState({events: events});
    });
  }

  render() {
    return (
      <div className="App">
          <h1>EventFinder</h1>
            <SearchBar searchEventBrite={this.searchEventBrite}/>
            <EventList events={this.state.events}/>
          <footer>© 2018 EventFinder</footer>
      </div>
    );
  }
}

export default App;
