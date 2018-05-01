const apiKey = 'BDUSSNPEHZVEED357P';
let accessToken;

// Getting a user's access token.
let EventBrite = {
  getAccessToken() {
    if(accessToken){
      return accessToken;
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      let expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/'); // clears the parameters, allows to grab a new access token when expires
      return accessToken;
    } else {
      window.location = `https://www.eventbrite.com/oauth/authorize?response_type=token&client_id=BDUSSNPEHZVEED357P`;
    }
  },

 // Fetch events from Eventbrite.
  search(q, location, date, sortBy) {
    return fetch(`http://www.eventbriteapi.com/v3/events?token=2OHPMQAPHJJPBATY6ECJ`, {
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
      else {
          return [];
        }
    });
  }
};

export default EventBrite;
