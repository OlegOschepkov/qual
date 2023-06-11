import SlimSelect from '../vendor/slimselect.min';

const initSelects = () => {
  const selects = document.querySelectorAll('[data-select]');

  if (!selects.length) return;

  selects.forEach((select) => {
    const placeholder = select.dataset.placeholderText;
    new SlimSelect({
      select: select,
      settings: {
        showSearch: false,
        placeholderText: placeholder,
      }
    })
  })
};

export {initSelects};
