const apiKey = 'BDUSSNPEHZVEED357P';

const EventBrite = {
  search(q, location, date, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/https://www.eventbriteapi.com/v3/users/me/?token=2OHPMQAPHJJPBATY6ECJ`, {
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
