/* Author: Derek Thurn */

$(document).ready(function() {
  setTimeout(function() {
    $('#dwnarrow').animate({opacity: 0.25}, 1000);
  }, 3000);
  var scrollorama = $.scrollorama({
      blocks: '.slide'
  });
  $('#metin').lettering();
  $('#metin span').each(function() {
      scrollorama.animate($(this),{
          duration: 800,
          property:'top',
          end: Math.random()*120-180
      });
			scrollorama.animate($(this),{
          duration: 600,
          property:'rotate',
          start:0,
          end: Math.random()*720-360
      });
	});

  $('#saidyes').lettering();
  $('#saidyes span').each(function() {
      scrollorama.animate($(this),{
          delay: 1200,
          duration: 600,
          property:'top',
          end: Math.random()*480-720
      });
			scrollorama.animate($(this),{
          delay: 1200,
          duration: 600,
          property:'rotate',
          start:0,
          end: Math.random()*720-360
      });
	});

  scrollorama.animate('#derek-went',{delay: 850, duration: 300, property: 'opacity', start: 0 });
  scrollorama.animate('#tereza-attended',{delay: 1150, duration: 300, property:'opacity', start: 0 });
  scrollorama.animate('#they-were',{delay: 750, duration: 300, property:'letter-spacing', start:18 });
  scrollorama.animate('#but-they',{delay: 750, duration: 300, property:'left', start:-1000, end:0 });
  scrollorama.animate('#trip1',{delay: 700, duration: 300, property: 'opacity', start: 0});
  scrollorama.animate('#trip2',{delay: 900, duration: 300, property: 'opacity', start: 0});
  scrollorama.animate('#trip3',{delay: 1100, duration: 300, property: 'opacity', start: 0});
  scrollorama.animate('#sheasked',{delay: 750, duration: 600, property: 'rotate', start: 360});
  scrollorama.animate('#theystarted',{delay: 750, duration: 600, property: 'zoom', start: 2});
  scrollorama.animate('#eventually',{delay: 750, duration: 300, property:'left', start: -1000, end:0 });
  scrollorama.animate('#longer',{delay: 1000, duration: 300, property:'right', start: -1000, end:0 });
  scrollorama.animate('#then-derek',{delay: 750, duration: 600, property: 'zoom', start: 0});
  scrollorama.animate('#another-internship',{delay: 700, duration: 500, property: 'opacity', start: 0});
  scrollorama.animate('#paths',{delay: 1100, duration: 300, property: 'opacity', start: 0});
  scrollorama.animate('#trip4',{delay: 700, duration: 300, property: 'opacity', start: 0});
  scrollorama.animate('#trip5',{delay: 900, duration: 300, property: 'opacity', start: 0});
  scrollorama.animate('#trip6',{delay: 1100, duration: 300, property: 'opacity', start: 0});
  scrollorama.animate('#along',{delay: 700, duration: 300, property: 'zoom', start: 0});
  scrollorama.animate('#greg',{delay: 750, duration: 300, property: 'zoom', start: 0});
  scrollorama.animate('#janet',{delay: 850, duration: 300, property: 'zoom', start: 0});
  scrollorama.animate('#fasika',{delay: 950, duration: 300, property: 'zoom', start: 0});
  scrollorama.animate('#and',{delay: 1000, duration: 300, property: 'zoom', start: 0});
  scrollorama.animate('#eva',{delay: 1050, duration: 300, property: 'zoom', start: 0});
  scrollorama.animate('#toblock',{delay: 750, duration: 600, property: 'rotate', start: 360});
  scrollorama.animate('#invite',{delay: 800, duration: 300, property: 'opacity', start: 0});
});
