document.addEventListener("DOMContentLoaded", function(){

/*********************
*** EASY CHALLENGE ***
*********************/

  // get html collection of option elements
  let options = document.getElementById('jedi-list').options;

  //define class names
  const classes = ["yoda", "vader", "skywalker", "kenobi", "solo"]

  // add classes to option elements
  for (let i = 0; i < options.length; i++) {
    options[i].classList.add(classes[i]);
  }

});

