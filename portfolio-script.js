// DOM ==============================================
$(document).ready(function () {

  $("body").fadeIn(function () {
    type("/Photo Portfolio");  
  });
  
  $(document).on('click', '.nav-btn', navigate);

});