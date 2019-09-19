//inint app
class UI {

  constructor() {
    this.appInit();
  }

  appInit() {
    this.printCategories()
  }

  printCategories() {

    //fetching the Categories
    eventbrite.fetchEventBriteApi()
      .then((data) => {
        
        const cat = data.categories.categories;
        // return console.log(cat)

        //selet where it will be displayed
        const select = document.querySelector('#category');

        cat.forEach(element => {
          
          //create and option tag for select
          const option = document.createElement('option');
          option.value = element.id
          option.appendChild(document.createTextNode(element.name))

          select.appendChild(option);
        });
        
      })
    .catch(e => console.log(e.message))
  } 

  printMessage(mesasage, className) {

    const errorDiv = document.createElement('div');
    errorDiv.classList.add('text-center', 'alert', 'my-2', className);
    errorDiv.appendChild(document.createTextNode(mesasage))

    const beforeDiv = document.querySelector('#search-events');
    beforeDiv.insertBefore(errorDiv, document.querySelector('.form-group'))

    //make sure to remive it
    setTimeout(() => {
      document.querySelector('#search-events .alert').remove()
    }, 3000)
  }

  displayEvents(events) {

    const results = document.querySelector('#result');

    let eventDiv = '';

    events.forEach(event => {
      eventDiv += `
        <div class="col-md-4 mt-4">
          <div class="card">
              <div class="card-body">
                  <img class="img-fluid mb-2" src="${event.logo !== null ? event.logo.url : ''}">
              </div>
            <div class="card-body">
              <div class="card-text">
                <h2 class="text-center card-title">${event.name.text}</h2>
                <p class="lead text-primary">Event Information:</p>
                <p>${event.description.text.substring(0, 200)}...</p>
                <span class="badge badge-primary">Capacity: ${event.capacity}</span>
                <span class="badge badge-secondary">Date & Time: ${event.start.local}</span>

                <a href="${event.url}" target="_blank" class="btn btn-primary btn-block mt-4"> Get tickets</a>
              </div>
            </div>
          </div>
        </div >
      `
    })

    results.innerHTML = eventDiv;
  }
}

