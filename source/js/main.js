import {initSelects} from './modules/init-select';
import {initNoUiSlider} from './modules/init-noui-slider';
import {initPerfectScrollbar} from './modules/init-perfect-scrollbar';
import {initMenu} from './modules/init-menu';

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------


  // Modules
  initSelects();
  initNoUiSlider();
  initPerfectScrollbar();
  initMenu();
  // ---------------------------------

  window.addEventListener('load', () => {
  });
});
