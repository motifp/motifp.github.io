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

/*
$(document).ready(function() {
  $.get('blog-1.txt', function(text) {
    var lines = text.split("\n");
    $('#blog-1-h-p').html(lines[0]);
   // var titleExistence = $('title').children().length;
    if ($('title').is(':empty')) {
      $('title').append(lines[0]);
        }
    $('.blog-content').prepend('<h>' + lines[0] + '</h>');
    $('.blog-1-p1-p').html(lines[3]);
    $('.blog-1-p2-p').html(lines[4]);
  })
})
*/

$(document).ready(function() {
  $.get('blog-1.txt', function(text) {
    var lines = text.split("\n");
    $('#blog-1-h-p').html(lines[0]);
   // var titleExistence = $('title').children().length;
    if ($('title').is(':empty')) {
      $('title').append(lines[0]);
        }
    $('.blog-content').prepend('<h>' + lines[0] + '</h>');
    
    lines.splice(0,3);
    var lines2 = lines.join("");
    
    nSentence = 0;
    
    preview = "";
    
    for (var j = 0, n = lines2.length; j < n; j++) {
      if (lines2[j] == ".") {
          nSentence++;
          }
      if (nSentence < 3) {
          for (var k = 0; k <= j; k++) {
            preview += lines2[j];
          } 
          } else {
              break
          }
    }
    
    $('.blog-1-p1-p').append(preview);
  })
})


$.ajax ({
  url: 'blog-1.txt',
  dataType: 'text',
  success: function(data) {
  var lines = data.split("\n");
  var nLines = 0;
  for (var i = 0, n=data.length; i < n; i++ ) {
    if (data[i] === '\n') {
      nLines++;
        }
  }
  
  $('.blog-flex').append('<div class=flex-date>' + lines[1] + '</div>');
  $('.blog-flex').append('<div class="flex-author">' + lines[2] + '</div>');
    
  for (var j = 3; j <= nLines; j++) {
     $('.blog-content').append('<p>' + lines[j] + '</p>');
  }
 
   
  } 
})

