/*
$.ajax ({
  url: 'blog-1.txt',
  dataType: 'text',
  success: function(data) {
    $('.blog-1').html(data);
    var lines = 
  } 
})
*/

$(document).ready(function() {
  $.get('blog-1.txt', function(text) {
    var lines = text.split("\n");
    $('#blog-1-h-p').html(lines[0]);
    $('.blog-1-p1-p').html(lines[1]);
    $('.blog-1-p2-p').html(lines[2]);
  })
})

$.ajax ({
  url: 'blog-1.txt',
  dataType: 'text',
  success: function(data) {
  $('.blog-content').append("<pre>" + data + "</pre>");
   
  } 
})
