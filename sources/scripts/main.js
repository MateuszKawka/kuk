AOS.init({
	// Global settings
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  
	// Settings that can be overriden on per-element basis, by `data-aos-*` attributes:
	offset: 100, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 900, // values from 0 to 3000, with step 50ms
	easing: 'ease-in-out', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: true, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });

 var slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: false
  });

  var scroll = new SmoothScroll('a[href*="#"]', {

	// Selectors
	ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
	header: null, // Selector for fixed headers (must be a valid CSS selector)
	topOnEmptyHash: true, // Scroll to the top of the page for links with href="#"

	// Speed & Easing
	speed: 500, // Integer. How fast to complete the scroll in milliseconds
	clip: true, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
	offset: function (anchor, toggle) {

		return 140
	},
	easing: 'easeInOutCubic', // Easing pattern to use
	customEasing: function (time) {

		// Function. Custom easing pattern
		// If this is set to anything other than null, will override the easing option above

		// return <your formulate with time as a multiplier>

		// Example: easeInOut Quad
		return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

	},

	// History
	updateURL: true, // Update the URL on scroll
	popstate: true, // Animate scrolling with the forward/backward browser buttons (requires updateURL to be true)

	// Custom Events
	emitEvents: true // Emit custom events

});

var elm = document.querySelector('.menu');
var ms = new MenuSpy(elm, {
	threshold: 264
});
console.log(elm)

window.addEventListener('load', function(){
	const spinner = document.getElementById('spinner')
	spinner.style.display = 'none'
})

// grab an element
//var myElement = document.querySelector(".headroom");
// construct an instance of Headroom, passing the element
//var headroom  = new Headroom(myElement);
// initialise
//headroom.init(); 


function menuToggle() {
	let menu = document.querySelector('.menu');
	menu.classList.toggle('menu--hidden')
}


const menuButton = document.querySelector('.nav__mobile-button')

menuButton.addEventListener('click', menuToggle)



ScrollReveal().reveal('.section');