var modal = document.getElementsByClassName("projectModal");
var button = document.getElementsByClassName("project");
var span = document.getElementsByClassName("close");

var totalProjects = 4;

button[0].onclick = function() {
  modal[0].style.display = "block";
}
button[1].onclick = function() {
  modal[1].style.display = "block";
}
button[2].onclick = function() {
  modal[2].style.display = "block";
}
button[3].onclick = function() {
  modal[3].style.display = "block";
}
button[4].onclick = function() {
  modal[4].style.display = "block";
}


span[0].onclick = function() {
  modal[0].style.display = "none";
}
span[1].onclick = function() {
  modal[1].style.display = "none";
}
span[2].onclick = function() {
  modal[2].style.display = "none";
}
span[3].onclick = function() {
  modal[3].style.display = "none";
}
span[4].onclick = function() {
  modal[4].style.display = "none";
}

window.onclick = function(event) {
  for (var i = 0; i <= totalProjects; i++)
    if (event.target == modal[i])
      modal[i].style.display = "none";
}
