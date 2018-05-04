document.addEventListener("DOMContentLoaded", function(){

  /*********************
  *** EASY CHALLENGE ***
  *********************/

  // get select element
  const select = document.getElementById('jedi-list');
  // get html collection of option elements
  const options = select.options;
  

  //define class names
  const classes = ["yoda", "vader", "skywalker", "kenobi", "solo"];

  // add classes to option elements
  for (let i = 0; i < options.length; i++) {
    options[i].classList.add(classes[i]);
  }

  // get currently selected option and assing event listener to select element
  console.log(select.options[select.selectedIndex]);
  let selected = select.options[select.selectedIndex];
  console.log(selected.className)
  select.addEventListener('change', matchSelected);
  
  // assign selected option's class to the select element
  function matchSelected() {
    // get currently selected option
    selected = select.options[select.selectedIndex];
    select.className = selected.className;
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
  let lightsaber;
  for (let i = 0; i < lightsabers.length; i++) {
    lightsaber = lightsabers[i];
    lightsaber.addEventListener('change', playLightsaberSound);
  }

  // play sound when turning checkbox on
  function playLightsaberSound(e) {
    console.log(e.target.checked);
    const checked = e.target.checked;
    if (checked) {
      const lightsaberSound = document.createElement('audio');
      lightsaberSound.src = 'lightsaber.wav';
      lightsaberSound.play();
    }
  }

});
