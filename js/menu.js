const toggleButton = document.querySelector('.mobile-button');
const menu = document.querySelector('.menu-list');
const menuItems = document.querySelectorAll('.menu-items');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  menu.classList.toggle('active');
});

menuItems.forEach(function (item) {
  item.addEventListener('click', () => {
    toggleButton.classList.remove('active');
    menu.classList.remove('active');  
  });
});