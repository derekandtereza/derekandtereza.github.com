/* Author: Derek Thurn */

$(document).ready(function() {
  setTimeout(function() {
    $('#dwnarrow').animate({opacity: 100}, 20000);
  }, 4000);
  var scrollorama = $.scrollorama({
      blocks: '.line'
  });
});
