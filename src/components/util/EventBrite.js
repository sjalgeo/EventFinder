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
          imageSrc: event.logo.original.url,
          date: event.start.local,
          title: event.name.text,
          address: location.address
        }));
      }
    });
  }
};

export default EventBrite;
