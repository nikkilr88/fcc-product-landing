const nav = document.querySelector('#nav-bar');

// CHANGE NAV STYLES
window.addEventListener('scroll', function() {
	let pos = this.scrollY;

	if(pos > 50) {
		nav.classList.add('light');
	} 
	else {
		nav.classList.remove('light');
	}
});