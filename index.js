const arrowContainer = document.getElementById('arrowContainer');
const menu = document.getElementById('menu');
// const sections = document.querySelectorAll('.event');
// const menuItems = document.querySelectorAll('#menu li');

arrowContainer.addEventListener('click', function() {
  menu.classList.toggle('open');
});
// menuItems.forEach(function(menuItem) {
//   menuItem.addEventListener('click', function() {
//     const target = this.getAttribute('data-target');
//     sections.forEach(function(event) {
//       event.classList.remove('active');
//     });
//     document.getElementById(target).classList.add('active');
//     menu.classList.remove('open');
//   });
// });