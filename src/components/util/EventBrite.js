
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
        return jsonResponse.events.map(event => ({
          imageSrc: event.logo.original.url,
          date: event.start.local,
          name: event.name.text,
          address: event.location.address
        }));
      }
    });
  }
}

export default EventBrite;
