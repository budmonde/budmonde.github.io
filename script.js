// DOM ==============================================
$(document).ready(function () {

	type("/Projects");

	$(document).on('click', '.nav-btn', navigate);

});

// FUNCTIONS ========================================

function navigate (event) {

	event.preventDefault();

	var target = event.target.id;

	switch (target) {
		case "projects":
			type("/Projects");
			$(".main").load("projects.html");
			break;
		case "about":
			type("/About");
			break;
		default:
			break;
	}
}

function type (string) {
	$(".section").typed({
		strings: [string],
		typeSpeed: 0,
		backSpeed: 0,
		cursorChar: "_"
	});
}