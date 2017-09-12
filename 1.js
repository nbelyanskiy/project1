'use strict';
var str='Hello!';
$(‘#test').html(svgDraw);
var svgDraw = '<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">';
  var x=0, y=0;
  for (var i=0; i<100; i++) { 
    y=(2^x)-1;
    svgDraw += '<line x1="20" y1="100" x2="100" y2="20" stroke-width="2" stroke="black"/>';
  };
svgDraw += '</svg>';
