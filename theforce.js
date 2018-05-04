document.addEventListener("DOMContentLoaded", function(){

  /*********************
  *** EASY CHALLENGE ***
  *********************/

  // get html collection of option elements
  const options = document.getElementById('jedi-list').options;

  //define class names
  const classes = ["yoda", "vader", "skywalker", "kenobi", "solo"]

  // add classes to option elements
  for (let i = 0; i < options.length; i++) {
    options[i].classList.add(classes[i]);
  }

  
  /*********************
  *** HARD CHALLENGE ***
  *********************/

  // create ids for elements with 'checkboxHolder' class (checkbox containers)
  // this will make it possible to style each checkbox individually in css
  const checkboxHolders = document.querySelectorAll(".checkboxholder");
  for (let i = 0; i < checkboxHolders.length; i++) {
    checkboxHolders[i].id = `checkboxHolder-${i}`;
  }

  // ADD SOUND TO LIGHTSABERS
  // get the checkbox
  const lightsabers = document.querySelectorAll('.checkboxholder input[type="checkbox"]');
  
  // add sound to each hard checkbox
  for (let i = 0; i < lightsabers.length; i++) {
    lightsaber = lightsabers[i]
    lightsaber.addEventListener('change', playLightsaberSound);
  }

  // play sound when turning checkbox on
  function playLightsaberSound(e) {
    console.log(e.target.checked)
    const checked = e.target.checked;
    if (checked) {
      const lightsaberSound = document.createElement('audio');
      lightsaberSound.src = 'lightsaber.wav';
      lightsaberSound.play();
    }
  }

});
