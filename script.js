// Get the modal
var modal = document.getElementById("newton-modal");

// Get the button that opens the modal
var btn = document.getElementById("open-modal");

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close-modal")[0];

btn.onclick = function() {
  console.log('Opening modal');
  modal.style.display = "block";
}

close.onclick = function() {
  console.log('Closing modal');
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    console.log('Clicked outside modal');
    modal.style.display = "none";
  }
}