var stats = (function() {

  var template = document.getElementById('counter-template').innerHTML;
  var toInsertNewElements = document.getElementById('counter')
  var people=0;

  //bind events
  events.on('peopleChanged', set)

  render()

  function render() {
    toInsertNewElements.innerHTML = Mustache.render(template,{people: people} );
  }

  function set(value) {
    people = value;
    render()
  }

  function destroy() {
    //removes event
    events.off('peopleChanged', set);
  }

  return {
    destroy:destroy
  }

})();
