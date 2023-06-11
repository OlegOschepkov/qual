import PerfectScrollbar from 'perfect-scrollbar';

const initMenu = () => {
  const menuBtn = document.querySelector('[data-show-menu]');
  const menu = document.querySelector('[data-menu]');
  const header = document.querySelector('[data-header]');

  if (!menuBtn || !menu) return;

  menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const headerHeight = header.offsetHeight;
    menuBtn.classList.toggle('is-active');
    menu.classList.toggle('is-active');
    if (menu.classList.contains('is-active')) {
      menu.style.maxHeight = `calc(100vh - ${headerHeight}px)`;
      const ps = new PerfectScrollbar(menu, {
        wheelSpeed: 2,
        wheelPropagation: false,
        minScrollbarLength: 53,
      });
    } else {
      menu.style.maxHeight = ``;
      ps.destroy();
    }
  })
};

export {initMenu};
