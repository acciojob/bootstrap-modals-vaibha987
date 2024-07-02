//your code here
//your JS code here. If required.
var modal = document.querySelector('.modal');
var openModalButton = document.getElementById('open-modal');
var closeModalButton = document.querySelector('.close-modal');
openModalButton.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
});