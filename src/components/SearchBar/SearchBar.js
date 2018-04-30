import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      q: '',
      location: '',
      date: '',
      sortBy: 'best'
    };

    this.handleQChange = this.handleQChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.sortByOptions = {
      'Best': 'best',
      'Distance': 'distance',
      'Date': 'date'
    };
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    }
    return '';
  }

  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption});
  }

  handleQChange(event) {
    this.setState({q: event.target.value});
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }

  handleDateChange(event) {
    this.setState({date: event.target.value});
  }

  handleSearch(event) {
    this.props.searchEventBrite(this.state.q, this.state.location, this.state.date, this.state.sortBy);

    event.preventDefault();
  }

  renderSortByOptions() {
  return Object.keys(this.sortByOptions).map(sortByOption => {
    let sortByOptionValue = this.sortByOptions[sortByOption];
    return (<li className={this.getSortByClass(sortByOptionValue)}
                key={sortByOptionValue}
                onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
              {sortByOption}
           </li>);
    });
  }

  render() {
    return (
      <div className="Entire-Search-Wrapper">
        <div className="SearchBar">
        <div className="SearchBar-fields">
          <input className="first-search-bar" placeholder="Search Events" onChange={this.handleQChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
          <select name="All Dates" onChange={this.handleDateChange}>
            <option value="Today" >Today</option>
            <option value="Tomorrow">Tomorrow</option>
            <option value="This_Week">This Week</option>
            <option value="Next_Week">Next Week</option>
            <option value="This_Month">This Month</option>
            <option value="Next_Month">Next Month</option>
          </select>
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Search</a>
        </div>
      </div>
      <div className="sort-by-options">
        <ul>
          {this.renderSortByOptions()}
        </ul>
      </div>
    </div>

    );
  }
}

export default SearchBar;
