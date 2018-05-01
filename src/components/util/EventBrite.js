const apiKey = 'BDUSSNPEHZVEED357P';

const EventBrite = {
  search(q, location, date, sortBy) {
    return fetch(`http://www.eventbriteapi.com/v3/events/?token=2OHPMQAPHJJPBATY6ECJ`, {
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
