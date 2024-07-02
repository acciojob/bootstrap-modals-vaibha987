//your code here
//your JS code here. If required.
const openButton = document.getElementById('open-odal');
const closeButton = document.querySelector('.close-modal');
const modal = document.getElementById('newton-modal');
});
openButton.addEventListener('click', function() {
  // code to open the modal goes here
});

closeButton.addEventListener('click', function() {
  // code to close the modal goes here
});
openButton.addEventListener('click', function() {
  modal.classList.add('open');
});
closeButton.addEventListener('click', function() {
  modal.classList.remove('open');
});
document.addEventListener('click', function(event) {
  if (!modal.contains(event.target)) {
    modal.classList.remove('open');
  }
});