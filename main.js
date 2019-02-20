var myFunction = (function() {

  var people = [];

  //cache DOM
  var template = document.getElementById('listPerson-template').innerHTML;
  var btnAdd = document.querySelector('#addPerson');
  var toInsertNewElements = document.getElementById('people');
  var input = document.querySelector('input')

  //bind events
  btnAdd.addEventListener('click', add)
  toInsertNewElements.addEventListener('click', remove);

  _render();

  function _render() {
    var data = {
      people: people
    }

    toInsertNewElements.innerHTML = Mustache.render(template, data);
    //coupeling /pubsub pattern for scalable apps
    events.emit('peopleChanged', people.length)
    //for small application u can unse the api of stats module
    // stats.set(people.length);
  }

  function add(number) {
    var name = typeof number === 'string' ? value : input.value ;

    people.push(name);
    input.value = '';
    _render()

  }

  function remove(e) {
    var children = e.target.parentElement.parentElement.children;

    for(var i=0; i < children.length; i++) {
      if(children[i] == e.target.parentElement){
        people.splice(i,1);
        _render();
      }
    }
  }

  return {
    add:add
  }

})();

// myFunction.add('Bill')
