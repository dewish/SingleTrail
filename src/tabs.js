///////////////////////////////////////
// Tabbed component

const tabs = document.querySelectorAll(".tab");
const tabsContainer = document.querySelector(".tabs__container");
const tabsContent = document.querySelectorAll(".tabs__content");


tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.tab');

  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('tab--active'));
  tabsContent.forEach(c => c.classList.remove('tabs__content--active'));

  // Activate tab
  clicked.classList.add('tab--active');

  // Activate content area
  document
    .querySelector(`.tabs__content--${clicked.dataset.tab}`)
    .classList.add('tabs__content--active');
});
