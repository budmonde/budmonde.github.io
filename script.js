// DOM ==============================================
$(document).ready(function () {

	type("/About Me");

	$(document).on('click', '.nav-btn', navigate);

});

// FUNCTIONS ========================================

function navigate (event) {

	event.preventDefault();

	var target = event.target.id;

	switch (target) {
		case "projects":
			type("/Projects");
			$(".about").fadeOut(function () {
				$(".projects").fadeIn();
			});
			break;
		case "about":
			type("/About Me");
			$(".projects").fadeOut(function () {
				$(".about").fadeIn();
			});
			break;
		case "portfolio":
			$("body").fadeOut(function () {
				window.location.href = "portfolio.html";
			})
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