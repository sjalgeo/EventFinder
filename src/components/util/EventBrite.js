const apiKey = 'BDUSSNPEHZVEED357P';

const EventBrite = {
  search(q, location, date, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://www.eventbrite.com/developer/v3/endpoints/events/#ebapi-get-events-search?q=${q}&location=${location}&date=${date}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.events) {
        return jsonResponse.events.map(event => ({
          date: event.start_date.keyword,
          time: event.start.utc,
          timezone: event.start.timezone,
          title: event.name.html,
          address: location.address
        }));
      }
    });
  }
};

export default EventBrite;
