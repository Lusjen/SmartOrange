import ScrollMagic from 'scrollmagic';

// init controller
var controller = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({triggerElement: '.js-team'})
// trigger animation by adding a css class
  .setClassToggle('.members', 'open')
  .addTo(controller);


var scene = new ScrollMagic.Scene({triggerElement: '.js-contact'})
// trigger animation by adding a css class
  .setClassToggle('.contact__col', 'open')
  .addTo(controller);

