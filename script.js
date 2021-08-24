const card = document.querySelector('.card'),
  cardToggle = document.querySelector('.toggle');
cardToggle.onclick = function () {
  card.classList.toggle('active');
};
