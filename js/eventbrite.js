class EVENTBRITE {

  //save the token
  constructor() {
    this.auth_token = 'A7EZNCT55B7W5WORCHBQ';
    this.by = 'date';
  }

  //fetching data fro categories
  async fetchEventBriteApi() {

    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`

    const queryUrl = await fetch(url);
    const categories = await queryUrl.json();
    
    return {
      categories
    }
  }

  async fetchEvents(eventName, category) {

    let urlEvent = `https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&categories=${category}&sort_by=${this.by}&token=${this.auth_token}`;

    const eventsQuery = await fetch(urlEvent);
    const res = await eventsQuery.json();

    return {
      res
    }
  }
}