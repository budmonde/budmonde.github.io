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
			$(".about").hide();
			$(".project").show();
			type("/Projects");
			break;
		case "about":
			$(".project").hide();
			$(".about").show();
			type("/About Me");
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