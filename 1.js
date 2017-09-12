'use strict';
var str='Hello!';
$(document).ready(function(){

var svgDraw = '<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">';
  var x2=0, y2=0, x1=0, y1=0;
  for (var i=0; i<100; i++) { 
    x1 = x2;
    y1 = y2;
    y2=(2^x2)-1;
    svgDraw += '<line x1="‘+x1+‘" y1="‘+y1+‘" x2="‘+x2+‘" y2="‘+y2+‘" stroke-width="1" stroke="black"/>';
    x=x + 0.1;
  };
svgDraw += '</svg>';
$('#test').html(svgDraw);
});
