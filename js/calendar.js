function create() {
  var htmlElements = ' ';
  for (var i = 0; i < 5; i++) {
    htmlElements += '<div class="box">' + i + '</div>';
  }

  var container = document.getElementById("box");
  container.innerHTML = htmlElements;
}
