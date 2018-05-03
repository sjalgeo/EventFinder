
const myToken = '2OHPMQAPHJJPBATY6ECJ';

const EventBrite = {
  search(term, address, date, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/http://www.eventbriteapi.com/v3/events/search?token=2OHPMQAPHJJPBATY6ECJ&q=${term}&location.address=${address}&start_date.keyword=${date}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${myToken}`
      }
        }).then(response => {
          return response.json();
        }).then(jsonResponse => {
      if (jsonResponse.events) {
        return jsonResponse.event.map(events => ({
          imageSrc: events.logo.original.url,
          date: events.start.local,
          name: events.name.text,
          address: events.location.address
        }));
      }
    });
  }
}

export default EventBrite;
