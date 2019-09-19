//instantiating the app
const eventbrite = new EVENTBRITE();
const ui = new UI();

//variables
const btn = document.querySelector('#submitBtn');

//eventLsteners
btn.addEventListener('click', (e) => {
  e.preventDefault();

  //reading values for input tags
  const eventName = document.querySelector('#event-name').value;
  const category = document.querySelector('#category').value;

  //validate values
  if (eventName === '' || category === '') {
    
    //print and error message
    ui.printMessage('PLease Select All Fields and Try Again', 'alert-danger');

  } else {

    ui.printMessage('Great!!!, Your Events are Closer Than You Think', 'alert-success');

    //query the event
    eventbrite.fetchEvents(eventName, category)
      .then(data => {
        
        const res = data.res.events

        if (res.length > 0 ) {
          //display in UI
          ui.displayEvents(res);
        } else {
          ui.printMessage('NO Result Found', 'alert-warning')
        }

    
      })
  }
})