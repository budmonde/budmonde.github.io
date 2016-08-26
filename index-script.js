// DOM ==============================================
$(document).ready(function () {

	$("body").fadeIn(function() {
    type("/About Me");
  });

	$(document).on('click', '.nav-btn', navigate);

});